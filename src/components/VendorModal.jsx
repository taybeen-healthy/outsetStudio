"use client";

import { useState } from "react";

const serviceOptions = [
  "Interior Design & Fit-out",
  "Civil & Structural Work",
  "Electrical & Lighting",
  "Plumbing & HVAC",
  "Carpentry & Woodwork",
  "Metal & Fabrication",
  "Painting & Wall Treatments",
  "Flooring & Tiling",
  "Signage & Branding",
  "Furniture & Fixtures",
  "MEP Engineering",
  "Other",
];

export default function VendorModal({ onClose }) {
  const [form, setForm] = useState({
    vendorName: "",
    gstNumber: "",
    services: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleService = (svc) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter((s) => s !== svc)
        : [...f.services, svc],
    }));

  const removeService = (svc) =>
    setForm((f) => ({ ...f, services: f.services.filter((s) => s !== svc) }));

  const canSubmit = form.vendorName && form.gstNumber && form.services.length > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[720px] max-h-[100dvh] sm:max-h-[90vh] bg-[#FAF9F7] shadow-2xl flex flex-col overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-5 sm:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#C0532C] flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white font-medium whitespace-nowrap">
                VENDOR REGISTRATION
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {submitted ? (
          <div className="flex-1 px-5 sm:px-8 py-10 sm:py-14 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#C0532C] rounded-full">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif italic text-[#1a1a1a] text-[28px] sm:text-[38px] leading-tight mt-6 mb-2">
              Thank You For Registering
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-md mx-auto mb-8">
              Our team will review your details and reach out to discuss potential project partnerships within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="h-12 px-10 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold bg-[#bf572b] text-white hover:bg-[#a34320] transition-all cursor-pointer"
            >
              DONE
            </button>
          </div>
        ) : (
          <>
            {/* Content */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-6">
              <h1 className="font-serif text-[#1a1a1a] text-[24px] sm:text-[32px] font-normal leading-tight mb-1.5">
                Vendor Registration
              </h1>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-7">
                Partner with Outset Studio for commercial and outlet projects.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    NAME OF THE VENDOR <span className="text-[#C0532C]">*</span>
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={form.vendorName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Woodworks & Fabrication"
                    className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    GST NUMBER <span className="text-[#C0532C]">*</span>
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={form.gstNumber}
                    onChange={handleChange}
                    placeholder="E.G. 07AAFCO2481K1Z3"
                    className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none uppercase"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    SERVICES PROVIDED <span className="text-[#C0532C]">*</span>
                  </label>

                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 pr-10 text-left text-sm font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none cursor-pointer flex items-center"
                    >
                      {form.services.length > 0 ? (
                        <span className="text-neutral-800">
                          {form.services.length} service{form.services.length > 1 ? "s" : ""} selected
                        </span>
                      ) : (
                        <span className="text-neutral-300">Select the services you provide...</span>
                      )}
                    </button>
                    <svg
                      className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 shadow-lg max-h-60 overflow-y-auto z-50">
                        {serviceOptions.map((svc) => {
                          const checked = form.services.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors cursor-pointer border-b border-neutral-100 last:border-0"
                            >
                              <span
                                className={`w-4 h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${
                                  checked ? "bg-[#C0532C] border-[#C0532C]" : "border-neutral-300"
                                }`}
                              >
                                {checked && (
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                              <span className="text-sm font-sans text-neutral-700">{svc}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {form.services.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {form.services.map((svc) => (
                        <span
                          key={svc}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C0532C] text-white text-[12px] sm:text-[13px] font-sans font-medium rounded-none"
                        >
                          {svc}
                          <button
                            type="button"
                            onClick={() => removeService(svc)}
                            className="w-4 h-4 flex items-center justify-center hover:bg-white/20 rounded-sm transition-colors cursor-pointer"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 px-5 sm:px-8 py-3 sm:py-4 flex items-center justify-between flex-shrink-0 bg-[#FAF9F7]">
              <button
                onClick={onClose}
                className="font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-neutral-500 hover:text-[#1a1a1a] transition-colors cursor-pointer"
              >
                CANCEL
              </button>
              <button
                onClick={() => setSubmitted(true)}
                disabled={!canSubmit}
                className={`h-11 sm:h-12 px-8 sm:px-12 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold transition-all ${
                  "bg-[#bf572b] text-white hover:bg-[#a34320]"
                } ${!canSubmit ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
              >
                SUBMIT VENDOR REGISTRATION
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}