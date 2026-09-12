/**
 * Stats Component
 * Props se data receive karta hai — /api/stats se data aata hai.
 * @param {Array} data - statsData array from /api/stats
 */
export default function Stats({ data }) {
  const stats = data ?? [
    { value: "90+", label: "TOTAL VENDORS", highlight: true },
    { value: "30+", label: "EXPERIENCED VENDORS", highlight: false },
    { value: "15+", label: "SPECIALIZED CATEGORIES", highlight: false },
    { value: "50+", label: "YEARS OF EXPERIENCE", highlight: false },
  ];

  return (
    <div aria-label="Key statistics" className="w-full bg-white shadow-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x divide-neutral-200">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 text-left bg-white transition-colors"
          >
            {/* Number — Cormorant Garamond */}
            <span
              className={`font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-none tracking-tight ${
                stat.highlight ? "text-[#C0532C]" : "text-[#1a1a1a]"
              }`}
            >
              {stat.value}
            </span>
            {/* Label — Uppercase with wide letter spacing */}
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-neutral-500 font-medium mt-3 sm:mt-4">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

