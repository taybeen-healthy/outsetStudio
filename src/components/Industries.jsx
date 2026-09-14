import Image from "next/image";

function IndustryIcon({ id }) {
  const className = "w-5 h-5 text-[#C0532C]";
  switch (id) {
    case "qsrs":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 21V8.5L12 3l9 5.5V21M9 21v-6h6v6" />
        </svg>
      );
    case "interiors":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16v4H4zM6 14V10c0-3.3 2.7-5 6-5s6 1.7 6 5v4M8 18v2M16 18v2" />
        </svg>
      );
    case "cafes":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h11v6a4 4 0 01-4 4H9a4 4 0 01-4-4V8zM16 9h1.5a2.5 2.5 0 010 5H16M8 4v2M11 3v3M14 4v2" />
        </svg>
      );
    case "exteriors":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20V10l9-6 9 6v10H3zM9 20v-6h6v6" />
        </svg>
      );
    case "furniture":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.5 0 4 2 4 4.5S14 14 12 16c-2-2-4-5-4-8.5S9.5 3 12 3zM12 16v5M9 21h6" />
        </svg>
      );
    case "salons":
      return (
        <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 8l8 12M16 8L8 20M8 8a2.5 2.5 0 11-2.5-4A2.5 2.5 0 018 8zM16 8a2.5 2.5 0 102.5-4A2.5 2.5 0 0016 8z" />
        </svg>
      );
    default:
      return null;
  }
}

function IndustryCard({ industry }) {
  return (
    <div className="bg-white border border-neutral-200/70 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between rounded-none overflow-hidden">
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 sm:p-7 flex flex-col flex-1 bg-white">
        <h3 className="font-serif text-[#1a1a1a] text-2xl sm:text-[24px] font-normal leading-snug mb-2.5">
          {industry.name}
        </h3>
        <p className="font-sans text-neutral-500 text-xs sm:text-[13px] font-normal leading-[1.65]">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export default function Industries({ data }) {
  const industries = data?.industries ?? [];
  const title = data?.title ?? "Built Around Your Business.";
  const subtitle =
    data?.subtitle ??
    "We create distinctive spaces that align your brand, customer experience, and business goals to help every outlet grow.";

  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="w-full bg-[#F3F1EC] lg:bg-[#F7F6F2] py-10 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-6 mb-6 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[46px] leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 font-normal mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <button className="self-start border border-[#1a1a1a] text-[#1a1a1a] bg-white lg:bg-transparent hover:bg-[#1a1a1a] hover:text-white px-6 py-2.5 lg:px-8 lg:py-3 text-[11px] lg:text-xs tracking-[0.2em] uppercase font-medium rounded-none transition-all cursor-pointer flex-shrink-0">
            VIEW ALL
          </button>
        </div>

        <div className="lg:hidden grid grid-cols-2 gap-3">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="bg-white border border-neutral-200/60 p-4 min-h-[148px] flex flex-col"
            >
              <IndustryIcon id={industry.id} />
              <h3 className="font-serif text-[#1a1a1a] text-[20px] font-normal leading-snug mt-4 mb-1.5">
                {industry.name}
              </h3>
              <p className="font-sans text-neutral-500 text-[11px] font-normal leading-[1.55]">
                {industry.description}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
