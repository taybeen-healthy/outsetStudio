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
  ourWorkData,
} from "@/lib/data";
import {
  getPortfolioProjects,
  getApprovedTestimonials,
  getIndustries,
} from "@/lib/content";

export const revalidate = 60;

export default async function Home() {
  const [projects, testimonials, industries] = await Promise.all([
    getPortfolioProjects(),
    getApprovedTestimonials(),
    getIndustries(),
  ]);
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

      <div className="hidden lg:block relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 -mt-16">
        <Stats data={statsData} />
      </div>

      <HowWeWork data={howWeWorkData} />
      <OurWork data={{ ...ourWorkData, projects }} />
      <Industries data={{ ...industriesData, industries }} />
      <CTABanner />
      <FAQ />

      {/* Studio Intro Section */}
      <section className="w-full bg-[#FDFCFA] border-y border-neutral-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-24 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-serif font-normal text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[42px] xl:text-[46px] leading-[1.18] tracking-tight mb-6 lg:mb-8">
                We bring design, execution, and growth together to build outlets that work.
              </h2>
              <div className="w-14 h-[2px] bg-[#bf572b] mb-6 lg:mb-8" />
              <p className="font-sans text-[13px] sm:text-[14px] text-neutral-400 tracking-[0.12em] uppercase">
                Delhi&nbsp;. Patna Bihar&nbsp;. Gurugram&nbsp;. Rajasthan
              </p>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center gap-6 lg:gap-7">
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-500 font-normal leading-[1.75]">
                Outset Studio is a design and growth studio built to make creating successful outlets simpler. We help businesses turn empty spaces into well-designed, customer-ready outlets by bringing everything they need together in one place — from outlet design and execution to digital setup and sales growth.
              </p>
              <p className="font-sans text-[15px] sm:text-[16px] text-neutral-500 font-normal leading-[1.75]">
                We work with businesses across cafés, QSRs, bakeries, salons, retail stores, clinics, and other outlet-based brands. From understanding the space and planning the customer journey to creating the design and bringing it to life, we manage the process with a clear focus on the business.
              </p>
              <p className="font-sans text-[15px] sm:text-[16px] text-[#1a1a1a] font-semibold leading-[1.75]">
                We believe a successful outlet needs more than good design. It needs to look right, work efficiently, attract customers, and support long-term growth. That is why every project we take on is planned around both experience and business performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <About data={aboutData} />
      <Testimonials testimonials={testimonials} />
      <Footer />
    </div>
  );
}
