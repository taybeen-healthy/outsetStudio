"use client";

import Image from "next/image";
import { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import ContactModal from "./ContactModal";
import Stats from "./Stats";

export default function Hero({ data, stats }) {
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const headline = data?.headline ?? {
    prefix: "We Transform",
    highlight: "Empty Spaces",
    middle: "Into",
    suffix: "Business-Driving Experiences.",
  };
  const subtitle = data?.subtitle ?? "";
  const actions = data?.actions ?? [];
  const heroImage = data?.backgroundImage ?? "/image1.jpg";

  return (
    <>
      <main className="relative z-10 flex-1 flex flex-col items-start lg:items-center justify-center px-4 sm:px-6 lg:px-2 pt-8 pb-12 sm:py-24 lg:py-28 text-left lg:text-center overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-start lg:items-center w-full overflow-hidden">
          <h1 className="font-serif text-[#1a1a1a] lg:text-white text-[26px] xs:text-[30px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.18] font-normal tracking-tight max-w-5xl">
            {headline.prefix}{" "}
            <span className="italic text-[#C0532C] font-normal font-serif">
              {headline.highlight}
            </span>
            <br />
            {headline.middle} {headline.suffix}
          </h1>

          <p className="mt-4 sm:mt-8 text-[13px] sm:text-[15px] md:text-base text-neutral-500 lg:text-neutral-400 font-normal lg:font-light max-w-2xl leading-[1.7] tracking-normal font-sans">
            {subtitle}
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col sm:flex-row lg:flex-row items-stretch sm:items-center lg:items-center justify-center gap-3 lg:gap-5 w-full sm:w-auto lg:w-auto">
            {actions.map((action) =>
              action.variant === "primary" ? (
                <button
                  key={action.label}
                  onClick={() => setShowContact(true)}
                  className="w-full sm:w-auto h-12 lg:h-[46px] px-7 lg:px-8 flex items-center justify-center text-center bg-[#bf572b] hover:bg-[#a34320] text-white font-sans font-medium text-[11px] lg:text-xs tracking-[0.2em] uppercase whitespace-nowrap rounded-none transition-all duration-300 cursor-pointer"
                >
                  {action.label}
                </button>
              ) : (
                <button
                  key={action.label}
                  onClick={() => setShowProject(true)}
                  className="w-full sm:w-auto h-12 lg:h-[46px] px-7 lg:px-8 flex items-center justify-center text-center border border-[#1a1a1a] lg:border-white/60 bg-transparent text-[#1a1a1a] lg:text-white font-sans font-medium text-[11px] lg:text-xs tracking-[0.2em] uppercase whitespace-nowrap rounded-none transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white lg:hover:bg-white lg:hover:text-[#bf572b] cursor-pointer"
                >
                  {action.label}
                </button>
              )
            )}
          </div>

          <div className="lg:hidden relative w-full mt-6 overflow-hidden">
            <div className="relative w-full aspect-[5/4] overflow-hidden bg-neutral-200">
              <Image
                src={heroImage}
                alt="Outset Studio interior"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="relative -mt-[18%] z-10 px-0">
              <Stats data={stats} variant="mobile" />
            </div>
          </div>
        </div>
      </main>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
