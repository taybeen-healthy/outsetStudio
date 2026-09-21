"use client";

import { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import ContactModal from "./ContactModal";

export default function CTABannerInline() {
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section
        aria-label="Call to action"
        className="relative w-full bg-[#bf572b] py-20 sm:py-28 lg:py-32"
      >
        <div className="section-container flex flex-col items-center text-center gap-4 lg:gap-5">
          <h2 className="font-serif font-normal text-white text-[32px] sm:text-[40px] lg:text-[50px] leading-[1.15] tracking-tight">
            Let&apos;s Shape your Space
          </h2>

          <p className="font-sans text-[13px] sm:text-[14px] lg:text-[15px] text-white/85 font-normal max-w-lg leading-relaxed">
            Tell us about your business and what you want your space to achieve.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8 w-full sm:w-auto">
            <button
              onClick={() => setShowContact(true)}
              className="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-[11px] tracking-[0.18em] uppercase font-medium text-[#1a1a1a] bg-white border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-none cursor-pointer"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => setShowProject(true)}
              className="w-full sm:w-auto h-12 px-8 flex items-center justify-center text-[11px] tracking-[0.18em] uppercase font-medium text-white border border-white bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none cursor-pointer"
            >
              START A PROJECT
            </button>
          </div>
        </div>
      </section>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
