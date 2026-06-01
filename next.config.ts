import type { NextConfig } from "next";
import path from "node:path";
import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [["remark-gfm"]],
    rehypePlugins: [["rehype-slug"]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  // Pin workspace root so a stray lockfile in $HOME doesn't confuse Next's auto-detection.
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    // Allow remote images from WordPress during the migration window.
    // Strip these once all media is local under /public.
    remotePatterns: [
      { protocol: "https", hostname: "gurujal.org" },
      { protocol: "https", hostname: "secure.gravatar.com" },
    ],
    // In dev, skip on-the-fly sharp optimisation — content-heavy pages
    // (e.g. /team with ~46 portraits) saturate the optimiser otherwise
    // and the user sees empty circles while scrolling. Production builds
    // still get full optimisation since this flag is gated on NODE_ENV.
    unoptimized: process.env.NODE_ENV !== "production",
  },
  async redirects() {
    // The four event detail pages moved from bare-slug URLs to the
    // Sanity-driven /events/<slug> dynamic route. Permanent (301)
    // redirects keep any old external links / search-engine results
    // pointing at the correct place.
    return [
      {
        source: "/urban-adda-25",
        destination: "/events/urban-adda-25",
        permanent: true,
      },
      {
        source: "/hydromingle-event",
        destination: "/events/hydromingle-event",
        permanent: true,
      },
      {
        source: "/roots-and-recharge-symposium",
        destination: "/events/roots-and-recharge-symposium",
        permanent: true,
      },
      {
        source: "/real-nature-in-restored-landscapes",
        destination: "/events/real-nature-in-restored-landscapes",
        permanent: true,
      },
    ];
  },
};

export default withMDX(nextConfig);
