import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "About",
  description:
    "Outset Studio transforms commercial spaces into distinctive environments that bring together brand, customer experience, and business goals.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full bg-[#0c0d0e] overflow-x-hidden font-sans select-none">
      <main>
        {/* Hero section wrapper */}
        <div className="relative min-h-screen flex flex-col pb-16 sm:pb-20">
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <Image
              src="/image 11.svg"
              alt="Outset Studio about hero"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/50 pointer-events-none" />
          </div>

          {/* Navigation Header */}
          <Navbar />

          {/* About Hero Content */}
          <section className="relative z-10 flex-1 flex flex-col items-start justify-center px-7 sm:px-10 lg:px-14 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto w-full">
              {/* Main Headline */}
              <h1 className="font-serif font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] xl:text-[68px] leading-[1.16] tracking-tight drop-shadow-md mt-4 mb-6">
                We Design Spaces That<br />
                Move Businesses Forward.
              </h1>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-[17px] lg:text-[18px] text-white/95 font-normal max-w-2xl leading-relaxed sm:leading-[1.7] tracking-normal mb-8">
                Outset Studio transforms commercial spaces into distinctive
                environments that bring together brand, customer experience,
                and business goals.
              </p>

              {/* CTA Button */}
              <Link
                href="/#our-work"
                className="inline-flex items-center justify-center px-8 py-3 text-sm tracking-wider uppercase text-white border border-white/80 hover:border-white bg-transparent hover:bg-white hover:text-[#0c0d0e] transition-all duration-300 rounded-none"
              >
                Explore Our Work
              </Link>
            </div>
          </section>
        </div>

        {/* More Than Just Design Section */}
        <section className="w-full bg-[#f5f5f5] py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Text Content */}
            <div className="max-w-xl">
              <h2 className="font-serif text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-tight mb-8">
                More Than Just
                <br />
                Design.
              </h2>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7] mb-5">
                We believe a successful space should do more than look
                good. It should support the people who use it, strengthen the
                brand behind it, and help the business grow.
              </p>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7]">
                From the first idea to the final execution, we bring strategy,
                design, and functionality together to create spaces with
                lasting value.
              </p>
            </div>

            {/* Right: Image */}
            <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 aspect-[560/385] overflow-hidden">
              <Image
                src="/Image (12).svg"
                alt="Cafe interior with chairs and table"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Every Great Space Starts With Understanding Section */}
        <section className="w-full bg-white py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Image */}
            <div className="relative w-full max-w-[560px] mx-auto lg:mx-0 aspect-[560/385] overflow-hidden order-2 lg:order-1">
              <Image
                src="/Image13.svg"
                alt="Outdoor garden cafe with seating"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Right: Text Content */}
            <div className="max-w-xl order-1 lg:order-2">
              <h2 className="font-serif text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-tight mb-8">
                Every Great Space Starts
                <br />
                With Understanding.
              </h2>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7] mb-5">
                No two businesses are the same. That&apos;s why we begin by
                understanding your goals, customers, operations, and vision
                before creating the right solution for your space.
              </p>
              <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed sm:leading-[1.7]">
                Our work is built around one simple idea: design should have
                a purpose.
              </p>
            </div>
          </div>
        </section>

        {/* Designed With Purpose Section */}
        <section className="w-full bg-[#f5f5f5] py-20 sm:py-28 lg:py-32">
          <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14">
            {/* Heading */}
            <h2 className="font-serif text-[#1a1a1a] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-[1.15] tracking-tight mb-14 sm:mb-20">
              Designed With Purpose.
              <br />
              Built for Impact.
            </h2>

            {/* 4 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
              <div>
                <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">01</span>
                <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Strategic Thinking</h3>
                <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                  We understand the business before we begin designing the space.
                </p>
              </div>
              <div>
                <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">02</span>
                <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Thoughtful Design</h3>
                <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                  We create environments that reflect your brand and connect with your customers.
                </p>
              </div>
              <div>
                <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">03</span>
                <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Practical Execution</h3>
                <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                  Every idea is developed with functionality, quality, and real-world delivery in mind.
                </p>
              </div>
              <div>
                <span className="font-serif text-[#bf572b] text-3xl sm:text-4xl font-light">04</span>
                <h3 className="font-serif text-[#1a1a1a] text-xl sm:text-2xl font-bold mt-3 mb-3">Long-Term Value</h3>
                <p className="text-sm sm:text-base text-[#2c2c2c] font-normal leading-relaxed">
                  We create spaces designed to support your business today and as it grows.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
