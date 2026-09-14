"use client";

import { useState } from "react";

const STEPS = [
  { label: "PROFILE", num: 1 },
  { label: "PROJECT DETAILS", num: 2 },
  { label: "DESIGN BRIEF", num: 3 },
];

const outletTypologies = [
  { id: "cafe", title: "Artisan Café / Roastery", sub: "Speciality F&B / Experiential" },
  { id: "dining", title: "Fine Dining & Bar", sub: "High-touch Lounge / Bespoke" },
  { id: "qsr", title: "High-Volume QSR", sub: "Rapid Turnaround & Counter" },
  { id: "retail", title: "Luxury Retail / Salon", sub: "Curated Flagship Environment" },
  { id: "turnkey", title: "Façade, Interior & MEP Turnkey Commission", sub: "End-to-end Comprehensive Architectural & Engineering Scope" },
];

const locationOptions = [
  "Select District (e.g. Gurugram – Golf Course Rd)",
  "Delhi – Connaught Place",
  "Delhi – Saket",
  "Gurugram – Golf Course Rd",
  "Gurugram – DLF Phase 3",
  "Gurugram – Sector 82",
  "Noida – Sector 62",
  "Mumbai – Bandra",
  "Mumbai – Lower Parel",
  "Bangalore – Indiranagar",
  "Bangalore – Koramangala",
  "Hyderabad – Jubilee Hills",
  "Chennai – Anna Nagar",
  "Pune – Koregaon Park",
];

const carpetOptions = [
  "1,500 – 3,500 sq.ft (Standard Outlet)",
  "<1,500 sq.ft (Boutique Footprint)",
  "3,500 – 6,000 sq.ft",
  ">6,000 sq.ft",
];

const budgetOptions = [
  "₹50L – ₹1.2 Cr (Turnkey Arch & MEP)",
  "₹25L – ₹50L",
  "₹1.2 Cr – ₹3 Cr",
  "₹3 Cr+",
];

