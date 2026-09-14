"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "WORKSPACE STUDIO",
    rating: 5,
    quote:
      "Outset Studio delivers thoughtful design, seamless execution, and strategic growth solutions that transform spaces into memorable, customer-focused experiences.",
    avatar: "/image8.jpg",
    image: "/image14.jpg",
  },
  {
    name: "Ananya Patel",
    company: "ARTISAN CAFE",
    rating: 5,
    quote:
      "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
    avatar: "/image9.jpg",
    image: "/image14.jpg",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#B84E29] fill-current"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const handlePrev = () => {
    setCurrent((c) => (c > 0 ? c - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setCurrent((c) => (c < testimonials.length - 1 ? c + 1 : 0));
  };

  return (
    <section
      id="testimonials"
      aria-label="Customer testimonials"
      className="w-full bg-[#FAF7F2] lg:bg-[#FAF9F7] pt-10 sm:pt-24 lg:pt-28 pb-10 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14">
        <div className="text-left lg:text-center mb-5 sm:mb-16">
          <h2 className="font-serif font-normal text-[#1a1a1a] text-[28px] sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            What Our Customer&apos;s say
          </h2>
        </div>

        <div className="lg:hidden">
          <div className="bg-white border border-neutral-100 shadow-sm p-5">
            <StarRating count={t.rating} />
            <p className="font-serif italic text-[#2c2c2c] text-[17px] leading-[1.55] mt-4">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-end justify-between gap-3">
              <div>
                <p className="font-serif text-[20px] text-[#C0532C] leading-tight">{t.name}</p>
                <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-neutral-400 font-medium mt-1.5">
                  {t.company}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-8 h-8 border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-8 h-8 border border-neutral-200 bg-white flex items-center justify-center text-neutral-500 cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="relative w-full aspect-[16/11] overflow-hidden mt-3">
            <Image
              src={t.image}
              alt="Outset Studio restaurant interior execution"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="hidden lg:grid max-w-5xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-neutral-100 overflow-hidden grid-cols-1 lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-12 h-12 bg-neutral-100 overflow-hidden flex-shrink-0 shadow-sm">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-base font-bold text-[#1a1a1a] leading-tight">
                      {t.name}
                    </p>
                    <p className="font-sans text-[11px] uppercase tracking-wider text-neutral-400 font-medium mt-1">
                      {t.company}
                    </p>
                  </div>
                </div>
                <span className="font-serif text-[#F0DDD6] text-6xl leading-none select-none font-bold -mt-2">
                  &ldquo;
                </span>
              </div>

              <div className="mt-5">
                <StarRating count={t.rating} />
              </div>

              <p className="font-serif italic text-neutral-700 text-base sm:text-[17px] leading-relaxed mt-5">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            <div className="pt-8">
              <div className="w-full border-b border-neutral-100 mb-6" />
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-neutral-200 bg-white hover:border-neutral-400 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer rounded-none"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 bg-[#B84E29] hover:bg-[#A34320] flex items-center justify-center text-white transition-colors cursor-pointer rounded-none shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[460px] w-full h-full overflow-hidden">
            <Image
              src={t.image}
              alt="Outset Studio restaurant interior execution"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
