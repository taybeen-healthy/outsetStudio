"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ourWorkData } from "@/lib/data";

export default function OurWork({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "DELHI", "GURUGRAM", "RAJASTHAN"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("GURUGRAM");
  const scrollContainerRef = useRef(null);

  // Filter projects by active tab
  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.location.toUpperCase() === activeFilter.toUpperCase();
  });

  // Animated scroll handlers for the horizontal carousel
  const handleScrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -380,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 380,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#F7F6F2] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Header row matching screenshot */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Title & Subtitle */}
          <div>
            <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.15] tracking-tight">
              One Studio from<br />
              Concept to Growth.
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-500 font-normal leading-relaxed max-w-lg mt-4">
              From concept to growth, Outset Studio creates distinctive, high-performing outlets.
            </p>
          </div>

          {/* Right Category Tabs (ALL, DELHI, GURUGRAM, RAJASTHAN) */}
          <div className="flex flex-wrap items-center gap-2.5 lg:pb-1">
            {filters.map((f) => {
              const isActive = activeFilter.toUpperCase() === f.toUpperCase();
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${
                    isActive
                      ? "bg-[#1a1a1a] text-white shadow-sm"
                      : "bg-white text-[#1a1a1a] border border-neutral-200/80 hover:border-[#1a1a1a] hover:bg-neutral-50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Cards Carousel */}
      <div className="w-full relative px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
        <div
          ref={scrollContainerRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth scrollbar-none pb-6 pt-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredProjects.map((project, i) => (
            <div
              key={project.id ?? i}
              className="group flex-shrink-0 w-[310px] sm:w-[360px] lg:w-[380px] bg-white shadow-sm border border-neutral-200/60 transition-all duration-300 hover:shadow-lg snap-start flex flex-col justify-between"
            >
              {/* Card Image Container */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                {/* Location Badge (e.g. GURUGRAM) */}
                <span className="absolute top-3.5 left-3.5 z-10 bg-black/90 text-white font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 font-medium rounded-none">
                  {project.location}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 310px, 380px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif font-normal text-[#1a1a1a] text-2xl sm:text-[26px] leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-normal leading-[1.65] mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1a1a1a]">
                    VIEW CASE
                  </span>
                  <svg
                    className="w-4 h-4 text-[#1a1a1a] group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons at Bottom Center */}
        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-12">
          {/* Left Arrow Button (White) */}
          <button
            onClick={handleScrollLeft}
            aria-label="Scroll Left"
            className="w-11 h-11 bg-white border border-neutral-300 hover:bg-neutral-100 text-[#1a1a1a] flex items-center justify-center transition-all cursor-pointer shadow-sm rounded-none"
          >
            <svg
              className="w-4 h-4 text-[#1a1a1a]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>

          {/* Right Arrow Button (Black) */}
          <button
            onClick={handleScrollRight}
            aria-label="Scroll Right"
            className="w-11 h-11 bg-[#1a1a1a] hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md rounded-none"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
