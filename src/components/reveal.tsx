"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** Animation direction. Defaults to "up". */
  from?: "up" | "down" | "left" | "right" | "fade";
  /** Stagger child reveals — applied as a delay in ms before showing. */
  delay?: number;
  /** Override the underlying element tag. */
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  /** Anchor id forwarded to the underlying element. */
  id?: string;
};

const fromTransforms: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translateY(28px)",
  down: "translateY(-28px)",
  left: "translateX(28px)",
  right: "translateX(-28px)",
  fade: "translateY(0)",
};

/**
 * Reveal — wraps content; below-the-fold sections fade + slide into view
 * when they enter the viewport. Pure IntersectionObserver, no library.
 *
 * SSR-safe: content renders **visible** by default. Only after hydration
 * do we check the element's position; if it's already in the viewport we
 * leave it visible (no animation, no flash). If it's below the fold we
 * hide it and observe for the scroll-into-view fade.
 *
 * This avoids the failure mode where a dev refresh leaves whole sections
 * stuck at opacity:0 while JS finishes hydrating — visible content stays
 * visible regardless of how long hydration takes.
 *
 * Respects prefers-reduced-motion (always visible, no animation).
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  as: Tag = "div",
  className,
  id,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return; // stay visible, no animation

    const el = ref.current;
    if (!el) return;

    // Only animate sections that start below the viewport. Anything above
    // the fold renders visible immediately — no flash, no animation.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight) return;

    setHidden(true);
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHidden(false);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: hidden ? 0 : 1,
    transform: hidden ? fromTransforms[from] : "none",
    transition: `opacity 700ms cubic-bezier(.4, 0, .2, 1) ${delay}ms, transform 700ms cubic-bezier(.4, 0, .2, 1) ${delay}ms`,
    willChange: hidden ? "opacity, transform" : undefined,
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} id={id} style={style} className={className}>
      {children}
    </Component>
  );
}
