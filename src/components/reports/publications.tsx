import Link from "next/link";

/**
 * Publications grid — four dedicated publication pages.
 *
 * Each card links to the existing /publication-* MDX route, which has
 * its own landing page with the publication details and download.
 */

type Tone = "teal" | "green" | "orange";

const publications: {
  title: string;
  subtitle: string;
  blurb: string;
  href: string;
  tone: Tone;
  badge: string;
}[] = [
  {
    title: "Pond Rejuvenation SOP",
    subtitle: "Standard Operating Procedure",
    blurb:
      "GuruJal's field-tested methodology for restoring ponds — from baseline survey through structural works to long-term governance.",
    href: "/publication-pond-rejuvenation-sop",
    tone: "teal",
    badge: "SOP",
  },
  {
    title: "The Green Wall of Aravalli",
    subtitle: "Research roadmap",
    blurb:
      "A 5,000-acre ecological restoration roadmap for the Aravalli landscape around Damdama Lake, developed with 20+ experts.",
    href: "/publication-green-wall-of-aravalli",
    tone: "green",
    badge: "Research",
  },
  {
    title: "SoP of Wells",
    subtitle: "Standard Operating Procedure",
    blurb:
      "Practical handbook for the assessment, rejuvenation and ongoing care of traditional open wells across India.",
    href: "/publication-sop-of-wells",
    tone: "orange",
    badge: "SOP",
  },
  {
    title: "Wells of Gurugram",
    subtitle: "Inventory study",
    blurb:
      "A census of Gurugram's historic open wells with condition assessment, hydrological context and a revival roadmap.",
    href: "/publication-wells-of-gurugram",
    tone: "teal",
    badge: "Inventory",
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

const toneLink: Record<Tone, string> = {
  teal: "text-brand-teal-dark group-hover:text-brand-teal",
  green: "text-brand-green-dark group-hover:text-brand-green",
  orange: "text-brand-orange-dark group-hover:text-brand-orange",
};

function BookIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  );
}

export function Publications() {
  return (
    <section id="publications" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Publications
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Standard operating procedures, research & inventories
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Replicable models and on-ground knowledge — designed to be
            picked up by other communities, NGOs and local governments.
          </p>
        </div>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-6 sm:grid-cols-2">
          {publications.map((p) => (
            <li key={p.title}>
              <Link
                href={p.href}
                className="group flex h-full flex-col gap-5 rounded-3xl bg-white p-7 ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl hover:ring-brand-accent"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${toneAccent[p.tone]}`}
                  >
                    <BookIcon />
                  </span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${toneAccent[p.tone]}`}
                  >
                    {p.badge}
                  </span>
                </div>

                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-muted">
                    {p.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-brand-ink sm:text-2xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                    {p.blurb}
                  </p>
                </div>

                <span
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${toneLink[p.tone]}`}
                >
                  Read more
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                    aria-hidden
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
