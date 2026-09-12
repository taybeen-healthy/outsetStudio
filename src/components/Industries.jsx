import Image from "next/image";

const industries = [
  {
    name: "QSRs",
    description:
      "Manage orders, inventory and operations while keeping service fast and efficient.",
    image: "/Image (4).svg",
  },
  {
    name: "Cafés",
    description:
      "Simplify orders, inventory and sales for smoother daily operations.",
    image: "/Image (5).svg",
  },
  {
    name: "Interiors",
    description:
      "Smart interior spaces designed for better flow, experience, and impact.",
    image: "/Image (6).svg",
  },
  {
    name: "Exteriors",
    description:
      "Outdoor spaces designed to elevate your brand and attract customers.",
    image: "/Image.png",
  },
  {
    name: "Furniture",
    description:
      "Custom furniture designed to complement your space and brand.",
    image: "/Image (7).svg",
  },
  {
    name: "Salons",
    description:
      "Manage appointments, services and inventory from one place.",
    image: "/Image (8).svg",
  },
];

function IndustryCard({ industry }) {
  return (
    <div className="bg-[#fafafa] p-0 sm:p-6 flex flex-col transition-all duration-300 hover:shadow-md">
      {/* Image container with 344:266 aspect ratio */}
      <div className="relative w-full aspect-[344/266] overflow-hidden bg-neutral-200">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Text content below image */}
      <div className="p-5 sm:p-0 sm:pt-5 flex flex-col flex-1">
        <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-[22px] font-normal leading-snug">
          {industry.name}
        </h3>
        <p className="font-sans text-[#4d4d4d] text-[13px] sm:text-[14px] font-light leading-relaxed mt-2.5">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export default function Industries() {
  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="w-full bg-white pt-12 sm:pt-20 lg:pt-24 pb-16 sm:pb-14"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header row matching Figma */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-10 sm:mb-16 text-center sm:text-left">
          <div className="mx-auto sm:mx-0">
            <h2 className="font-serif font-medium sm:font-semibold text-[#1a1a1a] text-[29px] sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
              Built Around Your Business.
            </h2>
            <p className="font-sans text-[15px] sm:text-[15px] text-[#303030] font-normal sm:font-light mt-4 max-w-xl leading-[1.5] sm:leading-relaxed">
              We create distinctive spaces that align your brand, customer experience,
              and business goals to help every outlet grow.
            </p>
          </div>

          <button className="hidden sm:block self-start sm:self-center border border-[#1a1a1a] text-[#1a1a1a] bg-white hover:bg-[#111] hover:text-white px-6 py-2.5 text-xs sm:text-sm font-normal rounded-none transition-colors cursor-pointer flex-shrink-0">
            View All
          </button>
        </div>

        {/* 6 Cards Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-8">
          {industries.map((industry, index) => (
            <div key={industry.name} className={index > 1 ? "hidden sm:block" : ""}>
              <IndustryCard industry={industry} />
            </div>
          ))}
        </div>
        <div className="sm:hidden flex justify-center pt-9">
          <button className="border border-[#1a1a1a] text-[#1a1a1a] bg-white hover:bg-[#111] hover:text-white px-9 py-3 text-sm font-normal rounded-none transition-colors cursor-pointer">View All</button>
        </div>
      </div>
    </section>
  );
}
