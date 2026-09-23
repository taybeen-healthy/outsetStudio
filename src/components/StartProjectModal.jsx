"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

const spaceTypes = [
  { id: "cafe", title: "Café & Roastery", sub: "Speciality coffee, artisan bakery & QSR", icon: "cafe" },
  { id: "restaurant", title: "Restaurant & Bar", sub: "Fine dining, bistro & experiential lounge", icon: "restaurant" },
  { id: "retail", title: "Retail & Showroom", sub: "Apparel, flagship stores & boutique retail", icon: "retail" },
  { id: "office", title: "Office & Workspace", sub: "Corporate HQ, tech hubs & studios", icon: "office" },
  { id: "salon", title: "Salon & Wellness", sub: "Luxury salon, spa, clinics & fitness", icon: "salon" },
  { id: "hospitality", title: "Hospitality & Other", sub: "Boutique stays, resorts & custom venues", icon: "hospitality" },
];

const sizeOptions = [
  { value: "Under 1,000", sub: "sq.ft" },
  { value: "1,000 – 3,500", sub: "sq.ft (Standard)" },
  { value: "3,500 – 10,000", sub: "sq.ft" },
  { value: "10,000+", sub: "sq.ft (Flagship)" },
];

const budgetOptions = [
  { value: "Under ₹15L", sub: "Boutique" },
  { value: "₹15L – ₹35L", sub: "Mid-size" },
  { value: "₹35L – ₹75L", sub: "Turnkey" },
  { value: "₹75L+ / Custom", sub: "Large-scale" },
];

const cityOptions = [
  "Gurugram, Haryana",
  "Delhi, NCR",
  "Noida, UP",
  "Mumbai, Maharashtra",
  "Bangalore, Karnataka",
  "Pune, Maharashtra",
  "Hyderabad, Telangana",
  "Chennai, Tamil Nadu",
  "Other",
];

function SpaceIcon({ type, active }) {
  const cls = `w-5 h-5 ${active ? "text-[#bf572b]" : "text-[#6b5e54]"}`;
  switch (type) {
    case "cafe":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
        </svg>
      );
    case "restaurant":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.379a48.474 48.474 0 00-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12" />
        </svg>
      );
    case "retail":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0V6a3 3 0 013-3h9a3 3 0 013 3v3.349" />
        </svg>
      );
    case "office":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
        </svg>
      );
    case "salon":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      );
    case "hospitality":
      return (
        <svg className={cls} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
        </svg>
      );
    default:
      return null;
  }
}

