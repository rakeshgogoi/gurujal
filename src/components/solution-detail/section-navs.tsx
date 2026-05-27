import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Per-solution sticky section anchor navs. Each delegates to the
 * shared StickyAnchorNav (same shrink-when-stuck behaviour as About /
 * Solutions / Team / Reports / Events).
 *
 * Co-locating all three here so a future fourth solution page only
 * needs to add another exported wrapper.
 */

export function SupportAPondSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "The Crisis", href: "#crisis" },
        { label: "Methodology", href: "#methodology" },
        { label: "Impact", href: "#impact" },
        { label: "Case Study", href: "#case-study" },
      ]}
    />
  );
}

export function ConnectTheDropSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "The Crisis", href: "#crisis" },
        { label: "Our Approach", href: "#approach" },
        { label: "Impact", href: "#impact" },
        { label: "Case Study", href: "#case-study" },
      ]}
    />
  );
}

export function WaterProofingSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "The Crisis", href: "#crisis" },
        { label: "Interventions", href: "#approach" },
        { label: "6R Framework", href: "#framework" },
        { label: "Impact", href: "#impact" },
        { label: "Case Study", href: "#case-study" },
      ]}
    />
  );
}

export function EcoRestorationSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "The Crisis", href: "#crisis" },
        { label: "Our Approach", href: "#approach" },
        { label: "Six Pillars", href: "#pillars" },
        { label: "Impact", href: "#impact" },
        { label: "Case Study", href: "#case-study" },
      ]}
    />
  );
}

export function WeForWaterSectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Why Green Jobs", href: "#crisis" },
        { label: "Six Tracks", href: "#tracks" },
        { label: "Programme", href: "#programme" },
        { label: "Placements", href: "#placements" },
        { label: "Alumni Stories", href: "#alumni" },
      ]}
    />
  );
}

export function EsgAdvisorySectionNav() {
  return (
    <StickyAnchorNav
      sections={[
        { label: "Our Offerings", href: "#offerings" },
        { label: "ESG Process", href: "#process" },
        { label: "Solutions Menu", href: "#solutions" },
        { label: "Case Study", href: "#case-study" },
        { label: "Frameworks", href: "#frameworks" },
      ]}
    />
  );
}
