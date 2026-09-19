"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";
import StartProjectModal from "./StartProjectModal";

export default function CTAButtons() {
  const [showContact, setShowContact] = useState(false);
  const [showProject, setShowProject] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowContact(true)}
        className="h-12 px-5 sm:px-7 flex items-center justify-center text-[15px] sm:text-sm whitespace-nowrap font-normal text-[#1a1a1a] border border-white bg-white hover:bg-transparent hover:text-white transition-all duration-300 rounded-none cursor-pointer"
      >
        Get in Touch
      </button>
      <button
        onClick={() => setShowProject(true)}
        className="h-12 px-5 sm:px-7 flex items-center justify-center text-[15px] sm:text-sm whitespace-nowrap font-normal text-white border border-white/80 bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none cursor-pointer"
      >
        Start a Project
      </button>

      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
    </>
  );
}