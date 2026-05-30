import Image from "next/image";

/**
 * Contact hero — "We'd love to hear from you!".
 *
 * Same visual language as the other composed page heroes.
 */
export function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2025/06/boat1.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover [filter:brightness(0.5)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/50 via-brand-deep/35 to-brand-deep/55" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -bottom-32 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
          Get in touch
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          We&apos;d love to{" "}
          <em className="not-italic text-brand-teal-bright">hear</em> from you!
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
          At GuruJal we&apos;re always open to ideas, collaborations and
          conversations that help advance sustainable water management.
          Whether you&apos;re a citizen, researcher, policymaker or
          corporate partner, your engagement matters.
        </p>
      </div>
    </section>
  );
}
