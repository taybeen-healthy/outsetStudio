"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "Select category executed with Outset Studio",
  "Interior Design",
  "Build & Execution",
  "Brand Strategy",
  "Digital Setup",
  "Growth Consulting",
  "Full Outlet Launch",
];

const testimonials = [
  {
    name: "Punit Sharma",
    role: "Co-Founder, Blue Tokai Partner Outlet",
    rating: 4.5,
    text: "Outset Studio understood both our brand vision and high customer traffic requirements. From the custom bar seating to lighting temperature, they finished two weeks ahead of schedule. Footfall expanded by 40% in month one.",
    image: "/image39.png",
    location: "Gurugram",
  },
  {
    name: "Ananya Kapoor",
    role: "Creative Director, Vayu Concept Boutique",
    rating: 4.0,
    text: "Their mastery over material textures, raw terracotta finishes, and sharp architectural display fixtures created the exact serene retail atmosphere our clientele demanded.",
    image: "/image32.png",
    location: "Khan Market, New Delhi",
  },
];

function StarRating({ rating, onRate }) {
  const [hover, setHover] = useState(0);
  const labels = [
    "1 - NEEDS IMPROVEMENT",
    "2 - ADEQUATE EXECUTION",
    "3 - GOOD WORKMANSHIP",
    "4 - EXCELLENT EXECUTION",
    "5 - EXCEPTIONAL DELIVERY",
  ];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onRate(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className="cursor-pointer transition-transform hover:scale-110"
          >
            <svg
              className="w-7 h-7"
              fill={star <= (hover || Math.ceil(rating)) ? "#bf572b" : "none"}
              stroke={star <= (hover || Math.ceil(rating)) ? "#bf572b" : "#d4d4d4"}
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
              />
            </svg>
          </button>
        ))}
      </div>
      {(hover || rating) > 0 && (
        <span className="font-sans text-[11px] tracking-[0.14em] uppercase text-[#bf572b] font-medium border border-[#bf572b]/30 bg-[#bf572b]/5 px-3 py-1.5">
          {rating > 0 ? rating : hover} - {labels[Math.ceil(rating > 0 ? rating : hover) - 1]?.split(" - ")[1]}
        </span>
      )}
    </div>
  );
}

