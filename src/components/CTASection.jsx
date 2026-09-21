"use client";

import { useState } from "react";
import StartProjectModal from "./StartProjectModal";
import ContactModal from "./ContactModal";

export default function CTASection({ title, description }) {
  const [showProject, setShowProject] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <>
      <section className="bg-[#bf572b] py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="font-serif text-white text-[32px] sm:text-4xl md:text-5xl lg:text-[56px] font-normal leading-[1.1] tracking-tight mb-5">
            {title}
          </h2>
          <p className="font-sans text-white/90 text-[14px] sm:text-[15px] leading-[1.75] mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setShowContact(true)}
              className="h-12 px-8 bg-white text-[#1a1a1a] font-sans text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-neutral-100 transition-colors cursor-pointer w-full sm:w-auto"
            >
              GET IN TOUCH
            </button>
            <button
              onClick={() => setShowProject(true)}
              className="h-12 px-8 border border-white text-white font-sans text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-white/10 transition-colors cursor-pointer w-full sm:w-auto"
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
