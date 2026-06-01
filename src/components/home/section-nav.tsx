import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Homepage section anchor nav. Delegates to the shared StickyAnchorNav
 * so the shrink-on-stuck behaviour stays consistent with the other
 * pages (About / Team / Solutions / Reports).
 *
 * Top-level destinations chosen for first-time visitors who want to
 * jump straight to the meat of the page:
 *   • The Crisis     → why the work matters
 *   • Our Approach   → how GuruJal works (the 6R framework)
 *   • Our Impact     → the numbers that prove it works
 *   • Global Goals   → SDG alignment
 *   • Our Stories    → editorial story tiles
 *   • Testimonials   → words from partners + communities
 *   • Partners       → who we work with
 */

const sections = [
  { label: "The Crisis", href: "#crisis" },
  { label: "Our Approach", href: "#approach" },
  { label: "Our Impact", href: "#impact" },
  { label: "Global Goals", href: "#goals" },
  { label: "Our Stories", href: "#stories" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#partners" },
];

export function HomeSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
