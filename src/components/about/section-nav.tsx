import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * About-page section anchor nav. Delegates to the shared StickyAnchorNav
 * which handles the sticky behaviour and the shrink-when-stuck styling.
 */

const sections = [
  { label: "Vision & Mission", href: "#vision-mission" },
  { label: "Our Journey", href: "#our-journey" },
  { label: "Leadership", href: "#leadership" },
  { label: "Trustees", href: "#trustees" },
  { label: "Awards & Recognition", href: "#awards" },
  { label: "Our Partners", href: "#partners" },
];

export function AboutSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
