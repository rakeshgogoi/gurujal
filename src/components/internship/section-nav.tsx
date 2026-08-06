import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Internship-page section anchor nav. Delegates to the shared
 * StickyAnchorNav which handles the sticky behaviour and the
 * shrink-when-stuck styling.
 */

const sections = [
  { label: "Why Intern", href: "#why" },
  { label: "Open Positions", href: "#positions" },
  { label: "What You Get", href: "#features" },
  { label: "Apply", href: "#apply" },
];

export function InternshipSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
