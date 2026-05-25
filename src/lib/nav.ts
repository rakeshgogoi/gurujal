/**
 * Site navigation configuration.
 * Mirrors the structure of gurujal.org's primary menu.
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
    label: "Initiatives",
    href: "/initiatives",
    children: [
      { label: "Support a Pond", href: "/support-a-pond" },
      { label: "Connect the Drops", href: "/connect-the-drops" },
      { label: "Water Proofing", href: "/water-proofing" },
      { label: "Eco Restoration", href: "/eco-restoration" },
      { label: "ESG Advisory", href: "/esg-advisory" },
    ],
  },
  {
    label: "Knowledge",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Jal Samvaad", href: "/blog?cat=jal-samvaad" },
      { label: "Reports & Publications", href: "/reports-and-publications" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  initiatives: [
    { label: "Support a Pond", href: "/support-a-pond" },
    { label: "Connect the Drops", href: "/connect-the-drops" },
    { label: "Water Proofing", href: "/water-proofing" },
    { label: "Eco Restoration", href: "/eco-restoration" },
    { label: "ESG Advisory", href: "/esg-advisory" },
  ],
  about: [
    { label: "Our Story", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Reports & Publications", href: "/reports-and-publications" },
    { label: "Events", href: "/events" },
    { label: "Career", href: "/career" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Sitemap", href: "/sitemap.xml" },
  ],
};