export default function ReviewPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    brand: "",
    completionDate: "",
    categories: [],
    rating: 4.5,
    review: "",
    consent: true,
  });
  const [files, setFiles] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleCategory = (cat) =>
    setForm((f) => ({
      ...f,
      categories: f.categories.includes(cat)
        ? f.categories.filter((c) => c !== cat)
        : [...f.categories, cat],
    }));

  const removeCategory = (cat) =>
    setForm((f) => ({ ...f, categories: f.categories.filter((c) => c !== cat) }));

  const handleFileDrop = (e) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer?.files || []);
    setFiles((prev) => [...prev, ...dropped]);
  };

  const handleFileSelect = (e) => {
    const selected = Array.from(e.target.files || []);
    setFiles((prev) => [...prev, ...selected]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Review submitted! (Demo)");
  };

  return (
    <main className="min-h-screen bg-[#FAF7F2]">
      <Navbar />

      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-20 sm:pt-28 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left - Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200 p-6 sm:p-8 lg:p-10">
              <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#bf572b] font-medium mb-2">
                FEEDBACK PORTAL
              </p>
              <h1 className="font-serif text-[#1a1a1a] text-[28px] sm:text-[34px] lg:text-[40px] leading-[1.15] tracking-tight mb-3">
                Project Performance &amp; Testimonial
              </h1>
              <p className="font-sans text-[12px] sm:text-[13px] text-neutral-500 mb-8">
                Fields marked with an asterisk (*) are required.
              </p>

              <form onSubmit={handleSubmit} className="space-y-7">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Arjun Malhotra"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      required
                      className="w-full border border-neutral-300 px-4 py-3 text-[13px] font-sans text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                      BUSINESS EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      placeholder="arjun@brewcraftcafe.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="w-full border border-neutral-300 px-4 py-3 text-[13px] font-sans text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                      BRAND / OUTLET NAME *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. The Roasted Bean Cafe & Roastery"
                      value={form.brand}
                      onChange={(e) => setForm({ ...form, brand: e.target.value })}
                      required
                      className="w-full border border-neutral-300 px-4 py-3 text-[13px] font-sans text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                      PROJECT COMPLETION DATE
                    </label>
                    <input
                      type="text"
                      placeholder="March 2024"
                      value={form.completionDate}
                      onChange={(e) => setForm({ ...form, completionDate: e.target.value })}
                      className="w-full border border-neutral-300 px-4 py-3 text-[13px] font-sans text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors"
                    />
                  </div>
                </div>

                {/* Category Multi-Select */}
                <div>
                  <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                    SERVICE / WORK CATEGORY CHOSEN *
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full border border-neutral-300 px-4 py-3 text-left text-[13px] font-sans bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span className={form.categories.length > 0 ? "text-[#1a1a1a]" : "text-neutral-400"}>
                        {form.categories.length > 0
                          ? `${form.categories.length} categor${form.categories.length > 1 ? "ies" : "y"} selected`
                          : "Select categories..."}
                      </span>
                      <svg className={`w-4 h-4 text-neutral-400 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-neutral-200 shadow-lg max-h-60 overflow-y-auto z-50">
                        {categories.slice(1).map((cat) => {
                          const checked = form.categories.includes(cat);
                          return (
                            <button
                              key={cat}
                              type="button"
                              onClick={() => { toggleCategory(cat); setDropdownOpen(false); }}
                              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-50 transition-colors cursor-pointer border-b border-neutral-100 last:border-0"
                            >
                              <span className={`w-4 h-4 flex-shrink-0 flex items-center justify-center border rounded-sm transition-colors ${checked ? "bg-[#bf572b] border-[#bf572b]" : "border-neutral-300"}`}>
                                {checked && (
                                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </span>
                              <span className="text-[13px] font-sans text-[#1a1a1a]">{cat}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {form.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {form.categories.map((cat) => (
                        <span key={cat} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#bf572b] text-white text-[12px] font-sans font-medium">
                          {cat}
                          <button type="button" onClick={() => removeCategory(cat)} className="w-4 h-4 flex items-center justify-center hover:bg-white/20 rounded-sm transition-colors cursor-pointer">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Rating */}
                <div>
                  <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-3">
                    OVERALL PROJECT &amp; EXECUTION RATING *
                  </label>
                  <StarRating
                    rating={form.rating}
                    onRate={(r) => setForm({ ...form, rating: r })}
                  />
                </div>

                {/* Review */}
                <div>
                  <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                    YOUR REVIEW &amp; SPATIAL STORY *
                  </label>
                  <p className="font-sans text-[12px] text-neutral-500 mb-3">
                    Tell us about the collaboration, on-site execution timeline, footfall reaction since launch, and spatial ROI.
                  </p>
                  <textarea
                    rows={5}
                    placeholder="Outset Studio transformed our 1,400 sq.ft bare shell space into a high-throughput cafe. The architectural layout, acoustics, and custom counter detailing drove a 35% footfall increase in our first quarter..."
                    value={form.review}
                    onChange={(e) => setForm({ ...form, review: e.target.value })}
                    required
                    className="w-full border border-neutral-300 px-4 py-3 text-[13px] font-sans text-[#1a1a1a] placeholder:text-neutral-400 focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold block mb-2">
                    OUTLET IMAGERY &amp; WALKTHROUGH FOOTAGE
                  </label>
                  <p className="font-sans text-[12px] text-neutral-500 mb-3">
                    Upload high-res interior/facade photos and brief video walkthroughs.
                  </p>
                  <div
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                    className="border-2 border-dashed border-neutral-300 hover:border-[#bf572b] transition-colors p-8 text-center cursor-pointer"
                  >
                    <input
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={handleFileSelect}
                      className="hidden"
                      id="file-upload"
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <div className="w-10 h-10 mx-auto mb-3 border border-neutral-300 rounded flex items-center justify-center">
                        <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                        </svg>
                      </div>
                      <p className="font-sans text-[13px] text-neutral-600">
                        <span className="text-[#bf572b] font-medium">Click to upload</span> or drag and drop outlet files
                      </p>
                    </label>
                  </div>
                </div>

                {/* Attached Files */}
                {files.length > 0 && (
                  <div>
                    <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold mb-3">
                      ATTACHED ASSETS ({files.length} FILE{files.length > 1 ? "S" : ""} READY)
                    </p>
                    <div className="space-y-2">
                      {files.map((file, i) => {
                        const isVideo = file.type?.startsWith("video/") || file.name?.endsWith(".mp4") || file.name?.endsWith(".mov");
                        return (
                          <div key={i} className="flex items-center justify-between bg-white border border-neutral-200 px-4 py-3">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 bg-neutral-100 border border-neutral-200 overflow-hidden flex items-center justify-center flex-shrink-0">
                                {isVideo ? (
                                  <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M8 5v14l11-7z" />
                                    </svg>
                                  </div>
                                ) : (
                                  <div className="w-full h-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              <div>
                                <p className="font-sans text-[12px] text-[#1a1a1a]">{file.name}</p>
                                <p className="font-sans text-[11px] text-neutral-400">
                                  {(file.size / (1024 * 1024)).toFixed(1)} MB • {isVideo ? "Video Clip" : "Photo"}
                                </p>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFile(i)}
                              className="font-sans text-[10px] tracking-[0.14em] uppercase text-neutral-500 hover:text-[#bf572b] transition-colors cursor-pointer"
                            >
                              REMOVE
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Consent */}
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#bf572b] cursor-pointer"
                  />
                  <span className="font-sans text-[12px] text-neutral-600 leading-[1.6]">
                    I grant Outset Studio full permission to feature these photographs, walkthrough videos, and written testimonial within their architectural portfolio, verified case studies, and digital marketing channels.
                  </span>
                </label>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="h-12 px-8 bg-[#bf572b] text-white font-sans text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-[#a34320] transition-colors cursor-pointer"
                  >
                    SUBMIT CLIENT REVIEW
                  </button>
                  <button
                    type="button"
                    className="h-12 px-8 border border-neutral-300 text-[#1a1a1a] font-sans text-[11px] tracking-[0.14em] uppercase font-semibold hover:bg-neutral-50 transition-colors cursor-pointer"
                  >
                    SAVE DRAFT
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Right - Testimonials Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-6">
              {/* Header Card */}
              <div className="bg-[#1a1a1a] p-6 sm:p-8">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#bf572b] font-medium">
                    VERIFIED VOICES
                  </p>
                  <span className="flex items-center gap-1.5 font-sans text-[10px] text-neutral-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    Live from Outlets
                  </span>
                </div>
                <h2 className="font-serif text-white text-[24px] sm:text-[28px] leading-[1.2] tracking-tight">
                  Crafting Spaces That{" "}
                  <span className="text-[#bf572b] italic">Command</span>{" "}
                  Loyalty
                </h2>
                <p className="font-sans text-[12px] sm:text-[13px] text-neutral-400 leading-[1.7] mt-4">
                  Every review is an honest appraisal of our technical accuracy, turnkey timeline adherence, and commercial viability.
                </p>
              </div>

              {/* Testimonial Cards */}
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white border border-neutral-200 p-5 sm:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0">
                      <Image
                        src={t.image}
                        alt={t.name}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-sans text-[13px] font-semibold text-[#1a1a1a]">{t.name}</p>
                      <p className="font-sans text-[11px] text-neutral-500">{t.role}</p>
                    </div>
                    <span className="ml-auto text-[#bf572b] text-2xl font-serif leading-none">&ldquo;</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <svg
                        key={s}
                        className="w-3.5 h-3.5"
                        fill={s <= Math.floor(t.rating) ? "#bf572b" : s - 0.5 <= t.rating ? "#bf572b" : "none"}
                        stroke="#bf572b"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    ))}
                    <span className="font-sans text-[11px] text-neutral-400 ml-1">({t.rating})</span>
                  </div>
                  <p className="font-sans text-[13px] text-neutral-600 leading-[1.7] italic mb-4">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-3">
                    <span className="font-sans text-[11px] text-neutral-400">Retail Brand Architecture</span>
                    <span className="font-sans text-[11px] text-[#1a1a1a] font-medium">{t.location}</span>
                  </div>
                </div>
              ))}

              {/* Quality Guarantee */}
              <div className="bg-[#FAF7F2] border border-neutral-200 p-5 sm:p-6 flex gap-3">
                <div className="w-8 h-8 bg-[#bf572b] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-sans text-[11px] tracking-[0.14em] uppercase text-[#1a1a1a] font-semibold mb-1">
                    STUDIO QUALITY GUARANTEE
                  </p>
                  <p className="font-sans text-[12px] text-neutral-500 leading-[1.6]">
                    All submitted reviews undergo strict verification against our commercial project logs to ensure transparency for prospective store owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
