export default function CTABanner({ onOpenModal }) {
  return (
    <section aria-label="Call to action" className="relative w-full overflow-hidden">
      {/* Absolute split background: Top 54% white, Bottom 46% black matching Figma */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-[54%] bg-white" />
        <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-black" />
      </div>

      {/* Centered Orange Card */}
      <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-10 lg:px-14 py-14 sm:py-12">
        <div className="relative w-full bg-[#bf572b] py-24 sm:py-16 lg:py-20 px-6 sm:px-12 text-center flex flex-col items-center gap-5 sm:gap-6 overflow-hidden shadow-2xl">
          {/* Subtle corner accent blocks matching Figma */}
          <div className="absolute top-0 right-0 w-28 sm:w-40 h-24 sm:h-32 bg-[#c96234] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-28 sm:w-40 h-24 sm:h-32 bg-[#c96234] pointer-events-none" />

          {/* Heading */}
          <h2 className="relative z-10 font-serif font-medium sm:font-semibold text-white text-[29px] sm:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight max-w-[280px] sm:max-w-none">
            Ready to Transform Your Space?
          </h2>

          {/* Subtitle */}
          <p className="relative z-10 font-sans text-[15px] sm:text-[15px] text-white/90 font-normal sm:font-light max-w-[350px] sm:max-w-xl leading-[1.5] sm:leading-relaxed">
            Tell us about your brand, your space, and where you want to go. We&apos;ll
            turn your vision into a distinctive outlet built to perform and grow.
          </p>

          {/* Buttons matching Figma */}
          <div className="relative z-10 flex flex-row items-center gap-2 sm:gap-5 mt-2">
            <button
              type="button"
              onClick={onOpenModal}
              className="h-12 px-5 sm:px-7 flex items-center justify-center text-[15px] sm:text-sm whitespace-nowrap font-normal text-white border border-white/80 bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 cursor-pointer rounded-none"
            >
              Start a Project
            </button>
            <a
              href="#our-work"
              className="h-12 px-1 sm:px-4 flex items-center justify-center gap-2 text-[15px] sm:text-sm whitespace-nowrap font-normal text-white hover:text-white/80 transition-colors duration-300 group"
            >
              Explore our Work
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 17L17 7M17 7H8M17 7V16"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
