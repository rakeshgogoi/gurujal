import Link from "next/link";

/**
 * Intro section explaining India's water crisis.
 * Two-column: copy on left, highlighted stat on right.
 */
export function WaterCrisisIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            The Crisis
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
            The time to Act is Now
          </h2>
        </div>
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-brand-ink/90 sm:text-xl">
              Water scarcity is no longer a distant threat — it's a reality
              affecting millions across India. Over half of the population faces
              high water stress, and by 2030, 21 major cities including Delhi,
              Bengaluru and Chennai, could run dry.
            </p>
            <p className="mt-6 text-base leading-relaxed text-brand-muted">
              This crisis impacts agriculture, livelihoods, and health,
              perpetuating poverty and inequality. Yet, within this challenge
              lies an opportunity to unite stakeholders — communities,
              governments, experts, and corporations — to build a sustainable
              future together.
            </p>
            <div className="mt-10">
              <Link
                href="/support-a-pond"
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-brand-primary-dark"
              >
                Discover our Innovative Solutions
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-brand-soft via-brand-mist to-white p-8 ring-1 ring-brand-soft sm:p-10">
              <div className="text-[64px] font-bold leading-none tracking-tight text-brand-primary sm:text-[80px]">
                2×
              </div>
              <p className="mt-4 text-lg font-medium text-brand-ink">
                Overall demand is expected to exceed supply two-fold by 2030.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-brand-muted">
                <span className="inline-flex h-2 w-2 rounded-full bg-brand-orange" />
                <span>Source: NITI Aayog Composite Water Management Index</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
