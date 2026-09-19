import Image from "next/image";
import Navbar from "@/components/Navbar";
import OurWorkGrid from "@/components/OurWorkGrid";
import StatsWork from "@/components/StatsWork";
import CTAWork from "@/components/CTAWork";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Our Work | Outset Studio",
};

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] overflow-hidden">
        <Image
          src="/ourwork.jpg"
          alt="Our Work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/70" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5">
          <h2 className="font-serif text-[#1a1a1a] text-[36px] sm:text-[48px] lg:text-[64px] xl:text-[72px] leading-[1.05] tracking-tight max-w-5xl">
            Spaces Designed to Move{" "}
            <span className="text-[#bf572b] italic">Businesses Forward.</span>
          </h2>
          <p className="font-sans text-neutral-500 text-[13px] sm:text-[14px] lg:text-[15px] max-w-2xl mt-5 lg:mt-7 leading-[1.8]">
            A curated selection of spatial environments shaped through strategy,
            contextual design, and uncompromising commercial execution.
          </p>
          <a
            href="#our-work"
            className="mt-10 lg:mt-14 font-sans text-[#1a1a1a] text-[11px] tracking-[0.2em] uppercase hover:text-[#bf572b] transition-colors"
          >
            SCROLL TO EXPLORE ↓
          </a>
        </div>
      </div>
      <OurWorkGrid />
      <StatsWork />
      <div className="w-full bg-[#FAF7F2] h-20 sm:h-28 lg:h-36" />
      <CTAWork />
      <Footer />
    </main>
  );
}
