import Image from "next/image";
import Link from "next/link";

const events = [
  {
    title: "HydroMingle 2025",
    blurb:
      "An annual gathering of water professionals, policymakers, and corporates to share progress and forge collaboration on India's water mission.",
    image: "/uploads/2024/08/hydromingle2025.jpg",
    href: "/hydromingle-event",
  },
  {
    title: "Roots & Recharge Symposium",
    blurb:
      "Bringing together experts in soil restoration, hydrology, and forest revival to chart the path for climate-resilient landscapes.",
    image: "/uploads/2024/08/Roots-recharge-symposium-2025.jpg",
    href: "/roots-and-recharge-symposium",
  },
  {
    title: "Real Nature in Restored Landscapes",
    blurb:
      "A field event showcasing on-ground impact across our restored ponds, recharge zones, and reforested areas.",
    image: "/uploads/2024/08/real-nature-event.jpeg",
    href: "/events",
  },
];

export function UpcomingEvents() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-orange">
              What's happening
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-brand-primary hover:text-brand-orange sm:inline-flex"
          >
            See all events
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e) => (
            <Link
              key={e.href + e.title}
              href={e.href}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-brand-mist shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={e.image}
                  alt={e.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/55 via-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-brand-ink group-hover:text-brand-primary">
                  {e.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-muted">
                  {e.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  Know more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition group-hover:translate-x-0.5" aria-hidden>
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
