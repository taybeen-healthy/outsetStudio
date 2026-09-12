import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-28 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Headline matching Screenshot */}
        <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.12] font-normal tracking-tight max-w-5xl mx-auto">
          We Transform{" "}
          <span className="italic text-[#C0532C] font-normal font-serif">
            Empty Spaces
          </span>{" "}
          Into
          <br className="hidden sm:inline" /> Business-Driving Experiences.
        </h1>

        {/* Subtitle Description matching Screenshot */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-[15px] md:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed tracking-normal font-sans">
          Outset Studio brings strategy, design, execution, digital presence, and growth
          together to transform empty spaces into distinctive outlets that attract
          customers, strengthen brands, and drive growth.
        </p>

        {/* Call to Action Buttons matching Screenshot */}
        <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-none">
          <a
            href="mailto:outsetstudio@gmail.com"
            className="w-auto h-11 sm:h-[46px] px-7 sm:px-9 flex items-center justify-center text-center bg-[#B84E29] hover:bg-[#A34320] text-white font-sans font-medium text-xs tracking-[0.18em] uppercase whitespace-nowrap rounded-none transition-all duration-300 shadow-md"
          >
            START A PROJECT
          </a>

          <Link
            href="#our-work"
            className="w-auto h-11 sm:h-[46px] px-7 sm:px-9 flex items-center justify-center text-center border border-neutral-700 hover:border-white bg-black/40 hover:bg-white hover:text-black text-white font-sans font-medium text-xs tracking-[0.18em] uppercase whitespace-nowrap rounded-none transition-all duration-300"
          >
            EXPLORE OUR WORK
          </Link>
        </div>
      </div>
    </main>
  );
}
