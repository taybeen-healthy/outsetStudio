import Image from "next/image";

/**
 * HowWeWork Component
 * Props se data receive karta hai — /api/how-we-work se data aata hai.
 * @param {Object} data - howWeWorkData from /api/how-we-work
 */
export default function HowWeWork({ data }) {
  const steps = data?.steps ?? [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your brand, space, customers, and goals before a single line is drawn.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Create the concept, layout, identity, and experience that define the room.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Manage fabrication, execution, signage, and delivery — on rate, on time.",
    },
    {
      number: "04",
      title: "Launch & Grow",
      description:
        "Launch, strengthen, and grow your outlet long after the ribbon is cut.",
    },
  ];
  const title = data?.title ?? "How We Work";
  const blueprintImage = data?.blueprintImage ?? "/Image (3).svg";


  return (
    <section
      id="process"
      aria-label="How We Work"
      className="w-full bg-white pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Centered Heading matching Screenshot 4 */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        {/* Two-column layout: Blueprint architectural image left, numbered steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Architectural blueprint on wooden desk */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] lg:h-[560px] overflow-hidden shadow-sm">
            <Image
              src={blueprintImage}
              alt="Architectural space planning and blueprints by Outset Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Right — 4 Numbered Steps with horizontal dividers */}
          <div className="lg:col-span-6 flex flex-col">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-start gap-6 sm:gap-8 border-b border-neutral-200/80 pb-7 mb-7 last:border-b-0 last:pb-0 last:mb-0"
              >
                {/* Number in terracotta serif */}
                <span className="flex-shrink-0 font-serif text-2xl sm:text-3xl text-[#B84E29] font-normal leading-none w-10 sm:w-12 pt-0.5">
                  {step.number}
                </span>

                {/* Step Title and Description */}
                <div>
                  <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-[24px] font-normal leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-neutral-500 text-xs sm:text-sm font-normal leading-relaxed mt-2 max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
