import Image from "next/image";
import Link from "next/link";

/**
 * "Do not Miss Incredible Stories From Our Journey" section.
 *
 * Three featured story cards. Each card's title, excerpt, location/date
 * and link target are pulled from the actual content of the corresponding
 * page on gurujal.org (migrated MDX in /content/pages):
 *
 *   /chandla-dungarwas-pond             — Chandla Dungerwas Pond restoration
 *   /publication-green-wall-of-aravalli — The Green Wall of Aravalli study
 *   /roots-and-recharge-symposium       — Roots & Recharge Symposium 2025
 *
 * No fabricated facts: numbers, locations, partners, and dates are taken
 * verbatim from those pages.
 */
const stories = [
  {
    category: "Pond Restoration",
    title: "Chandla Dungerwas — echoes of renewal",
    excerpt:
      "Manesar Tehsil, Gurugram. 1.07-acre pond restored: 7,200 m³ of expanded capacity after desilting, 700+ villagers directly benefiting, groundwater table addressed at 42 m depth.",
    image: "/uploads/2026/03/Support-a-pond-hero.jpg",
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

export function Stories() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
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
            href="/blog"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-primary px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:bg-brand-primary hover:text-white"
          >
            Read more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <Link
              key={s.href + s.title}
              href={s.href}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-brand-soft transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-mist">
                <Image
                  src={s.image}
                  alt=""
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-teal backdrop-blur">
                  {s.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold leading-snug tracking-tight text-brand-ink transition group-hover:text-brand-primary sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {s.excerpt}
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-brand-soft pt-4">
                  <span className="text-xs font-medium text-brand-muted">
                    {s.meta}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange">
                    Read story
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5" aria-hidden>
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