export default function StartProjectModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    fullName: "",
    venture: "",
    email: "",
    phone: "",
    typology: "",
    location: locationOptions[0],
    carpet: carpetOptions[0],
    budget: budgetOptions[0],
    brief: "",
    mep: false,
    expedited: false,
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const toggleCheck = (key) =>
    setForm((f) => ({ ...f, [key]: !f[key] }));

  const canNext =
    step === 1
      ? form.fullName && form.venture && form.email && form.phone
      : step === 2
      ? form.typology && form.location !== locationOptions[0]
      : form.brief;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[960px] max-h-[92vh] overflow-y-auto bg-white shadow-2xl flex flex-col">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Header */}
        <div className="bg-[#1a1a1a] px-8 sm:px-10 pt-7 pb-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#C0532C]" />
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">
              {STEPS[step - 1].label}
            </span>
          </div>
          <h2 className="font-serif text-white text-3xl sm:text-4xl font-normal leading-tight">
            Commission an Outlet
          </h2>
          <p className="font-sans text-sm text-white/50 mt-2 leading-relaxed max-w-lg">
            Connect directly with our team to discuss your outlet requirements, assess feasibility,
            and plan a seamless execution from concept to completion.
          </p>
        </div>

        {/* Step Indicator */}
        <div className="border-b border-neutral-200 px-8 sm:px-10 py-5">
          <div className="flex items-center justify-between max-w-lg">
            {STEPS.map((s, i) => {
              const isDone = step > s.num;
              const isActive = step === s.num;
              return (
                <div key={s.num} className="flex items-center gap-3 flex-1 last:flex-none">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-8 h-8 flex items-center justify-center text-xs font-sans font-semibold rounded-sm transition-colors ${
                        isDone
                          ? "bg-[#C0532C] text-white"
                          : isActive
                          ? "bg-[#C0532C] text-white"
                          : "bg-neutral-100 text-neutral-400"
                      }`}
                    >
                      {isDone ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        s.num
                      )}
                    </span>
                    <span
                      className={`font-sans text-[11px] tracking-[0.12em] uppercase font-semibold ${
                        isActive ? "text-[#C0532C]" : isDone ? "text-neutral-700" : "text-neutral-400"
                      }`}
                    >
                      STEP 0{s.num}
                      <br />
                      <span className="text-[10px]">{s.label}</span>
                    </span>
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="flex-1 h-px bg-neutral-200 mx-3" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Content */}
        <div className="flex-1 overflow-y-auto px-8 sm:px-10 py-8">
          {step === 1 && (
            <div>
              <p className="font-sans text-xs font-bold tracking-[0.18em] text-[#C0532C] mb-6">
                01<span className="mx-2">//</span>PATRON &amp; VENTURE PROFILE
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                {[
                  { label: "FULL NAME *", name: "fullName", placeholder: "e.g. Siddharth Mehra" },
                  { label: "VENTURE / BRAND *", name: "venture", placeholder: "e.g. Amber Roasters / Studio Group" },
                  { label: "CORPORATE EMAIL *", name: "email", placeholder: "siddharth@venture.in", type: "email" },
                  { label: "DIRECT PHONE *", name: "phone", placeholder: "+9198988 00000", type: "tel" },
                ].map(({ label, name, placeholder, type = "text" }) => (
                  <div key={name}>
                    <label className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-neutral-500 mb-2">
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full h-11 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors rounded-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-6">
                <p className="font-sans text-xs font-bold tracking-[0.18em] text-[#C0532C]">
                  02<span className="mx-2">//</span>PROJECT DETAILS &amp; SITE PARAMETERS
                </p>
                <p className="font-sans text-[10px] tracking-[0.14em] uppercase text-neutral-400 font-medium">
                  Typology &amp; Spatial Scale
                </p>
              </div>

              <label className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-neutral-500 mb-3">
                OUTLET TYPOLOGY *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {outletTypologies.map((t) => {
                  const active = form.typology === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setForm((f) => ({ ...f, typology: t.id }))}
                      className={`text-left p-4 border transition-all rounded-none ${
                        active
                          ? "border-[#C0532C] bg-white shadow-sm"
                          : "border-neutral-200 bg-white hover:border-neutral-400"
                      }`}
                    >
                      <div className="flex items-start gap-2.5">
                        <span
                          className={`mt-0.5 w-4 h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${
                            active ? "bg-[#C0532C] border-[#C0532C]" : "border-neutral-300"
                          }`}
                        >
                          {active && (
                            <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </span>
                        <div>
                          <span className={`text-sm font-sans font-medium leading-tight block ${active ? "text-[#C0532C]" : "text-neutral-700"}`}>
                            {t.title}
                          </span>
                          <span className="text-[11px] font-sans text-neutral-400 leading-snug block mt-0.5">
                            {t.sub}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "LOCATION DISTRICT *", name: "location", opts: locationOptions },
                  { label: "CARPET AREA SCALE *", name: "carpet", opts: carpetOptions },
                  { label: "TARGET BUDGET BAND *", name: "budget", opts: budgetOptions },
                ].map(({ label, name, opts }) => (
                  <div key={name}>
                    <label className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-neutral-500 mb-2">
                      {label}
                    </label>
                    <div className="relative">
                      <select
                        name={name}
                        value={form[name]}
                        onChange={handleChange}
                        className="w-full h-11 border border-neutral-200 px-3 pr-8 text-sm text-neutral-700 font-sans bg-white focus:outline-none focus:border-[#C0532C] appearance-none rounded-none cursor-pointer"
                      >
                        {opts.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <svg className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
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
              <p className="font-sans text-xs font-bold tracking-[0.18em] text-[#C0532C] mb-6">
                03<span className="mx-2">//</span>DESIGN BRIEF &amp; ARCHITECTURAL INTENT
              </p>

              <label className="block font-sans text-[10px] font-semibold tracking-[0.16em] text-neutral-500 mb-2">
                ARCHITECTURAL VISION &amp; PROJECT REQUIREMENTS *
              </label>
              <textarea
                name="brief"
                value={form.brief}
                onChange={handleChange}
                rows={6}
                placeholder="Describe your operational vision, projected footfall, preferred material finishes (e.g. brutalist concrete, lime plaster, tactile fluted timber, terrazzo), timeline milestones, target handover date, and any specific structural or regulatory requirements..."
                className="w-full border border-neutral-200 px-4 py-3 text-sm text-neutral-700 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#C0532C] transition-colors resize-none rounded-none"
              />
              <p className="font-sans text-xs text-neutral-400 mt-2">
                Include details regarding site handover status, target opening date, and desired brand atmosphere.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                {[
                  { key: "mep", label: "Require Full MEP (Mechanical, Electrical, Plumbing) Coordination & Feasibility" },
                  { key: "expedited", label: "Expedited 24-Hour Studio Review & On-Site Reconnaissance" },
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => toggleCheck(key)}
                    className="flex items-start gap-3 p-4 border border-neutral-200 hover:border-neutral-400 text-left transition-all rounded-none"
                  >
                    <span
                      className={`mt-0.5 w-5 h-5 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${
                        form[key] ? "bg-[#C0532C] border-[#C0532C]" : "border-neutral-300"
                      }`}
                    >
                      {form[key] && (
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className="text-sm font-sans text-neutral-700 leading-snug">{label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t border-neutral-200 px-8 sm:px-10 py-5 flex items-center justify-between">
          <button
            onClick={step === 1 ? onClose : () => setStep((s) => s - 1)}
            className="font-sans text-xs tracking-[0.16em] uppercase font-medium text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            {step === 1 ? "CANCEL" : "BACK"}
          </button>

          <span className="font-sans text-[10px] tracking-[0.14em] uppercase text-neutral-400 font-medium">
            STEP 0{step} / 03
          </span>

          <button
            onClick={() => {
              if (step < 3) setStep((s) => s + 1);
              else onClose();
            }}
            disabled={!canNext}
            className={`h-11 px-8 font-sans text-xs tracking-[0.16em] uppercase font-semibold transition-colors rounded-none ${
              step === 3
                ? "bg-[#C0532C] text-white hover:bg-[#a34320]"
                : "bg-[#1a1a1a] text-white hover:bg-black"
            } ${!canNext ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
          >
            {step === 3 ? "SUBMIT COMMISSION BRIEF" : "CONTINUE"}
          </button>
        </div>
      </div>
    </div>
  );
}