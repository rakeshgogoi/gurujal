"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

/**
 * Gallery grid with a click-to-zoom lightbox.
 *
 *   - Each thumbnail is a <button> so it's keyboard-focusable.
 *   - Clicking opens a fixed-position modal that fades in.
 *   - Backdrop click or × button or Escape key closes.
 *   - Left / right keys and on-screen arrows navigate between photos.
 *   - Body scroll is locked while the modal is open so the page
 *     doesn't shift behind the overlay.
 */
export function GalleryGrid({
  photos,
}: {
  photos: { src: string; alt: string }[];
}) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const isOpen = openIdx !== null;

  const close = useCallback(() => setOpenIdx(null), []);
  const next = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i + 1) % photos.length
      ),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setOpenIdx((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  // Keyboard nav (Esc / ← / →) when the modal is open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, close, next, prev]);

  // Lock body scroll so the page underneath doesn't move.
  useEffect(() => {
    if (!isOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpen]);

  return (
    <>
      <ul className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p, i) => (
          <li
            key={i}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-brand-soft/60 ring-1 ring-brand-soft/70"
          >
            <button
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Open photo ${i + 1} of ${photos.length}${p.alt ? `: ${p.alt}` : ""}`}
              className="absolute inset-0 cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent"
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 280px, (min-width: 640px) 30vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {isOpen && openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur sm:p-8 animate-fade-up"
        >
          {/* Image — stopPropagation so a click on the photo itself
              doesn't close the modal; that only triggers from the
              backdrop or the explicit close button. */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-full max-w-full flex-col items-center"
          >
            <Image
              src={photos[openIdx].src}
              alt={photos[openIdx].alt}
              width={1600}
              height={1200}
              sizes="100vw"
              priority
              className="block max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            {photos[openIdx].alt && (
              <p className="mt-3 max-w-2xl text-center text-sm text-white/85 sm:text-base">
                {photos[openIdx].alt}
              </p>
            )}
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={close}
            aria-label="Close photo viewer"
            className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev / next — hidden when there's only one photo. */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-brand-deep"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>

              {/* Counter */}
              <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur">
                {openIdx + 1} / {photos.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
