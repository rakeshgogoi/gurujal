import Image from "next/image";
import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * "Do not Miss Incredible Stories From Our Journey" — editorial / magazine
 * layout (one big hero feature on the left, two stacked side stories on
 * the right). Deliberately distinct from the Recent Events timeline so
 * the two narrative sections don't look like the same component.
 *
 * Story content (title, excerpt, date, link) is pulled from the actual
 * pages in /content/pages.
 */
const stories = [
  {
    category: "Pond Restoration",
    title: "Chandla Dungerwas — echoes of renewal",
    excerpt:
      "Manesar Tehsil, Gurugram. 1.07-acre pond restored: 7,200 m³ of expanded capacity after desilting, 700+ villagers directly benefiting, groundwater table addressed at 42 m depth.",
    image: "/uploads/2026/03/chandla-dungerwas-hero.jpg",
    href: "/chandla-dungarwas-pond",
    meta: "Jul 2024 · Pond restoration story",
  },
  {
    category: "Publication",
    title: "The Green Wall of Aravalli",
    excerpt:
      "A multi-disciplinary roadmap for ecological restoration of a 5,000-acre landscape around Damdama Lake — 20+ experts across biodiversity, hydrology, groundwater recharge, and cultural heritage.",
    image: "/uploads/2026/03/eco-hero.jpg",
    href: "/publication-green-wall-of-aravalli",
    meta: "Aravalli range · Damdama Lake",
  },
  {
    category: "Event",
    title: "Roots & Recharge Symposium 2025",
    excerpt:
      "GuruJal × Wipro Foundation, India Habitat Centre, 9 December 2025. Reviving traditional water wisdom — heritage dug wells and groundwater resilience in Gurugram.",
    image: "/uploads/2026/03/events-hero.jpg",
    href: "/roots-and-recharge-symposium",
    meta: "9 Dec 2025 · IHC, New Delhi",
  },
];

const [feature, ...rest] = stories;

export function Stories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              From the journey
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Do not miss incredible stories from our journey
            </h2>
          </div>
          <Link
            href={liveUrl("/events")}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-primary px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
          >
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Hero feature — left, large */}
          <Link
            href={liveUrl(feature.href)}
            className="group relative flex flex-col overflow-hidden rounded-3xl bg-brand-mist lg:col-span-7"
          >
            {/* Image container — explicit aspect ratio on every viewport
                so Next/Image fill always has positive parent height.
                Mobile gets a taller 3:4 portrait so the overlay text has
                room to sit; desktop stays landscape. */}
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[5/4]">
              <Image
                src={feature.image}
                alt=""
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              {/* Light gradient — keeps text readable at the bottom while
                  letting the upper two-thirds of the photo show clearly. */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/15 to-transparent" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Featured · {feature.category}
              </span>
              <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-tight text-white sm:text-3xl">
                {feature.title}
              </h3>
              <p className="mt-3 line-clamp-3 max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base lg:line-clamp-none">
                {feature.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-white/15 pt-4">
                <span className="text-xs font-medium uppercase tracking-wider text-white/60">
                  {feature.meta}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
                  Read story
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-1" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>

          {/* Two side stories stacked — right column */}
          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.map((s) => (
              <Link
                key={s.href + s.title}
                href={liveUrl(s.href)}
                className="group flex flex-1 flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-soft transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-brand-accent sm:flex-row"
              >
                <div className="relative h-44 w-full shrink-0 overflow-hidden sm:h-auto sm:w-48">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 640px) 12rem, 100vw"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-5 sm:p-6">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-teal">
                    {s.category}
                  </span>
                  <h3 className="mt-1.5 text-base font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-primary sm:text-lg">
                    {s.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-brand-muted">
                    {s.excerpt}
                  </p>
                  <span className="mt-3 text-xs font-medium text-brand-muted">
                    {s.meta}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
