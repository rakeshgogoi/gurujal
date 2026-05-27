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
