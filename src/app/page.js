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
      <div className="relative min-h-screen flex flex-col pb-16 sm:pb-20">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/Image (10).svg"
            alt="Luxury modern interior by Outset Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />
        </div>
        <Navbar />
        <Hero />
        <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 lg:px-14 translate-y-1/2 z-10">
          <Stats />
        </div>
      </div>
      <div className="h-[105px] sm:h-[95px] lg:h-[100px] bg-white" />
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
