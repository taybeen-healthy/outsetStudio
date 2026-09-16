"use client";

import { useState } from "react";
import Image from "next/image";

const INITIAL_COUNT = 6;

function IndustryCard({ industry }) {
  return (
    <div className="bg-white border border-neutral-200/70 shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col justify-between overflow-hidden">
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100">
        <Image
          src={industry.image}
          alt={industry.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1 bg-white">
        <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl lg:text-[24px] font-normal leading-snug mb-2">
          {industry.name}
        </h3>
        <p className="font-sans text-neutral-500 text-xs sm:text-[13px] font-normal leading-[1.65]">
          {industry.description}
        </p>
      </div>
    </div>
  );
}

export default function Industries({ data }) {
  const industries = data?.industries ?? [];
  const title = data?.title ?? "Built Around Your Business.";
  const subtitle =
    data?.subtitle ??
    "We create distinctive spaces that align your brand, customer experience, and business goals to help every outlet grow.";

  const [expanded, setExpanded] = useState(false);
  const visibleIndustries = expanded ? industries : industries.slice(0, INITIAL_COUNT);
  const hasMore = industries.length > INITIAL_COUNT;

  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="w-full bg-[#F3F1EC] lg:bg-[#F7F6F2] py-10 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 lg:gap-6 mb-6 sm:mb-16">
          <div className="max-w-xl">
            <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[46px] leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 font-normal mt-3 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {hasMore && (
            <button
              onClick={() => setExpanded((prev) => !prev)}
              className="self-start border border-[#1a1a1a] text-[#1a1a1a] bg-white lg:bg-transparent hover:bg-[#1a1a1a] hover:text-white px-6 py-2.5 lg:px-8 lg:py-3 text-[11px] lg:text-xs tracking-[0.2em] uppercase font-medium rounded-none transition-all cursor-pointer flex-shrink-0"
            >
              {expanded ? "SHOW LESS" : "VIEW ALL"}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {visibleIndustries.map((industry) => (
            <IndustryCard key={industry.id} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}