export default function StartProjectModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    spaceType: "",
    size: "",
    budget: "",
    name: "",
    phone: "",
    city: cityOptions[0],
    email: "",
  });

  const totalSteps = 3;

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

  const canNext =
    step === 1
      ? form.spaceType
      : step === 2
      ? form.size && form.budget
      : form.name && form.phone;

  const content = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[860px] max-h-[100dvh] sm:max-h-[90vh] bg-[#FAF9F7] shadow-2xl flex flex-col overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-5 sm:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#bf572b] flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase text-white font-medium whitespace-nowrap">
                OUTSET STUDIO
              </span>
              {!submitted && step === 1 && (
                <>
                  <span className="w-1 h-1 bg-white/40 rounded-full mx-0.5 flex-shrink-0" />
                  <span className="font-sans text-[11px] sm:text-xs text-white/50 whitespace-nowrap">
                    Start a Project
                  </span>
                </>
              )}
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
          <div className="flex-1 px-5 sm:px-8 py-10 sm:py-14 text-center flex flex-col items-center justify-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#bf572b] rounded-full">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif italic text-[#1a1a1a] text-[30px] sm:text-[40px] leading-tight tracking-tight mt-6 mb-2">
              Thank You, {form.name}
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-500 leading-relaxed max-w-md mx-auto mb-8">
              We&apos;ve received your project details. Our team will reach out
              within 24 hours with initial ideas tailored to your space.
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
            {/* Progress Bar */}
            <div className="px-5 sm:px-8 pt-3 sm:pt-4 pb-0 flex-shrink-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex-1 flex gap-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`h-[3px] flex-1 transition-colors duration-500 ${
                        step > i ? "bg-[#bf572b]" : "bg-neutral-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-neutral-500 font-medium flex-shrink-0">
                  STEP {step} OF {totalSteps}
                </span>
              </div>
            </div>

        {/* Step Content */}
        <div className="flex-1 px-5 sm:px-8 py-4 sm:py-6 overflow-y-auto modal-scroll">
          {/* Step 1: Space Type */}
          {step === 1 && (
            <div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[40px] leading-[1.15] tracking-tight mb-1 sm:mb-2">
                What are you designing?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-4 sm:mb-6">
                Select your commercial space type to get started.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {spaceTypes.map((t) => {
                  const active = form.spaceType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, spaceType: t.id }))}
                      className={`relative text-left p-3 sm:p-4 border transition-all cursor-pointer ${
                        active
                          ? "border-[#bf572b] bg-white"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className={`w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center ${active ? "bg-[#fdf5f0]" : "bg-[#f0ebe5]"}`}>
                          <SpaceIcon type={t.icon} active={active} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="text-[13px] sm:text-[15px] font-sans font-semibold text-[#1a1a1a] block">
                            {t.title}
                          </span>
                          <span className="text-xs sm:text-[13px] font-sans text-neutral-400 block mt-0.5 leading-relaxed">
                            {t.sub}
                          </span>
                        </div>
                        {active && (
                          <span className="w-2.5 h-2.5 bg-[#bf572b] rounded-full flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Size & Budget */}
          {step === 2 && (
            <div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[40px] leading-[1.15] tracking-tight mb-1 sm:mb-2">
                About your project
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-4 sm:mb-5">
                Pick approximate dimensions and budget so we can tailor the timeline.
              </p>

              {/* Size Section */}
              <div className="mb-4 sm:mb-5">
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2 sm:mb-3">
                  1. APPROXIMATE SIZE
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {sizeOptions.map((s) => {
                    const active = form.size === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, size: s.value }))}
                        className={`relative text-left p-3 sm:p-4 border transition-all cursor-pointer ${
                          active
                            ? "border-[#bf572b] bg-white"
                            : "border-neutral-200 bg-white hover:border-neutral-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className={`text-[15px] sm:text-base font-sans font-semibold block ${active ? "text-[#bf572b]" : "text-[#1a1a1a]"}`}>
                              {s.value}
                            </span>
                            <span className={`text-xs sm:text-[13px] font-sans block mt-1 ${active ? "text-[#bf572b]" : "text-neutral-400"}`}>
                              {s.sub}
                            </span>
                          </div>
                          {active && (
                            <span className="w-2.5 h-2.5 bg-[#bf572b] rounded-full flex-shrink-0 mt-0.5" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Section */}
              <div>
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2 sm:mb-3">
                  2. ESTIMATED BUDGET
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                  {budgetOptions.map((b) => {
                    const active = form.budget === b.value;
                    return (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b.value }))}
                        className={`relative text-left p-3 sm:p-4 border transition-all cursor-pointer ${
                          active
                            ? "border-[#bf572b] bg-white"
                            : "border-neutral-200 bg-white hover:border-neutral-300"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className={`text-[15px] sm:text-base font-sans font-semibold block ${active ? "text-[#bf572b]" : "text-[#1a1a1a]"}`}>
                              {b.value}
                            </span>
                            <span className={`text-xs sm:text-[13px] font-sans block mt-1 ${active ? "text-[#bf572b]" : "text-neutral-400"}`}>
                              {b.sub}
                            </span>
                          </div>
                          {active && (
                            <span className="w-2.5 h-2.5 bg-[#bf572b] rounded-full flex-shrink-0 mt-0.5" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Contact Info */}
          {step === 3 && (
            <div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[40px] leading-[1.15] tracking-tight mb-1 sm:mb-2">
                Where can we reach you?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-4 sm:mb-5">
                We&apos;ll review your details and respond with initial ideas within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    FULL NAME <span className="text-[#bf572b]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value.slice(0, 80) }))}
                    maxLength={80}
                    placeholder="Aarav Mehta"
                    className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 text-sm text-[#1a1a1a] placeholder-neutral-300 font-sans focus:outline-none focus:border-[#bf572b] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    PHONE NUMBER <span className="text-[#bf572b]">*</span>
                  </label>
                  <div className="flex h-11 sm:h-12 border border-neutral-200 bg-white focus-within:border-[#bf572b] transition-colors">
                    <div className="flex items-center gap-1 px-3 border-r border-neutral-200 bg-neutral-50">
                      <span className="text-sm text-[#1a1a1a] font-sans">+91</span>
                      <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                        setForm((f) => ({ ...f, phone: digits }));
                      }}
                      maxLength={10}
                      inputMode="numeric"
                      placeholder="98765 43210"
                      className="flex-1 bg-transparent px-4 text-sm text-[#1a1a1a] placeholder-neutral-300 font-sans outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    CITY OR LOCATION <span className="text-[#bf572b]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.city}
                      onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                      className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 pr-8 text-sm text-[#1a1a1a] font-sans focus:outline-none focus:border-[#bf572b] appearance-none transition-colors cursor-pointer"
                    >
                      {cityOptions.map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-1.5 sm:mb-2">
                    EMAIL ADDRESS <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="name@brand.com"
                    className="w-full h-11 sm:h-12 border border-neutral-200 bg-white px-4 text-sm text-[#1a1a1a] placeholder-neutral-300 font-sans focus:outline-none focus:border-[#bf572b] transition-colors"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 px-5 sm:px-8 py-3 sm:py-4 flex items-center justify-between flex-shrink-0 bg-[#FAF9F7]">
          <button
            onClick={step === 1 ? onClose : () => setStep((s) => s - 1)}
            className="font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-neutral-500 hover:text-[#1a1a1a] transition-colors cursor-pointer"
          >
            {step === 1 ? "CANCEL" : "BACK"}
          </button>
          <button
            onClick={() => {
              if (step < totalSteps) setStep((s) => s + 1);
              else setSubmitted(true);
            }}
            disabled={!canNext}
            className={`h-11 sm:h-12 px-8 sm:px-12 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold transition-all ${
              "bg-[#bf572b] text-white hover:bg-[#a34320]"
            } ${!canNext ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {step === totalSteps ? "SUBMIT" : "CONTINUE"}
          </button>
        </div>
        </>
      )}
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;
  return createPortal(content, document.body);
}
