"use client";

import { useState } from "react";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[480px] shadow-2xl overflow-hidden">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Body */}
        <div className="bg-[#FAFAF8] px-8 pt-8 pb-8 space-y-6">
          {/* Header */}
          <div>
            <h2 className="font-serif italic text-[#1a1a1a] text-3xl sm:text-4xl leading-tight">
              Get in Touch
            </h2>
            <p className="font-sans text-sm text-neutral-500 mt-2 leading-relaxed">
              Direct inquiries for commercial architecture, spatial design, and site feasibility.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href="mailto:outsetstudio@gmail.com"
              className="flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-[#B84E29] transition-colors"
            >
              <svg className="w-4 h-4 text-[#B84E29] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              outsetstudio@gmail.com
            </a>
            <a
              href="tel:+919898844855"
              className="flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-[#B84E29] transition-colors"
            >
              <svg className="w-4 h-4 text-[#B84E29] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 98988 44855
            </a>
          </div>

          {/* Divider */}
          <div className="border-t border-neutral-200" />

          {/* Form Fields */}
          <div className="space-y-5">
            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Siddharth Mehra"
                className="w-full h-12 border border-neutral-200 bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#B84E29] transition-colors rounded-none"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                EMAIL OR PHONE *
              </label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                placeholder="siddharth@venture.in or +9198988..."
                className="w-full h-12 border border-neutral-200 bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#B84E29] transition-colors rounded-none"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                MESSAGE / PROJECT SCOPE *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us briefly about your space, location, or goals..."
                className="w-full border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#B84E29] transition-colors resize-none rounded-none"
              />
            </div>
          </div>

          {/* Submit */}
          <button className="w-full h-14 font-sans text-xs tracking-[0.2em] uppercase font-medium text-white bg-[#B84E29] hover:bg-[#a34320] transition-colors rounded-none flex items-center justify-center gap-2.5 mt-2">
            Send Inquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}