/**
 * "Why GuruJal" — Work With Purpose narrative + benefit cards.
 *
 * Pairs the live site's prose ("growth is mutual…") with a 4-card grid
 * of softer perks (purpose, mentorship, impact, learning) so the
 * page has more visual weight than the WP version.
 */

type Tone = "teal" | "green" | "orange";

const benefits: { eyebrow: string; title: string; body: string; tone: Tone; icon: React.ReactNode }[] = [
  {
    eyebrow: "Mission-Driven",
    title: "Purposeful Work",
    body: "Every role is tied to measurable outcomes — pond rejuvenation, groundwater recharge, restored ecosystems and community resilience.",
    tone: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.32 0z" />
      </svg>
    ),
  },
  {
    eyebrow: "Peers & Mentors",
    title: "Learn From the Best",
    body: "Work alongside policymakers, scientists and senior practitioners. Mentorship is part of the job — not a separate programme.",
    tone: "green",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    eyebrow: "End-to-end Ownership",
    title: "Real Impact, Quickly",
    body: "From a project brief to a restored pond, your work moves communities. We trust juniors with end-to-end ownership early.",
    tone: "orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="8 12 12 16 16 12" />
        <line x1="12" y1="8" x2="12" y2="16" />
      </svg>
    ),
  },
  {
    eyebrow: "Cross-Disciplinary",
    title: "Engineering, Ecology & Policy",
    body: "Civil engineering, hydrology, GIS, biodiversity, governance — our work straddles disciplines, and so does the team.",
    tone: "teal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

const toneAccent: Record<Tone, string> = {
  teal: "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30",
  green: "bg-brand-green/15 text-brand-green-dark ring-brand-green/30",
  orange: "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30",
};

export function WhyGrow() {
  return (
    <section id="why" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Work with purpose
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Growth is mutual at GuruJal
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            We look for people ready to lead the sector and grow with a
            dedicated team of peers and mentors. Join us in driving
            evidence-based change through water conservation, community
            engagement, nature-based solutions and technological
            innovation.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <li
              key={b.eyebrow}
              className="flex flex-col rounded-3xl bg-white p-7 shadow-sm ring-1 ring-brand-soft/80 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ring-1 ${toneAccent[b.tone]}`}
              >
                <span className="h-6 w-6">{b.icon}</span>
              </span>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-muted">
                {b.eyebrow}
              </p>
              <h3 className="mt-1 text-lg font-semibold leading-snug text-brand-ink">
                {b.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {b.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
