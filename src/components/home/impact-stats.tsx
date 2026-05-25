"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 200, suffix: "+", label: "Ponds restored" },
  { value: 1500, suffix: "+", label: "Rainwater-harvesting structures built" },
  { value: 100, suffix: "M+", label: "Litres of groundwater recharged a year" },
];

/**
 * Animated counter row — numbers tick up when scrolled into view.
 */
export function ImpactStats() {
  return (
    <section className="bg-brand-deep text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {stats.map((s) => (
            <Counter key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="text-5xl font-bold tracking-tight text-brand-orange sm:text-6xl">
        {count.toLocaleString("en-IN")}
        <span className="text-brand-orange/90">{suffix}</span>
      </div>
      <p className="mt-3 text-sm font-medium text-white/85 sm:text-base">
        {label}
      </p>
    </div>
  );
}
