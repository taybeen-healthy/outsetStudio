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

export default function Home() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      {/* Hero Viewport matching exact Screenshot */}
      <div className="relative min-h-screen flex flex-col justify-between">
        {/* Background Image with Cinematic Dark Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/Image (10).svg"
            alt="Luxury modern interior by Outset Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/75 pointer-events-none" />
        </div>

        {/* Top Navbar with Divider Line */}
        <Navbar />

        {/* Main Hero Headline, Subtitle, and CTAs */}
        <Hero />

        {/* Stats Bar flush at bottom inside container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 pb-0">
          <Stats />
        </div>
      </div>

      {/* Remaining Sections */}
      <About />
      <OurWork />
      <HowWeWork />
      <Industries />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
