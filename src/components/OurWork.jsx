"use client";

import { useState } from "react";
import Image from "next/image";

const filters = ["Delhi", "Gurugram", "Rajasthan", "View All"];

const projectList = [
  {
    id: 1,
    title: "Sardar Ji Baksh Cafe",
    subtitle: "A refined space with a character of its own.",
    image: "/Image (5).svg",
    location: "Delhi",
  },
  {
    id: 2,
    title: "Rigo Cafe",
    subtitle: "A warm, thoughtfully designed cafe experience.",
    image: "/image 9.svg",
    location: "Gurugram",
  },
  {
    id: 3,
    title: "Sardar Ji Baksh",
    subtitle: "A refined space with a character of its own.",
    image: "/Image (5).svg",
    location: "Rajasthan",
  },
  {
    id: 4,
    title: "Blue Tokai Coffee",
    subtitle: "Modern roastery & cafe designed for community.",
    image: "/image 9.svg",
    location: "Gurugram",
  },
];

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("Gurugram");
  const [currentIndex, setCurrentIndex] = useState(1); // Default to Rigo Cafe in center

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projectList.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < projectList.length - 1 ? prev + 1 : 0));
  };

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-white pt-12 sm:pt-20 lg:pt-24 pb-14 sm:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header row matching Figma */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7 sm:mb-14 text-center lg:text-left">
          <div className="mx-auto lg:mx-0">
            <h2 className="font-serif font-medium sm:font-semibold text-[#1a1a1a] text-[29px] sm:text-4xl lg:text-[46px] leading-[1.12] tracking-tight">
              One Studio from<br />
              Concept to Growth.
            </h2>
          </div>

          <div className="flex flex-col gap-6 lg:items-start items-center">
            <p className="text-[15px] sm:text-[17px] text-[#1a1a1a] font-normal leading-relaxed max-w-sm text-center lg:text-left">
              From concept to growth, Outset Studio creates distinctive,
              high-performing outlets.
            </p>

            {/* Filter buttons matching Figma */}
            <div className="flex flex-nowrap gap-2">
              {filters.map((f) => {
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className={`px-3 sm:px-5 py-2 text-[13px] sm:text-sm whitespace-nowrap font-normal border transition-colors cursor-pointer rounded-none ${
                      isActive
                        ? "bg-[#111111] border-[#111111] text-white"
                        : "bg-white border-[#111111] text-[#111111] hover:bg-neutral-100"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="w-full relative px-0 sm:px-6">
        <div className="max-w-[1400px] mx-auto flex items-center justify-center gap-4 sm:gap-6">
          {/* Left card peek */}
          {(() => {
            const leftIdx =
              (currentIndex - 1 + projectList.length) % projectList.length;
            const leftProject = projectList[leftIdx];
            return (
              <div
                onClick={() => setCurrentIndex(leftIdx)}
                className="hidden md:block relative w-[260px] lg:w-[320px] xl:w-[340px] h-[340px] sm:h-[380px] lg:h-[400px] overflow-hidden flex-shrink-0 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={leftProject.image}
                  alt={leftProject.title}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-normal leading-tight">
                    {leftProject.title}
                  </h3>
                  <p className="font-sans text-white/80 text-xs sm:text-[13px] font-light mt-1 leading-snug">
                    {leftProject.subtitle}
                  </p>
                </div>
              </div>
            );
          })()}

          {/* Center active wide card (Rigo Cafe with image 9.svg) */}
          {(() => {
            const activeProject = projectList[currentIndex];
            return (
              <div className="relative w-full md:w-[620px] lg:w-[740px] xl:w-[792px] h-[320px] sm:h-[380px] lg:h-[400px] overflow-hidden flex-shrink-0 shadow-sm">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 792px"
                  className="object-cover"
                />
                {/* Subtle dark overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none sm:block hidden" />
                {/* Bottom text & CTA overlay */}
                <div className="hidden sm:flex absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex-col justify-end p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-white text-2xl sm:text-3xl lg:text-[32px] font-normal leading-tight">
                        {activeProject.title}
                      </h3>
                      <p className="font-sans text-white/90 text-xs sm:text-sm font-light mt-1.5 max-w-md leading-relaxed">
                        {activeProject.subtitle}
                      </p>
                    </div>


                  </div>
                </div>
              </div>
            );
          })()}

          {/* Right card peek */}
          {(() => {
            const rightIdx = (currentIndex + 1) % projectList.length;
            const rightProject = projectList[rightIdx];
            return (
              <div
                onClick={() => setCurrentIndex(rightIdx)}
                className="hidden md:block relative w-[260px] lg:w-[320px] xl:w-[340px] h-[340px] sm:h-[380px] lg:h-[400px] overflow-hidden flex-shrink-0 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
              >
                <Image
                  src={rightProject.image}
                  alt={rightProject.title}
                  fill
                  sizes="340px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/25 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 sm:p-6">
                  <h3 className="font-serif text-white text-xl sm:text-2xl font-normal leading-tight">
                    {rightProject.title}
                  </h3>
                  <p className="font-sans text-white/80 text-xs sm:text-[13px] font-light mt-1 leading-snug">
                    {rightProject.subtitle}
                  </p>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Navigation arrows matching Figma (two circular black buttons) */}
        <div className="flex items-center justify-center gap-2 mt-5 sm:mt-10">
          <button
            onClick={handlePrev}
            aria-label="Previous project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            aria-label="Next project"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1a1a1a] hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
