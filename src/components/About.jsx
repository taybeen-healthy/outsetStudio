import Image from "next/image";

export default function About({ data }) {
  const bullets = data?.bullets ?? [
    "Brand-focused spaces that connect with customers.",
    "From concept to complete execution.",
    "Functional spaces built to perform.",
    "Systems designed to scale.",
  ];
  const description =
    data?.description ??
    "Outset Studio transforms physical spaces into distinctive, efficient, and highly-performing outlets that elevate every customer experience.";
  const mainImage = data?.mainImage ?? "/image2.jpg";
  const secondaryImage = data?.secondaryImage ?? "/image3.jpg";

  return (
    <section
      id="about"
      aria-label="About Outset Studio"
      className="w-full bg-[#FAF7F2] lg:bg-white pt-8 sm:pt-24 lg:pt-28 pb-14 sm:pb-28 lg:pb-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          <div className="hidden lg:block lg:col-span-7 relative max-w-[520px] lg:max-w-none mx-auto lg:mx-0 pb-10 sm:pb-14 lg:pb-0 pr-4 sm:pr-8">
            <div className="relative w-full aspect-[5/4] max-w-[500px] overflow-hidden shadow-md">
              <Image
                src={mainImage}
                alt="Outset Studio architecture space"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />
            </div>

            <div className="absolute -bottom-6 sm:-bottom-10 -right-2 sm:-right-4 lg:right-4 w-[210px] h-[155px] sm:w-[260px] sm:h-[190px] lg:w-[280px] lg:h-[205px] bg-white p-2 shadow-[0_20px_50px_rgba(0,0,0,0.18)] z-10">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={secondaryImage}
                  alt="Outset Studio interior living space"
                  fill
                  sizes="(max-width: 640px) 210px, (max-width: 1024px) 260px, 280px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.18] tracking-tight mb-4 lg:mb-5">
              More Than Design. Spaces
              <br className="hidden lg:block" /> That Perform.
            </h2>

            <p className="font-sans text-[15px] sm:text-[15px] text-neutral-500 font-normal leading-[1.7] max-w-lg mb-6 lg:mb-7">
              {description}
            </p>

            <div className="hidden lg:block w-full border-t border-neutral-200/80 mb-7" />

            <ul className="space-y-4 sm:space-y-5">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start lg:items-center gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-[3px] bg-[#B85A32] lg:bg-white lg:border lg:border-[#C0532C] flex items-center justify-center mt-0.5 lg:mt-0">
                    <svg
                      className="w-3 h-3 text-white lg:text-[#C0532C]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span className="font-sans text-[14px] sm:text-[15px] text-[#3a3a3a] lg:text-[#1a1a1a] font-normal lg:font-medium leading-snug">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:hidden relative w-full aspect-[16/10] overflow-hidden mt-2">
            <Image
              src={mainImage}
              alt="Outset Studio architecture space"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
