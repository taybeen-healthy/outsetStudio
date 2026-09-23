"use client";

import { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import ContactModal from "./ContactModal";

export default function CTABanner() {
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section
        aria-label="Call to action"
        className="relative w-full bg-[#C0562A] lg:bg-[#bf572b] py-16 sm:py-28 overflow-hidden"
      >
        <div className="hidden lg:block absolute top-0 right-0 w-32 sm:w-48 h-28 sm:h-36 bg-[#c96234] pointer-events-none" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-32 sm:w-48 h-28 sm:h-36 bg-[#c96234] pointer-events-none" />

        <div className="relative z-10 section-container flex flex-col items-start lg:items-center text-left lg:text-center gap-4 lg:gap-5">
          <h2 className="font-serif font-normal text-white text-[30px] sm:text-4xl lg:text-[50px] leading-[1.2] tracking-tight max-w-xs sm:max-w-none">
            Ready to Transform Your Space?
          </h2>

          <p className="font-sans text-[14px] lg:text-[15px] text-white/90 font-normal lg:font-light max-w-[340px] sm:max-w-xl leading-relaxed">
            Tell us about your brand, your space, and where you want to go.
            We&apos;ll turn your vision into an attractive outlet built to
            perform and grow.
          </p>

          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4 mt-4 lg:mt-3 w-full lg:w-auto">
            <button
              onClick={() => setShowContact(true)}
              className="w-full lg:w-auto h-12 px-7 flex items-center justify-center text-[11px] lg:text-[13px] tracking-[0.18em] uppercase font-medium lg:font-normal text-[#C0562A] lg:text-[#bf572b] bg-white border border-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-none cursor-pointer"
            >
              Get in Touch
            </button>
            <button
              onClick={() => setShowProject(true)}
              className="w-full lg:w-auto h-12 px-7 flex items-center justify-center text-[11px] lg:text-[13px] tracking-[0.18em] uppercase font-medium lg:font-normal text-white border border-white bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
