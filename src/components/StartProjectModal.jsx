"use client";

import { useState } from "react";

const spaceTypes = [
  { id: "cafe", title: "CAFÉ & ROASTERY", sub: "Speciality coffee, artisan bakery & QSR", icon: "cafe" },
  { id: "restaurant", title: "RESTAURANT & BAR", sub: "Fine dining, bistro & experiential lounge", icon: "restaurant" },
  { id: "retail", title: "RETAIL & SHOWROOM", sub: "Apparel, flagship stores & boutique retail", icon: "retail" },
  { id: "office", title: "OFFICE & WORKSPACE", sub: "Corporate HQ, tech hubs & studios", icon: "office" },
  { id: "salon", title: "SALON & WELLNESS", sub: "Luxury salon, spa, clinics & fitness", icon: "salon" },
  { id: "hospitality", title: "HOSPITALITY & OTHER", sub: "Boutique stays, resorts & custom venues", icon: "hospitality" },
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

function SpaceIcon({ type }) {
  const cls = "w-5 h-5 text-[#6b5e54]";
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
  const [form, setForm] = useState({
    spaceType: "",
    size: "",
    budget: "",
    name: "",
    phone: "",
    city: "",
    email: "",
  });

  const canNext =
    step === 1
      ? form.spaceType
      : step === 2
      ? form.size && form.budget
      : step === 3
      ? form.name && form.phone && form.city
      : true;

  const totalSteps = 4;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full sm:max-w-[520px] max-h-[100dvh] sm:max-h-[92vh] bg-[#FAF9F7] shadow-2xl flex flex-col sm:rounded-none rounded-t-2xl overflow-hidden">
        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-5 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#bf572b] flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.18em] uppercase text-white font-medium whitespace-nowrap">
                OUTSET STUDIO
              </span>
              <span className="w-1 h-1 bg-white/40 rounded-full mx-0.5 flex-shrink-0" />
              <span className="font-sans text-[11px] sm:text-xs text-white/50 whitespace-nowrap">
                Start a Project
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white transition-colors flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-5 sm:px-6 pt-4 sm:pt-5 pb-0 flex-shrink-0">
          <div className="flex gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-[3px] flex-1 rounded-sm transition-colors duration-500 ${
                  step > i ? "bg-[#bf572b]" : "bg-neutral-200"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 sm:py-7">
          {/* Step 1: Space Type */}
          {step === 1 && (
            <div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[34px] leading-[1.15] tracking-tight mb-2">
                What are you designing?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Select your commercial space type to get started.
              </p>

              <div className="flex flex-col gap-2.5">
                {spaceTypes.map((t) => {
                  const active = form.spaceType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, spaceType: t.id }))}
                      className={`relative text-left p-4 sm:p-5 border transition-all rounded-sm ${
                        active
                          ? "border-[#bf572b] border-l-[3px] bg-white"
                          : "border-neutral-200 bg-white hover:border-neutral-300"
                      }`}
                    >
                      <div className="flex items-start gap-3.5 sm:gap-4">
                        <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center bg-[#f0ebe5] rounded-sm mt-0.5">
                          <SpaceIcon type={t.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2.5 flex-wrap">
                            <span className="text-[13px] sm:text-sm font-sans font-semibold tracking-[0.04em] text-[#1a1a1a]">
                              {t.title}
                            </span>
                            {active && (
                              <span className="inline-flex items-center px-2 py-0.5 bg-[#bf572b] text-white text-[9px] sm:text-[10px] font-sans font-semibold tracking-[0.08em] uppercase rounded-sm">
                                ACTIVE
                              </span>
                            )}
                          </div>
                          <span className="text-xs sm:text-[13px] font-sans text-neutral-400 block mt-1 leading-relaxed">
                            {t.sub}
                          </span>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          <span
                            className={`w-5 h-5 flex items-center justify-center border rounded-[3px] transition-colors ${
                              active ? "bg-[#bf572b] border-[#bf572b]" : "border-neutral-300 bg-white"
                            }`}
                          >
                            {active && (
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            )}
                          </span>
                        </div>
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
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[34px] leading-[1.15] tracking-tight mb-2">
                About your project
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Pick approximate dimensions and budget so we can tailor the timeline.
              </p>

              {/* Size Section */}
              <div className="mb-6 sm:mb-8">
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-3">
                  1. APPROXIMATE SIZE
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {sizeOptions.map((s) => {
                    const active = form.size === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, size: s.value }))}
                        className={`relative text-left p-4 border transition-all rounded-sm ${
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
                          <span
                            className={`w-5 h-5 flex-shrink-0 flex items-center justify-center border rounded-[3px] transition-colors mt-0.5 ${
                              active ? "bg-[#bf572b] border-[#bf572b]" : "border-neutral-300 bg-white"
                            }`}
                          >
                            {active && (
                              <span className="w-2 h-2 bg-white rounded-[1px]" />
                            )}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Section */}
              <div>
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-3">
                  2. ESTIMATED BUDGET
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {budgetOptions.map((b) => {
                    const active = form.budget === b.value;
                    return (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b.value }))}
                        className={`relative text-left p-4 border transition-all rounded-sm ${
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
                          <span
                            className={`w-5 h-5 flex-shrink-0 flex items-center justify-center border rounded-[3px] transition-colors mt-0.5 ${
                              active ? "bg-[#bf572b] border-[#bf572b]" : "border-neutral-300 bg-white"
                            }`}
                          >
                            {active && (
                              <span className="w-2 h-2 bg-white rounded-[1px]" />
                            )}
                          </span>
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
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[34px] leading-[1.15] tracking-tight mb-2">
                Where can we reach you?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                We&apos;ll review your details and respond with initial ideas within 24 hours.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    FULL NAME <span className="text-[#bf572b]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Aarav Mehta"
                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#bf572b] py-2.5 text-[15px] sm:text-base text-[#1a1a1a] placeholder-neutral-300 font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    PHONE NUMBER <span className="text-[#bf572b]">*</span>
                  </label>
                  <div className="flex items-center border-b-2 border-neutral-200 focus-within:border-[#bf572b] transition-colors">
                    <div className="flex items-center gap-1 pr-3 py-2.5 border-r border-neutral-200 mr-3">
                      <span className="text-[15px] sm:text-base text-[#1a1a1a] font-sans">+91</span>
                      <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="98765 43210"
                      className="flex-1 bg-transparent py-2.5 text-[15px] sm:text-base text-[#1a1a1a] placeholder-neutral-300 font-sans outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    CITY OR LOCATION <span className="text-[#bf572b]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                    placeholder="Gurugram, Haryana"
                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#bf572b] py-2.5 text-[15px] sm:text-base text-[#1a1a1a] placeholder-neutral-300 font-sans outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    EMAIL ADDRESS <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="name@brand.com"
                    className="w-full bg-transparent border-b-2 border-neutral-200 focus:border-[#bf572b] py-2.5 text-[15px] sm:text-base text-[#1a1a1a] placeholder-neutral-300 font-sans outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Review & Submit */}
          {step === 4 && (
            <div>
              <h2 className="font-serif italic text-[#1a1a1a] text-[26px] sm:text-[34px] leading-[1.15] tracking-tight mb-2">
                Review your details
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Please confirm everything looks good before we get started.
              </p>

              <div className="space-y-4">
                {/* Space Type */}
                <div className="bg-white border border-neutral-200 rounded-sm p-4">
                  <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block mb-1.5">
                    Space Type
                  </span>
                  <span className="font-sans text-sm sm:text-[15px] font-semibold text-[#1a1a1a]">
                    {spaceTypes.find((t) => t.id === form.spaceType)?.title || "—"}
                  </span>
                </div>

                {/* Size & Budget */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="bg-white border border-neutral-200 rounded-sm p-4">
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block mb-1.5">
                      Size
                    </span>
                    <span className="font-sans text-sm sm:text-[15px] font-semibold text-[#1a1a1a]">
                      {form.size || "—"}
                    </span>
                  </div>
                  <div className="bg-white border border-neutral-200 rounded-sm p-4">
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block mb-1.5">
                      Budget
                    </span>
                    <span className="font-sans text-sm sm:text-[15px] font-semibold text-[#1a1a1a]">
                      {form.budget || "—"}
                    </span>
                  </div>
                </div>

                {/* Contact */}
                <div className="bg-white border border-neutral-200 rounded-sm p-4 space-y-2.5">
                  <div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block">
                      Name
                    </span>
                    <span className="font-sans text-sm text-[#1a1a1a]">{form.name || "—"}</span>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block">
                      Phone
                    </span>
                    <span className="font-sans text-sm text-[#1a1a1a]">+91 {form.phone || "—"}</span>
                  </div>
                  <div>
                    <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block">
                      City
                    </span>
                    <span className="font-sans text-sm text-[#1a1a1a]">{form.city || "—"}</span>
                  </div>
                  {form.email && (
                    <div>
                      <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-400 uppercase block">
                        Email
                      </span>
                      <span className="font-sans text-sm text-[#1a1a1a]">{form.email}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 px-5 sm:px-6 py-4 flex items-center justify-between flex-shrink-0 bg-[#FAF9F7]">
          <button
            onClick={step === 1 ? onClose : () => setStep((s) => s - 1)}
            className="font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-neutral-500 hover:text-[#1a1a1a] transition-colors"
          >
            {step === 1 ? "CANCEL" : "BACK"}
          </button>
          <button
            onClick={() => {
              if (step < totalSteps) setStep((s) => s + 1);
              else onClose();
            }}
            disabled={!canNext}
            className={`h-11 sm:h-12 px-6 sm:px-10 flex items-center gap-2 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold transition-all rounded-sm ${
              step === totalSteps
                ? "bg-[#bf572b] text-white hover:bg-[#a34320]"
                : "bg-[#bf572b] text-white hover:bg-[#a34320]"
            } ${!canNext ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {step === totalSteps ? "SUBMIT" : "CONTINUE"}
            {step < totalSteps && (
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
