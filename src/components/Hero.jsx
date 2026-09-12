import Link from "next/link";

/**
 * Hero Component
 * Props se data receive karta hai — page.js API call karke data deta hai.
 * Future mein sirf API route badle, component same rahega.
 *
 * @param {Object} data - heroData from /api/hero
 */
export default function Hero({ data }) {
  // Fallback data agar API call fail ho
  const headline = data?.headline ?? {
    prefix: "We Transform",
    highlight: "Empty Spaces",
    middle: "Into",
    suffix: "Business-Driving Experiences.",
  };
  const subtitle = data?.subtitle ?? "";
  const actions = data?.actions ?? [];

  return (
    <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-28 text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.12] font-normal tracking-tight max-w-5xl mx-auto">
          {headline.prefix}{" "}
          <span className="italic text-[#C0532C] font-normal font-serif">
            {headline.highlight}
          </span>{" "}
          {headline.middle}
          <br className="hidden sm:inline" /> {headline.suffix}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-[15px] md:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed tracking-normal font-sans">
          {subtitle}
        </p>

        {/* CTA Buttons — dynamically rendered from API data */}
        <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-none">
          {actions.map((action) =>
            action.variant === "primary" ? (
              <a
                key={action.label}
                href={action.href}
                className="w-auto h-11 sm:h-[46px] px-7 sm:px-9 flex items-center justify-center text-center bg-[#B84E29] hover:bg-[#A34320] text-white font-sans font-medium text-xs tracking-[0.18em] uppercase whitespace-nowrap rounded-none transition-all duration-300 shadow-md"
              >
                {action.label}
              </a>
            ) : (
              <Link
                key={action.label}
                href={action.href}
                className="w-auto h-11 sm:h-[46px] px-7 sm:px-9 flex items-center justify-center text-center border border-neutral-700 hover:border-white bg-black/40 hover:bg-white hover:text-black text-white font-sans font-medium text-xs tracking-[0.18em] uppercase whitespace-nowrap rounded-none transition-all duration-300"
              >
                {action.label}
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
