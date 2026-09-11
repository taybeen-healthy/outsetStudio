"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactInquiry } from "@/app/actions/contact";

const initialState = {
  success: false,
  error: null,
  message: null,
};

export default function ProjectModal({ isOpen, onClose }) {
  const [state, formAction, isPending] = useActionState(
    submitContactInquiry,
    initialState
  );
  const formRef = useRef(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-lg bg-[#141517] border border-white/15 p-7 sm:p-10 shadow-2xl text-left animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 transition-colors focus:outline-none cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal Content */}
        {state.success ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="font-serif text-2xl text-white">Inquiry Received</h3>
            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto font-light">
              {state.message}
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={onClose}
                className="border border-white/40 hover:border-white px-8 py-2.5 text-xs uppercase tracking-[0.2em] text-white transition-colors cursor-pointer rounded-none"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <>
            <span className="text-[10px] tracking-[0.25em] text-[#bf572b] uppercase font-medium">
              Start Your Journey
            </span>
            <h2
              id="modal-title"
              className="font-serif text-2xl sm:text-3xl text-white mt-1 mb-2"
            >
              Let&apos;s Build Your Next Space
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-light mb-6 leading-relaxed">
              Tell us about your project vision, timeline, and location. Our directors will get back to you within 24 hours.
            </p>

            {state.error && (
              <div className="mb-4 p-3 bg-red-950/40 border border-red-500/30 text-red-200 text-xs rounded-none">
                {state.error}
              </div>
            )}

            <form ref={formRef} action={formAction} className="space-y-4">
              <div>
                <label
                  htmlFor="inquiry-name"
                  className="block text-[11px] tracking-widest uppercase text-neutral-300 mb-1.5 font-medium"
                >
                  Your Name
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. Alexander Wright"
                  disabled={isPending}
                  className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-email"
                  className="block text-[11px] tracking-widest uppercase text-neutral-300 mb-1.5 font-medium"
                >
                  Email Address
                </label>
                <input
                  id="inquiry-email"
                  name="email"
                  type="email"
                  required
                  placeholder="alexander@domain.com"
                  disabled={isPending}
                  className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors rounded-none disabled:opacity-50"
                />
              </div>

              <div>
                <label
                  htmlFor="inquiry-details"
                  className="block text-[11px] tracking-widest uppercase text-neutral-300 mb-1.5 font-medium"
                >
                  Project Details
                </label>
                <textarea
                  id="inquiry-details"
                  name="details"
                  rows={3}
                  required
                  placeholder="Brief overview of the space, size, and intended experience..."
                  disabled={isPending}
                  className="w-full bg-white/5 border border-white/15 px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none rounded-none disabled:opacity-50"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isPending}
                  className="px-5 py-2.5 text-xs tracking-wider uppercase text-neutral-400 hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isPending}
                  className="border border-white/60 hover:border-white bg-transparent hover:bg-white/10 text-white font-medium text-xs tracking-[0.18em] uppercase px-7 py-2.5 transition-all cursor-pointer rounded-none disabled:opacity-50 flex items-center gap-2"
                >
                  {isPending ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin inline-block" />
                      Sending...
                    </>
                  ) : (
                    "Submit Inquiry"
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
