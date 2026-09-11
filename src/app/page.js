"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurWork from "@/components/OurWork";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      {/* Hero section wrapper — full screen with background image */}
      <div className="relative min-h-screen flex flex-col pb-16 sm:pb-20">
        {/* Background Architectural Visual */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/Image.svg"
            alt="Luxury modern interior by Outset Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle ambient vignette for visual depth & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />
        </div>

        {/* Navigation Header */}
        <Navbar onOpenModal={() => setModalOpen(true)} />

        {/* Main Hero Showcase */}
        <Hero onOpenModal={() => setModalOpen(true)} />

        {/* Stats cards — overlap the bottom of the hero */}
        <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 lg:px-14 translate-y-1/2 z-10">
          <Stats />
        </div>
      </div>

      {/* Spacer to account for overlapping stats cards (half the card height) */}
      <div className="h-[105px] sm:h-[95px] lg:h-[100px] bg-white" />
      <About />
      <OurWork />
      {/* Process walkthrough — step-by-step breakdown of how we approach each project */}
      <HowWeWork />

      {/* Industry verticals — sectors we specialise in */}
      <Industries />

      {/* Client testimonials — social proof from real project partners */}
      <Testimonials />

      {/* CTA Banner — prompt visitors to start a conversation */}
      <CTABanner onOpenModal={() => setModalOpen(true)} />

      {/* Site footer — links, contact info, and legal */}
      <Footer />

      {/* Production Inquire Modal Dialog */}
      <ProjectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
