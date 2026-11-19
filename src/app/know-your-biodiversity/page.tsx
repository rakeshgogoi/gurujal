import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BirdExplorer } from "@/components/biodiversity/bird-explorer";
import { birds } from "@/lib/birds";

export const metadata: Metadata = {
  title: "Know Your Biodiversity — Birds of the Aravallis",
  description:
    "Discover the birds that make the Aravallis a living ecosystem. Tap any species to learn about its looks, behaviour and adaptivity, and listen to its call.",
};

/** /know-your-biodiversity — a GuruJal tool: bird flashcards with calls. */
export default function KnowYourBiodiversityPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-deep">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <Image
            src="/uploads/2026/10/mankrola-bio-hoopoe.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/85 via-brand-deep/55 to-brand-deep/85 lg:hidden" />
          <div className="absolute inset-0 hidden bg-gradient-to-r from-brand-deep/90 via-brand-deep/60 to-transparent lg:block" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-brand-teal/25 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-teal-bright sm:text-sm">
              <Link href="/reports-and-publications#tools" className="hover:underline">
                Tools
              </Link>
            </p>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Know your{" "}
              <em className="not-italic text-brand-teal-bright">bio</em>
              <em className="not-italic text-brand-green">diversity</em>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg lg:text-xl">
              Discover the birds that make the Aravallis a living ecosystem.
              Tap any species to learn about it, and listen to the birds&rsquo;
              calls.
            </p>
            <a
              href="#birds"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-deep transition hover:bg-brand-mist"
            >
              Meet the birds
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
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="birds" className="bg-brand-mist scroll-mt-20">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
              Birds
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Common birds of the Aravallis
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
              Each flashcard covers what the bird looks like, how it behaves,
              how it has adapted to life around people &mdash; and what it
              sounds like.
            </p>
          </div>

          <BirdExplorer birds={birds} />
        </div>
      </section>
    </>
  );
}
