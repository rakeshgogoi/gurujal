"use client";

import { useEffect, useState } from "react";

/**
 * "Recognizing the Impact" — compact 2-column layout.
 *
 *  - LEFT: one large featured testimonial that stays put
 *  - RIGHT: two smaller cards that auto-rotate through the remaining
 *    quotes (4 of them cycle through 2 visible slots, advancing every
 *    5.5 seconds with a soft fade).
 *
 * All quote text is verbatim from gurujal.org's testimonials section.
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

const rotating: Testimonial[] = [
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

const ROTATE_MS = 5500;

export function Testimonials() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 2) % rotating.length);
    }, ROTATE_MS);
    return () => clearInterval(t);
  }, []);

  const slotA = rotating[idx % rotating.length];
  const slotB = rotating[(idx + 1) % rotating.length];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
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

        {/* 2-column: featured (left) + rotator (right). Both columns are
            the same height on lg via items-stretch + grid-rows-1. */}
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          {/* Featured */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-deep p-7 text-white shadow-xl shadow-black/10 sm:p-9">
            <QuoteMark className="absolute -right-6 -top-6 h-28 w-28 text-brand-teal-bright/30" />
            <p className="relative text-base leading-relaxed text-white/95 sm:text-lg">
              {featured.quote}
            </p>
            <footer className="relative mt-6 border-t border-white/15 pt-4">
              <div className="text-base font-semibold text-white">
                {featured.name}
              </div>
              <div className="mt-1 text-sm text-white/75">
                {featured.role} ·{" "}
                <span className="text-brand-teal-bright">{featured.org}</span>
              </div>
            </footer>
          </article>

          {/* Rotator — 2 slots */}
          <div className="flex flex-col gap-5">
            <RotatingCard t={slotA} keyId={`a-${idx}`} />
            <RotatingCard t={slotB} keyId={`b-${idx}`} />

            {/* Pagination dots */}
            <div className="mt-1 flex items-center justify-center gap-1.5">
              {rotating.map((_, i) => {
                const active =
                  i === idx % rotating.length ||
                  i === (idx + 1) % rotating.length;
                return (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Show testimonial pair starting ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      active ? "w-6 bg-brand-orange" : "w-1.5 bg-brand-soft"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Card in the rotator. `keyId` is used as React key on the wrapper so
 * the element remounts each rotation and the fade-in animation replays.
 */
function RotatingCard({ t, keyId }: { t: Testimonial; keyId: string }) {
  return (
    <article
      key={keyId}
      className="gj-headline-enter relative flex flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-brand-mist p-6 ring-1 ring-brand-soft/60"
    >
      <QuoteMark className="mb-2 h-6 w-6 text-brand-teal" />
      <p className="line-clamp-4 text-sm leading-relaxed text-brand-ink/85 sm:text-[15px]">
        {t.quote}
      </p>
      <footer className="mt-4 border-t border-brand-soft pt-3">
        <div className="text-sm font-semibold text-brand-ink">{t.name}</div>
        <div className="mt-0.5 text-xs leading-snug text-brand-muted">
          {t.role} · <span className="text-brand-primary">{t.org}</span>
        </div>
      </footer>
    </article>
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
