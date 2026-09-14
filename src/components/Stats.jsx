"use client";

import { useState, useEffect, useRef } from "react";

function parseNumber(value) {
  const match = value.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function formatNumber(num, original) {
  const suffix = original.replace(/\d+/, "");
  return `${num}${suffix}`;
}

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function CountUp({ value, inView }) {
  const target = parseNumber(value);
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

  return <>{inView ? formatNumber(count, value) : formatNumber(0, value)}</>;
}

function StatItem({ stat, inView, index }) {
  return (
    <div
      className="flex flex-col justify-center px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 text-left bg-white transition-all duration-700"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <span
        className={`font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-none tracking-tight transition-colors duration-500 ${
          stat.highlight ? "text-[#C0532C]" : "text-[#1a1a1a]"
        }`}
      >
        <CountUp value={stat.value} inView={inView} />
      </span>
      <div className="mt-3 sm:mt-4">
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-neutral-500 font-medium block">
          {stat.label}
        </span>
      </div>
    </div>
  );
}

export default function Stats({ data, variant = "desktop" }) {
  const stats = data ?? [
    { value: "10+", label: "TOTAL VENDORS", highlight: true },
    { value: "10+", label: "EXPERIENCED VENDORS", highlight: false },
    { value: "15+", label: "SPECIALIZED CATEGORIES", highlight: false },
    { value: "07+", label: "YEARS OF EXPERIENCE", highlight: false },
  ];

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

  if (variant === "mobile") {
    return (
      <div ref={ref} aria-label="Key statistics" className="grid grid-cols-2 gap-2.5">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-white border border-neutral-200/90 px-4 pt-5 pb-4 min-h-[118px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-600"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(15px)",
              transitionDelay: `${i * 100}ms`,
            }}
          >
            <span
              className={`font-serif text-[32px] font-normal leading-none tracking-tight ${
                stat.highlight ? "text-[#C0532C]" : "text-[#1a1a1a]"
              }`}
            >
              <CountUp value={stat.value} inView={inView} />
            </span>
            <div className="mt-6">
              <div className="w-full border-t border-neutral-200 mb-2.5" />
              <span className="font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-400 font-medium leading-snug block">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} aria-label="Key statistics" className="w-full bg-white shadow-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x divide-neutral-200">
        {stats.map((stat, i) => (
          <StatItem key={i} stat={stat} inView={inView} index={i} />
        ))}
      </div>
    </div>
  );
}