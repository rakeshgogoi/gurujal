import Image from "next/image";
import Link from "next/link";

/**
 * "Do not Miss Incredible Stories From Our Journey" section.
 *
 * A featured-stories carousel-style block — three large story cards with
 * image, category eyebrow, headline, and a read-more link.
 *
 * Stories are curated from real GuruJal initiatives & publications:
 *   - Green Wall of Aravalli study
 *   - Chandla Dungarwas pond rejuvenation
 *   - Bhokarka pond / Suntory partnership
 *   - WeForWater Fellowship
 */
const stories = [
  {
    category: "Restoration",
    title: "The Green Wall of Aravalli — a 5,000-acre roadmap for ecological revival",
    excerpt:
      "20+ multi-disciplinary experts mapped biodiversity, hydrology, and cultural heritage across the Damdama Lake landscape.",
    image: "/uploads/2026/03/eco-hero.jpg",
    href: "/publication-green-wall-of-aravalli",
    readTime: "8 min read",
  },
  {
    category: "Community",
    title: "Chandla Dungarwas — how a forgotten pond became a thriving ecosystem",
    excerpt:
      "From silted neglect to a living water body recharging groundwater and supporting the entire village.",
    image: "/uploads/2026/03/Support-a-pond-hero.jpg",
    href: "/chandla-dungarwas-pond",
    readTime: "6 min read",
  },
  {
    category: "Partnership",
    title: "Suntory × GuruJal — the Bhokarka pond rejuvenation story",
    excerpt:
      "A corporate partnership that delivered measurable environmental outcomes for a Haryana village under the Proof Positive commitment.",
    image: "/uploads/2026/03/Water-proofing-hero.jpg",
    href: "/support-a-pond",
    readTime: "5 min read",
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
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
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
                    {s.readTime}
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
