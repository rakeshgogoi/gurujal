/**
 * Convert exported WP pages (migration/raw/pages/*.json) into MDX.
 *
 * Each page produces:
 *   content/pages/<slug>.mdx   with frontmatter + cleaned body
 *
 * Images referenced via gurujal.org are downloaded to
 *   public/uploads/<year>/<month>/<file>
 * and URLs in the MDX are rewritten to local paths.
 *
 * Elementor markup is stripped aggressively:
 *   - <style>, <script>, <link> blocks removed entirely
 *   - Elementor wrapper divs unwrapped
 *   - Inline style/class attributes dropped (we re-style in Tailwind)
 *   - h1-h6, p, ul/ol/li, a, img, blockquote, strong/em preserved
 *
 * Run:  npx tsx migration/scripts/convert-to-mdx.ts
 */

import fs from "node:fs";
import path from "node:path";
import TurndownService from "turndown";
import { parse as parseHTML, HTMLElement, TextNode } from "node-html-parser";

const ROOT = process.cwd();
const RAW_PAGES = path.join(ROOT, "migration", "raw", "pages");
const OUT_DIR = path.join(ROOT, "content", "pages");
const PUBLIC_UPLOADS = path.join(ROOT, "public", "uploads");

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

/** Strip noise tags entirely. */
function preCleanHTML(root: HTMLElement): void {
  const noiseTags = ["style", "script", "link", "meta", "noscript"];
  for (const tag of noiseTags) {
    root.querySelectorAll(tag).forEach((el) => el.remove());
  }
}

/**
 * Walk the tree: drop Elementor classes/inline styles so the markup
 * is semantic-only. We keep useful attributes (href, src, alt, title).
 */
function stripAttributes(root: HTMLElement): void {
  const keep: Record<string, string[]> = {
    a: ["href", "title"],
    img: ["src", "alt", "title", "width", "height"],
    iframe: ["src", "title", "width", "height"],
  };
  const walk = (node: HTMLElement) => {
    const tag = node.tagName?.toLowerCase();
    if (tag) {
      const allowed = keep[tag] ?? [];
      const attrs = node.attributes || {};
      for (const name of Object.keys(attrs)) {
        if (!allowed.includes(name.toLowerCase())) {
          node.removeAttribute(name);
        }
      }
    }
    for (const child of node.childNodes) {
      if (child instanceof HTMLElement) walk(child);
    }
  };
  walk(root);
}

/**
 * Unwrap divs/spans/sections — they add layout noise but no semantics
 * once styles are gone. The body becomes a flat stream of content.
 */
function unwrapLayoutTags(root: HTMLElement): void {
  const unwrap = ["div", "span", "section", "article", "header", "footer", "main", "figure", "figcaption"];
  let mutated = true;
  let iterations = 0;
  while (mutated && iterations < 20) {
    mutated = false;
    iterations++;
    const toUnwrap: HTMLElement[] = [];
    const walk = (node: HTMLElement) => {
      if (unwrap.includes(node.tagName?.toLowerCase() ?? "")) {
        toUnwrap.push(node);
      }
      for (const child of node.childNodes) {
        if (child instanceof HTMLElement) walk(child);
      }
    };
    walk(root);
    for (const el of toUnwrap) {
      // Replace the element with its inner HTML
      const inner = el.innerHTML;
      el.replaceWith(inner);
      mutated = true;
    }
  }
}

