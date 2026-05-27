/**
 * The GuruJal Way — four core principles that shape every solution.
 *
 * Card grid with a numbered eyebrow, icon-pill, title, and one-line body.
 * Tones rotate (teal / green / orange / teal) so the row reads as four
 * interlocking ideas rather than a uniform list.
 */

type Tone = "teal" | "green" | "orange";

const principles: {
  no: string;
  title: string;
  body: string;
  tone: Tone;
  icon: React.ReactNode;
}[] = [
  {
    no: "01",
    title: "Community-Led Integrated Solutions",
    body: "Fostering collaboration with communities to solve water challenges using ecological, social and economic levers in concert.",
    tone: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    no: "02",
    title: "Hyperlocal Actions, Regional Impact",
    body: "Community-specific initiatives that ladder up to broader environmental priorities across geographies.",
    tone: "green",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    no: "03",
    title: "Government Partnerships for Scale",
    body: "Leveraging government alignment to unlock large-scale, policy-backed interventions and budget flows.",
    tone: "orange",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    no: "04",
    title: "Technology-Driven Transparency",
    body: "Digital tools and continuous monitoring to strengthen governance and lock in sustainable, scaled impact.",
    tone: "teal",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const toneIconBg: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

const toneNumber: Record<Tone, string> = {
  teal: "text-brand-teal",
  green: "text-brand-green-dark",
  orange: "text-brand-orange",
};

export function TheGuruJalWay() {
  return (
    <section id="approach" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Our approach
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            The GuruJal Way
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            Four principles that shape every intervention — from a single
            pond to a multi-state restoration program.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p) => (
            <li
              key={p.no}
              className="relative flex flex-col rounded-3xl border border-brand-soft/80 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`absolute right-6 top-6 text-3xl font-bold tracking-tight ${toneNumber[p.tone]} opacity-60`}
              >
                {p.no}
              </span>
              <span
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ${toneIconBg[p.tone]}`}
              >
                <span className="h-7 w-7">{p.icon}</span>
              </span>
              <h3 className="text-lg font-semibold leading-snug text-brand-ink">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
