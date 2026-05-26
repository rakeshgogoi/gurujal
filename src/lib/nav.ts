/**
 * Site navigation — mirrors gurujal.org's primary menu exactly.
 *
 * Top-level: Home / About / Solutions / Resources / Events / Careers
 * Plus a separate "Support Us" CTA button on the right.
 */

export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our Story", href: "/about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Our Team", href: "/team" },
      { label: "Awards & Recognition", href: "/about#awards" },
    ],
  },
  {
    label: "Solutions",
    href: "/support-a-pond",
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
      { label: "Reports & Publications", href: "/reports-and-publications" },
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
export const ctaNav = { label: "Support Us", href: "/support-a-pond" };

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
