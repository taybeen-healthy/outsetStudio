"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

export default function RegisterVendorsPage() {
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
    <div className="relative w-full bg-white overflow-x-hidden font-sans select-none">
      <Navbar />

      <main className="py-16 sm:py-24 lg:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-10 lg:px-14">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#C0532C] rounded-full mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[28px] sm:text-3xl leading-tight mb-3">
                Thank You For Registering
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-md mx-auto mb-8">
                Our team will review your details and reach out within 24 hours.
              </p>
              <Link
                href="/"
                className="inline-block px-10 py-3 font-sans text-[11px] tracking-[0.14em] uppercase font-semibold bg-[#C0532C] text-white hover:bg-[#a34320] transition-all"
              >
                DONE
              </Link>
            </div>
          ) : (
            <>
              <h1 className="font-serif text-[#1a1a1a] text-[32px] sm:text-4xl lg:text-[44px] font-normal leading-[1.15] tracking-tight mb-3">
                Vendor Registration
              </h1>
              <p className="font-sans text-[14px] sm:text-[15px] text-neutral-500 mb-10 sm:mb-14">
                Partner with Outset Studio for commercial and outlet projects.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block font-sans text-[11px] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    NAME OF THE VENDOR <span className="text-[#C0532C]">*</span>
                  </label>
                  <input
                    type="text"
                    name="vendorName"
                    value={form.vendorName}
                    onChange={handleChange}
                    placeholder="e.g. Apex Woodworks & Fabrication"
                    className="w-full h-12 border border-neutral-200 px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    GST NUMBER <span className="text-[#C0532C]">*</span>
                  </label>
                  <input
                    type="text"
                    name="gstNumber"
                    value={form.gstNumber}
                    onChange={handleChange}
                    placeholder="E.G. 07AAFCO2481K1Z3"
                    className="w-full h-12 border border-neutral-200 px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none uppercase"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    SERVICES PROVIDED <span className="text-[#C0532C]">*</span>
                  </label>

                  <div className="relative" style={{ zIndex: dropdownOpen ? 50 : 1 }}>
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full h-12 border border-neutral-200 px-4 pr-10 text-left text-sm font-sans bg-white focus:outline-none focus:border-[#C0532C] transition-colors rounded-none cursor-pointer flex items-center"
                    >
                      <span className={form.services.length > 0 ? "text-neutral-800" : "text-neutral-300"}>
                        {form.services.length > 0
                          ? `${form.services.length} service${form.services.length > 1 ? "s" : ""} selected`
                          : "Select the services you provide..."}
                      </span>
                    </button>
                    <svg className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 shadow-lg max-h-60 overflow-y-auto">
                        {serviceOptions.map((svc) => {
                          const checked = form.services.includes(svc);
                          return (
                            <button
                              key={svc}
                              type="button"
                              onClick={() => toggleService(svc)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors cursor-pointer border-b border-neutral-100 last:border-0"
                            >
                              <span className={`w-4 h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${checked ? "bg-[#C0532C] border-[#C0532C]" : "border-neutral-300"}`}>
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
                        <span key={svc} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C0532C] text-white text-[12px] font-sans font-medium rounded-none">
                          {svc}
                          <button type="button" onClick={() => removeService(svc)} className="w-4 h-4 flex items-center justify-center hover:bg-white/20 rounded-sm transition-colors cursor-pointer">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    disabled={!canSubmit}
                    onClick={() => setSubmitted(true)}
                    className={`h-12 px-10 font-sans text-[11px] tracking-[0.14em] uppercase font-semibold transition-all bg-[#C0532C] text-white ${!canSubmit ? "opacity-40 cursor-not-allowed hover:bg-[#C0532C]" : "hover:bg-[#a34320] cursor-pointer"}`}
                  >
                    SUBMIT VENDOR REGISTRATION
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
