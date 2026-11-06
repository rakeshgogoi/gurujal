import Image from "next/image";

/**
 * Tools — downloadable materials from the Resource Centre. Each item
 * opens its file directly in a new tab, like the other PDFs on the site.
 */

type Tool = {
  title: string;
  subtitle: string;
  blurb: string;
  chapters: string[];
  cover: string;
  coverAlt: string;
  href: string;
  cta: string;
};

const tools: Tool[] = [
  {
    title: "The Green Quest",
    subtitle: "Booklet — Uniting Nature and Self",
    blurb:
      "A hands-on guide to reconnecting with nature, from green spaces near Delhi NCR to composting at home — with DIY projects, community activities, stories and a puzzle page.",
    chapters: [
      "Green Spaces",
      "Waste",
      "Composting",
      "Connect with Nature",
      "Stories of Nature",
      "Activities",
    ],
    cover: "/uploads/2026/11/green-quest-booklet-cover.jpg",
    coverAlt: "Cover of The Green Quest: Uniting Nature and Self, a GuruJal booklet",
    href: "/uploads/2026/11/GuruJal-Green-Quest-Booklet.pdf",
    cta: "Download the booklet (PDF)",
  },
];

export function Tools() {
  return (
    <section id="tools" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Tools
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Booklets and materials to download
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Ready-to-use material for individuals, schools and
            communities who want to take small steps for nature.
          </p>
        </div>

        <ul className="mx-auto mt-14 max-w-5xl space-y-8">
          {tools.map((t) => (
            <li
              key={t.title}
              className="grid items-center gap-8 overflow-hidden rounded-3xl bg-brand-mist p-6 ring-1 ring-brand-soft/80 sm:p-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10"
            >
              <div className="relative mx-auto aspect-[988/1500] w-full max-w-[260px] overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <Image
                  src={t.cover}
                  alt={t.coverAlt}
                  fill
                  sizes="260px"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
                  {t.subtitle}
                </p>
                <h3 className="mt-1 text-2xl font-semibold text-brand-ink sm:text-3xl">
                  {t.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-brand-muted">
                  {t.blurb}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.chapters.map((c) => (
                    <li
                      key={c}
                      className="inline-flex rounded-full bg-brand-green/10 px-3 py-1.5 text-sm font-semibold text-brand-green-dark ring-1 ring-brand-green/20"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
                >
                  {t.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M12 3v12" />
                    <polyline points="7 10 12 15 17 10" />
                    <path d="M5 21h14" />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
