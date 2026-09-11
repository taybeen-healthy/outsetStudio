import Image from "next/image";

const steps = [
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
      "Manage fabrication, execution, signage, and delivery — on site, on time.",
  },
  {
    number: "04",
    title: "Launch & Grow",
    description:
      "Launch, strengthen, and grow your outlet long after the ribbon is cut.",
  },
];

export default function HowWeWork() {
  return (
    <section
      id="process"
      aria-label="How We Work"
      className="w-full bg-white pt-12 sm:pt-20 lg:pt-24 pb-12 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-10 lg:px-14">
        {/* Centered Heading matching Figma */}
        <div className="text-center mb-7 sm:mb-16 lg:mb-20">
          <h2 className="font-serif font-medium sm:font-semibold text-[#1a1a1a] text-[29px] sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            How We Work
          </h2>
        </div>

        {/* Two-column layout: Featured cafe image left, numbered steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left — Minerals Garden Cafe image (Image (3).svg) */}
          <div className="lg:col-span-6 relative w-full h-[380px] sm:h-[460px] lg:h-[510px] overflow-hidden">
            <Image
              src="/Image (3).svg"
              alt="Minerals The Garden Cafe — Outset Studio project"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Right — 4 Numbered Steps (No dividing lines, matching screenshot) */}
          <div className="lg:col-span-6 px-6 sm:px-0 flex flex-col space-y-7 sm:space-y-11">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6 sm:gap-8">
                {/* Number in Cormorant Garamond serif with terracotta color */}
                <span className="flex-shrink-0 font-serif text-[18px] sm:text-[40px] text-[#bf572b] font-medium sm:font-bold leading-none w-6 sm:w-12 pt-1">
                  {step.number}
                </span>

                {/* Step Title and Description */}
                <div>
                  <h3 className="font-serif text-[#1a1a1a] text-[25px] sm:text-[30px] font-medium sm:font-bold leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-sans text-[#303030] text-[15px] sm:text-[14px] font-normal sm:font-light leading-[1.5] sm:leading-relaxed mt-1.5 max-w-md">
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
