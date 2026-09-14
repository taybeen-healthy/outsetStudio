"use client";

import { useState } from "react";

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

function SpaceIcon({ type }) {
  const cls = "w-5 h-5 text-neutral-500";
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
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
    phoneCode: "+91",
    city: cityOptions[0],
    email: "",
  });

  const canNext =
    step === 1
      ? form.spaceType
      : step === 2
      ? form.size && form.budget
      : form.name && form.phone;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full sm:max-w-[800px] max-h-[100dvh] sm:max-h-[90vh] overflow-y-auto bg-white shadow-2xl flex flex-col">
        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-5 sm:px-8 pt-4 sm:pt-5 pb-3 sm:pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-[#C0532C]" />
              <span className="font-sans text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white font-medium">
                OUTSET STUDIO
              </span>
              {step === 1 && (
                <>
                  <span className="w-1 h-1 bg-white/40 rounded-full mx-1 hidden sm:block" />
                  <span className="font-sans text-[11px] sm:text-xs text-white/50 hidden sm:block">Start a Project</span>
                </>
              )}
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="w-8 h-8 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="px-5 sm:px-8 pt-4 sm:pt-5 pb-0">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex gap-1.5 sm:gap-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className={`h-[3px] flex-1 rounded-full transition-colors duration-500 ${
                    step >= n ? "bg-[#C0532C]" : "bg-neutral-200"
                  }`}
                />
              ))}
            </div>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-neutral-500 font-medium ml-2 sm:ml-3 flex-shrink-0">
              STEP {step} OF 3
            </span>
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-8 py-5 sm:py-8">
          {step === 1 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-[24px] sm:text-[36px] font-normal leading-tight mb-2">
                What are you designing?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Select your commercial space type to get started.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {spaceTypes.map((t) => {
                  const active = form.spaceType === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, spaceType: t.id }))}
                      className={`relative text-left p-3.5 sm:p-5 border transition-all rounded-none ${
                        active
                          ? "border-[#C0532C] bg-[#fdf8f5]"
                          : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center bg-neutral-100 rounded-none">
                          <SpaceIcon type={t.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className={`text-sm sm:text-[15px] font-sans font-semibold block ${active ? "text-[#1a1a1a]" : "text-[#1a1a1a]"}`}>
                            {t.title}
                          </span>
                          <span className="text-xs sm:text-[13px] font-sans text-neutral-400 block mt-0.5">
                            {t.sub}
                          </span>
                        </div>
                      </div>
                      {active && (
                        <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-[#C0532C] rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-[24px] sm:text-[36px] font-normal leading-tight mb-2">
                About your project
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Pick approximate dimensions and budget so we can tailor the timeline.
              </p>

              <div className="mb-6 sm:mb-8">
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] uppercase mb-3">
                  1. Approximate Size
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {sizeOptions.map((s) => {
                    const active = form.size === s.value;
                    return (
                      <button
                        key={s.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, size: s.value }))}
                        className={`relative text-center p-4 border transition-all rounded-none ${
                          active
                            ? "border-[#C0532C] bg-[#fdf8f5]"
                            : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                        }`}
                      >
                        <span className={`text-sm sm:text-[15px] font-sans font-semibold block ${active ? "text-[#C0532C]" : "text-[#1a1a1a]"}`}>
                          {s.value}
                        </span>
                        <span className="text-[11px] sm:text-xs font-sans text-neutral-400 block mt-1">
                          {s.sub}
                        </span>
                        {active && (
                          <span className="absolute top-3 right-3 w-2 h-2 bg-[#C0532C] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] uppercase mb-3">
                  2. Estimated Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                  {budgetOptions.map((b) => {
                    const active = form.budget === b.value;
                    return (
                      <button
                        key={b.value}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, budget: b.value }))}
                        className={`relative text-center p-4 border transition-all rounded-none ${
                          active
                            ? "border-[#C0532C] bg-[#fdf8f5]"
                            : "border-neutral-200 bg-white hover:border-neutral-300 hover:bg-neutral-50"
                        }`}
                      >
                        <span className={`text-sm sm:text-[15px] font-sans font-semibold block ${active ? "text-[#C0532C]" : "text-[#1a1a1a]"}`}>
                          {b.value}
                        </span>
                        <span className="text-[11px] sm:text-xs font-sans text-neutral-400 block mt-1">
                          {b.sub}
                        </span>
                        {active && (
                          <span className="absolute top-3 right-3 w-2 h-2 bg-[#C0532C] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-[24px] sm:text-[36px] font-normal leading-tight mb-2">
                Where can we reach you?
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                We&apos;ll review your details and respond with initial ideas within 24 hours.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-4 sm:gap-y-5">
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    FULL NAME <span className="text-[#C0532C]">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Aarav Mehta"
                    className="w-full h-11 sm:h-12 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                  />
                </div>
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    PHONE NUMBER <span className="text-[#C0532C]">*</span>
                  </label>
                  <div className="flex">
                    <div className="w-[52px] sm:w-[60px] h-11 sm:h-12 flex items-center justify-center border border-r-0 border-neutral-200 bg-neutral-50 rounded-l-lg">
                      <span className="text-sm text-neutral-600 font-sans">+91</span>
                    </div>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      placeholder="98765 43210"
                      className="flex-1 h-11 sm:h-12 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-r-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    CITY OR LOCATION <span className="text-[#C0532C]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      value={form.city}
                      onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                      className="w-full h-11 sm:h-12 border border-neutral-200 px-3 pr-8 text-sm text-neutral-700 font-sans bg-white focus:outline-none focus:border-[#C0532C] appearance-none transition-colors rounded-none cursor-pointer"
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
                  <label className="block font-sans text-[11px] sm:text-xs font-semibold tracking-[0.12em] text-[#1a1a1a] mb-2">
                    EMAIL ADDRESS <span className="text-neutral-400 font-normal">(optional)</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="name@brand.com"
                    className="w-full h-11 sm:h-12 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-100 px-5 sm:px-8 py-3.5 sm:py-5 flex items-center justify-between">
          <button
            onClick={step === 1 ? onClose : () => setStep((s) => s - 1)}
            className="font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold text-neutral-500 hover:text-[#1a1a1a] transition-colors"
          >
            {step === 1 ? "CANCEL" : "BACK"}
          </button>
          <button
            onClick={() => {
              if (step < 3) setStep((s) => s + 1);
              else onClose();
            }}
            disabled={!canNext}
            className={`h-10 sm:h-12 px-6 sm:px-10 font-sans text-[11px] sm:text-xs tracking-[0.14em] uppercase font-semibold transition-all rounded-none ${
              "bg-[#C0532C] text-white hover:bg-[#a34320]"
            } ${!canNext ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {step === 3 ? "SUBMIT" : "CONTINUE"}
          </button>
        </div>
      </div>
    </div>
  );
}
