import Image from "next/image";

/**
 * SDG Alignment — intro paragraph + horizontal SDG icon strip.
 *
 * Mirrors the live gurujal.org block that frames the work as aligned with
 * national and international policy and shows the UN Sustainable
 * Development Goal icons relevant to water and climate.
 */
export function SdgAlignment() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Aligned with global goals
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            Lasting impact, in line with national and international policy
          </h2>
          <p className="mt-5 text-base leading-relaxed text-brand-muted sm:text-lg">
            We enable government bodies, brands, experts and communities to
            trust each other, and come together to create lasting impact in
            line with national and international policy. We also harness
            digital tools to enhance accountability, streamline governance,
            and equip stakeholders with actionable insights.
          </p>
        </div>

        <div className="mt-12">
          <Image
            src="/uploads/2024/08/sdg_rearranged.jpg"
            alt="UN Sustainable Development Goals aligned with GuruJal's work"
            width={1536}
            height={638}
            sizes="(min-width: 1024px) 1024px, 100vw"
            className="mx-auto h-auto w-full max-w-5xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
