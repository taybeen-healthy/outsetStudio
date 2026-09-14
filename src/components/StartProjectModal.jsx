"use client";

import { useState } from "react";

const spaceTypes = [
  "Cafe or Coffee Shop",
  "Restaurant or Bar",
  "Retail Store or Showroom",
  "Office or Workspace",
  "Salon or Wellness",
  "Other Commercial Space",
];

const areaOptions = [
  "1,000 - 2,500 sq ft",
  "500 - 1,000 sq ft",
  "2,500 - 5,000 sq ft",
  "5,000+ sq ft",
];

const budgetOptions = [
  "₹15 - ₹35 Lakhs",
  "₹5 - ₹15 Lakhs",
  "₹35 Lakhs - ₹1 Cr",
  "₹1 Cr+",
];

const timelineOptions = [
  "Immediately (Within 2 wks)",
  "1 - 2 Months",
  "3 - 6 Months",
  "Just Planning / Flexible",
];

const serviceOptions = [
  "Interior Design",
  "Architectural Planning",
  "Turnkey Build & Execution",
  "Custom Furniture",
  "Brand & Signage",
];

export default function StartProjectModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    role: "",
    spaceType: "",
    area: areaOptions[0],
    budget: budgetOptions[0],
    timeline: "",
    services: [],
    brief: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleService = (svc) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(svc)
        ? f.services.filter((s) => s !== svc)
        : [...f.services, svc],
    }));

  const canNext =
    step === 1
      ? form.name && form.company && form.email && form.phone && form.city
      : step === 2
      ? form.spaceType
      : form.timeline;

  const stepLabels = ["ABOUT YOU", "YOUR SPACE", "PROJECT DETAILS"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full sm:max-w-[960px] max-h-[100dvh] sm:max-h-[92vh] overflow-y-auto bg-white shadow-2xl flex flex-col sm:rounded-none rounded-t-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center text-neutral-400 sm:text-white/60 hover:text-neutral-700 sm:hover:text-white hover:bg-neutral-100 sm:hover:bg-white/10 rounded transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Dark Header */}
        <div className="bg-[#1a1a1a] px-4 sm:px-8 md:px-10 pt-5 sm:pt-6 pb-4 sm:pb-5">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded">
            <span className="w-2 h-2 bg-[#C0532C]" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70 font-medium">
              STEP {step} OF 3
            </span>
          </div>
        </div>

        {/* Step Tabs */}
        <div className="border-b border-neutral-200 px-4 sm:px-8 md:px-10">
          <div className="flex">
            {stepLabels.map((label, i) => {
              const num = i + 1;
              const isActive = step === num;
              const isDone = step > num;
              return (
                <button
                  key={num}
                  onClick={() => {
                    if (isDone) setStep(num);
                  }}
                  className={`flex-1 py-3 sm:py-4 text-left transition-all rounded ${
                    isDone ? "cursor-pointer hover:bg-neutral-50" : "cursor-default"
                  }`}
                >
                  <span
                    className={`font-sans text-[9px] sm:text-[11px] md:text-xs tracking-[0.08em] sm:tracking-[0.1em] uppercase font-semibold ${
                      isActive
                        ? "text-[#C0532C]"
                        : isDone
                        ? "text-[#C0532C]"
                        : "text-neutral-400"
                    }`}
                  >
                    {num}. <span className="hidden xs:inline">{label}</span>
                    <span className="xs:hidden">{label.split(" ").slice(0, 2).join(" ")}</span>
                  </span>
                  <div
                    className={`mt-2 sm:mt-3 h-[2px] ${
                      isActive || isDone ? "bg-[#C0532C]" : "bg-neutral-200"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-10 py-6 sm:py-8">
          {step === 1 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-2">
                Tell Us About Yourself
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                We just need a few basic details to know who we&apos;re talking with.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-4 sm:gap-y-5">
                {[
                  { label: "YOUR NAME", name: "name", placeholder: "e.g. Rahul Sharma", required: true },
                  { label: "COMPANY OR BRAND NAME", name: "company", placeholder: "e.g. Amber Cafe", required: true },
                  { label: "EMAIL ADDRESS", name: "email", placeholder: "e.g. rahul@example.com", type: "email", required: true },
                  { label: "PHONE NUMBER", name: "phone", placeholder: "e.g. +91 98988 00000", type: "tel", required: true },
                  { label: "CITY OR LOCATION", name: "city", placeholder: "e.g. Gurugram, Delhi NCR", required: true },
                  { label: "YOUR ROLE", sub: "(OPTIONAL)", name: "role", placeholder: "e.g. Founder, Owner, Project Manager", required: false },
                ].map(({ label, sub, name, placeholder, type = "text", required }) => (
                  <div key={name}>
                    <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-1.5 sm:mb-2">
                      {label} {required && <span className="text-[#C0532C]">*</span>}
                      {sub && <span className="text-neutral-400 font-normal ml-1">{sub}</span>}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full h-11 sm:h-12 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-2">
                Tell Us About Your Space
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                What kind of commercial or retail space are you planning?
              </p>

              <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-3">
                WHAT TYPE OF SPACE ARE YOU BUILDING? <span className="text-[#C0532C]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {spaceTypes.map((t) => {
                  const active = form.spaceType === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, spaceType: t }))}
                      className={`text-left p-3 sm:p-4 border transition-all rounded ${
                        active
                          ? "border-[#C0532C] bg-[#fdf5f0]"
                          : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${
                            active ? "bg-[#C0532C] border-[#C0532C]" : "border-neutral-300"
                          }`}
                        >
                          {active && (
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-[1px]" />
                          )}
                        </span>
                        <span className={`text-xs sm:text-sm font-sans font-medium leading-tight ${active ? "text-[#C0532C]" : "text-neutral-700"}`}>
                          {t}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { label: "APPROXIMATE AREA / SIZE", name: "area", opts: areaOptions },
                  { label: "TARGET BUDGET", name: "budget", opts: budgetOptions },
                ].map(({ label, name, opts }) => (
                  <div key={name}>
                    <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-1.5 sm:mb-2">
                      {label} <span className="text-[#C0532C]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        className="w-full h-11 sm:h-12 border border-neutral-200 px-3 pr-8 text-sm text-neutral-700 font-sans bg-white focus:outline-none focus:border-[#C0532C] appearance-none rounded-none cursor-pointer"
                      >
                        {opts.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="font-serif text-[#1a1a1a] text-2xl sm:text-3xl md:text-4xl font-normal leading-tight mb-2">
                Tell Us About Your Timeline &amp; Vision
              </h2>
              <p className="font-sans text-sm text-neutral-500 mb-6 sm:mb-8">
                Almost done! Share any ideas, timing, or questions you have.
              </p>

              <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-3">
                WHEN WOULD YOU LIKE TO START? <span className="text-[#C0532C]">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
                {timelineOptions.map((t) => {
                  const active = form.timeline === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, timeline: t }))}
                      className={`text-left p-3 sm:p-4 border transition-all rounded ${
                        active
                          ? "border-[#C0532C] bg-[#fdf5f0]"
                          : "border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50"
                      }`}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span
                          className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 flex items-center justify-center border rounded-full transition-colors ${
                            active ? "border-[#C0532C]" : "border-neutral-300"
                          }`}
                        >
                          {active && (
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#C0532C] rounded-full" />
                          )}
                        </span>
                        <span className={`text-xs sm:text-sm font-sans font-medium leading-tight ${active ? "text-[#C0532C]" : "text-neutral-700"}`}>
                          {t}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-3">
                WHAT SERVICES DO YOU NEED? <span className="text-neutral-400 font-normal">(SELECT ALL THAT APPLY)</span>
              </label>
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {serviceOptions.map((svc) => {
                  const active = form.services.includes(svc);
                  return (
                    <button
                      key={svc}
                      type="button"
                      onClick={() => toggleService(svc)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 border text-xs sm:text-sm font-sans font-medium transition-all rounded ${
                        active
                          ? "bg-[#C0532C] border-[#C0532C] text-white"
                          : "bg-white border-neutral-200 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
                      }`}
                    >
                      {active && (
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {svc}
                    </button>
                  );
                })}
              </div>

              <label className="block font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] text-neutral-700 mb-2">
                TELL US A BIT ABOUT YOUR PROJECT OR LOCATION <span className="text-neutral-400 font-normal">(OPTIONAL)</span>
              </label>
              <textarea
                name="brief"
                value={form.brief}
                onChange={handleChange}
                rows={4}
                placeholder="Where is the space located? Any specific design style or inspirations you'd like? Feel free to share links or notes."
                className="w-full border border-neutral-200 px-3 sm:px-4 py-3 text-sm text-neutral-700 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors resize-none rounded-none"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 px-4 sm:px-8 md:px-10 py-4 sm:py-5">
          {/* Mobile: stack vertically, Desktop: inline */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            {/* Privacy text - hidden on steps 2 & 3 on mobile */}
            <div className="flex items-center gap-2">
              {step === 1 && (
                <span className="w-1.5 h-1.5 bg-[#C0532C] rounded-full flex-shrink-0" />
              )}
              <span className="font-sans text-[10px] sm:text-[11px] text-neutral-500">
                {step === 1 ? (
                  <>We reply within 24 hours • Your information stays private</>
                ) : null}
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 justify-end">
              <button
                onClick={step === 1 ? onClose : () => setStep((s) => s - 1)}
                className="px-4 sm:px-5 h-10 sm:h-11 border border-neutral-300 font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-semibold text-neutral-700 hover:bg-neutral-100 transition-all rounded"
              >
                {step === 1 ? "CANCEL" : "BACK"}
              </button>
              <button
                onClick={() => {
                  if (step < 3) setStep((s) => s + 1);
                  else onClose();
                }}
                disabled={!canNext}
                className={`h-10 sm:h-11 px-5 sm:px-8 font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase font-semibold transition-all rounded whitespace-nowrap ${
                  "bg-[#C0532C] text-white hover:bg-[#a34320]"
                } ${!canNext ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
              >
                {step === 1
                  ? "NEXT"
                  : step === 2
                  ? "NEXT"
                  : "SEND"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
