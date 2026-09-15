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

      <div className="hidden lg:block relative z-20 w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 -mt-16">
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
        href="https://wa.me/919958544930"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 group"
      >
        <span className="absolute inset-0 bg-[#25D366] animate-ping opacity-20 rounded-full" />
        <span className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] hover:bg-[#20bd5a] rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.55)] transition-all duration-300 group-hover:scale-110">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </span>
      </a>
    </div>
  );
}
