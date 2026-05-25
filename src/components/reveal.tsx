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
};

const fromTransforms: Record<NonNullable<RevealProps["from"]>, string> = {
  up: "translateY(28px)",
  down: "translateY(-28px)",
  left: "translateX(28px)",
  right: "translateX(-28px)",
  fade: "translateY(0)",
};

/**
 * Reveal — wrap any block; it fades + slides into view the first time it
 * enters the viewport. Pure IntersectionObserver, no animation library.
 *
 * Respects prefers-reduced-motion (content is shown immediately).
 */
export function Reveal({
  children,
  from = "up",
  delay = 0,
  as: Tag = "div",
  className,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      setShown(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const style: React.CSSProperties = {
    opacity: shown ? 1 : 0,
    transform: shown ? "none" : fromTransforms[from],
    transition: `opacity 700ms cubic-bezier(.4, 0, .2, 1) ${delay}ms, transform 700ms cubic-bezier(.4, 0, .2, 1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} style={style} className={className}>
      {children}
    </Component>
  );
}
