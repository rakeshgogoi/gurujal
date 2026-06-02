"use client";

import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/**
 * Before-and-after image swipe — the same interaction used in the
 * ArcGIS StoryMap. Two photos are stacked; the user drags a vertical
 * handle (or clicks anywhere on the frame, or uses the keyboard) to
 * reveal more of one or the other.
 *
 * Pointer events are used so the same code path handles mouse, touch
 * and stylus. `setPointerCapture` keeps the drag responsive even if
 * the cursor leaves the frame mid-gesture.
 */

export function BeforeAfter({
  beforeSrc,
  beforeAlt,
  afterSrc,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
  initialPercent = 50,
  className = "",
}: {
  beforeSrc: string;
  beforeAlt: string;
  afterSrc: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** Position of the divider on first paint, 0–100 (% from left). */
  initialPercent?: number;
  /** Sizing/aspect classes applied to the outer frame. */
  className?: string;
}) {
  const [pos, setPos] = useState(initialPercent);
  const draggingRef = useRef(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const updateFromX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    draggingRef.current = true;
    // setPointerCapture throws NotFoundError on certain synthetic /
    // edge pointer events (e.g. DevTools, tests). Swallow it — the
    // drag still works without capture as long as the pointer stays
    // over the frame, which is the common case.
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
    updateFromX(e.clientX);
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!draggingRef.current) return;
    updateFromX(e.clientX);
  };

  const endDrag: React.PointerEventHandler<HTMLDivElement> = (e) => {
    draggingRef.current = false;
    try {
      if (e.currentTarget.hasPointerCapture(e.pointerId)) {
        e.currentTarget.releasePointerCapture(e.pointerId);
      }
    } catch {}
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") {
      setPos((p) => Math.max(0, p - step));
      e.preventDefault();
    } else if (e.key === "ArrowRight") {
      setPos((p) => Math.min(100, p + step));
      e.preventDefault();
    } else if (e.key === "Home") {
      setPos(0);
      e.preventDefault();
    } else if (e.key === "End") {
      setPos(100);
      e.preventDefault();
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      // `touch-none` prevents the browser from interpreting horizontal
      // drags as a page scroll on mobile, so the swipe is responsive.
      className={`relative isolate select-none overflow-hidden touch-none cursor-ew-resize ${className}`}
    >
      {/* Before image — base layer, fully visible. */}
      <Image
        src={beforeSrc}
        alt={beforeAlt}
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="pointer-events-none object-cover"
        priority
      />

      {/* After image — clipped overlay. clip-path hides the left `pos`%
          so only the right side of "after" shows through. */}
      <div
        aria-hidden
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
      >
        <Image
          src={afterSrc}
          alt={afterAlt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="pointer-events-none object-cover"
          priority
        />
      </div>

      {/* Labels — Before on the left, After on the right. */}
      <span className="pointer-events-none absolute left-4 top-4 inline-flex rounded-full bg-brand-deep/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white ring-1 ring-white/15">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-4 top-4 inline-flex rounded-full bg-brand-green px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-white">
        {afterLabel}
      </span>

      {/* Divider line */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 w-0.5 -translate-x-1/2 bg-white shadow-lg"
        style={{ left: `${pos}%` }}
      />

      {/* Draggable handle (focusable for keyboard users). */}
      <div
        role="slider"
        tabIndex={0}
        aria-label="Reveal before and after"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
        className="absolute top-1/2 z-10 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-deep shadow-xl ring-2 ring-brand-deep transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-teal"
        style={{ left: `${pos}%` }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <polyline points="15 6 9 12 15 18" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
    </div>
  );
}
