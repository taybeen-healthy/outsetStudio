import Image from "next/image";

/**
 * IndustryCard — individual card component
 */
function IndustryCard({ industry }) {
  return (
    <div className="bg-white border border-neutral-200/70 flex flex-col transition-all duration-300 hover:shadow-md">
      {/* Image container with 344:220 aspect ratio */}
      <div className="relative w-full aspect-[344/220] overflow-hidden bg-neutral-100">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text content below image */}
      <div className="p-6 flex flex-col flex-1 bg-white">
        <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-[22px] font-normal leading-snug">
          {industry.name}
        </h3>
        <p className="font-sans text-neutral-500 text-xs sm:text-[13.5px] font-normal leading-relaxed mt-2.5">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

/**
 * Industries Component
 * Props se data receive karta hai — /api/industries se data aata hai.
 * @param {Object} data - industriesData from /api/industries
 */
export default function Industries({ data }) {
  const industries = data?.industries ?? [];
  const title = data?.title ?? "Built Around Your Business.";
  const subtitle = data?.subtitle ?? "";


  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="w-full bg-[#FAF9F7]/60 pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header row matching Screenshot 5 */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-500 font-normal mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <button className="self-start sm:self-end border border-neutral-800 text-neutral-900 bg-transparent hover:bg-neutral-900 hover:text-white px-8 py-3 text-xs tracking-widest uppercase font-medium rounded-none transition-colors cursor-pointer flex-shrink-0">
            VIEW ALL
          </button>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) matching Screenshot 5 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
