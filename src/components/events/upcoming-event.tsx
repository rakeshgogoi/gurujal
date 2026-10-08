import Image from "next/image";

/**
 * Upcoming Events — Urban Adda 26 feature card.
 *
 * Full-width two-column layout: poster on the left, event details on
 * the right. Content is intentionally minimal — the fuller programme
 * is still being finalised, so the card sits on a "Save the date"
 * beat with the concept note and partner credits.
 */
export function UpcomingEvent() {
  return (
    <section id="upcoming" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Upcoming events
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Save the date
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            One convening on the horizon — with more programming to be
            announced as details are finalised.
          </p>
        </div>

        <div className="mt-12">
          <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-brand-soft/80 lg:grid lg:grid-cols-12">
            {/* Poster */}
            <div className="relative aspect-[4/5] w-full bg-brand-soft/40 lg:col-span-5 lg:aspect-auto">
              <Image
                src="/uploads/2026/07/urban-adda-2026.jpg"
                alt="Urban Adda 26 — Save the Date poster"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Details */}
            <div className="flex flex-col gap-6 p-8 sm:p-10 lg:col-span-7 lg:p-12">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange-dark ring-1 ring-brand-orange/30">
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand-orange"
                  />
                  Save the date
                </span>
                <span className="inline-flex items-center rounded-full bg-brand-teal/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-teal-dark ring-1 ring-brand-teal/30">
                  Dialogue
                </span>
              </div>

              <div>
                <h3 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
                  Urban Adda 26
                </h3>
                <p className="mt-2 text-base font-medium italic text-brand-accent-dark sm:text-lg">
                  “One Adda for Change”
                </p>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal-dark"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                      When
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-brand-ink">
                      5–7 October 2026
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-dark"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  <div>
                    <dt className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                      Where
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-brand-ink">
                      India Habitat Centre, New Delhi
                    </dd>
                  </div>
                </div>
              </dl>

              <p className="text-base leading-relaxed text-brand-muted">
                Urban Adda is back — a vibrant platform where doers,
                thinkers, policymakers, artists, youth, and communities
                come together to reimagine the future of our cities
                through dialogue, collaboration, and innovation.
              </p>

              <div className="rounded-2xl bg-brand-mist p-5 ring-1 ring-brand-soft/80">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-muted">
                  Partners
                </p>
                <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-brand-ink">
                  <li>
                    <span className="font-semibold">Co-hosted by</span>{" "}
                    GuruJal &amp; ICCT India
                  </li>
                  <li>
                    <span className="font-semibold">Lead organiser</span>{" "}
                    Raahgiri Foundation
                  </li>
                  <li>
                    <span className="font-semibold">Supported by</span>{" "}
                    Nagarro
                  </li>
                  <li>
                    <span className="font-semibold">In collaboration with</span>{" "}
                    Walk21 Foundation, Walk21 Regional Dialogues, Walking
                    Cities Lab &amp; VREF
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.urbanadda.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
                >
                  Details &amp; Tickets
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
                </a>
                <p className="text-sm italic text-brand-muted">
                  Full programme and speakers to be announced.
                </p>
              </div>
            </div>
          </article>

          {/* Sessions within Urban Adda 26 */}
          <div className="mt-12">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Sessions at Urban Adda 26
            </p>
            <div className="mx-auto mt-6 max-w-5xl space-y-8">
              {SESSIONS.map((session) => (
                <SessionCard key={session.title} session={session} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type Session = {
  title: string;
  subtitle: string;
  tags: string[];
  when: string;
  intro: string;
  /** Optional bold lead-in before the text, e.g. "Siting & Water Risk". */
  bullets: { lead?: string; text: string }[];
  outro?: string;
  poster: string;
  posterAlt: string;
  ctaLabel: string;
  ctaHref: string;
};

/** Sessions run in date order. */
const SESSIONS: Session[] = [
  {
    title: "Data Centers & Water",
    subtitle: "People, Policy and Planning",
    tags: ["Session", "Conversation"],
    when: "Tuesday, 6 October 2026 · 12:00 – 1:00 PM · India Habitat Centre, New Delhi",
    intro:
      "As India's digital infrastructure grows, how do we scale data centers without putting additional pressure on local water resources? The Alliance for Responsible Data Centers and GuruJal host a focused conversation on balancing digital growth with water security, exploring three questions:",
    bullets: [
      {
        lead: "Siting & water risk",
        text: "How should basin stress, water availability and local demand influence where data centers are built?",
      },
      {
        lead: "Cooling & resource trade-offs",
        text: "How can we balance water and energy use across different cooling technologies?",
      },
      {
        lead: "Measurement & disclosure",
        text: "What should credible water-use reporting capture — from consumption and sources to reuse and local impact?",
      },
    ],
    outro:
      "Bringing together industry, utilities, regulators, investors and communities to ask what responsible data-center growth should look like in a water-stressed future.",
    poster: "/uploads/2026/10/data-centers-water-poster.jpg",
    posterAlt:
      "Data Centers & Water: People, Policy and Planning — Urban Adda 26 session poster",
    ctaLabel: "RSVP for the session",
    ctaHref: "https://luma.com/ir4jl3li",
  },
  {
    title: "Water Citizens' Council",
    subtitle: "Delhi-NCR Chapter · Be a Voice for Water",
    tags: ["Session", "Expression of interest"],
    when: "7 October 2026 · 11:30 AM – 1:00 PM · NIUA Office, India Habitat Centre, New Delhi",
    intro:
      "GuruJal, in collaboration with the National Institute of Urban Affairs (NIUA), is bringing together passionate citizens — active citizens, educators, researchers, media professionals, environmental practitioners, influencers and changemakers — who can contribute their knowledge, voice, network, ideas or time for at least 10 days in a year towards:",
    bullets: [
      { text: "Water security & conservation" },
      { text: "Stronger citizen participation" },
      { text: "Knowledge and experience sharing" },
      { text: "Community-led action" },
      { text: "Better water governance in Delhi-NCR" },
    ],
    poster: "/uploads/2026/10/water-citizens-council-poster.jpg",
    posterAlt:
      "Water Citizens' Council, Delhi-NCR Chapter — Expression of Interest poster",
    ctaLabel: "Express your interest",
    ctaHref: "https://luma.com/0c8jn3c1",
  },
];

function SessionCard({ session: s }: { session: Session }) {
  const hasLeads = s.bullets.some((b) => b.lead);
  return (
    <article className="overflow-hidden rounded-3xl bg-brand-mist ring-1 ring-brand-soft/80 md:grid md:grid-cols-12 md:items-center">
      <div className="relative aspect-[4/5] w-full bg-brand-soft/40 md:col-span-4">
        <Image
          src={s.poster}
          alt={s.posterAlt}
          fill
          sizes="(min-width: 768px) 340px, 90vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-5 p-7 sm:p-9 md:col-span-8">
        <div className="flex flex-wrap items-center gap-2">
          {s.tags.map((t, i) => (
            <span
              key={t}
              className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider ring-1 ${
                i === 0
                  ? "bg-brand-orange/15 text-brand-orange-dark ring-brand-orange/30"
                  : "bg-brand-teal/15 text-brand-teal-dark ring-brand-teal/30"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
            {s.title}
          </h3>
          <p className="mt-1 text-sm font-bold uppercase tracking-[0.14em] text-brand-teal-dark">
            {s.subtitle}
          </p>
        </div>

        <p className="text-sm font-semibold text-brand-ink sm:text-base">
          {s.when}
        </p>

        <p className="text-base leading-relaxed text-brand-muted">{s.intro}</p>

        <ul className={hasLeads ? "space-y-2.5 text-sm text-brand-ink" : "grid gap-2 text-sm text-brand-ink sm:grid-cols-2"}>
          {s.bullets.map((b) => (
            <li key={b.text} className="flex gap-2.5">
              <span
                aria-hidden
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
              />
              <span>
                {b.lead && <strong className="font-semibold">{b.lead} — </strong>}
                {b.text}
              </span>
            </li>
          ))}
        </ul>

        {s.outro && (
          <p className="text-sm leading-relaxed text-brand-muted">{s.outro}</p>
        )}

        <div>
          <a
            href={s.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-orange-dark"
          >
            {s.ctaLabel}
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
          </a>
        </div>
      </div>
    </article>
  );
}
