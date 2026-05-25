/**
 * Pulls the real homepage (page id 5005, discovered via Settings → Reading)
 * and saves it to migration/raw/pages/home-real.json.
 * Also enumerates media library entries that look like hero/slider images
 * and the publication PDFs, and downloads them locally.
 */

import fs from "node:fs";
import path from "node:path";
import { ensureLoggedIn, wpFetch } from "./wp-auth.js";

const ROOT = process.cwd();
const RAW_DIR = path.join(ROOT, "migration", "raw");
const PUBLIC_UPLOADS = path.join(ROOT, "public", "uploads");

type MediaItem = {
  id: number;
  date: string;
  source_url: string;
  mime_type: string;
  title: { rendered: string };
  alt_text: string;
};

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

async function pullRealHome() {
  const res = await wpFetch(
    "/wp-json/wp/v2/pages/5005?_embed=1",
    { headers: { accept: "application/json" } }
  );
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} pulling page 5005`);
  }
  const data = (await res.json()) as {
    id: number;
    title: { rendered: string };
    content: { rendered: string };
    slug: string;
    template: string;
  };
  ensureDir(path.join(RAW_DIR, "pages"));
  const dest = path.join(RAW_DIR, "pages", "home-real.json");
  fs.writeFileSync(dest, JSON.stringify(data, null, 2));
  console.log(`✓ saved real home (id ${data.id}, slug "${data.slug}", template "${data.template}", ${data.content.rendered.length} chars HTML) → ${dest}`);
  return data;
}

async function listAllMedia(): Promise<MediaItem[]> {
  const out: MediaItem[] = [];
  let page = 1;
  while (true) {
    const res = await wpFetch(
      `/wp-json/wp/v2/media?per_page=100&page=${page}&_fields=id,date,source_url,mime_type,title,alt_text`,
      { headers: { accept: "application/json" } }
    );
    if (!res.ok) {
      if (res.status === 400) break;
      throw new Error(`HTTP ${res.status} listing media page ${page}`);
    }
    const arr = (await res.json()) as MediaItem[];
    if (!Array.isArray(arr) || arr.length === 0) break;
    out.push(...arr);
    if (arr.length < 100) break;
    page++;
    if (page > 50) break; // safety
  }
  return out;
}

async function downloadIfNeeded(url: string): Promise<string | null> {
  const m = url.match(/wp-content\/uploads\/(.+?)(?:\?|$)/);
  if (!m) return null;
  const local = `/uploads/${m[1]}`;
  const dest = path.join(ROOT, "public", local.replace(/^\//, ""));
  if (fs.existsSync(dest)) return local;
  ensureDir(path.dirname(dest));
  const res = await wpFetch(url);
  if (!res.ok) {
    console.warn(`    fetch failed (${res.status}): ${url}`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return local;
}

async function main() {
  await ensureLoggedIn();

  // 1. real homepage
  await pullRealHome();

  // 2. media library — full enumeration
  console.log("\nListing media library...");
  const media = await listAllMedia();
  console.log(`  found ${media.length} media items`);

  // 3. filter interesting items
  const heroes = media.filter((m) => /hero|slide|slider|banner/i.test(m.title.rendered + " " + m.source_url));
  const pdfs = media.filter((m) => m.mime_type === "application/pdf");
  const annualReports = pdfs.filter((m) => /annual.*report|ar.*20|annualreport/i.test(m.title.rendered));
  const publications = pdfs.filter((m) => /sop|publication|pond|aravalli|wells|green.*wall/i.test(m.title.rendered));

  console.log(`\nHero-ish images (${heroes.length}):`);
  heroes.slice(0, 20).forEach((m) => console.log(`  ${m.id} | ${m.mime_type} | ${m.title.rendered} → ${m.source_url}`));

  console.log(`\nPDFs (${pdfs.length}), of which:`);
  console.log(`  Annual reports (${annualReports.length}):`);
  annualReports.forEach((m) => console.log(`    ${m.id} | ${m.title.rendered}`));
  console.log(`  Publications (${publications.length}):`);
  publications.forEach((m) => console.log(`    ${m.id} | ${m.title.rendered}`));

  // 4. download all hero images + publication PDFs locally
  console.log("\nDownloading...");
  for (const m of [...heroes, ...annualReports, ...publications]) {
    const local = await downloadIfNeeded(m.source_url);
    console.log(`  ${local ? "✓" : "✗"} ${m.title.rendered.slice(0, 50)} ${local ?? ""}`);
  }

  // 5. save full media inventory for reference
  ensureDir(RAW_DIR);
  fs.writeFileSync(
    path.join(RAW_DIR, "media-inventory.json"),
    JSON.stringify(
      media.map((m) => ({
        id: m.id,
        date: m.date,
        mime: m.mime_type,
        title: m.title.rendered,
        url: m.source_url,
      })),
      null,
      2
    )
  );
  console.log(`\nMedia inventory → migration/raw/media-inventory.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
