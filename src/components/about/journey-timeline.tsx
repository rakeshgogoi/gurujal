/**
 * Our Journey — vertical milestone timeline mirroring the live site's
 * year-by-year story from SPV (2019) to pan-India scale (2025).
 *
 * Each entry shows the year + month, a one-line headline, and a list of
 * milestones. The center spine dot is tinted by the entry's tone.
 */

type Tone = "teal" | "green" | "orange";

const milestones: {
  date: string;
  year: string;
  headline: string;
  tone: Tone;
  items: string[];
}[] = [
  {
    date: "01 January 2019",
    year: "2019",
    headline: "Built water governance from inside the system",
    tone: "teal",
    items: [
      "Created a Special Purpose Vehicle (SPV) sponsored by Hero MotoCorp and Raman Kant Munjal Foundation for District Administration Gurugram.",
      "Launched the Jal Shakti Abhiyan in Gurugram in alignment with the newly created Ministry of Jal Shakti's nation-wide campaign.",
      "Sealed 200+ borewells and set up the Water Complaint Call Centre in the district.",
      "Recognised for best efforts by the newly formed Jal Shakti Ministry.",
    ],
  },
  {
    date: "04 May 2020",
    year: "2020",
    headline: "Piloted technology to revive ponds at scale",
    tone: "green",
    items: [
      "Piloted 7 new wastewater treatment technologies across different ponds in Gurugram District.",
      "Developed 80+ proposals for pond rejuvenation with the Municipal Corporations of Gurugram and Faridabad.",
      "Complimented by NITI Aayog for the improved groundwater table.",
    ],
  },
  {
    date: "01 June 2022",
    year: "2022",
    headline: "Codified what works into SOPs the country can use",
    tone: "orange",
    items: [
      "Our projects were recognised for their innovation by Columbia University.",
      "Built multiple SOPs to scale impact.",
      "Began impact documentation and creating reusable SOPs.",
    ],
  },
  {
    date: "05 July 2023",
    year: "2023",
    headline: "Became autonomous and went pan-India",
    tone: "teal",
    items: [
      "Transitioned out of the SPV structure and became autonomous.",
      "Started working on projects in the Sundarbans and Visakhapatnam.",
    ],
  },
  {
    date: "22 July 2024",
    year: "2024",
    headline: "Invested in the next generation of water leaders",
    tone: "green",
    items: [
      "Initiated the WeForWater Fellowship.",
      "Strengthened implementation and field resources.",
    ],
  },
  {
    date: "01 January 2025",
    year: "2025",
    headline: "Scaling depth, scaling reach",
    tone: "orange",
    items: [
      "Reaching 5 cities pan-India with innovative, context-specific projects that raise groundwater tables.",
      "Building technology for transparent governance and large-scale impact.",
      "Creating tools, partnerships and collaboration for scale and depth.",
    ],
  },
];

const toneDot: Record<Tone, string> = {
  teal: "bg-brand-teal ring-brand-teal/30",
  green: "bg-brand-green ring-brand-green/30",
  orange: "bg-brand-orange ring-brand-orange/30",
};
const toneYear: Record<Tone, string> = {
  teal: "text-brand-teal-dark",
  green: "text-brand-green-dark",
  orange: "text-brand-orange-dark",
};

export function JourneyTimeline() {
  return (
    <section id="our-journey" className="relative bg-brand-mist scroll-mt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-32 h-72 w-72 rounded-full bg-brand-teal/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-32 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Our Journey
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            We are the bridge between policy and people
          </h2>
          <div className="mt-6 space-y-4 text-left text-base leading-relaxed text-brand-muted sm:text-lg">
            <p>
              Our story began as a Special Purpose Vehicle for the District
              Government of Gurugram, tasked with improving water governance.
              Embedded within the system, we gained a deep understanding of
              policies and worked tirelessly to address gaps in implementation.
            </p>
            <p>
              We soon realised that water management demands more than
              governance — it requires a holistic approach. True change happens
              when communities, experts, corporations and government bodies
              come together to build solutions from the ground up. This
              realisation led us to become autonomous in 2023, with a renewed
              focus on transparent governance, community-driven programs and
              integrated solutions for multiple geographies.
            </p>
            <p>
              Today we are deploying innovative methods to restore groundwater
              and scaling our solutions across the country. What began as a
              single drop is now a river of purpose, flowing with the resolve
              to make India water-secure.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <ol className="relative mx-auto mt-16 max-w-4xl">
          {/* Vertical spine */}
          <span
            aria-hidden
            className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-teal/60 via-brand-soft to-brand-orange/60 sm:left-1/2 sm:-translate-x-1/2"
          />

          {milestones.map((m, i) => {
            const alignRight = i % 2 === 0; // alternating sides on sm+
            return (
              <li
                key={m.date}
                className={`relative mb-12 grid grid-cols-[2rem_1fr] gap-4 sm:grid-cols-2 sm:gap-8 ${
                  alignRight ? "" : "sm:[direction:rtl]"
                }`}
              >
                {/* Dot on the spine */}
                <span
                  aria-hidden
                  className={`absolute left-4 top-2 -translate-x-1/2 sm:left-1/2 inline-block h-4 w-4 rounded-full ring-4 ${toneDot[m.tone]}`}
                />

                {/* Spacer on the empty side */}
                <div className="hidden sm:block" />

                {/* Card */}
                <div
                  className={`col-span-1 col-start-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-0.5 hover:shadow-md sm:col-start-auto sm:[direction:ltr] ${
                    alignRight ? "sm:col-start-2" : "sm:col-start-1"
                  }`}
                >
                  <p
                    className={`text-xs font-semibold uppercase tracking-[0.18em] ${toneYear[m.tone]}`}
                  >
                    {m.date}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-ink">
                    {m.headline}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-brand-muted">
                    {m.items.map((it) => (
                      <li key={it} className="flex gap-2">
                        <span
                          aria-hidden
                          className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${toneDot[m.tone].split(" ")[0]}`}
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
