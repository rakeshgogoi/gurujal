import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Events page section anchor nav. Delegates to the shared
 * StickyAnchorNav.
 */

const sections = [
  { label: "Impact", href: "#impact" },
  { label: "Upcoming", href: "#upcoming" },
  { label: "Past Events", href: "#past" },
];

export function EventsSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
