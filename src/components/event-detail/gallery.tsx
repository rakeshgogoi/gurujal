import Image from "next/image";

/**
 * Event gallery — image grid with optional "view all" link.
 *
 * Uses a 4-column masonry-ish grid on lg, 3 on sm, 2 on mobile. Each
 * tile clips a 4:3 thumbnail and zooms slightly on hover.
 */

export function EventGallery({
  eyebrow,
  heading,
  photos,
  viewAllHref,
}: {
  eyebrow: string;
  heading: React.ReactNode;
  photos: { src: string; alt: string }[];
  viewAllHref?: string;
}) {
  return (
    <section id="gallery" className="bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-teal">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
            {heading}
          </h2>
        </div>

        <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {photos.map((p, i) => (
            <li
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-soft/60 ring-1 ring-brand-soft/70"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </li>
          ))}
        </ul>

        {viewAllHref && (
          <div className="mt-10 text-center">
            <a
              href={viewAllHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-soft bg-white px-6 py-3 text-sm font-semibold text-brand-primary transition hover:border-brand-accent hover:text-brand-accent-dark"
            >
              View all photos
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
          </div>
        )}
      </div>
    </section>
  );
}
