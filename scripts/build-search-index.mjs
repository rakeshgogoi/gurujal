/**
 * Build the static search index used by the floating GuruJal Guide.
 *
 * For every known route this script fetches the rendered HTML from a
 * running Next.js server (dev or prod), strips the persistent chrome
 * (header, footer, floating tools), and pulls a clean title + headings
 * + body text. The result is written to public/search-index.json — the
 * Guide loads it lazily on first open and uses MiniSearch to rank
 * matches as the visitor types.
 *
 * Usage:
 *   # in one terminal:  npm run dev
 *   # in another:       npm run search:index
 *
 * Pass a custom base URL with `--base http://host:port` (defaults to
 * http://localhost:3000). For Vercel-time builds, point it at the
 * production server after `next start` is up.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseHTML } from "node-html-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, "..");

const baseArgIdx = process.argv.indexOf("--base");
const BASE_URL =
  baseArgIdx >= 0
    ? process.argv[baseArgIdx + 1]
    : process.env.SEARCH_INDEX_BASE || "http://localhost:3000";

// Hand-curated route list. Mirrors src/app/**/page.tsx (excluding
// dynamic [slug]). Keep this in sync when new pages land — or replace
// with a glob walk of the app dir if the page count grows past ~50.
const ROUTES = [
  "/",
  "/about",
  "/team",
  "/career",
  "/contact",
  "/solutions",
  "/eco-restoration",
  "/we-for-water",
  "/water-proofing",
  "/connect-the-drop",
  "/esg-advisory",
  "/support-a-pond",
  "/events",
  "/reports-and-publications",
  // Ponds
  "/bhondsi-pond",
  "/chandla-dungarwas-pond",
  "/mojabad-pond",
  // Events (sourced from Sanity — see /events/[slug])
  "/events/urban-adda-25",
  "/events/roots-and-recharge-symposium",
  "/events/hydromingle-event",
  "/events/real-nature-in-restored-landscapes",
  // Reports & publications
  "/annual-report-2022-23",
  "/annual-report-2023-24",
  "/annual-report-2024-25",
  "/publication-green-wall-of-aravalli",
  "/publication-pond-rejuvenation-sop",
  "/publication-sop-of-wells",
  "/publication-wells-of-gurugram",
];

/** Selectors for site chrome that must NOT appear in the index. */
const CHROME_SELECTORS = [
  "header",
  "footer",
  "nav",
  // Floating tools, language picker, AI guide, sticky anchor nav
  ".fixed",
  "[role='navigation']",
  // Hidden Google Translate mount
  "#google_translate_element",
];

/** Collapse runs of whitespace and strip surrounding empty lines. */
function clean(text) {
  return text.replace(/\s+/g, " ").trim();
}

async function fetchRoute(route) {
  const url = BASE_URL.replace(/\/$/, "") + route;
  const res = await fetch(url, {
    headers: { "User-Agent": "gurujal-search-indexer/1.0" },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.text();
}

function extract(route, html) {
  const root = parseHTML(html, {
    blockTextElements: { script: false, style: false },
  });

  // Strip chrome we never want in the index.
  for (const sel of CHROME_SELECTORS) {
    root.querySelectorAll(sel).forEach((el) => el.remove());
  }
  // Also strip any <script>, <style>, <noscript>.
  root.querySelectorAll("script,style,noscript").forEach((el) => el.remove());

  const main = root.querySelector("main") || root.querySelector("body") || root;

  const title =
    clean(main.querySelector("h1")?.text || "") ||
    clean(root.querySelector("title")?.text?.replace(/\s*[—\-|]\s*GuruJal.*$/i, "") || "") ||
    route;

  const headings = main
    .querySelectorAll("h2, h3")
    .map((h) => clean(h.text))
    .filter(Boolean);

  // Body = paragraphs + list items; keep ordering, dedupe consecutive
  // duplicates that come from React's hydration boundaries.
  const seen = new Set();
  const bodyParts = [];
  for (const el of main.querySelectorAll("p, li")) {
    const t = clean(el.text);
    if (!t || t.length < 4) continue;
    if (seen.has(t)) continue;
    seen.add(t);
    bodyParts.push(t);
  }

  // Cap body length so the index stays small. 4000 chars ≈ 600 words —
  // plenty for ranking and snippet extraction.
  const body = bodyParts.join(" ").slice(0, 4000);

  return {
    route,
    title,
    headings,
    body,
  };
}

async function main() {
  console.log(`[indexer] base URL: ${BASE_URL}`);
  console.log(`[indexer] indexing ${ROUTES.length} routes…`);

  const docs = [];
  for (const route of ROUTES) {
    try {
      const html = await fetchRoute(route);
      const doc = extract(route, html);
      docs.push(doc);
      console.log(
        `  ✓ ${route.padEnd(38)} ${doc.title.slice(0, 50)}  (${doc.body.length} chars)`
      );
    } catch (e) {
      console.warn(`  ✗ ${route}: ${e.message}`);
    }
  }

  const outDir = resolve(REPO_ROOT, "public");
  mkdirSync(outDir, { recursive: true });
  const outPath = resolve(outDir, "search-index.json");
  writeFileSync(
    outPath,
    JSON.stringify({ generatedAt: new Date().toISOString(), docs }, null, 0)
  );

  const sizeKb = Math.round(JSON.stringify(docs).length / 1024);
  console.log(
    `[indexer] wrote ${docs.length} docs to public/search-index.json (~${sizeKb}KB)`
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
