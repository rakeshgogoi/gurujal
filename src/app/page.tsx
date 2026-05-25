import Link from "next/link";

const initiatives = [
  {
    title: "Support a Pond",
    href: "/support-a-pond",
    blurb:
      "Adopt and revive a pond. Ponds are nature's water banks — restoring them recharges groundwater and revives village ecosystems.",
  },
  {
    title: "Connect the Drops",
    href: "/connect-the-drops",
    blurb:
      "A grassroots movement linking communities, schools, and corporations behind a shared water mission.",
  },
  {
    title: "Water Proofing",
    href: "/water-proofing",
    blurb:
      "Helping institutions and residential communities become water-secure through audits and rainwater harvesting.",
  },
  {
    title: "Eco Restoration",
    href: "/eco-restoration",
    blurb:
      "Restoring degraded landscapes — soils, forests, and water bodies — back to ecological health.",
  },
  {
    title: "ESG Advisory",
    href: "/esg-advisory",
    blurb:
      "Partnering with corporates on water-positive ESG programs that create measurable environmental impact.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-mist via-white to-brand-soft">
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:radial-gradient(circle_at_20%_30%,rgba(51,191,226,0.18),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(26,84,104,0.12),transparent_55%)]" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
              Water is life
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
              Reviving India's ponds, recharging its future.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
              GuruJal is a water conservation initiative working on pond
              rejuvenation, eco-restoration, and water stewardship — a
              partnership of communities, government, and corporates.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/support-a-pond"
                className="inline-flex items-center rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-primary-dark"
              >
                Support a Pond
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-full border border-brand-primary/20 bg-white/70 px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-primary hover:bg-white"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-brand-soft bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
          <Stat value="200+" label="Ponds revived" />
          <Stat value="50+" label="Villages reached" />
          <Stat value="100M+" label="Litres harvested" />
          <Stat value="10+" label="Partner corporates" />
        </div>
      </section>

      {/* Initiatives */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Our Initiatives
          </h2>
          <p className="mt-4 text-base text-brand-muted">
            Five focused programs working across rural and urban India to build
            water security.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="group relative flex flex-col rounded-2xl border border-brand-soft bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-accent hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-brand-ink group-hover:text-brand-primary">
                {i.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                {i.blurb}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-primary text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Partner with us
            </h2>
            <p className="mt-2 max-w-xl text-white/85">
              Whether you're a corporate looking for measurable ESG impact or a
              community wanting to revive a local water body, we'd love to talk.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:bg-brand-soft"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl font-semibold tracking-tight text-brand-primary sm:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-brand-muted">{label}</div>
    </div>
  );
}
