/**
 * Exploration script — uses authenticated session to discover:
 *   1. Which page (if any) is the front-page in Settings → Reading
 *   2. The list of Elementor templates / custom post types
 *   3. A sample of media library entries (hero slider images)
 *
 * Run:
 *   WP_USER=... WP_PASS=... npx tsx migration/scripts/wp-explore.ts
 *
 * Output: JSON dump to stdout — no files written.
 */
import { ensureLoggedIn, wpFetch } from "./wp-auth.js";

async function readingSettings(): Promise<{ frontPageId?: string; showOnFront?: string }> {
  const html = await wpFetch("/wp-admin/options-reading.php").then((r) => r.text());
  // The form contains an input named "show_on_front" with value "posts" or "page",
  // and a select named "page_on_front" with options whose <option selected> is the front page id.
  const showOnFront = html.match(/name="show_on_front"[^>]*value="(\w+)"[^>]*checked/i)?.[1];
  const pageOnFront = html.match(
    /<select[^>]*name="page_on_front"[\s\S]*?<option[^>]*selected[^>]*value="(\d+)"/i
  )?.[1] || html.match(/<option[^>]*value="(\d+)"[^>]*selected[^>]*>[^<]*<\/option>/i)?.[1];
  return { showOnFront, frontPageId: pageOnFront };
}

async function adminPostsList(postType: string): Promise<Array<{ id: number; title: string; status: string }>> {
  // wp-admin's edit.php?post_type=X gives an HTML table. We parse minimally.
  const html = await wpFetch(`/wp-admin/edit.php?post_type=${encodeURIComponent(postType)}&posts_per_page=200`).then((r) => r.text());
  const rows: Array<{ id: number; title: string; status: string }> = [];
  // Each row has a checkbox <input type="checkbox" name="post[]" value="ID"> and a title link
  const rx = /name="post\[\]"\s+value="(\d+)"[\s\S]{0,2000}?<a[^>]*class="row-title"[^>]*>([^<]+)<\/a>([\s\S]{0,300}?)<\/tr>/g;
  let m: RegExpExecArray | null;
  while ((m = rx.exec(html))) {
    const id = parseInt(m[1], 10);
    const title = m[2].trim();
    const ctx = m[3];
    const status =
      /post-state[^>]*>([^<]+)/.exec(ctx)?.[1].trim().toLowerCase() ||
      (ctx.includes("Draft") ? "draft" : ctx.includes("Private") ? "private" : "publish");
    rows.push({ id, title, status });
  }
  return rows;
}

async function fetchFrontPageContent(id: string): Promise<{ title?: string; contentSnippet: string; length: number }> {
  const html = await wpFetch(`/?p=${id}`).then((r) => r.text());
  const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
  return {
    title,
    length: html.length,
    contentSnippet: html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").slice(0, 500),
  };
}

async function listMediaSample(): Promise<unknown[]> {
  // Try authenticated REST first
  const res = await wpFetch("/wp-json/wp/v2/media?per_page=30&_fields=id,date,title,source_url,mime_type", {
    headers: { accept: "application/json" },
  });
  if (res.ok) {
    const j = (await res.json()) as Array<{ id: number; title: { rendered: string }; source_url: string; mime_type: string; date: string }>;
    return j.map((m) => ({
      id: m.id,
      date: m.date,
      mime: m.mime_type,
      title: m.title?.rendered,
      url: m.source_url,
    }));
  }
  return [];
}

async function main() {
  await ensureLoggedIn();
  const settings = await readingSettings();
  console.log("Reading settings:", JSON.stringify(settings, null, 2));

  if (settings.frontPageId) {
    const front = await fetchFrontPageContent(settings.frontPageId);
    console.log("\nFront page id", settings.frontPageId, "title:", front.title);
    console.log("Snippet:", front.contentSnippet);
  }

  // Try each known custom post type
  for (const pt of [
    "teams",
    "rt-faculty",
    "rt-program",
    "rt-research",
    "rt-notice",
    "rt-department",
    "rts-canvans",
    "elementor_library",
    "elementskit_template",
    "elementskit_content",
  ]) {
    const rows = await adminPostsList(pt).catch(() => []);
    if (rows.length) {
      console.log(`\n${pt} (${rows.length}):`);
      rows.slice(0, 10).forEach((r) => console.log(`  ${r.id} | ${r.status} | ${r.title.slice(0, 80)}`));
      if (rows.length > 10) console.log(`  ...and ${rows.length - 10} more`);
    }
  }

  const media = await listMediaSample();
  console.log(`\nMedia library sample (${media.length}):`);
  console.log(JSON.stringify(media.slice(0, 5), null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
