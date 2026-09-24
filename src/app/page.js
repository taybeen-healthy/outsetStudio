import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import OurWork from "@/components/OurWork";
import HowWeWork from "@/components/HowWeWork";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
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
      <div className="relative w-full bg-[#FAF7F2] lg:bg-white overflow-x-clip font-sans select-none">
        <div className="relative lg:min-h-screen flex flex-col justify-between bg-[#FAF7F2] lg:bg-transparent overflow-hidden">
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

      <div className="hidden lg:block relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 -mt-16">
        <Stats data={statsData} />
      </div>

      <About data={aboutData} />
      <OurWork />
      <HowWeWork data={howWeWorkData} />
      <Industries data={industriesData} />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919958544930?text=Hi%20Outset%20Studio%2C%20I%20came%20across%20your%20website%20and%20I%27m%20really%20impressed%20by%20your%20work.%20I%27d%20love%20to%20discuss%20a%20project%20with%20you.%20Could%20we%20connect%3F"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300 hover:scale-110"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.054 9.374L1.054 31.25l6.124-1.962A15.91 15.91 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.338 22.608c-.39 1.1-1.932 2.014-3.168 2.28-.84.18-1.936.322-5.636-1.21-4.738-1.964-7.788-6.79-8.024-7.104-.226-.314-1.9-2.53-1.9-4.826 0-2.296 1.2-3.424 1.628-3.886.39-.42.926-.55 1.232-.55.306 0 .612.002.88.016.28.012.654-.106.922.702.28.84.954 2.894 1.038 3.096.084.202.14.44.028.712-.112.28-.21.452-.412.694-.202.242-.426.54-.608.724-.168.168-.342.35-.146.684.196.334.87 1.436 1.866 2.328 1.28 1.146 2.36 1.5 2.716 1.664.356.164.558.138.764-.084.206-.222.874-1.018 1.11-1.366.236-.348.472-.29.798-.174.326.114 2.062.974 2.416 1.152.354.178.59.264.676.414.086.15.086.87-.304 1.972z"/>
        </svg>
      </a>
    </div>
  );
}
