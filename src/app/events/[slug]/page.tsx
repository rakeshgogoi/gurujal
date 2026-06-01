/**
 * /events/[slug] — dynamic event page sourced from Sanity.
 *
 * Renders the shared EventDetailHero (so editors can author hero copy
 * in the Studio without changing TSX) plus a PortableText body for the
 * rest of the page. If Sanity isn't configured yet, or the slug doesn't
 * exist, we 404.
 *
 * Existing hardcoded event pages (e.g. /urban-adda-25) keep working —
 * Sanity-authored events live alongside them at /events/<slug>.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextBlock } from "next-sanity";
import { EventDetailHero, type FactChip } from "@/components/event-detail/hero";
import { getSanityClient } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import {
  allEventSlugsQuery,
  eventBySlugQuery,
} from "../../../../sanity/lib/queries";
import { isSanityConfigured } from "../../../../sanity/env";

/** Shape of the GROQ response — kept loose; only the fields we render
 *  here are typed strictly. */
type SanityEvent = {
  _id: string;
  title: string;
  slug: string;
  eyebrow?: string;
  dateLine?: string;
  headlineBefore?: string;
  headlineAccent?: string;
  headlineAfter?: string;
  lead?: string;
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  facts?: FactChip[];
  // Sanity image — passed to urlFor() to produce a CDN URL.
  backdrop?: {
    _type: "image";
    asset: { _ref: string };
  };
  body?: PortableTextBlock[];
};

/** Pre-render every event slug at build time. Returns an empty list
 *  (so Next.js generates nothing) when Sanity isn't configured. */
export async function generateStaticParams() {
  if (!isSanityConfigured) return [];
  const slugs = await getSanityClient().fetch<string[]>(allEventSlugsQuery);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  if (!isSanityConfigured) return {};
  const { slug } = await params;
  const event = await getSanityClient().fetch<SanityEvent | null>(
    eventBySlugQuery,
    { slug }
  );
  if (!event) return {};
  return {
    title: event.title,
    description: event.lead?.slice(0, 200),
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  if (!isSanityConfigured) notFound();
  const { slug } = await params;
  const event = await getSanityClient().fetch<SanityEvent | null>(eventBySlugQuery, {
    slug,
  });
  if (!event) notFound();

  // The shared EventDetailHero expects a string path for the backdrop;
  // we resolve the Sanity image into a wide URL on the way through.
  const backdropUrl = event.backdrop
    ? urlFor(event.backdrop).width(2400).quality(80).url()
    : "/uploads/2024/08/DJI_0800.jpg";

  return (
    <>
      <EventDetailHero
        eyebrow={event.eyebrow || ""}
        dateLine={event.dateLine || ""}
        headlineBefore={event.headlineBefore || ""}
        headlineAccent={event.headlineAccent || ""}
        headlineAfter={event.headlineAfter || ""}
        lead={event.lead || ""}
        primaryCta={{
          label: event.primaryCta?.label || "Learn more",
          href: event.primaryCta?.href || "#body",
        }}
        secondaryCta={{
          label: event.secondaryCta?.label || "Back to events",
          href: event.secondaryCta?.href || "/events",
        }}
        facts={event.facts || []}
        backdrop={backdropUrl}
      />

      {event.body && event.body.length > 0 && (
        <section id="body" className="bg-white">
          <div className="mx-auto max-w-3xl space-y-5 px-6 py-16 text-base leading-relaxed text-brand-ink/85 sm:px-6 sm:py-20 sm:text-lg lg:px-8 lg:py-24">
            <PortableText
              value={event.body}
              components={{
                block: {
                  h2: ({ children }) => (
                    <h2 className="mt-8 text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-6 text-xl font-semibold text-brand-ink sm:text-2xl">
                      {children}
                    </h3>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-brand-teal pl-4 italic text-brand-muted">
                      {children}
                    </blockquote>
                  ),
                },
                marks: {
                  link: ({ value, children }) => (
                    <a
                      href={value?.href}
                      className="text-brand-primary underline underline-offset-2 hover:text-brand-primary-dark"
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-brand-ink">
                      {children}
                    </strong>
                  ),
                },
                list: {
                  bullet: ({ children }) => (
                    <ul className="list-disc space-y-2 pl-6">{children}</ul>
                  ),
                  number: ({ children }) => (
                    <ol className="list-decimal space-y-2 pl-6">{children}</ol>
                  ),
                },
              }}
            />
          </div>
        </section>
      )}
    </>
  );
}
