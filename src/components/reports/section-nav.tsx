import { StickyAnchorNav } from "@/components/sticky-anchor-nav";

/**
 * Reports & Publications page section anchor nav. Delegates to the shared
 * StickyAnchorNav so the shrink-on-stuck behaviour stays consistent with
 * About / Team / Solutions.
 */

const sections = [
  { label: "Annual Reports", href: "#reports" },
  { label: "Publications", href: "#publications" },
];

export function ReportsSectionNav() {
  return <StickyAnchorNav sections={sections} />;
}
