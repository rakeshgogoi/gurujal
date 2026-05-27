/**
 * Impact Highlights — four cards summarising the downstream effect of
 * GuruJal's convenings. Each card gets a tone accent so the row reads
 * as four interlocking outcomes rather than a flat list.
 */

type Tone = "teal" | "green" | "orange";

const highlights: {
  eyebrow: string;
  title: string;
  body: string;
  tone: Tone;
  icon: React.ReactNode;
}[] = [
  {
    eyebrow: "Policy Change",
    title: "Shaping Water Governance",
    body: "Symposium findings directly informed Haryana district-level groundwater planning frameworks and the National Jal Jeevan Mission dialogue.",
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
        <path d="M3 21h18" />
        <path d="M5 21V9l7-5 7 5v12" />
        <path d="M9 21v-6h6v6" />
      </svg>
    ),
  },
  {
    eyebrow: "Community Revival",
    title: "Wells Brought Back to Life",
    body: "Cultural ceremonies like Kuan Poojan reinstated alongside technical restoration — communities reclaiming ownership of their water heritage.",
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
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    eyebrow: "Media Coverage",
    title: "Stories Reaching Millions",
    body: "Featured across Times of India, Dainik Bhaskar, Amar Ujala and Bharat Express — amplifying the case for traditional water revival nationally.",
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
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>
    ),
  },
  {
    eyebrow: "Groundwater Recharge",
    title: "Aquifers Actively Restored",
    body: "Rooftop rainwater systems connected directly to revived dug wells — a replicable model demonstrated across Gurugram pilot villages.",
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
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
      </svg>
    ),
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

export function ImpactHighlights() {
  return (
    <section id="impact" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Why we convene
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What our events have catalysed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            From policy frameworks to community pilots to national media —
            our convenings move the work forward in measurable ways.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <li
              key={h.eyebrow}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${toneAccent[h.tone]}`}
              >
                <span className="h-6 w-6">{h.icon}</span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {h.eyebrow}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-brand-ink">
                {h.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {h.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
