import Image from "next/image";

/**
 * IndustryCard — individual card component matching screenshot
 */
function IndustryCard({ industry }) {
  return (
    <div className="bg-white border border-neutral-200/70 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between rounded-none overflow-hidden">
      {/* Image container */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Text content below image */}
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

/**
 * Industries Component
 * Props se data receive karta hai — /api/industries se data aata hai.
 * @param {Object} data - industriesData from /api/industries
 */
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
      className="w-full bg-[#F7F6F2] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header row matching screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-500 font-normal mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <button className="self-start sm:self-end border border-neutral-800 text-[#1a1a1a] bg-transparent hover:bg-[#1a1a1a] hover:text-white px-8 py-3 text-xs tracking-[0.2em] uppercase font-medium rounded-none transition-all cursor-pointer flex-shrink-0">
            VIEW ALL
          </button>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) matching screenshot */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {industries.map((industry) => (
            <IndustryCard key={industry.name} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}
