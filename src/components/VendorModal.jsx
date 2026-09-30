"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";

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
    phone: "",
    email: "",
    gstNumber: "",
    services: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [dropdownPos, setDropdownPos] = useState({ top: 0, left: 0, width: 0 });
  const btnRef = useRef(null);
  const pointerStart = useRef(null);

  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  const updatePos = useCallback(() => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - r.bottom;
      const dropdownHeight = 320;
      if (spaceBelow < dropdownHeight && r.top > dropdownHeight) {
        setDropdownPos({ top: r.top - dropdownHeight - 4, left: r.left, width: r.width });
      } else {
        setDropdownPos({ top: r.bottom + 4, left: r.left, width: r.width });
      }
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
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((f) => ({ ...f, [name]: digits }));
    } else if (name === "gstNumber") {
      const cleaned = value.replace(/[^0-9A-Za-z]/g, "").slice(0, 15).toUpperCase();
      setForm((f) => ({ ...f, [name]: cleaned }));
    } else if (name === "vendorName") {
      setForm((f) => ({ ...f, [name]: value.slice(0, 100) }));
    } else if (name === "email") {
      setForm((f) => ({ ...f, [name]: value.slice(0, 100) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    setErrors((f) => ({ ...f, [name]: "" }));
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

  const canSubmit = form.vendorName && form.phone && form.services.length > 0;

  const validate = () => {
    const errs = {};
    if (!form.vendorName.trim()) errs.vendorName = "Vendor name is required";
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ""))) {
      errs.phone = "Enter a valid 10-digit Indian phone number";
    }
    if (form.services.length === 0) errs.services = "Select at least one service";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    try {
      const res = await fetch("/api/vendors", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
      onPointerDown={(e) => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
      onPointerUp={(e) => {
        if (!pointerStart.current) return;
        const dx = Math.abs(e.clientX - pointerStart.current.x);
        const dy = Math.abs(e.clientY - pointerStart.current.y);
        pointerStart.current = null;
        if (dx < 5 && dy < 5 && e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full sm:max-w-[780px] h-[100dvh] sm:h-[calc(100dvh-2rem)] bg-[#FAF9F7] sm:shadow-2xl flex flex-col overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-4 sm:px-8 pt-[clamp(10px,2.2vh,22px)] pb-[clamp(8px,1.8vh,18px)] flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#C0532C] flex-shrink-0" />
              <span className="font-sans text-[clamp(10px,1.6vh,12px)] tracking-[0.2em] uppercase text-white font-medium whitespace-nowrap">
                VENDOR REGISTRATION
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-[clamp(28px,4.5vh,36px)] h-[clamp(28px,4.5vh,36px)] flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0 cursor-pointer"
            >
              <svg className="w-[clamp(16px,2.6vh,20px)] h-[clamp(16px,2.6vh,20px)]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              <h2 className="font-serif text-[#1a1a1a] text-[clamp(26px,5vh,38px)] leading-tight mt-6 mb-3">
                Thank you, {form.vendorName || "there"}.
              </h2>
              <p className="font-sans text-[clamp(13px,1.9vh,15px)] text-neutral-500 leading-relaxed max-w-md mx-auto mb-10">
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
            <div className="flex-1 min-h-0 overflow-hidden sm:overflow-y-auto flex px-[clamp(16px,5vw,48px)] py-[clamp(6px,2vh,24px)]">
              <div className="w-full max-w-[720px] mx-auto my-auto">
                <h1 className="font-serif text-[#1a1a1a] text-[clamp(19px,4.4vh,34px)] font-normal leading-tight mb-1">
                  Vendor Registration
                </h1>
                <p className="font-sans text-[clamp(12px,1.9vh,15px)] text-neutral-500 mb-[clamp(6px,2vh,26px)]">
                  Partner with Outset Studio for commercial and outlet projects.
                </p>

                <div className="space-y-[clamp(6px,1.5vh,20px)]">
                  <div>
                    <label className="block font-sans text-[clamp(10px,1.5vh,12px)] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-[clamp(4px,0.8vh,8px)]">
                      NAME OF THE VENDOR <span className="text-[#C0532C]">*</span>
                    </label>
                    <input
                      type="text"
                      name="vendorName"
                      value={form.vendorName}
                      onChange={handleChange}
                      placeholder="e.g. Apex Woodworks & Fabrication"
                      className={`w-full h-[clamp(34px,6vh,52px)] border bg-white px-4 text-[clamp(13px,1.9vh,15px)] text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.vendorName ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                    />
                    {errors.vendorName && <p className="font-sans text-[clamp(10px,1.4vh,12px)] text-red-500 mt-1">{errors.vendorName}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(8px,1.6vh,20px)]">
                    <div>
                      <label className="block font-sans text-[clamp(10px,1.5vh,12px)] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-[clamp(4px,0.8vh,8px)]">
                        EMAIL ADDRESS
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="e.g. contact@apexwoodworks.com"
                        className={`w-full h-[clamp(34px,6vh,52px)] border bg-white px-4 text-[clamp(13px,1.9vh,15px)] text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.email ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                      />
                      {errors.email && <p className="font-sans text-[clamp(10px,1.4vh,12px)] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block font-sans text-[clamp(10px,1.5vh,12px)] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-[clamp(4px,0.8vh,8px)]">
                        PHONE NUMBER <span className="text-[#C0532C]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        placeholder="e.g. +91 98765 43210"
                        inputMode="numeric"
                        className={`w-full h-[clamp(34px,6vh,52px)] border bg-white px-4 text-[clamp(13px,1.9vh,15px)] text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.phone ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                      />
                      {errors.phone && <p className="font-sans text-[clamp(10px,1.4vh,12px)] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block font-sans text-[clamp(10px,1.5vh,12px)] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-[clamp(4px,0.8vh,8px)]">
                      GST NUMBER
                    </label>
                    <input
                      type="text"
                      name="gstNumber"
                      value={form.gstNumber}
                      onChange={handleChange}
                      placeholder="E.G. 07AAFCO2481K1Z3"
                      className={`w-full h-[clamp(34px,6vh,52px)] border bg-white px-4 text-[clamp(13px,1.9vh,15px)] text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none uppercase ${errors.gstNumber ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#C0532C]"}`}
                    />
                    {errors.gstNumber && <p className="font-sans text-[clamp(10px,1.4vh,12px)] text-red-500 mt-1">{errors.gstNumber}</p>}
                  </div>

                  <div>
                    <label className="block font-sans text-[clamp(10px,1.5vh,12px)] font-semibold tracking-[0.12em] text-[#1a1a1a] mb-[clamp(4px,0.8vh,8px)]">
                      SERVICE PROVIDED <span className="text-[#C0532C]">*</span>
                    </label>

                    <div className="relative">
                      <button
                        ref={btnRef}
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full h-[clamp(34px,6vh,52px)] border border-neutral-200 bg-white px-4 pr-10 text-left text-[clamp(13px,1.9vh,15px)] font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none cursor-pointer flex items-center"
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

                    {errors.services && <p className="font-sans text-[clamp(10px,1.4vh,12px)] text-red-500 mt-1">{errors.services}</p>}

                    {form.services.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-[clamp(6px,1vh,12px)]">
                        {form.services.map((svc) => (
                          <span
                            key={svc}
                            className="inline-flex items-center gap-1.5 px-2.5 py-[clamp(3px,0.6vh,6px)] bg-[#C0532C] text-white text-[clamp(10px,1.5vh,12px)] font-sans font-medium rounded-none"
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
            <div className="border-t border-neutral-200 px-[clamp(16px,5vw,48px)] py-[clamp(8px,1.8vh,18px)] flex-shrink-0 bg-[#FAF9F7]">
              <div className="max-w-[720px] mx-auto flex flex-col-reverse lg:flex-row items-stretch lg:items-center justify-between gap-2.5 lg:gap-3">
                <button
                  onClick={onClose}
                  className="min-h-[clamp(36px,6vh,50px)] w-full lg:w-auto px-6 lg:px-8 py-2.5 flex items-center justify-center text-center whitespace-nowrap border border-neutral-300 font-sans text-[clamp(10px,1.5vh,12px)] tracking-[0.14em] uppercase font-semibold text-neutral-700 hover:bg-neutral-100 transition-all cursor-pointer"
                >
                  CANCEL
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`min-h-[clamp(36px,6vh,50px)] w-full lg:w-auto px-6 lg:px-8 py-2.5 flex items-center justify-center text-center whitespace-nowrap font-sans text-[clamp(10px,1.5vh,12px)] tracking-[0.14em] uppercase font-semibold transition-all bg-[#bf572b] text-white ${!canSubmit ? "opacity-40 cursor-not-allowed" : "hover:bg-[#a34320] cursor-pointer"}`}
                >
                  SUBMIT VENDOR REGISTRATION
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Dropdown portal — renders outside scrollable container */}
      {dropdownOpen && (
        <>
          <div className="fixed inset-0 z-[10000]" onClick={() => setDropdownOpen(false)} />
          <div
            className="fixed bg-white border border-neutral-200 shadow-lg max-h-[320px] overflow-y-auto z-[10001]"
            style={{
              top: dropdownPos.top,
              left: dropdownPos.left,
              width: Math.min(dropdownPos.width, window.innerWidth - 16),
            }}
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

  if (typeof window === "undefined") return null;
  return createPortal(content, document.body);
}
