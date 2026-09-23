"use client";

import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "10+", label: "SPACES DELIVERED" },
  { value: "15+", label: "PROJECTS COMPLETED" },
  { value: "07+", label: "CITIES REACHED" },
  { value: "100%", label: "DESIGN-LED APPROACH" },
];

function parseNumber(value) {
  const match = value.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ value, inView }) {
  const suffix = value.replace(/[\d]/g, "");
  const numStr = value.replace(/[^\d]/g, "");
  const target = parseInt(numStr, 10);
  const hasLeadingZero = numStr.startsWith("0") && target < 100;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || target === 0) return;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  const displayNum = inView ? count : 0;
  const formatted = hasLeadingZero ? String(displayNum).padStart(2, "0") : String(displayNum);

  return (
    <>
      {formatted}
      {suffix && <span className="text-[#bf572b]">{suffix}</span>}
    </>
  );
}

export default function StatsWork() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} aria-label="Key statistics" className="w-full bg-[#FAF7F2]">
      <div className="bg-white border-y border-neutral-200">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-neutral-200 divide-y lg:divide-y-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 text-center px-3 sm:px-4"
              style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s ease",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <span className="font-serif tabular-nums text-[36px] sm:text-[42px] lg:text-[48px] font-normal leading-none tracking-tight text-[#1a1a1a]">
                <CountUp value={stat.value} inView={inView} />
              </span>
              <span className="font-sans text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mt-3">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
