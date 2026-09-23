import Image from "next/image";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About",
  description:
    "Outset Studio is a design and growth studio that helps businesses turn empty spaces into successful, customer-focused outlets.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-[#FAF7F2] py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
            <h1 className="font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.1] tracking-tight">
              Creating Distinctive Outlets Where{" "}
              <span className="text-[#C0532C]">Design, Strategy,</span> and{" "}
              <span className="text-[#C0532C]">Growth</span> Come Together.
            </h1>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-[#FAF7F2] pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
            <div className="border border-neutral-200 p-2 sm:p-3">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden bg-neutral-100">
                <Image
                  src="/a1.png"
                  alt="Outset Studio team collaborating on architectural plans"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* We bring design section */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.2] tracking-tight mb-6">
                We bring design, execution, and growth together to build outlets that work.
              </h2>
              <div className="w-10 h-[2px] bg-[#C0532C] mb-6" />
              <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                DELHI . PATNA BIHAR . GURUGRAM . RAJASTHAN
              </p>
            </div>
            <div>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-6">
                Outset Studio is a design and growth studio built to make creating successful outlets simpler. We help businesses turn empty spaces into well-designed, customer-ready outlets by bringing everything they need together in one place — from outlet design and execution to digital setup and sales growth.
              </p>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-6">
                We work with businesses across cafés, QSRs, bakeries, salons, retail stores, clinics, and other outlet-based brands. From understanding the space and planning the customer journey to creating the design and bringing it to life, we manage the process with a clear focus on the business.
              </p>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] font-semibold">
                We believe a successful outlet needs more than good design. It needs to look right, work efficiently, attract customers, and support long-term growth. That is why every project we take on is planned around both experience and business performance.
              </p>
            </div>
          </div>
        </section>

        {/* Built Around the Reality */}
        <section className="bg-[#FAF7F2] border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="border border-neutral-200 p-2 sm:p-3">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-neutral-100">
                <Image
                  src="/a2.png"
                  alt="Empty space being built into an outlet"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-10">
                Built Around the Reality of Building Outlets
              </h2>

              <div className="space-y-8">
                <div className="border-l-2 border-[#C0532C] pl-6">
                  <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-2">
                    CHAPTER 01 — THE STARTING POINT
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#1a1a1a] font-normal mb-2">
                    From Empty Space to Business Opportunity
                  </h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#1a1a1a] leading-[1.7]">
                    Every outlet starts with an empty space and a vision. But turning that vision into a successful customer-ready outlet requires more than just good design. Outset Studio was created to bring the different parts of this journey together under one roof.
                  </p>
                </div>

                <div className="border-l-2 border-neutral-200 pl-6">
                  <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-2">
                    CHAPTER 02 — ONE CONNECTED APPROACH
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#1a1a1a] font-normal mb-2">
                    Design, Build &amp; Grow — Together
                  </h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#1a1a1a] leading-[1.7]">
                    We combine outlet design, build and execution, digital setup, and sales growth into one connected process. From planning the space and creating the right customer experience to establishing your digital presence, every step is designed to work together.
                  </p>
                </div>

                <div className="border-l-2 border-neutral-200 pl-6">
                  <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-2">
                    CHAPTER 03 — BUILT FOR WHAT COMES NEXT
                  </span>
                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#1a1a1a] font-normal mb-2">
                    From One Outlet to Lasting Growth
                  </h3>
                  <p className="font-sans text-[13px] sm:text-[14px] text-[#1a1a1a] leading-[1.7]">
                    Our work doesn&apos;t stop when the outlet opens. We help businesses launch with the right foundation, attract customers, improve performance, and build systems that can support future growth — whether that&apos;s one successful outlet or the next location.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-2">
                The Leadership Behind Outset
              </h2>
              <p className="font-sans text-[11px] sm:text-[12px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-8">
                CEO &amp; FOUNDER
              </p>

              <div className="border-l-2 border-[#C0532C] pl-6 mb-8 bg-[#FAF7F2] py-6 pr-6">
                <p className="font-serif text-[16px] sm:text-[18px] text-[#1a1a1a] italic leading-[1.6] mb-4">
                  &ldquo;We don&apos;t just build outlets; we create spaces and strategies that help businesses attract customers and grow.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-[1.5px] bg-[#C0532C]" />
                  <span className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-500 font-medium">
                    MOHD ARIF , CEO &amp; FOUNDER
                  </span>
                </div>
              </div>

              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-5">
                Outset Studio was created with a simple idea — building an outlet should be easier, more connected, and more effective. We bring together design, execution, digital setup, and sales growth to help businesses turn their ideas into customer-ready outlets.
              </p>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-8">
                Our approach goes beyond designing a beautiful space. We think about the complete outlet experience — how it looks, how customers move through it, how the brand is presented online, and how the outlet can perform and grow after launch.
              </p>

              <div className="grid grid-cols-3 gap-4">
                <div className="border border-neutral-200 p-4">
                  <span className="font-serif text-[28px] sm:text-[32px] text-[#1a1a1a] font-normal">4+</span>
                  <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-medium mt-1">
                    CORE SERVICES
                  </p>
                </div>
                <div className="border border-neutral-200 p-4">
                  <span className="font-serif text-[28px] sm:text-[32px] text-[#1a1a1a] font-normal">360°</span>
                  <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-medium mt-1">
                    OUTLET APPROACH
                  </p>
                </div>
                <div className="border border-neutral-200 p-4">
                  <span className="font-serif text-[28px] sm:text-[32px] text-[#1a1a1a] font-normal">8</span>
                  <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.15em] uppercase text-neutral-400 font-medium mt-1">
                    IDEA TO LAUNCH
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-neutral-200 p-2 sm:p-3 self-start">
              <div className="relative w-full aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image
                  src="/a3.png"
                  alt="Mohd Arif - CEO & Founder"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Approach & Mission Cards */}
        <section className="bg-[#FAF7F2] border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-neutral-200 bg-white p-8 sm:p-10 border-l-4 border-l-[#1a1a1a]">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-semibold block mb-4">
                OUR APPROACH
              </span>
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal leading-tight mb-6">
                Designing Spaces That Work
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#1a1a1a] leading-[1.7] mb-8">
                At Outset Studio, we believe an outlet should be more than just a good-looking space. It should be designed around the business, the customer, and the experience you want to create. From the layout and customer flow to furniture, lighting, branding, and visual details, we bring every element together to create outlets that are practical, engaging, and built for everyday business.
              </p>
              <div className="border-t border-neutral-200 pt-5">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                  CUSTOMER-FOCUSED DESIGN
                </span>
              </div>
            </div>

            <div className="border border-neutral-200 bg-white p-8 sm:p-10 border-l-4 border-l-[#C0532C]">
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold block mb-4">
                OUR MISSION
              </span>
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal leading-tight mb-6">
                Building More Than Just an Outlet
              </h3>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#1a1a1a] leading-[1.7] mb-8">
                Creating a successful outlet takes more than design alone. We bring outlet design, build &amp; execution, digital setup, and sales growth together under one roof, making the entire process easier and more connected. From an empty space to a launch-ready outlet, we help businesses build a strong foundation that is ready to attract customers, perform better, and grow.
              </p>
              <div className="border-t border-neutral-200 pt-5">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
                  END-TO-END SUPPORT
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="border-t border-neutral-200 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h2 className="font-serif text-[28px] sm:text-3xl md:text-4xl lg:text-[40px] text-[#1a1a1a] font-normal leading-[1.15] tracking-tight mb-5">
                Milestones That Define Our Journey.
              </h2>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
                From building successful outlets to creating a connected design-to-growth approach, every milestone reflects our commitment to helping businesses build better spaces and stronger outlets.
              </p>
            </div>
            <div className="space-y-4">
              <div className="border border-neutral-200 bg-[#FAF7F2] p-6 sm:p-8">
                <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1a1a1a] font-normal mb-3">
                  Growing Across Multiple Business Categories
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-neutral-500 leading-[1.7]">
                  Working with businesses across cafés, QSRs, bakeries, salons, retail, pharmacies, clinics, and other outlet-based businesses.
                </p>
              </div>
              <div className="border border-neutral-200 bg-[#FAF7F2] p-6 sm:p-8">
                <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1a1a1a] font-normal mb-3">
                  Design to Execution, Under One Roof
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-neutral-500 leading-[1.7]">
                  Built an integrated approach that brings outlet design, build &amp; execution, digital setup, and sales growth together through one connected process.
                </p>
              </div>
              <div className="border border-neutral-200 bg-[#FAF7F2] p-6 sm:p-8">
                <h3 className="font-serif text-[18px] sm:text-[20px] text-[#1a1a1a] font-normal mb-3">
                  Building Outlets With a Growth Mindset
                </h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-neutral-500 leading-[1.7]">
                  Going beyond the physical space to help businesses create customer-focused outlets with a strong digital presence and a foundation for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* CTA Banner */}
      <CTASection
        title="Ready to Build Your Outlet?"
        description="Tell us about your business, your space, and what you want to achieve. We'll bring together the right design, execution, digital setup, and growth strategy to help you create a customer-ready outlet."
      />

      <Footer />
    </div>
  );
}
