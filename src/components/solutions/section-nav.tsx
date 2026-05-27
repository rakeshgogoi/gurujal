import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Solutions-page section anchor nav. Delegates to the shared
 * StickyAnchorNav. Same shrink-when-stuck behaviour as About/Team.
 */

const sections = [
  { label: "The GuruJal Way", href: "#approach" },
  { label: "Primary Interventions", href: "#interventions" },
  { label: "Partner With Us", href: "#partner" },
];

export function SolutionsSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
