export default function Stats({ data, variant = "desktop" }) {
  const stats = data ?? [
    { value: "90+", label: "TOTAL VENDORS", highlight: true },
    { value: "30+", label: "EXPERIENCED VENDORS", highlight: false },
    { value: "15+", label: "SPECIALIZED CATEGORIES", highlight: false },
    { value: "50+", label: "YEARS OF EXPERIENCE", highlight: false },
  ];

  if (variant === "mobile") {
    return (
      <div aria-label="Key statistics" className="grid grid-cols-2 gap-2.5">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-between bg-white border border-neutral-200/90 px-4 pt-5 pb-4 min-h-[118px] shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            <span
              className={`font-serif text-[32px] font-normal leading-none tracking-tight ${
                stat.highlight ? "text-[#C0532C]" : "text-[#1a1a1a]"
              }`}
            >
              {stat.value}
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
    <div aria-label="Key statistics" className="w-full bg-white shadow-2xl">
      <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-neutral-200 sm:divide-y-0 sm:divide-x divide-neutral-200">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col justify-center p-6 sm:p-9 lg:p-10 text-left bg-white transition-colors"
          >
            <span
              className={`font-serif text-4xl sm:text-5xl lg:text-[56px] font-light leading-none tracking-tight ${
                stat.highlight ? "text-[#C0532C]" : "text-[#1a1a1a]"
              }`}
            >
              {stat.value}
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-neutral-500 font-medium mt-3 sm:mt-4">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
