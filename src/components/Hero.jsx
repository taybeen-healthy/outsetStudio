import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-7 sm:px-10 lg:px-14 py-16 sm:py-24 text-center">
      <div className="max-w-[365px] sm:max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Headline — Entire heading bold (font-bold) */}
        <h1 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.16] tracking-tight drop-shadow-md max-w-5xl xl:max-w-6xl mx-auto">
          <span className="sm:hidden block">
            We Transform <span className="italic font-bold">Empty</span><br />
            <span className="italic font-bold">Spaces</span> Into <span className="italic font-bold">Business-</span><br />
            <span className="italic font-bold">Driving</span> Experiences.
          </span>
          <span className="hidden sm:block sm:whitespace-nowrap">
            We Transform <span className="italic font-bold">Empty Spaces</span> Into
          </span>
          <span className="hidden sm:block font-serif font-bold text-white sm:whitespace-nowrap mt-1">
            <span className="italic font-bold">Business-Driving</span> Experiences.
          </span>
        </h1>

        {/* Subtitle Description */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-[17px] lg:text-[18px] text-white/95 font-normal max-w-3xl lg:max-w-4xl mx-auto leading-relaxed sm:leading-[1.7] tracking-normal font-sans">
          Outset Studio brings strategy, design, execution, and digital presence together —<br />
          transforming empty spaces into distinctive outlets that attract customers and drive growth.
        </p>

        {/* Call to Action Buttons */}
        <div className="mt-9 sm:mt-11 flex flex-row items-center justify-center gap-3 sm:gap-7 w-full max-w-none">
          {/* Primary Action Button */}
          <a
            href="mailto:hello@outsetstudio.com"
            className="w-auto h-11 sm:h-[48px] px-5 sm:px-9 flex items-center justify-center text-center bg-transparent hover:bg-white hover:text-black text-white font-sans font-medium text-[15px] sm:text-[17px] whitespace-nowrap tracking-normal rounded-none border border-white transition-all duration-300 shadow-sm"
          >
            Start a Project
          </a>

          {/* Secondary Link Action with diagonal arrow */}
          <Link
            href="#our-work"
            className="inline-flex items-center justify-center gap-2 text-white hover:text-white/80 font-sans font-medium text-[15px] sm:text-[17px] whitespace-nowrap tracking-normal transition-colors duration-300 group py-2"
          >
            <span>Explore our Work</span>
            <svg
              className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 inline-block"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M17 7H8M17 7V16"
              />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
