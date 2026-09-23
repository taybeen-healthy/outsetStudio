"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ourWorkData } from "@/lib/data";

export default function OurWorkGrid({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "DELHI", "GURUGRAM", "PATNA BIHAR", "RAJASTHAN"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "ALL") return true;
    return p.location.toUpperCase() === activeFilter.toUpperCase();
  });

  const getFilterCount = (f) => {
    if (f === "ALL") return projects.length;
    return projects.filter((p) => p.location.toUpperCase() === f.toUpperCase()).length;
  };

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#FAF7F2] overflow-hidden pt-2 sm:pt-4"
    >
      {/* Filter Bar */}
      <div className="w-full border-b border-neutral-200 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 py-5 sm:py-7 lg:py-8 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2.5 lg:gap-5 flex-shrink-0">
            {filters.map((f) => {
              const isActive = activeFilter.toUpperCase() === f.toUpperCase();
              const count = getFilterCount(f);
              return (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-4 lg:px-5 py-2 lg:py-2.5 text-[10px] lg:text-[11px] tracking-[0.14em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${
                    isActive
                      ? "bg-[#1a1a1a] text-white"
                      : "bg-transparent text-neutral-500 hover:text-[#1a1a1a]"
                  }`}
                >
                  {f === "ALL" ? `All (${String(count).padStart(2, "0")})` : f}
                </button>
              );
            })}
          </div>
          <p className="hidden sm:block font-sans text-[10px] lg:text-[11px] tracking-[0.18em] uppercase text-neutral-400 whitespace-nowrap">
            SHOWING {String(filteredProjects.length).padStart(2, "0")} SELECTED COMMISSIONS
          </p>
        </div>
      </div>

      {/* Portfolio Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-14 lg:pb-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-12">
          <div>
            <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#bf572b] font-medium mb-3">
              PORTFOLIO INDEX
            </p>
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.1] tracking-tight">
              Selected Work
            </h2>
          </div>
          <p className="font-sans text-[13px] sm:text-[14px] text-neutral-500 font-normal leading-[1.7] max-w-md lg:pt-8">
            Spaces created with intention, tactile materiality, and commercial performance.
          </p>
        </div>
      </div>

      {/* Project Grid */}
      {filteredProjects.length === 0 ? (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <p className="w-full text-center font-sans text-sm text-neutral-500 py-16">
            No projects found for this filter.
          </p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pb-16 sm:pb-24 lg:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-14">
            {filteredProjects.map((project, i) => {
              const projectUrl = `/work/${project.slug ?? "sardar-ji-baksh-cafe"}`;
              return (
                <div key={`${project.id ?? i}-${i}`} className="group flex flex-col">
                  <Link href={projectUrl} className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 block">
                    <span className="absolute top-3 left-3 z-10 bg-black/90 text-white font-sans text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 font-medium">
                      {project.location}
                    </span>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>

                  <div className="pt-5 flex flex-col flex-1">
                    <Link href={projectUrl} className="block cursor-pointer">
                      <h3 className="font-serif font-normal text-[#1a1a1a] text-xl sm:text-[22px] lg:text-[24px] leading-tight mb-2.5 hover:text-[#bf572b] transition-colors">
                        {project.title}
                      </h3>
                    </Link>
                    <p className="font-sans text-[12px] sm:text-[13px] text-neutral-500 font-normal leading-[1.65] mb-5 flex-1">
                      {project.subtitle}
                    </p>
                    <Link
                      href={projectUrl}
                      className="inline-flex items-center gap-2 cursor-pointer group/case"
                    >
                      <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase text-[#1a1a1a] border-b border-transparent group-hover/case:border-[#bf572b] group-hover/case:text-[#bf572b] transition-colors duration-200">
                        VIEW CASE
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
