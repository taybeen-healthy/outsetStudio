import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";

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

        {/* Everything Your Space Needs to Perform Section */}
        <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-lg">
              <h2 className="font-serif text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold leading-[1.15] tracking-tight mb-6">
                Everything Your Space
                <br />
                Needs to Perform.
              </h2>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7]">
                Our approach connects every stage of the journey—from
                understanding your business to designing, building,
                launching, and supporting your growth.
              </p>
            </div>

            {/* Right: Image 15 with asymmetric rounded corners */}
            <div className="relative w-full max-w-[520px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden rounded-tl-[40px] rounded-br-[40px]">
              <Image
                src="/Image 15.svg"
                alt="Modern cafe interior with marble floor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Four Pillars of Purposeful Spaces Section */}
        <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14">
            {/* Heading row: heading left, description right */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-16 mb-14 lg:mb-20">
              <h2 className="font-serif text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-tight max-w-lg">
                Four Pillars of Purposeful
                <br />
                Spaces
              </h2>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7] max-w-md lg:text-right">
                Each phase seamlessly transitioning into the next for flawless
                commercial delivery.
              </p>
            </div>

            {/* Image left + 4 Steps right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left: Image 16 - narrower portrait shape */}
              <div className="relative w-full max-w-[480px] mx-auto lg:mx-0 aspect-[3/4] overflow-hidden">
                <Image
                  src="/Image 16.svg"
                  alt="Coffee shop bakery display"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Right: 4 Numbered Steps */}
              <div className="flex flex-col gap-10 lg:gap-12">
                <div>
                  <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">01</span>
                  <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Discover</h3>
                  <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                    Understand your brand, space, customers, and goals before a
                    single line is drawn.
                  </p>
                </div>
                <div>
                  <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">02</span>
                  <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Design</h3>
                  <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                    Create the concept, layout, identity, and experience that
                    define the room.
                  </p>
                </div>
                <div>
                  <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">03</span>
                  <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Build</h3>
                  <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                    Manage fabrication, execution, signage, and delivery — on site,
                    on time.
                  </p>
                </div>
                <div>
                  <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">04</span>
                  <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Launch &amp; Grow</h3>
                  <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                    Launch, strengthen, and grow your outlet long after the ribbon
                    is cut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <section aria-label="Call to action" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 right-0 h-[54%] bg-white" />
          <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-black" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-1 sm:px-10 lg:px-14 py-14 sm:py-12">
          <div className="relative w-full bg-[#bf572b] py-24 sm:py-16 lg:py-20 px-6 sm:px-12 text-center flex flex-col items-center gap-5 sm:gap-6 overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-28 sm:w-40 h-24 sm:h-32 bg-[#c96234] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-28 sm:w-40 h-24 sm:h-32 bg-[#c96234] pointer-events-none" />
            <h2 className="relative z-10 font-serif font-medium sm:font-semibold text-white text-[29px] sm:text-4xl lg:text-[46px] xl:text-[50px] leading-tight tracking-tight max-w-[280px] sm:max-w-none">
              Your Space. Our Expertise.
            </h2>
            <p className="relative z-10 font-sans text-[15px] sm:text-[15px] text-white/90 font-normal sm:font-light max-w-[350px] sm:max-w-xl leading-[1.5] sm:leading-relaxed">
              From strategy and design to build and launch, we bring every part of
              your outlet together under one partner.
            </p>
            <div className="relative z-10 flex flex-row items-center gap-2 sm:gap-5 mt-2">
              <a
                href="mailto:hello@outsetstudio.com"
                className="h-12 px-5 sm:px-7 flex items-center justify-center text-[15px] sm:text-sm whitespace-nowrap font-normal text-white border border-white/80 bg-transparent hover:bg-white hover:text-[#bf572b] transition-all duration-300 rounded-none"
              >
                Start a Project
              </a>
              <a
                href="/#our-work"
                className="h-12 px-1 sm:px-4 flex items-center justify-center gap-2 text-[15px] sm:text-sm whitespace-nowrap font-normal text-white hover:text-white/80 transition-colors duration-300 group"
              >
                Explore our Work
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
