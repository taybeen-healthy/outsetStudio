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
    avatar: "/image 8 (1).png",
    image: "/image 9.svg",
  },
  {
    name: "Ananya Patel",
    company: "ARTISAN CAFE",
    rating: 5,
    quote:
      "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
    avatar: "/image 8 (1).png",
    image: "/image 9.svg",
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
      className="w-full bg-[#FAF9F7] pt-16 sm:pt-24 lg:pt-28 pb-16 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Centered Heading matching Screenshot 2 */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-serif font-normal text-[#1a1a1a] text-3xl sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            What Our Customer&apos;s say
          </h2>
        </div>

        {/* Unified 50/50 Card Container matching Screenshot 2 */}
        <div className="max-w-5xl mx-auto bg-white shadow-[0_20px_50px_rgba(0,0,0,0.07)] border border-neutral-100 overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          {/* Left Column: Testimonial Details */}
          <div className="p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
            <div>
              {/* Profile Row with Giant Quote Mark on Right */}
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

                {/* Giant peach quotation mark */}
                <span className="font-serif text-[#F0DDD6] text-6xl leading-none select-none font-bold -mt-2">
                  &ldquo;
                </span>
              </div>

              {/* 5 Terracotta Stars */}
              <div className="mt-5">
                <StarRating count={t.rating} />
              </div>

              {/* Italic Serif Quote Text */}
              <p className="font-serif italic text-neutral-700 text-base sm:text-[17px] leading-relaxed mt-5">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Bottom Controls */}
            <div className="pt-8">
              <div className="w-full border-b border-neutral-100 mb-6" />
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-neutral-200 bg-white hover:border-neutral-400 flex items-center justify-center text-neutral-600 transition-colors cursor-pointer rounded-none"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="w-10 h-10 bg-[#B84E29] hover:bg-[#A34320] flex items-center justify-center text-white transition-colors cursor-pointer rounded-none shadow-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Warm Restaurant Interior Image */}
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
