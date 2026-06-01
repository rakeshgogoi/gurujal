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
};

export default withMDX(nextConfig);
