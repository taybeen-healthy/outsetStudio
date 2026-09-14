"use client";

import { useState } from "react";
import Image from "next/image";
import { ourWorkData } from "@/lib/data";

export default function OurWork({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "DELHI", "GURUGRAM", "RAJASTHAN"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [paused, setPaused] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.location.toUpperCase() === activeFilter.toUpperCase();
  });

  const isMarquee = activeFilter.toUpperCase() === "ALL";
  const marqueeProjects = [...filteredProjects, ...filteredProjects];
  const marqueeDuration = Math.max(20, filteredProjects.length * 8);

  const handleFilter = (f) => {
    setActiveFilter(f);
  };

  const renderCard = (project, i, wrapperClass) => (
    <div
      key={`${project.id ?? i}-${i}`}
      className={`group flex-shrink-0 ${wrapperClass}`}
    >
      <div className="bg-white shadow-sm border border-neutral-200/60 transition-all duration-300 hover:shadow-lg flex flex-col justify-between overflow-hidden h-full">
        <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] overflow-hidden bg-neutral-100">
          <span className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 bg-black/90 text-white font-sans text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 font-medium rounded-none">
            {project.location}
          </span>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 85vw, 420px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-5 sm:p-6 lg:p-7 flex flex-col justify-between flex-1">
          <div>
            <h3 className="font-serif font-normal text-[#1a1a1a] text-xl sm:text-2xl lg:text-[26px] leading-tight mb-2 sm:mb-3">
              {project.title}
            </h3>
            <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-normal leading-[1.65] mb-4 sm:mb-6">
              {project.subtitle}
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
            <button
              type="button"
              className="group/case inline-flex items-center gap-2 cursor-pointer transition-all duration-200 active:scale-95"
            >
              <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1a1a1a] border-b border-transparent group-hover/case:border-[#1a1a1a] transition-colors duration-200">
                VIEW CASE
              </span>
              <svg
                className="w-4 h-4 text-[#1a1a1a] group-hover/case:translate-x-1 group-hover/case:text-[#B8860B] transition-all duration-200"
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
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#FAF7F2] lg:bg-[#F7F6F2] py-8 sm:py-24 lg:py-28 overflow-hidden"
    >
      <style>{`@keyframes outset-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

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

      {isMarquee ? (
        <div className="w-full relative px-5 sm:px-10 lg:px-14 max-w-7xl mx-auto overflow-hidden">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex w-max pt-2 pb-6 will-change-transform"
            style={{
              animation: `outset-marquee ${marqueeDuration}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {marqueeProjects.map((project, i) =>
              renderCard(project, i, "w-[85vw] sm:w-[360px] lg:w-[420px] pr-4 sm:pr-6 lg:pr-8")
            )}
          </div>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 pt-2 pb-6">
            {filteredProjects.map((project, i) =>
              renderCard(project, i, "w-full")
            )}
            {filteredProjects.length === 0 && (
              <p className="w-full text-center font-sans text-sm text-neutral-500 py-16">
                No projects found for this filter.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}