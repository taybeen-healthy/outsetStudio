import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "What We Do",
  description:
    "We bring together design, planning, execution, and long-term thinking to create commercial spaces built around your business.",
};

export default function WhatWeDoPage() {
  return (
    <div className="relative w-full bg-[#0c0d0e] overflow-x-hidden font-sans select-none">
      <main>
        {/* Hero section wrapper */}
        <div className="relative min-h-screen flex flex-col pb-16 sm:pb-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/image 14).svg"
              alt="What We Do hero - coffee shop interior"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />
          </div>

          {/* Navigation Header */}
          <Navbar />

          {/* What We Do Hero Content */}
          <section className="relative z-10 flex-1 flex flex-col items-center justify-center px-7 sm:px-10 lg:px-14 py-16 sm:py-24 text-center">
            <div className="max-w-[365px] sm:max-w-5xl mx-auto flex flex-col items-center">
              {/* Main Headline */}
              <h1 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.16] tracking-tight drop-shadow-md max-w-5xl xl:max-w-6xl mx-auto">
                <span className="sm:hidden block">
                  From Strategy to Space. From Vision to Reality.
                </span>
                <span className="hidden sm:block sm:whitespace-nowrap">
                  From Strategy to Space.
                </span>
                <span className="hidden sm:block font-serif font-bold text-white sm:whitespace-nowrap mt-1">
                  From Vision to Reality.
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl lg:text-[22px] text-white font-normal max-w-4xl mx-auto leading-relaxed sm:leading-[1.7] tracking-normal font-sans">
                We bring together design, planning, execution, and long-term thinking
                to create commercial spaces built around your business.
              </p>

              {/* CTA Button */}
              <div className="mt-9 sm:mt-11">
                <Link
                  href="/#our-work"
                  className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase text-white border border-white/80 hover:border-white bg-transparent hover:bg-white hover:text-[#0c0d0e] transition-all duration-300 rounded-none"
                >
                  Explore Our Work
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
