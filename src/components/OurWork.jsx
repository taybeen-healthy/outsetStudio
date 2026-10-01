"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ourWorkData } from "@/lib/data";

export default function OurWork({ data }) {
  const content = data ?? ourWorkData;
  const filters = content.filters ?? ["ALL", "RENOVATION", "POLICE STATION", "BEDROOM", "KITCHEN", "LIVING ROOM", "COMMERCIAL & OFFICE", "FECADE", "BATHROOM & SPA", "CAFE"];
  const projects = content.projects ?? [];

  const [activeFilter, setActiveFilter] = useState("ALL");
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const matchesFilter = (project, f) => {
    if (f.toUpperCase() === "ALL") return true;
    const target = f.toUpperCase();
    const cats = (project.categories ?? []).map((c) => String(c).toUpperCase());
    if (cats.includes(target)) return true;
    const haystack = `${project.title ?? ""} ${project.type ?? ""}`.toUpperCase();
    return haystack.includes(target);
  };

  const filteredProjects = projects.filter((p) => matchesFilter(p, activeFilter));

  // Repeat the filtered list so half the row always out-widths the viewport,
  // keeping the -50% marquee loop seamless even for single-project filters.
  const repeats = Math.max(4, Math.ceil(10 / Math.max(filteredProjects.length, 1)));
  const marqueeProjects = Array.from({ length: repeats }, () => filteredProjects).flat();
  const marqueeDuration = Math.max(20, filteredProjects.length * 8);

  const handleFilter = (f) => {
    setActiveFilter(f);
  };

  const renderCard = (project, i, wrapperClass) => {
    const projectUrl = `/work/${project.slug ?? "sardar-ji-baksh-cafe"}`;
    return (
      <div
        key={`${project.id ?? i}-${i}`}
        className={`group ${wrapperClass}`}
      >
        <Link
          href={projectUrl}
          className="relative block w-full aspect-[2/3] overflow-hidden bg-neutral-100"
        >
          <span className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 bg-black/90 text-white font-sans text-[9px] sm:text-[10px] tracking-[0.18em] sm:tracking-[0.2em] uppercase px-2.5 sm:px-3 py-1 font-medium rounded-none">
            {project.location}
          </span>
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>
    );
  };

  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="w-full bg-[#FAF7F2] lg:bg-[#F7F6F2] py-8 sm:py-24 lg:py-28 overflow-hidden"
    >
      <style>{`@keyframes outset-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 lg:gap-6 xl:gap-8 mb-6 sm:mb-16">
          <div className="w-full lg:max-w-[340px] xl:max-w-[440px]">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[28px] sm:text-4xl lg:text-[40px] xl:text-[48px] leading-[1.2] tracking-tight text-left">
              <span className="md:hidden">One Studio from Concept to Growth.</span>
              <span className="hidden md:block">
                One Studio from
                <br />
                Concept to Growth.
              </span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 font-normal leading-relaxed max-w-lg mt-3 lg:mt-4 text-left">
              From concept to growth, Outset Studio creates distinctive, high-performing outlets.
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-2 lg:gap-2.5 xl:gap-3 lg:flex-1 lg:min-w-0">
            {[
              filters.slice(0, 5),
              filters.slice(5, 9),
              filters.slice(9),
            ].map((row, ri) => (
              <div key={ri} className="flex flex-wrap items-center gap-2 lg:gap-2.5 xl:gap-3 w-full lg:justify-end">
                {row.map((f) => {
                  const isActive = activeFilter.toUpperCase() === f.toUpperCase();
                  return (
                    <button
                      key={f}
                      onClick={() => handleFilter(f)}
                      className={`flex-shrink-0 whitespace-nowrap min-h-9 lg:min-h-10 xl:min-h-11 px-3.5 lg:px-4 xl:px-5 text-center text-[10px] xl:text-[11px] tracking-[0.14em] xl:tracking-[0.16em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${isActive
                          ? "bg-[#1a1a1a] text-white shadow-sm"
                          : "bg-white text-[#1a1a1a] border border-neutral-200/80 hover:border-[#1a1a1a] hover:bg-neutral-50"
                        }`}
                    >
                      {f}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <p className="w-full text-center font-sans text-sm text-neutral-500 py-16">
            No projects found for this filter.
          </p>
        </div>
      ) : filteredProjects.length <= 3 ? (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, i) =>
              renderCard(project, i, "w-full")
            )}
          </div>
        </div>
      ) : (
        <div className="w-full relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 overflow-hidden">
          <div
            key={activeFilter}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="flex w-max pt-2 pb-6 will-change-transform"
            style={{
              animation: `outset-marquee ${marqueeDuration}s linear infinite`,
              animationPlayState: paused ? "paused" : "running",
            }}
          >
            {marqueeProjects.map((project, i) =>
              renderCard(project, i, "flex-shrink-0 w-[70vw] sm:w-[360px] lg:w-[420px] pr-3 sm:pr-6 lg:pr-8")
            )}
          </div>
        </div>
      )}
    </section>
  );
}