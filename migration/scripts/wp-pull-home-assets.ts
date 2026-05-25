/**
 * Pulls all images referenced by the real homepage (page 5005)
 * and saves them to /public/uploads, mirroring the WP path.
 */
import fs from "node:fs";
import path from "node:path";
import { ensureLoggedIn, wpFetch } from "./wp-auth.js";

const ROOT = process.cwd();
const HOME_JSON = path.join(ROOT, "migration", "raw", "pages", "home-real.json");

function ensureDir(p: string) {
  fs.mkdirSync(p, { recursive: true });
}

async function downloadOne(url: string): Promise<string | null> {
  // Normalize: some URLs reference p79.0a4.myftpupload.com (staging) — fix to gurujal.org
  let resolved = url.replace(/^https?:\/\/p79\.0a4\.myftpupload\.com/, "https://gurujal.org");
  if (resolved.startsWith("/wp-content/")) resolved = "https://gurujal.org" + resolved;
  const m = resolved.match(/wp-content\/uploads\/(.+?)(?:\?|$)/);
  if (!m) return null;
  const local = `/uploads/${m[1]}`;
  const dest = path.join(ROOT, "public", local.replace(/^\//, ""));
  if (fs.existsSync(dest)) return local;
  ensureDir(path.dirname(dest));
  const res = await wpFetch(resolved);
  if (!res.ok) {
    console.warn(`    ✗ ${res.status}: ${resolved}`);
    return null;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buf);
  return local;
}

async function main() {
  await ensureLoggedIn();
  const d = JSON.parse(fs.readFileSync(HOME_JSON, "utf8"));
  const html = d.content.rendered as string;

  // Pull <img src>, CSS background-image url(), data-src, and srcset URLs
  const found = new Set<string>();
  for (const rx of [
    /<img[^>]+src="([^"]+)"/g,
    /<img[^>]+data-src="([^"]+)"/g,
    /background-image\s*:\s*url\(["']?([^"')\s]+)/g,
    /srcset="([^"]+)"/g,
  ]) {
    let m: RegExpExecArray | null;
    while ((m = rx.exec(html))) {
      const v = m[1];
      // srcset has many URLs
      if (v.includes(",")) {
        for (const part of v.split(",")) {
          const u = part.trim().split(/\s+/)[0];
          if (u) found.add(u);
        }
      } else {
        found.add(v);
      }
    }
  }
  console.log(`Found ${found.size} image references in real homepage HTML`);

  // Also explicitly grab the 6R icons + a couple known bgs
  for (const u of [
    "https://gurujal.org/wp-content/uploads/2025/06/resource.png",
    "https://gurujal.org/wp-content/uploads/2025/06/reduce.png",
    "https://gurujal.org/wp-content/uploads/2025/06/restore.png",
    "https://gurujal.org/wp-content/uploads/2025/06/revive.png",
    "https://gurujal.org/wp-content/uploads/2025/06/rethink.png",
    "https://gurujal.org/wp-content/uploads/2025/06/realign.png",
    "https://gurujal.org/wp-content/uploads/2024/08/hero.png",
    "https://gurujal.org/wp-content/uploads/2024/08/real-nature-event.jpeg",
    "https://gurujal.org/wp-content/uploads/2024/08/hydromingle2025.jpg",
    "https://gurujal.org/wp-content/uploads/2024/08/Roots-recharge-symposium-2025.jpg",
    "https://gurujal.org/wp-content/uploads/2024/12/desert-279862_1280.jpg",
    "https://gurujal.org/wp-content/uploads/2024/08/sdg_rearranged-1024x426.jpg",
    "https://gurujal.org/wp-content/uploads/2026/03/Ashish-Srivastava.jpeg",
    "https://gurujal.org/wp-content/uploads/2024/08/whisky.png",
    "https://gurujal.org/wp-content/uploads/2024/08/xebia.png",
    "https://gurujal.org/wp-content/uploads/2026/03/central.png",
    "https://gurujal.org/wp-content/uploads/2026/03/jaquar-1.png",
  ]) {
    found.add(u);
  }

  let ok = 0, fail = 0;
  for (const u of found) {
    const r = await downloadOne(u);
    if (r) ok++;
    else fail++;
  }
  console.log(`Downloaded ${ok}, failed ${fail}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
