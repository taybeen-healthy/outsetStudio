"use client";

import { useState } from "react";
import Link from "next/link";
import StartProjectModal from "./StartProjectModal";

export default function CTAButtons() {
  const [showProject, setShowProject] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowProject(true)}
        className="h-12 px-5 sm:px-7 flex items-center justify-center text-[15px] sm:text-sm whitespace-nowrap font-normal text-white border border-white/80 bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none"
      >
        Start a Project
      </button>
      <Link
        href="/#our-work"
        className="h-12 px-1 sm:px-4 flex items-center justify-center gap-2 text-[15px] sm:text-sm whitespace-nowrap font-normal text-white hover:text-white/80 transition-colors duration-300 group"
      >
        Explore our Work
        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
        </svg>
      </Link>

      {showProject && <StartProjectModal onClose={() => setShowProject(false)} />}
    </>
  );
}