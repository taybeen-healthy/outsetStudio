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
        className="relative w-full bg-[#bf572b] py-24 sm:py-28 overflow-hidden"
      >
        {/* Subtle corner accent blocks */}
        <div className="absolute top-0 right-0 w-32 sm:w-48 h-28 sm:h-36 bg-[#c96234] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-28 sm:h-36 bg-[#c96234] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center gap-5 px-6 sm:px-12">
          {/* Heading */}
          <h2 className="font-serif font-normal text-white text-[32px] sm:text-4xl lg:text-[50px] leading-tight tracking-tight max-w-[340px] sm:max-w-none">
            Ready to Transform Your Space?
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-[15px] text-white/90 font-light max-w-[360px] sm:max-w-xl leading-relaxed">
            Tell us about your brand, your space, and where you want to go.
            We&apos;ll turn your vision into an attractive outlet built to
            perform and grow.
          </p>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4 mt-3">
            <button
              onClick={() => setShowProject(true)}
              className="h-12 px-7 flex items-center justify-center text-[13px] tracking-widest uppercase font-normal text-white border border-white bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none"
            >
              Start a Project
            </button>
            <button
              onClick={() => setShowContact(true)}
              className="h-12 px-7 flex items-center justify-center text-[13px] tracking-widest uppercase font-normal text-white border border-white bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none"
            >
              Contact
            </button>
          </div>
        </div>
      </section>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
    </>
  );
}
