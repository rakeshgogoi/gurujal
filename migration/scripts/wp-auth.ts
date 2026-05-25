/**
 * Authenticated WordPress access via cookie login.
 *
 * Reads WP_USER / WP_PASS from process.env, performs a wp-login.php POST,
 * stores the resulting session cookies in migration/.wp-cookies, and exposes
 * a `wpFetch(path)` helper that subsequent migration scripts can import.
 *
 * The cookie file is gitignored (see /.gitignore).
 *
 * Standalone run:
 *   WP_USER=... WP_PASS=... npx tsx migration/scripts/wp-auth.ts
 *
 * Reuse:
 *   import { wpFetch, ensureLoggedIn } from "./wp-auth.js";
 *   await ensureLoggedIn();
 *   const html = await wpFetch("/wp-admin/edit.php?post_type=teams").then(r=>r.text());
 */

import fs from "node:fs";
import path from "node:path";

const WP_BASE = "https://gurujal.org";
const COOKIE_FILE = path.join(process.cwd(), "migration", ".wp-cookies");

type CookieMap = Record<string, { value: string; domain?: string; path?: string; expires?: string }>;

function loadCookies(): CookieMap {
  try {
    return JSON.parse(fs.readFileSync(COOKIE_FILE, "utf8")) as CookieMap;
  } catch {
    return {};
  }
}

function saveCookies(map: CookieMap) {
  fs.mkdirSync(path.dirname(COOKIE_FILE), { recursive: true });
  fs.writeFileSync(COOKIE_FILE, JSON.stringify(map, null, 2));
}

function cookieHeader(map: CookieMap): string {
  return Object.entries(map)
    .map(([k, v]) => `${k}=${v.value}`)
    .join("; ");
}

function mergeSetCookie(map: CookieMap, header: string | string[] | null): void {
  if (!header) return;
  const headers = Array.isArray(header) ? header : header.split(/,(?=\s*\w+=)/);
  for (const h of headers) {
    const [pair, ...attrs] = h.split(";").map((s) => s.trim());
    const eq = pair.indexOf("=");
    if (eq <= 0) continue;
    const name = pair.slice(0, eq).trim();
    const value = pair.slice(eq + 1).trim();
    const attrMap: Record<string, string> = {};
    for (const a of attrs) {
      const [k, ...rest] = a.split("=");
      attrMap[k.toLowerCase()] = rest.join("=").trim();
    }
    if (value.toLowerCase() === "deleted") {
      delete map[name];
    } else {
      map[name] = {
        value,
        domain: attrMap.domain,
        path: attrMap.path,
        expires: attrMap.expires,
      };
    }
  }
}

/** Low-level fetch that auto-injects cookies and persists Set-Cookie updates. */
export async function wpFetch(
  pathOrUrl: string,
  init: RequestInit = {}
): Promise<Response> {
  const map = loadCookies();
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `${WP_BASE}${pathOrUrl}`;
  const headers = new Headers(init.headers || {});
  if (!headers.has("user-agent")) headers.set("user-agent", "gurujal-migration/1.0");
  const ck = cookieHeader(map);
  if (ck) headers.set("cookie", ck);
  const res = await fetch(url, { ...init, headers, redirect: "manual" });
  // collect all Set-Cookie headers (Node's fetch returns multi-value)
  const sc = (res.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie?.();
  if (sc && sc.length) {
    mergeSetCookie(map, sc);
    saveCookies(map);
  }
  return res;
}

/** Follow a chain of 30x redirects manually (so we can keep the cookie jar fresh). */
export async function wpFetchFollow(
  pathOrUrl: string,
  init: RequestInit = {},
  max = 5
): Promise<Response> {
  let url = pathOrUrl;
  let res = await wpFetch(url, init);
  let hop = 0;
  while ([301, 302, 303, 307, 308].includes(res.status) && hop < max) {
    const loc = res.headers.get("location");
    if (!loc) break;
    url = loc.startsWith("http") ? loc : `${WP_BASE}${loc}`;
    // POST → GET for 303
    const next: RequestInit =
      res.status === 303 ? { method: "GET" } : { method: init.method };
    res = await wpFetch(url, next);
    hop++;
  }
  return res;
}

function fail(msg: string): never {
  console.error(msg);
  process.exit(1);
}

/** Check we have wordpress_logged_in_* cookie set; log in if not. */
export async function ensureLoggedIn(): Promise<void> {
  const map = loadCookies();
  const hasLoggedIn = Object.keys(map).some((k) => k.startsWith("wordpress_logged_in_"));
  if (hasLoggedIn) {
    // Validate by hitting wp-admin
    const probe = await wpFetch("/wp-admin/", { method: "GET" });
    if (probe.status === 200) return;
    // 302 redirect to login means session expired
  }

  const user = process.env.WP_USER;
  const pass = process.env.WP_PASS;
  if (!user || !pass) {
    fail("WP_USER / WP_PASS environment variables must be set to log in.");
  }

  // First GET to get the testcookie + form
  await wpFetch("/wp-login.php", { method: "GET" });

  const form = new URLSearchParams();
  form.set("log", user);
  form.set("pwd", pass);
  form.set("wp-submit", "Log In");
  form.set("redirect_to", `${WP_BASE}/wp-admin/`);
  form.set("testcookie", "1");

  // Ensure testcookie is present too
  const cookies = loadCookies();
  cookies["wordpress_test_cookie"] = { value: "WP%20Cookie%20check" };
  saveCookies(cookies);

  const res = await wpFetch("/wp-login.php", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form.toString(),
  });

  // 302 to wp-admin = success
  if (res.status >= 200 && res.status < 400) {
    const after = loadCookies();
    const ok = Object.keys(after).some((k) => k.startsWith("wordpress_logged_in_"));
    if (!ok) {
      const body = await res.text();
      const errMatch = body.match(/<div id="login_error"[^>]*>([\s\S]*?)<\/div>/);
      const err = errMatch ? errMatch[1].replace(/<[^>]+>/g, "").trim() : "unknown";
      fail(`Login failed: ${err}`);
    }
    console.log("✓ Logged in as", user);
    return;
  }
  fail(`Login HTTP ${res.status}`);
}

if (process.argv[1] && process.argv[1].endsWith("wp-auth.ts")) {
  // Standalone CLI mode: just login and report.
  ensureLoggedIn().then(async () => {
    const map = loadCookies();
    console.log("Cookies saved:", Object.keys(map).join(", "));
    // Verify by fetching admin home
    const probe = await wpFetch("/wp-admin/");
    console.log("wp-admin HTTP:", probe.status);
  });
}
