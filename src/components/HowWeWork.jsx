"use client";

import { useState } from "react";
import Image from "next/image";
import { howWeWorkData } from "@/lib/data";

const defaultStepImages = [
  "/image7.png",
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
    "/image7.png";

  return (
    <section
      id="process"
      aria-label="How We Work"
      className="w-full bg-[#F7F6F2] py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            {title}
          </h2>
        </div>

        {/* Layout: Left vertical image (changes on step click), Right 2x2 Phase Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
          {/* Left — Dynamic Image Container */}
          <div className="lg:col-span-5 relative w-full min-h-[420px] sm:min-h-[500px] lg:min-h-full overflow-hidden shadow-md bg-neutral-200 group">
            <Image
              key={activeImage}
              src={activeImage}
              alt="How We Work process visualization"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center animate-fade-scale transition-all duration-500"
            />
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          </div>

          {/* Right — 2x2 Grid of 4 Interactive Phase Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`bg-white p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer border rounded-none ${
                    isActive
                      ? "border-[#C0532C] shadow-md ring-1 ring-[#C0532C]/30"
                      : "border-neutral-200/80 hover:border-neutral-300 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div>
                    {/* Top Row: Number & Phase Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-serif text-2xl sm:text-3xl text-[#C0532C] font-normal leading-none">
                        {step.number}
                      </span>
                      <span className="font-sans text-[10px] tracking-[0.2em] uppercase font-semibold text-neutral-400">
                        {step.phase ?? `PHASE ${step.number}`}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-[22px] font-normal leading-tight mb-3">
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="font-sans text-xs sm:text-[13px] text-neutral-500 font-normal leading-[1.65]">
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
