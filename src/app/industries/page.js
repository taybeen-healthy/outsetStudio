import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustriesClient from "./IndustriesClient";
import { industriesData } from "@/lib/data";

export const metadata = {
  title: "Industries",
  description:
    "From high-frequency quick-service outlets to refined corporate environments, we engineer commercial spaces where tactile materiality, spatial choreography, and business performance converge.",
};

export default function IndustriesPage() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#FAF7F2] py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h1 className="font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.1] tracking-tight mb-6">
                Spaces Designed Around Your{" "}
                <span className="text-[#C0532C] italic">Industry.</span>
              </h1>
              <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 leading-[1.75] max-w-lg">
                From high-frequency quick-service outlets to refined corporate
                environments, we engineer commercial spaces where tactile
                materiality, spatial choreography, and business performance
                converge.
              </p>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/3] overflow-hidden bg-neutral-100">
              <Image
                src="/indus.png"
                alt="Industry spaces"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        <IndustriesClient industries={industriesData.industries} />
      </main>

      <Footer />
    </div>
  );
}
