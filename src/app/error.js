"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("[Outset Studio Application Error]:", error);
  }, [error]);

  return (
    <div className="min-h-screen w-full bg-[#0c0d0e] flex flex-col items-center justify-center text-center px-6">
      <span className="text-xs tracking-[0.3em] text-red-400 uppercase font-mono">
        System Interruption
      </span>
      <h1 className="font-serif text-3xl sm:text-5xl text-white mt-4 mb-4">
        Something didn&apos;t align.
      </h1>
      <p className="text-neutral-400 text-sm max-w-md mx-auto mb-8 font-light leading-relaxed">
        An unexpected error occurred while loading this experience. We have logged the trace for our engineers.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="border border-white/60 hover:border-white px-8 py-3 text-xs tracking-[0.2em] uppercase text-white bg-transparent hover:bg-white/10 transition-colors cursor-pointer rounded-none"
      >
        Try Again
      </button>
    </div>
  );
}
