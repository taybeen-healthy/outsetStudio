"use client";

import { useState, useRef, useEffect, useCallback } from "react";

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
  const [errors, setErrors] = useState({});
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const btnRef = useRef(null);

  const updatePos = useCallback(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setDropdownPos({ top: r.bottom + 4, left: r.left, width: r.width });
    }
  }, []);

  useEffect(() => {
    if (dropdownOpen) {
      setTimeout(updatePos, 0);
    }
  }, [dropdownOpen, updatePos]);

  useEffect(() => {
    if (!dropdownOpen) return;
    const onScroll = () => updatePos();
    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onScroll);
    };
  }, [dropdownOpen, updatePos]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((f) => ({ ...f, [e.target.name]: "" }));
  };

  const toggleService = (svc) => {
    setForm((f) => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter((s) => s !== svc)
        : [...f.services, svc],
    }));
    setErrors((f) => ({ ...f, services: "" }));
    setDropdownOpen(false);
  };

  const removeService = (svc) =>
    setForm((f) => ({ ...f, services: f.services.filter((s) => s !== svc) }));

  const canSubmit = form.vendorName && form.gstNumber && form.services.length > 0;

  const validate = () => {
    const errs = {};
    if (!form.vendorName.trim()) errs.vendorName = "Vendor name is required";
    if (!form.gstNumber.trim()) {
      errs.gstNumber = "GST number is required";
    } else if (!/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(form.gstNumber.replace(/\s/g, ""))) {
      errs.gstNumber = "Enter a valid 15-digit GST number";
    }
    if (form.services.length === 0) errs.services = "Select at least one service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full sm:max-w-[720px] h-[100dvh] sm:h-auto sm:max-h-[90vh] bg-[#FAF9F7] sm:shadow-2xl flex flex-col sm:overflow-hidden">
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
          <div className="flex-1 flex items-center justify-center px-8 sm:px-12 py-10 text-center">
            <div>
              <div className="w-16 h-16 mx-auto flex items-center justify-center bg-[#F5EDE8] rounded-full">
                <svg className="w-7 h-7 text-[#C0532C]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-[#1a1a1a] text-[32px] sm:text-[38px] leading-tight mt-6 mb-3">
                Thank you, {form.vendorName || "there"}.
              </h2>
              <p className="font-sans text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-md mx-auto mb-10">
                We&apos;ve received your project brief and will review your details within 24 hours.
              </p>
              <p className="font-sans text-xs sm:text-sm tracking-[0.05em] text-neutral-500">
                NEED URGENT HELP?{" "}
                <a href="tel:9898844855" className="text-[#C0532C] font-medium hover:underline cursor-pointer">
                  CALL 9898844855
                </a>
              </p>
            </div>
          </div>
        ) : (
          <>
            {/* Form Content */}
            <div className="flex-1 px-5 sm:px-8 py-6 sm:py-6 sm:overflow-y-auto">
              <div className="max-w-[720px] mx-auto">
                <h1 className="font-serif text-[#1a1a1a] text-[28px] sm:text-[32px] font-normal leading-tight mb-1.5">
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
                      className={`w-full h-12 border bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.vendorName ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                    />
                    {errors.vendorName && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.vendorName}</p>}
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
                      className={`w-full h-12 border bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none uppercase ${errors.gstNumber ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                    />
                    {errors.gstNumber && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.gstNumber}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                      SERVICES PROVIDED <span className="text-[#C0532C]">*</span>
                    </label>

                    <div className="relative">
                      <button
                        ref={btnRef}
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full h-12 border border-neutral-200 bg-white px-4 pr-10 text-left text-sm font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none cursor-pointer flex items-center"
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
                    </div>

                    {errors.services && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.services}</p>}

                    {form.services.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {form.services.map((svc) => (
                          <span
                            key={svc}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C0532C] text-white text-[12px] font-sans font-medium rounded-none"
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
            </div>

            {/* Fixed Footer */}
            <div className="border-t border-neutral-200 px-5 sm:px-8 py-4 flex-shrink-0 bg-[#FAF9F7]">
              <div className="max-w-[720px] mx-auto space-y-3">
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`h-12 w-full font-sans text-[11px] tracking-[0.14em] uppercase font-semibold transition-all bg-[#bf572b] text-white ${!canSubmit ? "opacity-40 cursor-not-allowed" : "hover:bg-[#a34320] cursor-pointer"}`}
                >
                  SUBMIT VENDOR REGISTRATION
                </button>
                <button
                  onClick={onClose}
                  className="h-12 w-full border border-neutral-300 font-sans text-[11px] tracking-[0.14em] uppercase font-semibold text-neutral-700 hover:bg-neutral-100 transition-all cursor-pointer"
                >
                  CANCEL
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Dropdown portal — renders outside scrollable container */}
      {dropdownOpen && (
        <>
          <div className="fixed inset-0 z-[55]" onClick={() => setDropdownOpen(false)} />
          <div
            className="fixed bg-white border border-neutral-200 shadow-lg max-h-60 overflow-y-auto z-[60]"
            style={{ top: dropdownPos.top, left: dropdownPos.left, width: dropdownPos.width }}
          >
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
        </>
      )}
    </div>
  );
}
