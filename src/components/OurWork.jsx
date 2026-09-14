"use client";

import { useState, useRef, useMemo } from "react";
import Image from "next/image";
import { ourWorkData } from "@/lib/data";

const MOBILE_PAGE_SIZE = 3;

export default function OurWork({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "DELHI", "GURUGRAM", "RAJASTHAN"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("GURUGRAM");
  const [mobilePage, setMobilePage] = useState(0);
  const scrollContainerRef = useRef(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.location.toUpperCase() === activeFilter.toUpperCase();
  });

  const mobilePageCount = Math.max(1, Math.ceil(filteredProjects.length / MOBILE_PAGE_SIZE));
  const pagedProjects = useMemo(() => {
    const start = mobilePage * MOBILE_PAGE_SIZE;
    return filteredProjects.slice(start, start + MOBILE_PAGE_SIZE);
  }, [filteredProjects, mobilePage]);

  const handleFilter = (f) => {
    setActiveFilter(f);
    setMobilePage(0);
  };

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

  const pageLabel = String(Math.min(mobilePage + 1, mobilePageCount)).padStart(2, "0");
  const totalLabel = String(mobilePageCount).padStart(2, "0");

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#FAF7F2] lg:bg-[#F7F6F2] py-8 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-8 mb-6 sm:mb-16">
          <div>
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[28px] sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2] tracking-tight">
              <span className="lg:hidden">One Studio from Concept to Growth.</span>
              <span className="hidden lg:block">
                One Studio from
                <br />
                Concept to Growth.
              </span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 font-normal leading-relaxed max-w-lg mt-3 lg:mt-4">
              From concept to growth, Outset Studio creates distinctive, high-performing outlets.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:gap-2.5 lg:pb-1">
            {filters.map((f) => {
              const isActive = activeFilter.toUpperCase() === f.toUpperCase();
              return (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`px-3.5 lg:px-5 py-2 lg:py-2.5 text-[10px] lg:text-xs tracking-[0.16em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${
                    isActive
                      ? "bg-[#1a1a1a] text-white shadow-sm"
                      : "bg-transparent lg:bg-white text-[#1a1a1a] border-0 lg:border lg:border-neutral-200/80 hover:border-[#1a1a1a] hover:bg-neutral-50"
                  }`}
                >
                  {f}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lg:hidden px-5">
        <div className="flex flex-col gap-8">
          {pagedProjects.map((project, i) => (
            <article key={project.id ?? i} className="flex flex-col">
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
                <span className="absolute top-3 left-3 z-10 bg-black/90 text-white font-sans text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 font-medium">
                  {project.location}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif font-normal text-[#1a1a1a] text-[26px] leading-tight mt-4 mb-2">
                {project.title}
              </h3>
              <p className="font-sans text-[13px] text-neutral-500 font-normal leading-[1.65] mb-4">
                {project.subtitle}
              </p>
              <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1a1a1a]">
                VIEW CASE
              </span>
            </article>
          ))}
        </div>

        <div className="flex items-center justify-between mt-8 pt-1">
          <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium">
            PAGE {pageLabel} / {totalLabel}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobilePage((p) => (p > 0 ? p - 1 : mobilePageCount - 1))}
              aria-label="Previous page"
              className="w-9 h-9 bg-white border border-neutral-300 text-[#1a1a1a] flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <button
              onClick={() => setMobilePage((p) => (p < mobilePageCount - 1 ? p + 1 : 0))}
              aria-label="Next page"
              className="w-9 h-9 bg-[#1a1a1a] text-white flex items-center justify-center cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block w-full relative px-6 sm:px-10 lg:px-14 max-w-7xl mx-auto">
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
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
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

              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif font-normal text-[#1a1a1a] text-2xl sm:text-[26px] leading-tight mb-3">
                    {project.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-normal leading-[1.65] mb-6">
                    {project.subtitle}
                  </p>
                </div>

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

        <div className="flex items-center justify-center gap-3 mt-8 sm:mt-12">
          <button
            onClick={handleScrollLeft}
            aria-label="Scroll Left"
            className="w-11 h-11 bg-white border border-neutral-300 hover:bg-neutral-100 text-[#1a1a1a] flex items-center justify-center transition-all cursor-pointer shadow-sm rounded-none"
          >
            <svg className="w-4 h-4 text-[#1a1a1a]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </button>
          <button
            onClick={handleScrollRight}
            aria-label="Scroll Right"
            className="w-11 h-11 bg-[#1a1a1a] hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer shadow-md rounded-none"
          >
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
