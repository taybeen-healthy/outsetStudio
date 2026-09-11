export default function Stats() {
  const stats = [
    { value: "50+", label: "Total Vendors" },
    { value: "30+", label: "Experienced Vendors" },
    { value: "15+", label: "Specialized Categories" },
    { value: "50+", label: "Years of Expertise" },
  ];

  return (
    <div
      aria-label="Key statistics"
      className="w-full max-w-[330px] sm:max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6"
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-white shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex flex-col justify-between p-3 sm:p-8 min-h-[176px] sm:min-h-[175px] transition-shadow duration-300 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] ${i > 1 ? "hidden sm:flex" : ""}`}
        >
          {/* Number — top, Cormorant Garamond */}
          <span className="font-serif text-[34px] sm:text-[48px] lg:text-[52px] text-[#1a1a1a] font-light leading-none tracking-tight">
            {stat.value}
          </span>
          {/* Label — bottom, Cormorant Garamond to match screenshot */}
          <span className="font-serif text-[16px] sm:text-[18px] lg:text-[19px] text-[#2c2c2c] font-normal leading-snug">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
