import Image from "next/image";

/**
 * About hero — split layout with the section title + headline on the left
 * and a hero image on the right.
 *
 * The section-anchor nav is intentionally rendered as a sibling (see
 * AboutSectionNav) so it can use `position: sticky` — sticky positioning
 * doesn't work inside this section's `overflow-hidden` clip.
 *
 * Height budget: announcement bar (50) + sticky header (80) + section
 * nav (~60) = ~190px reserved above/below, so the hero band targets
 * 100vh − 190px to keep hero + sticky nav visible in one viewport on
 * first load.
 */

export function AboutHero() {
  return (
    <section
      className="relative isolate flex flex-col overflow-hidden bg-brand-deep min-h-[calc(100vh-190px)]"
    >
      {/* Aerial of a rejuvenated village pond ringed by homes and trees —
          a clear "water binds the community" image that fits the About
          page's bridge-between-policy-and-people framing. The overlay
          is anchored to the text column on desktop so the photo on the
          right reads in its natural colour. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/uploads/2024/08/DJI_0800.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Mobile / tablet: top-to-bottom gradient — the text wraps wide
            here so the photo can only breathe in the middle band. */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/45 to-brand-deep/85 lg:hidden" />
        {/* Desktop: gradient anchored to the left text column — the
            right half of the frame reveals the photo. */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep/90 via-brand-deep/55 to-transparent lg:block" />
      </div>

      {/* Soft brand glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-brand-orange/15 blur-3xl"
      />

      <div className="relative mx-auto flex w-full max-w-7xl flex-1 items-center px-6 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:mb-4 sm:text-sm">
              About GuruJal
            </p>
            <h1 className="text-3xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The Bridge Between{" "}
              <span className="text-brand-teal-bright">Policy</span> and{" "}
              <span className="text-brand-green">People</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:mt-6 sm:text-lg lg:text-xl">
              From a Special Purpose Vehicle for Gurugram District to an
              autonomous force for groundwater restoration — building a
              water-secure India, one community at a time.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
