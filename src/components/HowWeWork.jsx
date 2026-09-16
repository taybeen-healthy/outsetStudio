"use client";

import { useState } from "react";
import Image from "next/image";
import { howWeWorkData } from "@/lib/data";

const defaultStepImages = [
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
  "/image10.jpg",
];

export default function HowWeWork({ data }) {
  const content = data ?? howWeWorkData;
  const steps = content.steps ?? [];
  const title = content.title ?? "How We Work";

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeImage =
    steps[activeStepIndex]?.image ??
    defaultStepImages[activeStepIndex] ??
    "/image7.jpg";

  return (
    <section
      id="process"
      aria-label="How We Work"
      className="w-full bg-[#FAF7F2] lg:bg-[#F7F6F2] py-10 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-left lg:text-center mb-6 sm:mb-16 lg:mb-20">
          <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-12 items-stretch">
          <div className="lg:col-span-5 relative w-full aspect-[16/11] lg:aspect-auto lg:min-h-[500px] overflow-hidden shadow-none lg:shadow-md bg-neutral-200 group">
            <Image
              key={activeImage}
              src={activeImage}
              alt="How We Work process visualization"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center animate-fade-scale transition-all duration-500"
            />
            <div className="hidden lg:block absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              const phaseLabel = `PHASE ${String(idx + 1).padStart(2, "0")}`;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`bg-white p-5 lg:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border rounded-none ${
                    isActive
                      ? "border-[#E8C9BB] lg:border-[#C0532C] shadow-none lg:shadow-md lg:ring-1 lg:ring-[#C0532C]/30"
                      : "border-[#E8C9BB] lg:border-neutral-200/80 hover:border-neutral-300 shadow-none lg:shadow-sm lg:hover:shadow-md"
                  }`}
                >
                  <div>
                    <div className="hidden lg:flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl sm:text-3xl text-[#C0532C] font-normal leading-none">
                        {step.number}
                      </span>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400">
                        {step.phase ?? `PHASE ${step.number}`}
                      </span>
                    </div>

                    <p className="lg:hidden font-sans text-[10px] tracking-[0.2em] uppercase font-medium text-[#C0532C] mb-2">
                      {phaseLabel}
                    </p>

                    <h3 className="font-serif text-[#1a1a1a] text-[22px] sm:text-[22px] font-normal leading-tight mb-2 lg:mb-3">
                      {step.title}
                    </h3>

                    <p className="font-sans text-[13px] sm:text-[13px] text-neutral-500 font-normal leading-[1.65]">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
