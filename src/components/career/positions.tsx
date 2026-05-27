/**
 * Open positions — 5 roles with JD download + Apply links.
 *
 * Each card shows tags (type · location · experience), title, blurb,
 * and two CTAs: "View JD" (opens the PDF in a new tab) and "Apply"
 * (opens the shared Google Form in a new tab).
 */

const APPLY_FORM = "https://forms.gle/obmREQzpeTe3dirg9";

type Tone = "teal" | "green" | "orange";

const positions: {
  title: string;
  tags: string[];
  blurb: string;
  jd: string;
  tone: Tone;
}[] = [
  {
    title: "Sr. Civil and Structural Design Engineer",
    tags: ["Technical", "Full-time", "Gurugram", "8–10 Years"],
    blurb:
      "Lead end-to-end responsibility for the design, planning, execution, compliance and reporting of civil engineering projects — with expertise in structural design, wastewater treatment systems and site execution.",
    jd: "/uploads/2024/08/Sr.-Civil-and-Structural-Design-Engineer_GuruJal.pdf",
    tone: "teal",
  },
  {
    title: "Jr. Civil and Structural Design Engineer",
    tags: ["Technical", "Full-time", "Gurugram", "2–4 Years"],
    blurb:
      "Support the design, execution and monitoring of water conservation and civil infrastructure projects — ensuring quality implementation, accurate data collection and effective coordination across teams.",
    jd: "/uploads/2024/08/Jr.-Civil-and-Structural-Design-Engineer.pdf",
    tone: "green",
  },
  {
    title: "GIS and Hydrology Associate",
    tags: ["Technical", "Full-time", "Gurugram", "2–4 Years"],
    blurb:
      "Strengthen GuruJal's technical and knowledge ecosystem by combining geospatial intelligence, research and documentation to support high-impact water and climate initiatives.",
    jd: "/uploads/2024/08/GIS-and-Hydrology-Associate.pdf",
    tone: "orange",
  },
  {
    title: "Civil and Structural Design Engineer Intern",
    tags: ["Internship", "Gurugram", "Diploma / B.Tech / M.Tech"],
    blurb:
      "Support real-time projects focused on water conservation, ecosystem restoration and infrastructure development — with hands-on exposure to engineering practices and meaningful environmental impact.",
    jd: "/uploads/2024/08/Civil-and-Structural-Design-Engineer-Intern.pdf",
    tone: "teal",
  },
  {
    title: "Architect Intern",
    tags: ["Internship", "Gurugram", "B.Arch / M.Arch"],
    blurb:
      "Contribute to designing sustainable and water-sensitive infrastructure that integrates ecology with built environments — supporting climate-resilient, community-focused solutions for long-term impact.",
    jd: "/uploads/2024/08/Architect-Intern.pdf",
    tone: "green",
  },
];

const toneTag: Record<Tone, string> = {
  teal: "bg-brand-teal/10 text-brand-teal-dark",
  green: "bg-brand-green/10 text-brand-green-dark",
  orange: "bg-brand-orange/10 text-brand-orange-dark",
};

function PdfIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
    </svg>
  );
}

function Arrow() {
  return (
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
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function OpenPositions() {
  return (
    <section id="positions" className="bg-brand-mist scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Open Roles
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Find your seat at the table
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            All open positions are based in Gurugram. Click any role to
            view the full job description, then apply through the linked
            form.
          </p>
        </div>

        <ul className="mx-auto mt-12 grid max-w-5xl gap-5">
          {positions.map((p) => (
            <li
              key={p.title}
              className="flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-soft/80 transition hover:shadow-md sm:p-8 lg:flex-row lg:items-start lg:justify-between"
            >
              <div className="flex-1">
                <ul className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <li
                      key={t}
                      className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${toneTag[p.tone]}`}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-4 text-xl font-semibold text-brand-ink sm:text-2xl">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted sm:text-base">
                  {p.blurb}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 lg:shrink-0 lg:flex-col lg:items-stretch">
                <a
                  href={p.jd}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-soft bg-white px-5 py-2.5 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
                >
                  <PdfIcon />
                  View JD
                </a>
                <a
                  href={APPLY_FORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
                >
                  Apply
                  <Arrow />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
