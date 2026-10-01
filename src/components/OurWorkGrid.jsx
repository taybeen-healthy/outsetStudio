"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ourWorkData } from "@/lib/data";

export default function OurWorkGrid({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "RENOVATION", "POLICE STATION", "BEDROOM", "KITCHEN", "LIVING ROOM", "COMMERCIAL & OFFICE", "FECADE", "BATHROOM & SPA", "CAFE"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("ALL");

  const matchesFilter = (project, f) => {
    if (f.toUpperCase() === "ALL") return true;
    const target = f.toUpperCase();
    const cats = (project.categories ?? []).map((c) => String(c).toUpperCase());
    if (cats.includes(target)) return true;
    const haystack = `${project.title ?? ""} ${project.type ?? ""}`.toUpperCase();
    return haystack.includes(target);
  };

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));

  const getFilterCount = (f) => {
    if (f.toUpperCase() === "ALL") return projects.length;
    return projects.filter((p) => matchesFilter(p, f)).length;
  };

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#FAF7F2] overflow-hidden pt-2 sm:pt-4"
    >
      {/* Filter Bar */}
      <div className="w-full border-b border-neutral-200 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 py-5 sm:py-7 lg:py-8 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2.5 lg:gap-3 min-w-0">
            {[
              filters.slice(0, 5),
              filters.slice(5, 9),
              filters.slice(9),
            ].map((row, ri) => (
              <div key={ri} className="flex flex-wrap items-center gap-2.5 lg:gap-3">
                {row.map((f) => {
                  const isActive = activeFilter.toUpperCase() === f.toUpperCase();
                  const count = getFilterCount(f);
                  return (
                    <button
                      key={f}
                      onClick={() => setActiveFilter(f)}
                      className={`flex-shrink-0 whitespace-nowrap min-h-9 lg:min-h-10 px-4 lg:px-5 text-center text-[10px] lg:text-[11px] tracking-[0.14em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${isActive
                          ? "bg-[#1a1a1a] text-white"
                          : "bg-white text-[#1a1a1a] border border-neutral-200/80 hover:border-[#1a1a1a] hover:bg-neutral-50"
                        }`}
                    >
                      {f === "ALL" ? `All (${String(count).padStart(2, "0")})` : f}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
          <p className="hidden sm:block font-sans text-[10px] lg:text-[11px] tracking-[0.18em] uppercase text-neutral-400 whitespace-nowrap pt-2">
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
                <div key={`${project.id ?? i}-${i}`} className="group">
                  <Link
                    href={projectUrl}
                    className="relative w-full aspect-[2/3] overflow-hidden bg-neutral-100 shadow-sm group-hover:shadow-2xl transition-all duration-500 block cursor-pointer"
                  >
                    {/* Location Badge */}
                    <span className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-20 bg-black/90 text-white font-sans text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 font-medium rounded-none backdrop-blur-sm group-hover:bg-[#C0532C] transition-colors duration-300">
                      {project.location}
                    </span>

                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Cinematic Scrim */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />

                    {/* Architectural Inset Frame */}
                    <div className="absolute inset-3 sm:inset-4 border border-white/40 scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 ease-out z-20 pointer-events-none" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
