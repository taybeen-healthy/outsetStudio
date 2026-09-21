import Link from "next/link";
import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Please read these terms carefully before using our website or engaging with our architectural and spatial advisory services.",
};

export default function TermsPage() {
  return (
    <div className="relative w-full bg-[#FAF7F2] overflow-x-hidden font-sans select-none">
      <Navbar />

      <main className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#C0532C] rounded-full flex-shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold">
              TERMS &amp; CONDITIONS
            </span>
          </div>
          <h1 className="font-serif text-[36px] sm:text-5xl md:text-6xl text-[#1a1a1a] font-normal leading-[1.1] tracking-tight mb-6">
            Our Terms,<br />
            <span className="italic">Clearly Defined.</span>
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] max-w-2xl">
            Please read these terms carefully before using our website or engaging with our architectural and spatial advisory services.
          </p>
        </div>

        {/* Info Bar */}
        <div className="border-t border-b border-neutral-200 py-6 mb-16 grid grid-cols-2 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              EFFECTIVE DATE
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              9 AUG 2026
            </span>
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              LAST UPDATED
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              17 SEP 2026
            </span>
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              JURISDICTION
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              NEW DELHI / NCR
            </span>
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              PRIVACY ENQUIRIES
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              9898844855
            </span>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {/* 01 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">01 //</span>
              <span>Introduction</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              These Terms &amp; Conditions govern your use of the Atelier Studio website and the services provided through it. By accessing this website or engaging with us, you acknowledge that you have read, understood, and agreed to these terms.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              If you do not agree with any part of these terms, please refrain from using the website or submitting an enquiry.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 02 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">02 //</span>
              <span>Website Use</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              The content available on this website is provided for general information and may be updated, changed, or removed without prior notice.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              <strong>You agree to use the website only for lawful purposes and not to:</strong>
            </p>
            <ul className="space-y-2">
              {["Misuse or interfere with the website.", "Attempt to gain unauthorised access to any part of the website.", "Copy, reproduce, or distribute website content without permission.", "Use our content or materials for misleading or unauthorised commercial purposes."].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                  <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 03 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">03 //</span>
              <span>Services &amp; Enquiries</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Information presented on this website is intended to provide an overview of our work and does not constitute a binding offer or agreement.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Submitting an enquiry does not automatically create a client relationship. Any engagement, scope of work, fees, timelines, deliverables, and responsibilities will be confirmed separately through a formal agreement.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 04 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">04 //</span>
              <span>Project Information</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Project images, descriptions, specifications, timelines, and other details displayed on the website may represent completed, ongoing, or illustrative work.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              While we aim to keep information accurate, individual project requirements and outcomes may vary.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 05 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">05 //</span>
              <span>Intellectual Property</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              All website content, including photographs, project imagery, layouts, written content, graphics, visual elements, logos, and other materials, belongs to Atelier Studio or its respective rights holders unless otherwise stated.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              You may view the content for personal or informational purposes. No material may be reproduced, modified, published, distributed, or commercially used without prior written permission.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 06 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">06 //</span>
              <span>Third-Party Links</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Our website may occasionally contain links or references to third-party websites or services.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              These websites are operated independently, and we are not responsible for their content, availability, privacy practices, or terms.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 07 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">07 //</span>
              <span>Privacy</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              Any personal information submitted through our website, such as your name, contact details, or project information, will be handled in accordance with our Privacy Policy.
            </p>
            <Link href="/privacy" className="font-sans text-[14px] text-[#C0532C] hover:underline cursor-pointer">
              Privacy Policy &rarr;
            </Link>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 08 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">08 //</span>
              <span>Limitation of Liability</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              We make reasonable efforts to maintain accurate and reliable website content. However, we do not guarantee that the website will always be uninterrupted, error-free, or completely current.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              To the extent permitted by applicable law, Atelier Studio shall not be liable for losses arising solely from reliance on general information provided through this website.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 09 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">09 //</span>
              <span>Changes to These Terms</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              We may revise these Terms &amp; Conditions from time to time to reflect changes to our website, services, or legal requirements.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Any updated version will be published on this page with the revised effective date.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 10 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">10 //</span>
              <span>Governing Law</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              These Terms &amp; Conditions shall be governed by and interpreted in accordance with the applicable laws of India.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Any disputes arising in connection with these terms shall be subject to the jurisdiction of the courts applicable to New Delhi / Delhi NCR.
            </p>
          </section>

          <div className="border-t border-neutral-200" />

          {/* 11 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">11 //</span>
              <span>Questions About These Terms?</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-6">
              If you have questions regarding these Terms &amp; Conditions, please contact us.
            </p>

            <div className="border border-neutral-200 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-neutral-200">
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
                    EMAIL ADVISORY
                  </span>
                  <span className="font-sans text-[14px] text-[#1a1a1a] font-semibold">
                    outsetstudio@gmail.com
                  </span>
                </div>
                <div className="p-6">
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
                    STUDIO TELEPHONE
                  </span>
                  <span className="font-sans text-[14px] text-[#1a1a1a] font-semibold">
                    9898844855
                  </span>
                </div>
              </div>
              <div className="border-t border-neutral-200 p-6">
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
                  COORDINATES
                </span>
                <span className="font-sans text-[14px] text-[#1a1a1a] font-semibold">
                  Delhi NCR
                </span>
              </div>
              <div className="border-t border-neutral-200 p-6 flex flex-col sm:flex-row sm:justify-between gap-2">
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-500 font-medium">
                  EFFECTIVE DATE: 9 AUGUST 2026
                </span>
                <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-500 font-medium">
                  LAST UPDATED: 17 SEPTEMBER 2026
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* CTA Banner */}
      <CTASection
        title="Ready to Transform Your Space?"
        description="Tell us about your brand, your space, and where you want to go. We'll turn your vision into an attractive outlet built to perform and grow."
      />

      <Footer />
    </div>
  );
}
