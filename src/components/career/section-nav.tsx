import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Career-page section anchor nav. Delegates to the shared StickyAnchorNav
 * which handles the sticky behaviour and the shrink-when-stuck styling.
 */

const sections = [
  { label: "Why GuruJal", href: "#why" },
  { label: "Open Roles", href: "#positions" },
  { label: "Diversity & Inclusion", href: "#diversity" },
  { label: "Apply", href: "#apply" },
];

export function CareerSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
