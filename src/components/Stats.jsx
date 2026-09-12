export default function Stats() {
  const stats = [
    { value: "90+", label: "TOTAL VENDORS", highlight: true },
    { value: "30+", label: "EXPERIENCED VENDORS", highlight: false },
    { value: "15+", label: "SPECIALIZED CATEGORIES", highlight: false },
    { value: "50+", label: "YEARS OF EXPERIENCE", highlight: false },
  ];

  return (
    <div
      aria-label="Key statistics"
      className="w-full max-w-6xl mx-auto bg-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-neutral-100"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 text-left transition-colors hover:bg-neutral-50/50"
          >
            {/* Number — Cormorant Garamond / Serif */}
            <span
              className={`font-serif text-4xl sm:text-5xl lg:text-[54px] font-normal leading-none tracking-tight ${
                stat.highlight ? "text-[#B84E29]" : "text-[#1a1a1a]"
              }`}
            >
              {stat.value}
            </span>
            {/* Label — Uppercase with wide letter spacing */}
            <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase text-neutral-500 font-medium mt-3 sm:mt-4">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
