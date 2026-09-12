import Image from "next/image";

const bullets = [
  "Brand-focused spaces that connect with customers.",
  "From concept to complete execution.",
  "Functional spaces built to perform.",
  "Systems designed to scale.",
];

export default function About() {
  return (
    <section
      id="about"
      aria-label="About Outset Studio"
      className="w-full bg-white pt-0 sm:pt-16 lg:pt-20 pb-16 sm:pb-28 lg:pb-32"
    >
      {/* Phone layout follows the editorial sequence in the supplied designs. */}
      <div className="lg:hidden">
        <div className="px-6 pt-5 pb-7">
          <h2 className="font-serif font-medium text-[#1a1a1a] text-[29px] leading-[1.2] tracking-tight">
            More Than Design.Spaces<br />That Perform.
          </h2>
          <p className="font-sans text-[15px] text-[#222] leading-[1.48] mt-5">
            Outset Studio transforms physical spaces into distinctive, efficient, and high-performing outlets that elevate every customer experience.
          </p>
        </div>
        <div className="relative w-full h-[396px] overflow-hidden">
          <Image src="/Image (1).svg" alt="Outset Studio space design" fill sizes="100vw" className="object-cover" />
        </div>
        <ul className="w-full px-6 py-8 space-y-6">
          {bullets.map((b) => (
            <li key={b} className="grid grid-cols-[28px_minmax(0,1fr)] items-center gap-5 min-w-0">
              <span className="flex-shrink-0 w-7 h-7 rounded-full border-[1.5px] border-[#1a1a1a] text-[#1a1a1a] flex items-center justify-center">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              <span className="min-w-0 break-words font-sans text-[15px] text-[#1a1a1a] leading-[1.5]">{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden lg:block max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Two overlapping images matching Figma */}
          <div className="lg:col-span-7 relative max-w-[540px] mx-auto lg:mx-0 pb-12 sm:pb-16 lg:pb-0 pr-6 sm:pr-10 order-2 lg:order-1">
            {/* Main large image — Image (1).svg (510x496 squarish aspect ratio) */}
            <div className="relative w-full aspect-[510/496] max-w-[490px] overflow-hidden shadow-sm">
              <Image
                src="/Image (1).svg"
                alt="Outset Studio space design"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 490px"
                className="object-cover"
              />
            </div>

            {/* Overlapping secondary image — Image (2).svg with prominent white border frame & overhang */}
            <div className="absolute -bottom-6 sm:-bottom-10 lg:-bottom-12 -right-2 sm:-right-6 lg:-right-8 w-[190px] h-[210px] sm:w-[230px] sm:h-[254px] lg:w-[250px] lg:h-[276px] bg-white p-1.5 sm:p-2 shadow-[0_20px_48px_rgba(0,0,0,0.22)] z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/Image (2).svg"
                  alt="Outset Studio interior execution"
                  fill
                  sizes="(max-width: 640px) 190px, (max-width: 1024px) 230px, 250px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right — Text content matching screenshot exactly */}
          <div className="lg:col-span-5 flex flex-col justify-center lg:pl-4 order-1 lg:order-2">
            {/* Heading */}
            <h2 className="font-serif font-medium sm:font-semibold text-[#1a1a1a] text-4xl sm:text-5xl lg:text-[48px] xl:text-[54px] leading-[1.12] tracking-tight mb-6 sm:mb-7">
              More Than Design.<br />
              Spaces That Perform.
            </h2>

            {/* Description Paragraph */}
            <p className="font-sans text-base sm:text-[17px] text-[#222222] font-normal leading-[1.7] max-w-xl">
              Outset Studio transforms physical spaces into distinctive,
              efficient, and high-performing outlets that elevate every customer
              experience.
            </p>

            {/* Thin horizontal divider line matching screenshot */}
            <div className="w-full border-t border-neutral-200 my-8 sm:my-10" />

            {/* Bullet Points */}
            <ul className="space-y-6 sm:space-y-7">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-4">
                  {/* Round circle with checkmark */}
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border border-[#1a1a1a] text-[#1a1a1a] flex items-center justify-center">
                    <svg
                      className="w-3 h-3 text-[#1a1a1a]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="font-sans text-base sm:text-[17px] text-[#1a1a1a] font-normal leading-snug">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
