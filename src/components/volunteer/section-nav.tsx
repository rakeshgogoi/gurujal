import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Volunteer-page section anchor nav. Delegates to the shared
 * StickyAnchorNav which handles the sticky behaviour and the
 * shrink-when-stuck styling.
 */

const sections = [
  { label: "Why Volunteer", href: "#why" },
  { label: "How It Works", href: "#levels" },
  { label: "Tracks", href: "#tracks" },
  { label: "Apply", href: "#apply" },
];

export function VolunteerSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
