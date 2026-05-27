import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Team-page section anchor nav. Delegates to the shared StickyAnchorNav.
 */

const sections = [
  { label: "Leadership", href: "#leadership" },
  { label: "Trustees", href: "#trustees" },
  { label: "Advisors", href: "#advisors" },
  { label: "Executive Team", href: "#executive" },
];

export function TeamSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
