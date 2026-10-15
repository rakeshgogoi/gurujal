/**
 * Upcoming Events — currently empty.
 *
 * Kept as its own section (id="upcoming") so the Events page nav anchor
 * keeps working. When a new event is announced, replace the message with
 * its feature card (the Urban Adda 26 card, with poster, partners and
 * session cards, lives in git history as a ready-made layout).
 */
export function UpcomingEvent() {
  return (
    <section id="upcoming" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            Upcoming events
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            No upcoming events
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            There are no events scheduled right now. Check back soon, or
            browse our past events below.
          </p>
        </div>
      </div>
    </section>
  );
}
