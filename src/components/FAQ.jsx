"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a typical project cost?",
    a: "Project costs vary depending on the size, location, scope, and requirements of the space. After understanding your project and visiting the site, we provide a project-specific estimate.",
  },
  {
    q: "How long does a typical project take?",
    a: "A standard outlet project takes 8–14 weeks from concept to handover, depending on scale, site conditions, and complexity. We provide a detailed timeline during the discovery phase.",
  },
  {
    q: "Do you work outside Delhi-NCR?",
    a: "Yes. While our studio is based in Gurugram, we execute projects across Delhi NCR, Mumbai, Bangalore, and other major cities. We have a trusted network of vendors and site supervisors nationwide.",
  },
  {
    q: "Do you handle licensing and civil approvals?",
    a: "Yes. Outset Studio assists with all necessary licensing, civil approvals, and regulatory compliance required for your project. We coordinate with local authorities to ensure smooth approvals.",
  },
  {
    q: "Do you provide both design and execution?",
    a: "Yes. Outset Studio provides complete turnkey execution — from initial concept and architectural design through civil works, MEP coordination, custom furniture, signage, and final handover. We manage every trade under one roof.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full bg-[#FAF7F2] py-16 sm:py-24 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="font-serif text-[#1a1a1a] text-[28px] sm:text-4xl lg:text-[44px] leading-[1.2] tracking-tight text-center mb-3 sm:mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-sans text-sm sm:text-[15px] text-neutral-500 font-normal leading-relaxed text-center max-w-xl mx-auto mb-10 sm:mb-14">
          Everything you need to know about commissioning, timelines, architectural scope, and turnkey execution with Outset Studio.
        </p>

        {/* Mobile: cards */}
        <div className="sm:hidden space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border border-neutral-200 bg-white">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-start justify-between p-5 text-left gap-4 cursor-pointer"
                >
                  <span className="font-serif text-[#1a1a1a] text-[17px] leading-snug">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-5 h-5 mt-0.5 flex items-center justify-center text-[#C0532C] text-lg font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 px-5 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-[13px] text-neutral-500 leading-[1.7]">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Desktop: line separators */}
        <div className="hidden sm:block border-t border-neutral-200">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-neutral-200">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between py-5 sm:py-6 text-left gap-4 group cursor-pointer"
                >
                  <span className="font-serif text-[#1a1a1a] text-xl lg:text-[22px] leading-snug group-hover:text-[#C0532C] transition-colors">
                    {faq.q}
                  </span>
                  <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center text-[#C0532C] text-xl font-light">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 pb-5 sm:pb-6" : "max-h-0"
                  }`}
                >
                  <p className="font-sans text-sm sm:text-[15px] text-neutral-500 leading-[1.7] pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