/** Collapse <br><br> runs to paragraphs, trim excessive blanks. */
function normalizeWhitespace(html: string): string {
  return html
    .replace(/(<br\s*\/?>\s*){2,}/gi, "</p><p>")
    .replace(/ /g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ");
}

/** Local path for a wp-content/uploads URL. */
function localPathForUpload(url: string): string | null {
  const m = url.match(/wp-content\/uploads\/(.+?)(?:\?|$)/);
  if (!m) return null;
  return `/uploads/${m[1]}`;
}

/** Download a remote URL to /public/uploads if not present. */
async function downloadIfNeeded(url: string): Promise<string | null> {
  const local = localPathForUpload(url);
  if (!local) return null;
  const dest = path.join(ROOT, "public", local.replace(/^\//, ""));
  if (fs.existsSync(dest)) return local;
  ensureDir(path.dirname(dest));
  try {
    const res = await fetch(url, {
      headers: { "User-Agent": "gurujal-migration/1.0" },
    });
    if (!res.ok) {
      console.warn(`    media fetch failed (${res.status}): ${url}`);
      return null;
    }
    const buf = Buffer.from(await res.arrayBuffer());
    fs.writeFileSync(dest, buf);
    return local;
  } catch (err) {
    console.warn(`    media error: ${url} — ${(err as Error).message}`);
    return null;
  }
}

/** Rewrite all <img src> and <a href> pointing at gurujal.org. */
async function rewriteMedia(root: HTMLElement, mediaLog: Set<string>): Promise<void> {
  for (const img of root.querySelectorAll("img")) {
    const src = img.getAttribute("src");
    if (!src) continue;
    if (/gurujal\.org\/wp-content\/uploads\//.test(src)) {
      mediaLog.add(src);
      const local = await downloadIfNeeded(src);
      if (local) img.setAttribute("src", local);
    }
  }
  for (const a of root.querySelectorAll("a")) {
    const href = a.getAttribute("href") || "";
    if (/gurujal\.org\/wp-content\/uploads\//.test(href)) {
      mediaLog.add(href);
      const local = await downloadIfNeeded(href);
      if (local) a.setAttribute("href", local);
    } else if (/^https:\/\/gurujal\.org\/(?!wp-content)/.test(href)) {
      // internal site link — rewrite to relative
      a.setAttribute(
        "href",
        href.replace(/^https:\/\/gurujal\.org/, "").replace(/\/$/, "") || "/"
      );
    }
  }
}

/** Configured Turndown service producing GFM-friendly markdown. */
function makeTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "_",
  });
  // Keep <iframe> blocks (e.g. YouTube) as raw HTML — MDX allows JSX/HTML.
  td.keep(["iframe"]);
  return td;
}

function htmlEntityDecode(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…");
}

async function convertOne(slug: string): Promise<void> {
  const src = path.join(RAW_PAGES, `${slug}.json`);
  if (!fs.existsSync(src)) return;
  const raw = JSON.parse(fs.readFileSync(src, "utf8"));

  const title = htmlEntityDecode(raw.title?.rendered ?? slug);
  const date = raw.date as string | undefined;
  const modified = raw.modified as string | undefined;
  const excerptHtml = raw.excerpt?.rendered ?? "";
  const excerpt = excerptHtml
    ? htmlEntityDecode(excerptHtml.replace(/<[^>]+>/g, "").trim()).slice(0, 280)
    : "";

  const html = raw.content?.rendered as string;
  if (!html) {
    console.warn(`  ✗ ${slug} — empty content`);
    return;
  }

  const tree = parseHTML(html, {
    blockTextElements: { script: true, style: true, noscript: true },
  });

  preCleanHTML(tree);
  stripAttributes(tree);
  // Download images BEFORE unwrapping (so attributes still exist)
  const mediaLog = new Set<string>();
  await rewriteMedia(tree, mediaLog);
  unwrapLayoutTags(tree);

  let cleanedHTML = tree.toString();
  cleanedHTML = normalizeWhitespace(cleanedHTML);

  const md = makeTurndown().turndown(cleanedHTML).trim();

  const frontmatter = [
    "---",
    `title: ${JSON.stringify(title)}`,
    `slug: ${JSON.stringify(slug)}`,
    date ? `date: ${JSON.stringify(date)}` : null,
    modified ? `modified: ${JSON.stringify(modified)}` : null,
    excerpt ? `excerpt: ${JSON.stringify(excerpt)}` : null,
    `wp_id: ${raw.id}`,
    `source: ${JSON.stringify(raw.link)}`,
    "---",
  ]
    .filter(Boolean)
    .join("\n");

  const out = `${frontmatter}\n\n${md}\n`;
  ensureDir(OUT_DIR);
  fs.writeFileSync(path.join(OUT_DIR, `${slug}.mdx`), out);
  console.log(`  ✓ ${slug} — ${md.length}c MDX, ${mediaLog.size} media`);
}

async function main() {
  ensureDir(OUT_DIR);
  ensureDir(PUBLIC_UPLOADS);
  const files = fs
    .readdirSync(RAW_PAGES)
    .filter((f) => f.endsWith(".json"));
  console.log(`Converting ${files.length} pages...`);
  for (const f of files) {
    const slug = f.replace(/\.json$/, "");
    try {
      await convertOne(slug);
    } catch (err) {
      console.error(`  ✗ ${slug} — ${(err as Error).message}`);
    }
  }
  console.log("Done.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
