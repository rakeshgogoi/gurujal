/**
 * Site navigation — mirrors gurujal.org's primary menu exactly.
 *
 * Top-level: Home / About / Solutions / Resources / Events / Careers
 * Plus a separate "Support Us" CTA button on the right.
 */

export type NavItem = {
  label: string;
  href: string;
  /**
   * When true, the header / footer should link to this route on the new
   * Next.js site (i.e. use the bare href). When unset/false, the link is
   * resolved through liveUrl() to the existing gurujal.org page. Set
   * `local: true` for every route we have implemented as its own page
   * under src/app.
   */
  local?: boolean;
  /**
   * When true, this child renders as a non-clickable section heading
   * inside its parent's dropdown — used to visually group items (e.g.
   * "Reports" and "Publications" under Resources). Header href is
   * ignored. Only relevant on dropdown children.
   */
  section?: boolean;
  children?: NavItem[];
};

/**
 * Paths that have been implemented locally on this Next.js site. The
 * header / footer use this to decide whether a link should resolve in
 * the SPA or jump to the live WordPress page.
 */
export const localRoutes = new Set<string>([
  "/",
  "/about",
  "/team",
  "/solutions",
  "/reports-and-publications",
  "/events",
  "/hydromingle-event",
  "/roots-and-recharge-symposium",
  "/urban-adda-25",
  "/real-nature-in-restored-landscapes",
  "/career",
  "/contact",
  "/support-a-pond",
  "/connect-the-drop",
  "/water-proofing",
  "/eco-restoration",
  "/we-for-water",
  "/esg-advisory",
  "/annual-report-2022-23",
  "/annual-report-2023-24",
  "/annual-report-2024-25",
  "/publication-pond-rejuvenation-sop",
  "/publication-green-wall-of-aravalli",
  "/publication-sop-of-wells",
  "/publication-wells-of-gurugram",
  "/chandla-dungarwas-pond",
]);

/** True when the given href is a path served by this Next.js app. */
export function isLocalRoute(href: string): boolean {
  if (!href.startsWith("/")) return false;
  // Strip any hash before matching so /about#vision still resolves locally.
  const path = href.split("#")[0];
  return localRoutes.has(path);
}

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Support A Pond", href: "/support-a-pond" },
      { label: "Connect The Drop", href: "/connect-the-drop" },
      { label: "Water Proofing", href: "/water-proofing" },
      { label: "Eco Restoration", href: "/eco-restoration" },
      { label: "WeForWater Fellowship", href: "/we-for-water" },
      { label: "ESG Advisory", href: "/esg-advisory" },
    ],
  },
  {
    label: "Resources",
    href: "/reports-and-publications",
    children: [
      // ---- Reports ----
      { label: "Reports", href: "#", section: true },
      { label: "Annual Report 2022–23", href: "/annual-report-2022-23" },
      { label: "Annual Report 2023–24", href: "/annual-report-2023-24" },
      { label: "Annual Report 2024–25", href: "/annual-report-2024-25" },

      // ---- Publications ----
      { label: "Publications", href: "#", section: true },
      { label: "Pond Rejuvenation SOP", href: "/publication-pond-rejuvenation-sop" },
      { label: "Green Wall of Aravalli", href: "/publication-green-wall-of-aravalli" },
      { label: "SoP of Wells", href: "/publication-sop-of-wells" },
      { label: "Wells of Gurugram", href: "/publication-wells-of-gurugram" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Careers", href: "/career" },
];

/** Separate Support Us CTA, rendered as a button to the right of nav. */
export const ctaNav = { label: "Support Us", href: "/contact" };

export const footerLinks = {
  solutions: [
    { label: "Support A Pond", href: "/support-a-pond" },
    { label: "Connect The Drop", href: "/connect-the-drop" },
    { label: "Water Proofing", href: "/water-proofing" },
    { label: "Eco Restoration", href: "/eco-restoration" },
    { label: "WeForWater Fellowship", href: "/we-for-water" },
    { label: "ESG Advisory", href: "/esg-advisory" },
  ],
  organisation: [
    { label: "Our Story", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Events", href: "/events" },
    { label: "Careers", href: "/career" },
    { label: "Contact", href: "/contact" },
  ],
  resources: [
    { label: "Reports & Publications", href: "/reports-and-publications" },
    { label: "Annual Report 2024–25", href: "/annual-report-2024-25" },
    { label: "Annual Report 2023–24", href: "/annual-report-2023-24" },
    { label: "Annual Report 2022–23", href: "/annual-report-2022-23" },
    { label: "Pond Rejuvenation SOP", href: "/publication-pond-rejuvenation-sop" },
    { label: "Green Wall of Aravalli", href: "/publication-green-wall-of-aravalli" },
    { label: "SoP of Wells", href: "/publication-sop-of-wells" },
    { label: "Wells of Gurugram", href: "/publication-wells-of-gurugram" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export const contactInfo = {
  phone: "+91-9311411998",
  email: "communications@gurujal.org",
  location: "Gurugram, Haryana, India",
};
