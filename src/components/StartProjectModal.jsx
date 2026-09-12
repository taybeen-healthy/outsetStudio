"use client";

import { useState } from "react";

const projectTypes = [
  "Artisan Café / Roastery",
  "Fine Dining & Bar",
  "High-Volume QSR",
  "Luxury Retail / Salon",
  "Façade, Interior & MEP Turnkey Commission",
];

const locationOptions = [
  "Delhi", "Gurugram", "Noida", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune",
];

const carpetOptions = [
  "<1,500 sq.ft (Boutique Footprint)",
  "1,500–3,000 sq.ft",
  "3,000–6,000 sq.ft",
  ">6,000 sq.ft",
];

const budgetOptions = [
  "₹25L – ₹50L",
  "₹50L – ₹1Cr",
  "₹1Cr – ₹3Cr",
  "₹3Cr+",
];

export default function StartProjectModal({ onClose }) {
  const [selected, setSelected] = useState(["Artisan Café / Roastery"]);
  const [form, setForm] = useState({
    fullName: "", venture: "", email: "", phone: "",
    location: "Gurugram", carpet: "<1,500 sq.ft (Boutique Footprint)",
    budget: "₹25L – ₹50L", brief: "",
  });

  const toggleProject = (type) => {
    setSelected((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white shadow-2xl">
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

        {/* Header */}
        <div className="px-8 pt-8 pb-5 border-b border-neutral-100">
          <h2 className="font-serif italic text-[#1a1a1a] text-3xl sm:text-4xl font-normal leading-tight">
            Start a Project
          </h2>
          <p className="font-sans text-sm text-neutral-500 mt-2 leading-relaxed max-w-lg">
            Tell us about your vision, and let&apos;s explore how we can transform your space
            into an experience built for your business.
          </p>
        </div>

        <div className="px-8 py-6 space-y-8">
          {/* 01 PROFILE */}
          <div className="p-6">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-[#B84E29] mb-5">
              <span className="mr-2">01</span>PROFILE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "FULL NAME *", name: "fullName", placeholder: "e.g. Siddharth Mehra" },
                { label: "VENTURE / BRAND *", name: "venture", placeholder: "e.g. Amber Roasters / Studio Group" },
                { label: "EMAIL *", name: "email", placeholder: "siddharth@venture.in", type: "email" },
                { label: "PHONE *", name: "phone", placeholder: "+91 98988 00000", type: "tel" },
              ].map(({ label, name, placeholder, type = "text" }) => (
                <div key={name}>
                  <label className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-500 mb-1.5">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full h-10 border border-neutral-200 px-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#B84E29] transition-colors rounded-none"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* 02 PROJECT */}
          <div className="p-6">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-[#B84E29] mb-5">
              <span className="mr-2">02</span>PROJECT
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {projectTypes.map((type) => {
                const active = selected.includes(type);
                return (
                  <button
                    key={type}
                    type="button"
                    onClick={() => toggleProject(type)}
                    className={`flex items-center gap-2.5 px-3 py-2.5 border text-left text-sm font-sans transition-all rounded-none ${
                      active
                        ? "border-[#B84E29] bg-white"
                        : "border-neutral-200 bg-white hover:border-neutral-400"
                    }`}
                  >
                    <span
                      className={`w-4 h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${
                        active ? "bg-[#B84E29] border-[#B84E29]" : "border-neutral-300"
                      }`}
                    >
                      {active && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                    <span className={`text-xs leading-tight ${active ? "text-[#B84E29] font-medium" : "text-neutral-600"}`}>
                      {type}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 03 ALLOCATION */}
          <div className="p-6">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-[#B84E29] mb-5">
              <span className="mr-2">03</span>ALLOCATION
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "LOCATION DISTRICT", name: "location", opts: locationOptions },
                { label: "CARPET AREA SCALE", name: "carpet", opts: carpetOptions },
                { label: "TARGET BUDGET BAND", name: "budget", opts: budgetOptions },
              ].map(({ label, name, opts }) => (
                <div key={name}>
                  <label className="block font-sans text-[10px] font-semibold tracking-widest text-neutral-500 mb-1.5">
                    {label}
                  </label>
                  <div className="relative">
                    <select
                      name={name}
                      value={form[name]}
                      onChange={handleChange}
                      className="w-full h-10 border border-neutral-200 px-3 pr-8 text-sm text-neutral-700 font-sans bg-white focus:outline-none focus:border-[#B84E29] appearance-none rounded-none cursor-pointer"
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

          {/* 04 DESIGN BRIEF */}
          <div className="p-6">
            <p className="font-sans text-xs font-bold tracking-[0.2em] text-[#B84E29] mb-5">
              <span className="mr-2">04</span>DESIGN BRIEF &amp; ARCHITECTURAL INTENT
            </p>
            <textarea
              name="brief"
              value={form.brief}
              onChange={handleChange}
              rows={5}
              placeholder="Outline your operational vision, footfall density expectations, architectural finishes (terrazzo, brick, steel, bespoke timber), or schedule milestones..."
              className="w-full border border-neutral-200 px-3 py-2.5 text-sm text-neutral-700 placeholder-neutral-300 font-sans focus:outline-none focus:border-[#B84E29] transition-colors resize-none rounded-none"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex items-center border-t border-neutral-100 px-8 py-5 gap-3">
          <button
            onClick={onClose}
            className="h-11 px-7 font-sans text-xs tracking-widest uppercase font-medium text-neutral-500 border border-neutral-200 hover:border-neutral-400 hover:text-neutral-700 transition-all rounded-none"
          >
            Cancel
          </button>
          <button className="h-11 px-8 font-sans text-xs tracking-widest uppercase font-medium text-white bg-[#B84E29] hover:bg-[#a34320] transition-colors rounded-none flex items-center gap-2">
            Submit Brief
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}