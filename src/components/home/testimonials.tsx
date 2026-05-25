"use client";

import { useState } from "react";

const testimonials = [
  {
    quote:
      "Working with GuruJal has reaffirmed our belief in the power of community-driven change. Their ability to integrate scientific research with local realities is truly commendable. During the study of 'The Green Wall of Aravalli: A Roadmap for Ecological Restoration', we witnessed how GuruJal led a multi-disciplinary effort — bringing together over 20 experts to assess the 5000-acre Aravalli landscape around Damdama Lake.",
    name: "Ashish Srivastava",
    role: "Associate Director",
    org: "EY Foundation (India)",
  },
  {
    quote:
      "Working with the GuruJal team on many initiatives is truly inspiring. We admire and respect their collective effort and resolve towards conserving water and making greener surroundings.",
    name: "Shalu Johar Sahni",
    role: "President",
    org: "Pure Hearts (A Children's Initiative)",
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
      "Suntory Global Spirits India extends its gratitude to GuruJal Management for the timely completion of the pond rejuvenation project in Bhokarka village of Haryana. The execution reflects your team's expertise, discipline, and dedication to sustainable environmental outcomes.",
    name: "Sumit Dhiman",
    role: "Corporate Communications Specialist – India",
    org: "Suntory Global Spirits",
  },
];

export function Testimonials() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-primary">
            Voices
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            What our partners say
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <blockquote className="relative rounded-3xl bg-brand-mist p-8 sm:p-12">
            <svg
              className="absolute -top-4 left-8 h-12 w-12 text-brand-accent"
              viewBox="0 0 32 32"
              aria-hidden
            >
              <path
                fill="currentColor"
                d="M9.352 4C4.456 7.456 1 13.12 1 19.36 1 24.832 4.32 28 8.32 28c3.776 0 6.464-3.04 6.464-6.624 0-3.584-2.496-6.208-5.696-6.208-.704 0-1.6.16-1.824.224.512-3.488 3.808-7.616 7.072-9.664L9.352 4zm16.512 0c-4.832 3.456-8.288 9.12-8.288 15.36 0 5.472 3.328 8.64 7.328 8.64 3.712 0 6.464-3.04 6.464-6.624 0-3.584-2.56-6.208-5.76-6.208-.704 0-1.536.16-1.76.224.512-3.488 3.744-7.616 7.008-9.664L25.864 4z"
              />
            </svg>
            <p className="text-lg leading-relaxed text-brand-ink sm:text-xl">
              {testimonials[idx].quote}
            </p>
            <footer className="mt-8 border-t border-brand-soft pt-6">
              <div className="font-semibold text-brand-ink">
                {testimonials[idx].name}
              </div>
              <div className="text-sm text-brand-muted">
                {testimonials[idx].role} · {testimonials[idx].org}
              </div>
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-soft text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIdx(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === idx ? "w-6 bg-brand-orange" : "w-2 bg-brand-soft"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-soft text-brand-primary transition hover:bg-brand-primary hover:text-white"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
