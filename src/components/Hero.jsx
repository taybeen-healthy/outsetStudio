"use client";

import Link from "next/link";
import { useState } from "react";
import StartProjectModal from "./StartProjectModal";

export default function Hero({ data }) {
  const [showProject, setShowProject] = useState(false);

  const headline = data?.headline ?? {
    prefix: "We Transform",
    highlight: "Empty Spaces",
    middle: "Into",
    suffix: "Business-Driving Experiences.",
  };
  const subtitle = data?.subtitle ?? "";
  const actions = data?.actions ?? [];

  return (
    <>
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-28 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h1 className="font-serif text-white text-3xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[78px] leading-[1.12] font-normal tracking-tight max-w-5xl mx-auto">
            {headline.prefix}{" "}
            <span className="italic text-[#C0532C] font-normal font-serif">
              {headline.highlight}
            </span>{" "}
            {headline.middle}
            <br className="hidden sm:inline" /> {headline.suffix}
          </h1>

          <p className="mt-6 sm:mt-8 text-xs sm:text-[15px] md:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed tracking-normal font-sans">
            {subtitle}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-row items-center justify-center gap-4 sm:gap-5 w-full max-w-none">
            {actions.map((action) =>
              action.variant === "primary" ? (
                <button
                  key={action.label}
                  onClick={() => setShowProject(true)}
                  className="w-auto h-11 sm:h-[46px] px-7 sm:px-8 flex items-center justify-center text-center bg-[#C0532C] hover:bg-[#A84520] text-white font-sans font-medium text-xs tracking-[0.16em] uppercase whitespace-nowrap rounded-none transition-all duration-300 shadow-md cursor-pointer"
                >
                  {action.label}
                </button>
              ) : (
                <Link
                  key={action.label}
                  href={action.href}
                  className="group w-auto h-11 sm:h-[46px] px-6 sm:px-7 flex items-center justify-center gap-2.5 text-center border border-neutral-700 hover:border-white bg-[#0e0f11]/80 hover:bg-white hover:text-black text-white font-sans font-medium text-xs tracking-[0.16em] uppercase whitespace-nowrap rounded-none transition-all duration-300"
                >
                  <span>{action.label}</span>
                  <span className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-[2px] bg-white/10 group-hover:bg-black/10 transition-colors">
                    <svg
                      className="w-2.5 h-2.5 text-neutral-300 group-hover:text-black transition-colors"
                      viewBox="0 0 10 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M2 8L8 2M8 2H3.5M8 2V6.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              )
            )}
          </div>
        </div>
      </main>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
    </>
  );
}