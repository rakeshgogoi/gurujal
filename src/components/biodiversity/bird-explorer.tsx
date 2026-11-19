"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Bird } from "@/lib/birds";

/**
 * Bird explorer — a searchable grid of species cards. Tapping a card
 * opens a detail view (appearance, behaviour, adaptivity, call). Every
 * card has a play button for the bird's call; one shared <audio>
 * element is used so only one call ever plays at a time.
 */
export function BirdExplorer({ birds }: { birds: Bird[] }) {
  const [query, setQuery] = useState("");
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [playing, setPlaying] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const q = query.trim().toLowerCase();
  const shown = useMemo(
    () =>
      q
        ? birds.filter((b) =>
            `${b.name} ${b.scientific}`.toLowerCase().includes(q)
          )
        : birds,
    [birds, q]
  );

  const openIdx = openSlug ? birds.findIndex((b) => b.slug === openSlug) : -1;
  const open = openIdx >= 0 ? birds[openIdx] : null;

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (a) {
      a.pause();
      a.currentTime = 0;
    }
    setPlaying(null);
  }, []);

  const toggleCall = useCallback(
    (bird: Bird) => {
      const a = audioRef.current;
      if (!a) return;
      if (playing === bird.slug) {
        stop();
        return;
      }
      a.pause();
      a.src = bird.audio;
      a.currentTime = 0;
      setPlaying(bird.slug);
      a.play().catch(() => setPlaying(null));
    },
    [playing, stop]
  );

  const close = useCallback(() => {
    setOpenSlug(null);
    stop();
  }, [stop]);

  const step = useCallback(
    (delta: number) => {
      if (openIdx < 0) return;
      const next = birds[(openIdx + delta + birds.length) % birds.length];
      stop();
      setOpenSlug(next.slug);
    },
    [birds, openIdx, stop]
  );

  // Keyboard: Esc closes, ← / → move between species.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  // Lock page scroll behind the detail view.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  return (
    <div>
      <audio
        ref={audioRef}
        preload="none"
        onEnded={() => setPlaying(null)}
        onPause={() => {
          // Natural end and manual stop both reset via their own handlers;
          // this covers the browser pausing the clip (e.g. tab switch).
          const a = audioRef.current;
          if (a && a.ended) setPlaying(null);
        }}
      />

      {/* Search */}
      <div className="mx-auto max-w-xl">
        <label htmlFor="bird-search" className="sr-only">
          Search birds by name
        </label>
        <div className="relative">
          <svg
            aria-hidden
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="20" y1="20" x2="16.5" y2="16.5" />
          </svg>
          <input
            id="bird-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search a bird — e.g. Koel, kingfisher, Corvus"
            className="w-full rounded-full border border-brand-soft bg-white py-3 pl-12 pr-5 text-base text-brand-ink shadow-sm outline-none transition placeholder:text-brand-muted/70 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/30"
          />
        </div>
        <p className="mt-3 text-center text-sm text-brand-muted" aria-live="polite">
          {q
            ? `${shown.length} of ${birds.length} species`
            : `${birds.length} species — tap a card to learn more`}
        </p>
      </div>

      {/* Grid */}
      {shown.length > 0 ? (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {shown.map((b) => (
            <li key={b.slug}>
              <BirdCard
                bird={b}
                isPlaying={playing === b.slug}
                onOpen={() => setOpenSlug(b.slug)}
                onToggleCall={() => toggleCall(b)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-12 text-center text-brand-muted">
          No bird matches &ldquo;{query}&rdquo;. Try another name.
        </p>
      )}

      {/* Detail view */}
      {open && (
        <BirdDetail
          bird={open}
          isPlaying={playing === open.slug}
          onToggleCall={() => toggleCall(open)}
          onClose={close}
          onPrev={() => step(-1)}
          onNext={() => step(1)}
        />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */

function BirdCard({
  bird,
  isPlaying,
  onOpen,
  onToggleCall,
}: {
  bird: Bird;
  isPlaying: boolean;
  onOpen: () => void;
  onToggleCall: () => void;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl bg-white ring-1 ring-brand-soft transition hover:-translate-y-0.5 hover:shadow-xl">
      {/* The whole card opens the detail view; the call button sits above it. */}
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Learn about the ${bird.name}`}
        className="absolute inset-0 z-10 cursor-pointer rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
      />

      <BirdPhoto bird={bird} className="aspect-[4/3]" sizes="(min-width: 1280px) 280px, (min-width: 640px) 45vw, 90vw" />

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold leading-snug text-brand-ink">
          {bird.name}
        </h3>
        <p className="mt-0.5 text-sm italic text-brand-teal-dark">
          {bird.scientific}
        </p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-brand-muted">
          {bird.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange-dark">
          Learn more
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
        </span>
      </div>

      <CallButton
        isPlaying={isPlaying}
        onClick={onToggleCall}
        label={`${isPlaying ? "Stop" : "Play"} the call of the ${bird.name}`}
        className="absolute right-3 top-3 z-20"
        compact
      />
    </article>
  );
}

function BirdDetail({
  bird,
  isPlaying,
  onToggleCall,
  onClose,
  onPrev,
  onNext,
}: {
  bird: Bird;
  isPlaying: boolean;
  onToggleCall: () => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    closeRef.current?.focus();
  }, [bird.slug]);

  const facts: { title: string; body: string }[] = [
    { title: "What it looks like", body: bird.description },
    { title: "Behaviour", body: bird.behaviour },
    { title: "How it adapts", body: bird.adaptivity },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={bird.name}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm animate-fade-up sm:items-center sm:p-6"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl sm:rounded-3xl md:flex-row"
      >
        <div className="relative shrink-0 md:w-[42%]">
          <BirdPhoto bird={bird} className="aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]" sizes="(min-width: 768px) 420px, 100vw" priority />
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto p-6 sm:p-8">
          <div className="pr-10">
            <h3 className="text-2xl font-bold tracking-tight text-brand-ink sm:text-3xl">
              {bird.name}
            </h3>
            <p className="mt-1 text-base italic text-brand-teal-dark">
              {bird.scientific}
            </p>
          </div>

          <div className="mt-6 space-y-5">
            {facts.map((f) => (
              <section key={f.title}>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-teal">
                  {f.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-ink sm:text-base">
                  {f.body}
                </p>
              </section>
            ))}

            <section className="rounded-2xl bg-brand-mist p-4 ring-1 ring-brand-soft/70">
              <h4 className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-teal">
                Its call
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-ink sm:text-base">
                {bird.soundNote}
              </p>
              <CallButton
                isPlaying={isPlaying}
                onClick={onToggleCall}
                label={`${isPlaying ? "Stop" : "Play"} the call of the ${bird.name}`}
                className="mt-3"
              />
            </section>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-brand-soft pt-4">
            <button
              type="button"
              onClick={onPrev}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-soft px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-teal hover:text-brand-teal"
            >
              <span aria-hidden>←</span> Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-soft px-4 py-2 text-sm font-semibold text-brand-primary transition hover:border-brand-teal hover:text-brand-teal"
            >
              Next <span aria-hidden>→</span>
            </button>
          </div>
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl text-brand-ink shadow ring-1 ring-black/10 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal"
        >
          ×
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function CallButton({
  isPlaying,
  onClick,
  label,
  className = "",
  compact = false,
}: {
  isPlaying: boolean;
  onClick: () => void;
  label: string;
  className?: string;
  /** Icon-only round button (used on cards). */
  compact?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-pressed={isPlaying}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange font-semibold text-white shadow-md transition hover:bg-brand-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
        compact ? "h-11 w-11" : "px-5 py-2.5 text-sm"
      } ${className}`}
    >
      {isPlaying ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
          {!compact && "Stop"}
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
          </svg>
          {!compact && "Listen to the call"}
        </>
      )}
    </button>
  );
}

/** Species photo, or a tile with a bird glyph when none has been added yet. */
function BirdPhoto({
  bird,
  className = "",
  sizes,
  priority,
}: {
  bird: Bird;
  className?: string;
  sizes: string;
  priority?: boolean;
}) {
  if (bird.photo) {
    return (
      <div className={`relative overflow-hidden bg-brand-soft/60 ${className}`}>
        <Image
          src={bird.photo.src}
          alt={bird.photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          style={bird.photo.focus ? { objectPosition: bird.photo.focus } : undefined}
          className="object-cover"
        />
        {bird.photo.credit && (
          <p className="absolute inset-x-0 bottom-0 bg-black/55 px-3 py-1 text-[10px] leading-tight text-white/90">
            {bird.photo.creditUrl ? (
              <a
                href={bird.photo.creditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-30 underline"
              >
                {bird.photo.credit}
              </a>
            ) : (
              bird.photo.credit
            )}
          </p>
        )}
      </div>
    );
  }
  return (
    <div
      aria-hidden
      className={`relative flex items-center justify-center bg-gradient-to-br from-brand-teal/20 via-brand-mist to-brand-green/20 ${className}`}
    >
      <svg
        viewBox="0 0 64 64"
        className="h-1/3 w-1/3 max-w-[96px] text-brand-teal/50"
        fill="currentColor"
      >
        <path d="M52 14c-5 0-9 3-11 7-2-1-4-1-6-1-8 0-15 6-17 14l-9 6 8 1c1 6 6 11 13 12l-3 9h5l4-8c8-1 14-8 14-16 0-3-1-6-2-8 4-2 7-6 8-11l-4-5zM43 26a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
      </svg>
    </div>
  );
}
