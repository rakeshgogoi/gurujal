/**
 * "Recognizing the Impact" — testimonials wall.
 *
 * Editorial bento layout: one featured large quote spans 2 columns +
 * 2 rows, plus 4 smaller quote cards. All 5 quotes are visible at
 * once — no carousel, no auto-rotate.
 *
 * Quote text is verbatim from gurujal.org testimonials section.
 */

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  org: string;
};

const featured: Testimonial = {
  quote:
    "Working with GuruJal has reaffirmed our belief in the power of community-driven change. Their ability to integrate scientific research with local realities is truly commendable. During the study of 'The Green Wall of Aravalli: A Roadmap for Ecological Restoration', we witnessed how GuruJal led a multi-disciplinary effort — bringing together over 20 experts to assess the 5,000-acre Aravalli landscape around Damdama Lake across themes like biodiversity, hydrology, groundwater recharge, social challenges and cultural heritage.",
  name: "Ashish Srivastava",
  role: "Associate Director",
  org: "EY Foundation (India)",
};

const others: Testimonial[] = [
  {
    quote:
      "Suntory Global Spirits India extends its gratitude to GuruJal Management for the timely completion of the pond rejuvenation project in Bhokarka village of Haryana. The execution reflects your team's expertise, discipline, and dedication to sustainable environmental outcomes.",
    name: "Sumit Dhiman",
    role: "Corporate Communications Specialist – India",
    org: "Suntory Global Spirits",
  },
  {
    quote:
      "GuruJal has brought water conservation to the forefront by active engagement with various stakeholders in the Government as well as the community by way of knowledge sharing and demonstrating success stories.",
    name: "Jaspreet Kaur, IAS",
    role: "Additional Municipal Commissioner",
    org: "MCG",
  },
  {
    quote:
      "GuruJal has played an important role in making the public aware about how water is a critical asset and water management is essential in Gurugram district. I am happy to support and guide them in their endeavours.",
    name: "Sri. Prashant Panwar, IAS",
    role: "Additional Deputy Commissioner",
    org: "Gurugram",
  },
  {
    quote:
      "Working with the GuruJal team on many initiatives is truly inspiring. We admire and respect their collective effort and resolve towards conserving water and making greener surroundings.",
    name: "Shalu Johar Sahni",
    role: "President",
    org: "Pure Hearts (A Children's Initiative)",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Voices from the field
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Recognizing the Impact
          </h2>
          <p className="mt-3 text-base text-brand-muted">
            Testimonials from key leaders and partners.
          </p>
        </div>

        {/* Bento wall.
            On lg: featured tile spans 2 cols × 2 rows, others fill around.
            On md: 2 columns. On mobile: stacked. */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[1fr]">
          {/* Featured — large card with brand-deep background */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-deep p-8 text-white shadow-xl shadow-black/10 md:col-span-2 lg:row-span-2 lg:p-10">
            <div className="absolute -right-8 -top-8 opacity-30">
              <QuoteMark className="h-32 w-32 text-brand-teal-bright" />
            </div>
            <p className="relative text-lg leading-relaxed text-white/95 sm:text-xl">
              {featured.quote}
            </p>
            <footer className="relative mt-8 border-t border-white/15 pt-5">
              <div className="text-base font-semibold text-white">
                {featured.name}
              </div>
              <div className="mt-1 text-sm text-white/75">
                {featured.role} · <span className="text-brand-teal-bright">{featured.org}</span>
              </div>
            </footer>
          </article>

          {/* Smaller cards */}
          {others.map((t, i) => (
            <article
              key={t.name}
              className={`relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-mist p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                // Slight tonal variation across the 4 small cards
                i === 0 ? "lg:bg-gradient-to-br lg:from-brand-soft lg:to-brand-mist" : ""
              }`}
            >
              <QuoteMark className="mb-3 h-8 w-8 text-brand-teal" />
              <p className="flex-1 text-sm leading-relaxed text-brand-ink/85 sm:text-[15px]">
                {t.quote}
              </p>
              <footer className="mt-5 border-t border-brand-soft pt-4">
                <div className="text-sm font-semibold text-brand-ink">
                  {t.name}
                </div>
                <div className="mt-0.5 text-xs leading-snug text-brand-muted">
                  {t.role} · <span className="text-brand-primary">{t.org}</span>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.464-3.04 6.464-6.624 0-3.584-2.496-6.208-5.696-6.208-.704 0-1.6.16-1.824.224.512-3.488 3.808-7.616 7.072-9.664L9.352 4zm16.512 0c-4.832 3.456-8.288 9.12-8.288 15.36 0 5.472 3.328 8.64 7.328 8.64 3.712 0 6.464-3.04 6.464-6.624 0-3.584-2.56-6.208-5.76-6.208-.704 0-1.536.16-1.76.224.512-3.488 3.744-7.616 7.008-9.664L25.864 4z"
      />
    </svg>
  );
}
