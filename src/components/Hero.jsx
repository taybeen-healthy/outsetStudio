"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import Stats from "./Stats";

export default function Hero({ data, stats }) {
  const [showProject, setShowProject] = useState(false);

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
      <main className="relative z-10 flex-1 flex flex-col items-start lg:items-center justify-center px-2 pt-8 pb-12 sm:py-24 lg:py-28 text-left lg:text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-start lg:items-center w-full">
          <h1 className="font-serif text-[#1a1a1a] lg:text-white text-[28px] sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.18] font-normal tracking-tight max-w-5xl">
            {headline.prefix}{" "}
            <span className="italic text-[#C0532C] font-normal font-serif">
              {headline.highlight}
            </span>
            <br />
            {headline.middle} {headline.suffix}
          </h1>

          <p className="mt-4 sm:mt-8 text-[14px] sm:text-[15px] md:text-base text-neutral-500 lg:text-neutral-400 font-normal lg:font-light max-w-2xl leading-[1.7] tracking-normal font-sans">
            {subtitle}
          </p>

          <div className="mt-6 sm:mt-10 flex flex-col lg:flex-row items-stretch lg:items-center justify-center gap-3 lg:gap-5 w-full lg:max-w-none">
            {actions.map((action) =>
              action.variant === "primary" ? (
                <button
                  key={action.label}
                  onClick={() => setShowProject(true)}
                  className="w-full lg:w-auto h-12 lg:h-[46px] px-7 lg:px-8 flex items-center justify-center text-center bg-[#B85A32] hover:bg-[#A84520] text-white font-sans font-medium text-[11px] lg:text-xs tracking-[0.2em] uppercase whitespace-nowrap rounded-none transition-all duration-300 shadow-none lg:shadow-md cursor-pointer"
                >
                  {action.label}
                </button>
              ) : (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group w-full lg:w-auto h-12 lg:h-[46px] px-6 lg:px-7 flex items-center justify-center gap-2.5 text-center border border-[#C9C4BC] lg:border-neutral-700 bg-white lg:bg-[#0e0f11]/80 hover:border-[#1a1a1a] lg:hover:border-white lg:hover:bg-white lg:hover:text-black text-[#1a1a1a] lg:text-white font-sans font-medium text-[11px] lg:text-xs tracking-[0.2em] uppercase whitespace-nowrap rounded-none transition-all duration-300 cursor-pointer"
                >
                  <span>{action.label}</span>
                </Link>
              )
            )}
          </div>

          <div className="lg:hidden relative w-full mt-6">
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
    </>
  );
}
