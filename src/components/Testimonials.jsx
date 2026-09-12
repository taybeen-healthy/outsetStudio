"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    company: "NovaSpace Studio",
    rating: 5,
    quote:
      "Outset Studio delivers thoughtful design, seamless execution, and strategic growth solutions that transform spaces into memorable, customer-focused experiences.",
    avatar: "/image 8 (1).png",
  },
  {
    name: "Ananya Patel",
    company: "Artisan Cafe",
    rating: 5,
    quote:
      "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
    avatar: "/image 8 (1).png",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-[#eab308]"
          fill="currentColor"
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
      className="w-full bg-white pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-0 sm:px-10 lg:px-14">
        {/* Centered Heading matching Figma */}
        <div className="text-center mb-7 sm:mb-10 lg:mb-12">
          <h2 className="font-serif font-medium sm:font-semibold text-[#1a1a1a] text-[29px] sm:text-4xl lg:text-[46px] leading-tight tracking-tight">
            What Our Customer&apos;s say
          </h2>
        </div>

        {/* Mobile: card on top, image below. Desktop: card overlaps left of image */}
        <div className="relative max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-end lg:min-h-[460px]">
          {/* Testimonial Card */}
          <div className="order-2 w-[calc(100%-40px)] mx-5 -mt-[200px] lg:mx-0 lg:mt-0 lg:w-[460px] xl:w-[480px] lg:absolute lg:left-4 xl:left-8 lg:top-1/2 lg:-translate-y-1/2 z-20 mb-0 lg:mb-0">
            <div className="bg-white border border-neutral-100 shadow-[0_12px_36px_rgba(0,0,0,0.10)] p-6 sm:p-9 flex flex-col gap-5">
              {/* Header: Avatar, Name/Company, Light Quote icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative w-14 h-14 sm:w-11 sm:h-11 rounded-full overflow-hidden flex-shrink-0 bg-neutral-100">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-[18px] sm:text-[15px] font-semibold text-[#1a1a1a] leading-tight">
                      {t.name}
                    </p>
                    <p className="font-sans text-[14px] sm:text-xs text-[#303030] sm:text-[#737373] font-normal mt-1 sm:mt-0.5">
                      {t.company}
                    </p>
                  </div>
                </div>

                {/* Double quotation symbol from Figma */}
                <div className="text-[#d4d4d4] select-none">
                  <svg className="w-12 h-12 sm:w-8 sm:h-8 fill-current opacity-80" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* 5 Stars */}
              <StarRating count={t.rating} />

              {/* Quote text (upright, clean sans) */}
              <p className="font-sans text-sm sm:text-[14.5px] text-[#404040] font-normal leading-[1.75]">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Prev / Next buttons */}
              <div className="flex items-center gap-2.5 pt-1">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="w-9 h-9 rounded-full border border-neutral-300 bg-white hover:border-neutral-400 flex items-center justify-center text-neutral-500 transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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
                  className="w-9 h-9 rounded-full bg-[#bf572b] hover:bg-[#a84c24] flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
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

          {/* Right Image: Image 9 from public folder */}
          <div className="order-1 relative w-full lg:w-[64%] h-[412px] sm:h-[460px] lg:h-[490px] overflow-hidden shadow-sm">
            <Image
              src="/image 9.svg"
              alt="Outset Studio space execution project"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 64vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
