/**
 * Vision & Mission — opens with the "Water is the heartbeat of civilization"
 * editorial lead, then the "India needs 35M green jobs by 2047" statement
 * with the strategies and the water-touches-everything chips.
 */

const strategies = [
  {
    title: "Sector-wide investment",
    body: "Channel public, private and philanthropic capital toward proven groundwater interventions.",
  },
  {
    title: "Capacity building",
    body: "Train and mentor the next generation of water professionals through fellowships and field work.",
  },
  {
    title: "Evidence-based action",
    body: "Produce empirical research and replicable SOPs that turn pilots into scalable national programs.",
  },
];

const touches = [
  { label: "Agriculture", emoji: "🌾" },
  { label: "Biodiversity", emoji: "🌿" },
  { label: "Weather systems", emoji: "🌧️" },
  { label: "Industries", emoji: "🏭" },
  { label: "Health & Wellness", emoji: "❤️" },
];

export function VisionMission() {
  return (
    <section id="vision-mission" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-28">
        {/* Editorial lead-in */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Vision & Mission
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Water is the heartbeat of civilization.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-brand-muted">
            It is the single most important resource that will determine the
            prosperity of cultures, economies, and the global future of
            humanity.
          </p>
        </div>

        {/* Green jobs feature block */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-br from-brand-mist via-white to-white p-8 ring-1 ring-brand-soft/80 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-green/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-teal/15 blur-3xl"
          />

          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange-dark">
                The Opportunity
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                India needs{" "}
                <span className="text-brand-green-dark">35 million</span>{" "}
                green jobs by{" "}
                <span className="text-brand-teal-dark">2047</span>
              </h3>
              <p className="mt-5 text-base leading-relaxed text-brand-muted">
                India faces a dual challenge of environmental sustainability
                and rapid economic growth. With a population projected to
                exceed 1.6 billion by 2047, the demand for employment will be
                immense — especially as traditional industries face
                disruption from automation and climate change.
              </p>
              <p className="mt-4 text-base leading-relaxed text-brand-muted">
                Green jobs offer a way to build economic resilience with
                environmental outcomes, empowering youth, enhancing rural
                livelihoods, and bridging the urban–rural development divide.
              </p>
            </div>

            <div className="lg:col-span-7">
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-brand-teal">
                Our key strategies
              </p>
              <ul className="grid gap-4 sm:grid-cols-1">
                {strategies.map((s, i) => (
                  <li
                    key={s.title}
                    className="flex gap-4 rounded-2xl bg-white p-5 ring-1 ring-brand-soft/70 transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-white">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-base font-semibold text-brand-ink">
                        {s.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                        {s.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* "Water touches everything" chips */}
        <div className="mx-auto mt-14 max-w-4xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Water touches everything
          </p>
          <h3 className="text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
            Every sector of the economy flows from a single source.
          </h3>
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {touches.map((t) => (
              <li
                key={t.label}
                className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-5 py-2.5 text-sm font-semibold text-brand-ink ring-1 ring-brand-soft transition hover:bg-brand-soft"
              >
                <span aria-hidden>{t.emoji}</span>
                {t.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
