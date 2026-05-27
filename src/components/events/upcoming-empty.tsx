import Link from "next/link";
import { liveUrl } from "@/lib/live-url";

/**
 * Upcoming Events — empty state.
 *
 * No upcoming convenings on the books right now (matching the live
 * site). When the next event lands this becomes a card with the
 * details; for now it points visitors to past events + a contact path.
 */
export function UpcomingEmpty() {
  return (
    <section id="upcoming" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Upcoming events
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            No upcoming events right now
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            We&apos;re busy planning our next convening. Check back soon,
            or explore our past events to see the conversations and
            collaborations we&apos;ve hosted.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#past"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-primary-dark"
            >
              Explore Past Events
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <Link
              href={liveUrl("/connect-the-drop")}
              className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
