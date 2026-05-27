import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { listSlugs, loadEntry } from "@/lib/content";
import { useMDXComponents } from "@/mdx-components";

/**
 * Catch-all top-level page route.
 *
 * Renders content/pages/<slug>.mdx through MDXRemote.
 * Reserved slugs (those that have their own /app/<slug>/page.tsx, like
 * the homepage and blog index) take precedence over this route.
 */

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listSlugs("pages")
    // The homepage MDX lives in content/pages/home.mdx but is served
    // from the root /. Skip it here.
    .filter((s) => s !== "home")
    // Blog has a dedicated route.
    .filter((s) => s !== "blog")
    // /about has its own composed route — skip the raw MDX fallback.
    .filter((s) => s !== "about")
    // /team has its own composed route — skip the raw MDX fallback.
    .filter((s) => s !== "team")
    // /solutions has its own composed route — skip the raw MDX fallback.
    .filter((s) => s !== "solutions")
    // /reports-and-publications has its own composed route — skip the
    // raw MDX fallback. (The four /publication-* subpages are still
    // served from MDX via this catch-all.)
    .filter((s) => s !== "reports-and-publications")
    // /events has its own composed route — skip the raw MDX fallback.
    .filter((s) => s !== "events")
    // Event-detail pages with composed routes.
    .filter((s) => s !== "hydromingle-event")
    .filter((s) => s !== "roots-and-recharge-symposium")
    .filter((s) => s !== "urban-adda-25")
    .filter((s) => s !== "real-nature-in-restored-landscapes")
    // Careers + Contact have composed routes now.
    .filter((s) => s !== "career")
    .filter((s) => s !== "contact")
    // Solution sub-pages with composed routes.
    .filter((s) => s !== "support-a-pond")
    .filter((s) => s !== "connect-the-drop")
    .filter((s) => s !== "water-proofing")
    .filter((s) => s !== "eco-restoration")
    .filter((s) => s !== "we-for-water")
    .filter((s) => s !== "esg-advisory")
    // 3 annual reports + 4 publications now have composed routes.
    .filter((s) => s !== "annual-report-2022-23")
    .filter((s) => s !== "annual-report-2023-24")
    .filter((s) => s !== "annual-report-2024-25")
    .filter((s) => s !== "publication-pond-rejuvenation-sop")
    .filter((s) => s !== "publication-green-wall-of-aravalli")
    .filter((s) => s !== "publication-sop-of-wells")
    .filter((s) => s !== "publication-wells-of-gurugram")
    // Story / case-study pages with composed routes.
    .filter((s) => s !== "chandla-dungarwas-pond")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = loadEntry(("pages") as const, slug);
  if (!entry) return {};
  return {
    title: entry.frontmatter.title,
    description: entry.frontmatter.excerpt,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = loadEntry("pages", slug);
  if (!entry) notFound();

  const components = useMDXComponents({});

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-brand-ink sm:text-5xl">
          {entry.frontmatter.title}
        </h1>
        {entry.frontmatter.excerpt && (
          <p className="mt-4 text-lg text-brand-muted">
            {entry.frontmatter.excerpt}
          </p>
        )}
      </header>
      <div className="prose-content">
        <MDXRemote
          source={entry.body}
          components={components}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>
    </article>
  );
}
