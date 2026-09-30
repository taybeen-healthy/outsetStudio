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
        className={`group flex-shrink-0 ${wrapperClass}`}
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
            sizes="(max-width: 640px) 70vw, 420px"
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
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-8 mb-6 sm:mb-16">
          <div className="w-full md:max-w-[400px] lg:max-w-[440px] xl:max-w-[540px]">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[28px] sm:text-4xl lg:text-[44px] xl:text-[48px] leading-[1.2] tracking-tight text-left">
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

          <div className="flex flex-wrap items-center gap-2.5 lg:gap-3 md:flex-1 md:justify-end min-w-0">
            {filters.map((f) => {
              const isActive = activeFilter.toUpperCase() === f.toUpperCase();
              return (
                <button
                  key={f}
                  onClick={() => handleFilter(f)}
                  className={`flex-shrink-0 whitespace-nowrap min-h-10 lg:min-h-11 px-4 lg:px-5 text-center text-[11px] lg:text-xs tracking-[0.16em] uppercase font-medium transition-all duration-300 cursor-pointer rounded-none ${isActive
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

      {filteredProjects.length === 0 ? (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <p className="w-full text-center font-sans text-sm text-neutral-500 py-16">
            No projects found for this filter.
          </p>
        </div>
      ) : (!isMobile && filteredProjects.length < 3) || (isMobile && filteredProjects.length < 2) ? (
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4">
            {filteredProjects.map((project, i) =>
              renderCard(project, i, "w-[70vw] sm:w-[360px] lg:w-[420px] flex-shrink-0")
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
              renderCard(project, i, "w-[70vw] sm:w-[360px] lg:w-[420px] pr-3 sm:pr-6 lg:pr-8")
            )}
          </div>
        </div>
      )}
    </section>
  );
}