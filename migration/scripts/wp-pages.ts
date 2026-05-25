// Curated list of REAL GuruJal pages to migrate from WordPress.
//
// Excludes stock demo content from the original Elementor theme:
//   sample-page, professors, tuition-fee, alumni, scholarships,
//   campus-life, admission, fitness-athletics, blog-2-grid, blog-3-grid,
//   home-2, home-3, home-5, academic, academic-areas-of-unipix-N,
//   event-grid, event, research, solutions, pages, shop, cart, checkout,
//   my-account, *organizer*, *venue*, /rt-*
//
// Edit this list as new real pages appear on gurujal.org.

export type PageDef = {
  /** WordPress slug (path segment) */
  wpSlug: string;
  /** Path the new site will serve it at (defaults to /<wpSlug>) */
  routePath?: string;
  /** Collection bucket in /content */
  collection?: "pages" | "posts";
  /** Optional human override of the title from WP */
  titleOverride?: string;
};

export const realPages: PageDef[] = [
  // Top-level
  { wpSlug: "home", routePath: "/" },
  { wpSlug: "about" },

  // Initiatives
  { wpSlug: "support-a-pond" },
  { wpSlug: "we-for-water" },
  { wpSlug: "connect-the-drops" },
  { wpSlug: "water-proofing" },
  { wpSlug: "eco-restoration" },
  { wpSlug: "esg-advisory" },

  // Org pages
  { wpSlug: "team" },
  { wpSlug: "reports-and-publications" },
  { wpSlug: "career" },
  { wpSlug: "contact" },

  // Events / programs
  { wpSlug: "events" },
  { wpSlug: "hydromingle-event" },
  { wpSlug: "roots-and-recharge-symposium" },
  { wpSlug: "experiential-learning" },
  { wpSlug: "chandla-dungarwas-pond" },
  { wpSlug: "urban-adda-25" },

  // Publication detail pages
  { wpSlug: "publication-pond-rejuvenation-sop" },
  { wpSlug: "publication-green-wall-of-aravalli" },
  { wpSlug: "publication-sop-of-wells" },
  { wpSlug: "publication-wells-of-gurugram" },

  // Blog index
  { wpSlug: "blog" },
];
