import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/hero";
import { BlogPosts } from "@/components/blog/posts";

export const metadata: Metadata = {
  title: "Blog — Stories from the Field",
  description:
    "GuruJal's blog — notes on restoration, community and water security, published on Substack.",
};

/** /blog — hero + embedded posts from the GuruJal Substack. */
export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogPosts />
    </>
  );
}
