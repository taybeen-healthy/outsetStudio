"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";

export default function ContactModal({ onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setForm((f) => ({ ...f, [name]: digits }));
    } else if (name === "name") {
      setForm((f) => ({ ...f, [name]: value.slice(0, 80) }));
    } else if (name === "email") {
      setForm((f) => ({ ...f, [name]: value.slice(0, 100) }));
    } else if (name === "message") {
      setForm((f) => ({ ...f, [name]: value.slice(0, 500) }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
    setErrors((f) => ({ ...f, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) {
      errs.phone = "Phone number is required";
    } else {
      const digits = form.phone.replace(/\D/g, "");
      if (digits.length !== 10) errs.phone = "Phone number must be exactly 10 digits";
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!form.message.trim()) errs.message = "Message is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = () => {
    if (validate()) setSubmitted(true);
  };

  const content = submitted ? (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[480px] bg-[#FAFAF8] shadow-2xl px-8 py-14 text-center">
        <button onClick={onClose} aria-label="Close" className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded transition-all cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#B84E29] rounded-full">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-serif italic text-[#1a1a1a] text-3xl leading-tight mt-6 mb-2">Thank You</h2>
        <p className="font-sans text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto mb-8">
          We&apos;ll get back to you within 24 hours.
        </p>
        <button onClick={onClose} className="h-12 px-10 font-sans text-xs tracking-[0.14em] uppercase font-semibold bg-[#B84E29] text-white hover:bg-[#a34320] transition-all cursor-pointer">
          DONE
        </button>
      </div>
    </div>
  ) : (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onPointerDown={(e) => { pointerStart.current = { x: e.clientX, y: e.clientY }; }}
      onPointerUp={(e) => {
        if (!pointerStart.current) return;
        const dx = Math.abs(e.clientX - pointerStart.current.x);
        const dy = Math.abs(e.clientY - pointerStart.current.y);
        pointerStart.current = null;
        if (dx < 5 && dy < 5 && e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-[480px] shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-[#FAFAF8] px-8 pt-8 pb-8 space-y-6">
          <div>
            <h2 className="font-serif italic text-[#1a1a1a] text-3xl sm:text-4xl leading-tight">
              Get in Touch
            </h2>
            <p className="font-sans text-sm text-neutral-500 mt-2 leading-relaxed">
              Direct inquiries for commercial architecture, spatial design, and site feasibility.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href="mailto:outsetstudio@gmail.com" className="flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-[#B84E29] transition-colors cursor-pointer">
              <svg className="w-4 h-4 text-[#B84E29] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              outsetstudio@gmail.com
            </a>
            <a href="tel:+919958544930" className="flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-[#B84E29] transition-colors cursor-pointer">
              <svg className="w-4 h-4 text-[#B84E29] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 99585 44930
            </a>
          </div>

          <div className="border-t border-neutral-200" />

          <div className="space-y-5">
            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                YOUR NAME *
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Siddharth Mehra"
                className={`w-full h-12 border bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.name ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#B84E29]"}`}
              />
              {errors.name && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                PHONE NUMBER *
              </label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                maxLength={10}
                placeholder="e.g. 9958544930"
                className={`w-full h-12 border bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.phone ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#B84E29]"}`}
              />
              {errors.phone && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.phone}</p>}
            </div>

            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                EMAIL (OPTIONAL)
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="e.g. siddharth@venture.in"
                className={`w-full h-12 border bg-white px-4 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors rounded-none ${errors.email ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#B84E29]"}`}
              />
              {errors.email && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            <div>
              <label className="block font-sans text-[10px] font-semibold tracking-[0.15em] text-neutral-500 mb-2">
                MESSAGE / PROJECT SCOPE *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us briefly about your space, location, or goals..."
                className={`w-full border bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-300 font-sans focus:outline-none transition-colors resize-none rounded-none ${errors.message ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-[#B84E29]"}`}
              />
              {errors.message && <p className="font-sans text-[11px] text-red-500 mt-1">{errors.message}</p>}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full h-14 font-sans text-xs tracking-[0.2em] uppercase font-medium text-white bg-[#B84E29] hover:bg-[#a34320] transition-colors rounded-none flex items-center justify-center gap-2.5 mt-2 cursor-pointer"
          >
            Send Inquiry
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );

  if (typeof window === "undefined") return null;
  return createPortal(content, document.body);
}
