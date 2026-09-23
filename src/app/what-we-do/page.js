import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "What We Do",
  description:
    "We bring together the expertise, execution, and strategies businesses need to create outlets that work today and are ready for tomorrow.",
};

export default function WhatWeDoPage() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#FAF7F2] py-16 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
            <h1 className="font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.1] tracking-tight max-w-4xl mb-6">
              Building Better Outlets,{" "}
              <br className="hidden sm:block" />
              From <span className="text-[#C0532C] italic">Space to Scale.</span>
            </h1>
            <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 leading-[1.75] max-w-xl">
              We bring together the expertise, execution, and strategies businesses need to create outlets that work today and are ready for tomorrow.
            </p>
          </div>
        </section>

        {/* Everything That Goes Into */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight">
                Everything That Goes Into a Successful Outlet
              </h2>
            </div>
            <div>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                Outset Studio works across the key areas required to create, launch and grow an outlet — eliminating fragmented handoffs between disparate agencies, general contractors, and marketing teams. We unite physical spatial architecture, physical manufacturing, digital visibility, and sustained commercial performance under one roof.
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                <span>SPATIAL DESIGN</span>
                <span className="text-neutral-300">/</span>
                <span>DIRECT BUILD</span>
                <span className="text-neutral-300">/</span>
                <span>DIGITAL FOOTPRINT</span>
                <span className="text-neutral-300">/</span>
                <span>COMMERCIAL SCALING</span>
              </div>
            </div>
          </div>
        </section>

        {/* 01 — Outlet Design */}
        <section className="bg-[#FAF7F2] border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                01 — OUTLET DESIGN
              </span>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-6">
                Designed Around Your Business.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                We create spaces around your brand, customers and business goals. Every detail is considered to make the outlet functional, attractive and easy for customers to experience.
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Interior & Exterior Design", "Space Planning", "Customer Flow", "Furniture & Lighting", "3D Visualization", "In-Space Branding"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0" />
                      <span className="font-sans text-[13px] text-[#1a1a1a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-neutral-200 p-2 sm:p-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image src="/ww1.png" alt="Outlet design - cafe interior" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        {/* 02 — Build & Execution */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="border border-neutral-200 p-2 sm:p-3 order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image src="/ww2.png" alt="Build and execution - fabrication" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                02 — BUILD &amp; EXECUTION
              </span>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-6">
                From Design Files to a Finished Space.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                We turn approved designs into real, functional outlets through coordinated execution and attention to detail across the site.
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Fabrication", "Signage", "Electrical", "Furniture", "Site Coordination", "Complete Execution"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0" />
                      <span className="font-sans text-[13px] text-[#1a1a1a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 03 — Digital Setup */}
        <section className="bg-[#FAF7F2] border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                03 — DIGITAL SETUP
              </span>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-6">
                Make Your Outlet Easy to Find.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                We create the essential digital touchpoints that help customers discover, understand and connect with your outlet from the moment it launches.
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Website / Landing Page", "Google Business Presence", "Online Ordering", "Social Media Setup", "Digital Brand Presence"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0" />
                      <span className="font-sans text-[13px] text-[#1a1a1a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-neutral-200 p-2 sm:p-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image src="/ww3.png" alt="Digital setup - website on laptop" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        {/* 04 — Sales Growth */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="border border-neutral-200 p-2 sm:p-3 order-2 lg:order-1">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image src="/ww4.png" alt="Sales growth - customers" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                04 — SALES GROWTH
              </span>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-6">
                Turn Opening Day Into Ongoing Growth.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                We help outlets move beyond launch by creating practical strategies that attract customers, encourage repeat visits and improve sales performance.
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Launch Campaigns", "Local Marketing", "Offers & Combos", "Loyalty Strategies", "Repeat Customer Growth"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0" />
                      <span className="font-sans text-[13px] text-[#1a1a1a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 05 — Scale */}
        <section className="bg-[#FAF7F2] border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                05 — SCALE
              </span>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-6">
                Built to Grow Beyond One Location.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                We help businesses create repeatable systems and consistent experiences that make expansion from one outlet to multiple locations easier.
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                  CORE DELIVERABLES
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {["Standardized Systems", "Repeatable Outlet Setup", "Multi-Location Growth", "Expansion Planning", "Consistency Across Locations"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0" />
                      <span className="font-sans text-[13px] text-[#1a1a1a]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border border-neutral-200 p-2 sm:p-3">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                <Image src="/ww5.png" alt="Scale - multiple store locations" fill sizes="(max-width: 1024px) 100vw, 600px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <CTASection
        title="Ready to Take Your Outlet From Space to Scale?"
        description="From outlet design to build execution, digital setup, and sales growth strategy — tell us about your business and your space, and we'll bring together everything it takes to launch and grow a customer-ready outlet."
      />

      <Footer />
    </div>
  );
}
