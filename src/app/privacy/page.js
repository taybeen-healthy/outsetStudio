import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTABannerInline from "@/components/CTABannerInline";

export const metadata = {
  title: "Privacy Policy & Client Terms",
  description:
    "This Privacy Policy and Terms of Engagement explains what information we collect, how we use it, and your choices when you interact with Outset Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="relative w-full bg-[#FAF7F2] overflow-x-hidden font-sans select-none">
      <Navbar />

      <main className="max-w-4xl mx-auto px-5 sm:px-10 lg:px-14 pt-16 sm:pt-24 pb-20">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 bg-[#C0532C] rounded-full flex-shrink-0" />
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C0532C] font-semibold">
              PRIVACY POLICY &amp; CLIENT TERMS
            </span>
          </div>
          <h1 className="font-serif text-[36px] sm:text-5xl md:text-6xl text-[#1a1a1a] font-normal leading-[1.1] tracking-tight mb-6">
            Your Privacy,<br />
            <span className="italic">Handled With Care.</span>
          </h1>
          <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] max-w-2xl">
            This Privacy Policy and Terms of Engagement explains what information we collect, how we use it, client engagement obligations, and the choices available to you when you interact with Outset Studio.
          </p>
        </div>

        {/* Info Bar */}
        <div className="border-t border-b border-neutral-200 py-6 mb-16 grid grid-cols-2 gap-6">
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              EFFECTIVE DATE
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              9 AUG 2024
            </span>
          </div>
          <div>
            <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
              LAST UPDATED
            </span>
            <span className="font-sans text-[13px] text-[#1a1a1a] font-semibold">
              12 SEP 2024
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
              9898834855
            </span>
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {/* 01 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">01//</span>
              <span>Information We Collect</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              We may collect information that you voluntarily provide when you contact us, submit an enquiry, request information, or communicate with our studio.
            </p>
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-neutral-500 font-semibold mb-3">
              THIS MAY INCLUDE:
            </p>
            <ul className="space-y-2">
              {["Name", "Email address", "Phone number", "Project or enquiry details", "Any other information you choose to provide"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                  <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 02 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">02//</span>
              <span>Information Collected Automatically</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              When you visit our website, certain technical information may be collected automatically.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              This may include information such as your IP address, browser type, device information, pages visited, and general website usage data.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              This information helps us understand how the website is used and maintain its performance.
            </p>
          </section>

          {/* 03 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">03//</span>
              <span>How We Use Your Information</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              Information we collect may be used to:
            </p>
            <ul className="space-y-2">
              {["Respond to enquiries and requests", "Communicate with you about potential or ongoing work", "Provide information you have requested", "Improve our website and user experience", "Maintain website security", "Meet applicable legal or regulatory requirements"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                  <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 04 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">04//</span>
              <span>Cookies</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Our website may use cookies and similar technologies to support website functionality, understand website usage, and improve your browsing experience.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              You can manage or restrict cookies through your browser settings. Disabling certain cookies may affect some website functionality.
            </p>
          </section>

          {/* 05 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">05//</span>
              <span>How We Protect Your Information</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              We take reasonable technical and organisational measures to protect personal information from unauthorized access, misuse, alteration, disclosure, or loss.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              However, no method of transmission or electronic storage can be guaranteed to be completely secure.
            </p>
          </section>

          {/* 06 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">06//</span>
              <span>Sharing Your Information</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              We do not sell or rent your personal information.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Information may be shared with trusted service providers where necessary to operate our website, respond to enquiries, provide requested services, or meet legal obligations.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Such information will only be shared where reasonably necessary for these purposes.
            </p>
          </section>

          {/* 07 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">07//</span>
              <span>Third-Party Services &amp; Links</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Our website may contain links to third-party websites or services.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              These third parties operate under their own privacy policies and terms. Outset Studio is not responsible for the privacy practices of external websites.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Where third-party tools are used on our website, their own privacy policies may also apply.
            </p>
          </section>

          {/* 08 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">08//</span>
              <span>Your Rights</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              Depending on applicable law, you may have rights regarding the personal information we hold about you.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              These may include the right to request access, correction, deletion, or information about how your personal data is being used.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              To make a privacy-related request, contact us using the details below.
            </p>
          </section>

          {/* 09 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">09//</span>
              <span>Data Retention</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              We retain personal information only for as long as reasonably necessary for the purposes described in this policy, to maintain business records, or to meet applicable legal obligations.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">10//</span>
              <span>Children&apos;s Privacy</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75]">
              Our website is not intended to knowingly collect personal information from children. If you believe that a child has provided personal information to us, please contact us so that the matter can be reviewed.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">11//</span>
              <span>Changes to This Policy</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-3">
              We may update this Privacy Policy from time to time to reflect changes in our website, services, practices, or legal requirements.
            </p>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              The updated version will be published on this page with a revised &ldquo;Last Updated&rdquo; date.
            </p>
            <Link href="/terms" className="font-sans text-[14px] text-[#C0532C] hover:underline cursor-pointer">
              Terms &amp; Conditions &rarr;
            </Link>
          </section>

          {/* 12 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">12//</span>
              <span>Site Visit Confirmation &amp; Engagement Deposit</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-4">
              Following initial consultation, design brief evaluation, or an on-site client walkthrough visit, client engagement moves into formal project initiation under the following binding terms:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">
                  Scope of work validation and formal approval of architectural specifications
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">
                  Non-negotiable upfront commitment deposit of 60% to 70% of total project value prior to design detailing and procurement
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">
                  Site visit baseline technical validation of structural and MEP parameters
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-[#C0532C] flex-shrink-0 mt-2" />
                <span className="font-sans text-[14px] text-[#1a1a1a] leading-[1.6]">
                  Mobilization of procurement schedules and artisan allocations upon confirmed credit of funds
                </span>
              </li>
            </ul>
            <p className="font-sans text-[12px] sm:text-[13px] text-neutral-500 italic leading-[1.6]">
              *Any customized milestone agreements or deviations must be acknowledged in an explicit written Work Order executed by both parties.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="font-serif text-[24px] sm:text-[28px] text-[#1a1a1a] font-normal mb-4 flex flex-wrap items-baseline gap-x-3">
              <span className="text-[#C0532C] whitespace-nowrap">13//</span>
              <span>Questions &amp; Contact Information</span>
            </h2>
            <p className="font-sans text-[14px] sm:text-[15px] text-[#1a1a1a] leading-[1.75] mb-6">
              If you have questions regarding this Privacy Policy or how your information is handled, please contact our studio secretariat:
            </p>

            <div className="border border-neutral-200 bg-white">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-6 border-b sm:border-b-0 sm:border-r border-neutral-200">
                  <span className="font-sans text-[10px] tracking-[0.15em] uppercase text-neutral-400 font-medium block mb-1">
                    EMAIL ADVISORY
                  </span>
                  <span className="font-sans text-[14px] text-[#1a1a1a] font-semibold">
                    info@outsetstudio.in
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

      <CTABannerInline />

      <Footer />
    </div>
  );
}
