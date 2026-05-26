/**
 * Resolve an internal-style path to its full URL on the live gurujal.org
 * site. Used everywhere the new homepage links to a content page so
 * clicks land on the existing live website while the new site is being
 * built out.
 *
 *   liveUrl("/about")             → "https://gurujal.org/about/"
 *   liveUrl("/about#vision")      → "https://gurujal.org/about#vision"
 *   liveUrl("https://x.com/y")    → "https://x.com/y"  (already absolute)
 *   liveUrl("mailto:hi@gurujal.")  → unchanged
 *   liveUrl("#section")           → unchanged (in-page anchor)
 */
export const LIVE_BASE = "https://gurujal.org";

export function liveUrl(path: string | undefined | null): string {
  if (!path) return LIVE_BASE + "/";
  if (
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#")
  ) {
    return path;
  }
  const withSlash = path.startsWith("/") ? path : "/" + path;
  // Split off any hash so the trailing slash sits before it.
  const hashIdx = withSlash.indexOf("#");
  if (hashIdx >= 0) {
    const base = withSlash.slice(0, hashIdx);
    const hash = withSlash.slice(hashIdx);
    const slashed = base === "/" || base.endsWith("/") ? base : base + "/";
    return LIVE_BASE + slashed + hash;
  }
  const slashed = withSlash === "/" || withSlash.endsWith("/") ? withSlash : withSlash + "/";
  return LIVE_BASE + slashed;
}
