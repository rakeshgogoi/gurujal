/**
 * Exports content from gurujal.org's public WordPress REST API.
 *
 * Run:  npx tsx migration/scripts/export-wp.ts
 *
 * Output:
 *   migration/raw/pages/<slug>.json   - full WP REST page payload
 *   migration/raw/posts/<slug>.json   - full WP REST post payload
 *   migration/raw/index.json          - summary of what was fetched
 *
 * Subsequent conversion to MDX happens in convert-to-mdx.ts.
 */

import fs from "node:fs";
import path from "node:path";
import { realPages } from "./wp-pages.js";

const WP_BASE = "https://gurujal.org/wp-json/wp/v2";
const OUT_ROOT = path.join(process.cwd(), "migration", "raw");

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

async function fetchJson<T = unknown>(url: string): Promise<T> {
  const res = await fetch(url, {
    headers: { "User-Agent": "gurujal-migration/1.0" },
  });
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }
  return res.json() as Promise<T>;
}

type WPPage = {
  id: number;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  yoast_head_json?: unknown;
};

async function fetchPageBySlug(slug: string): Promise<WPPage | null> {
  const url = `${WP_BASE}/pages?slug=${encodeURIComponent(slug)}&_embed=1`;
  const arr = await fetchJson<WPPage[]>(url);
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr[0];
}

async function fetchAllPosts(): Promise<WPPage[]> {
  const out: WPPage[] = [];
  let page = 1;
  while (true) {
    const url = `${WP_BASE}/posts?per_page=100&page=${page}&_embed=1`;
    const res = await fetch(url, {
      headers: { "User-Agent": "gurujal-migration/1.0" },
    });
    if (!res.ok) {
      if (res.status === 400) break; // pagination exhausted
      throw new Error(`HTTP ${res.status} for ${url}`);
    }
    const data = (await res.json()) as WPPage[];
    if (!Array.isArray(data) || data.length === 0) break;
    out.push(...data);
    if (data.length < 100) break;
    page += 1;
  }
  return out;
}

async function main() {
  ensureDir(path.join(OUT_ROOT, "pages"));
  ensureDir(path.join(OUT_ROOT, "posts"));

  console.log(`Exporting ${realPages.length} pages from ${WP_BASE}...`);
  const summary: {
    pages: { slug: string; ok: boolean; reason?: string; id?: number; title?: string }[];
    posts: { slug: string; id: number; title: string }[];
  } = { pages: [], posts: [] };

  for (const def of realPages) {
    try {
      const data = await fetchPageBySlug(def.wpSlug);
      if (!data) {
        console.warn(`  ✗ ${def.wpSlug} — not found`);
        summary.pages.push({ slug: def.wpSlug, ok: false, reason: "not found" });
        continue;
      }
      const file = path.join(OUT_ROOT, "pages", `${def.wpSlug}.json`);
      fs.writeFileSync(file, JSON.stringify(data, null, 2));
      console.log(`  ✓ ${def.wpSlug} — id ${data.id}`);
      summary.pages.push({
        slug: def.wpSlug,
        ok: true,
        id: data.id,
        title: data.title.rendered,
      });
    } catch (err) {
      const reason = err instanceof Error ? err.message : String(err);
      console.warn(`  ✗ ${def.wpSlug} — ${reason}`);
      summary.pages.push({ slug: def.wpSlug, ok: false, reason });
    }
  }

  console.log(`\nExporting blog posts...`);
  const posts = await fetchAllPosts();
  for (const p of posts) {
    const file = path.join(OUT_ROOT, "posts", `${p.slug}.json`);
    fs.writeFileSync(file, JSON.stringify(p, null, 2));
    console.log(`  ✓ ${p.slug} — id ${p.id}`);
    summary.posts.push({ slug: p.slug, id: p.id, title: p.title.rendered });
  }

  fs.writeFileSync(
    path.join(OUT_ROOT, "index.json"),
    JSON.stringify(summary, null, 2)
  );
  console.log(
    `\nDone. ${summary.pages.filter((p) => p.ok).length}/${summary.pages.length} pages, ${summary.posts.length} posts exported.`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
