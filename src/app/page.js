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
import {
  heroData,
  statsData,
  aboutData,
  howWeWorkData,
  industriesData,
} from "@/lib/data";

export default function Home() {
  return (
    <div className="relative w-full bg-[#FAF7F2] lg:bg-white overflow-x-hidden font-sans select-none">
      <div className="relative lg:min-h-screen flex flex-col justify-between bg-[#FAF7F2] lg:bg-transparent">
        <div className="hidden lg:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src={heroData?.backgroundImage ?? "/image1.jpg"}
            alt="Luxury modern interior by Outset Studio"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 75%, rgba(0,0,0,0.95) 100%), linear-gradient(to bottom, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.95) 100%)",
            }}
          />
        </div>

        <Navbar />
        <Hero data={heroData} stats={statsData} />
      </div>

      <div className="hidden lg:block relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 -mt-28">
        <Stats data={statsData} />
      </div>

      <About data={aboutData} />
      <OurWork />
      <HowWeWork data={howWeWorkData} />
      <Industries data={industriesData} />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
