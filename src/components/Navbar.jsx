"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Our Work", href: "#our-work" },
    { name: "Industries", href: "#industries" },
  ];

  return (
    <header
      className={`relative z-30 w-full transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md py-4 shadow-lg" : "py-5 sm:py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-7 sm:px-10 lg:px-14 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-baseline gap-1.5 focus:outline-none"
          aria-label="Outset Studio Homepage"
        >
          <span className="font-serif text-2xl sm:text-[26px] tracking-wide text-[#bf572b] font-normal transition-colors duration-300 group-hover:text-[#d96838]">
            Outset
          </span>
          <span className="font-serif text-2xl sm:text-[26px] tracking-wide text-white font-normal">
            Studio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-9 xl:space-x-12"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm sm:text-[15px] font-normal text-white hover:text-white/80 transition-colors duration-200 py-1"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Action Button */}
        <div className="hidden lg:block">
          <button
            type="button"
            onClick={onOpenModal}
            className="inline-block text-sm sm:text-[15px] font-normal text-white border border-white/80 hover:border-white px-7 py-2 bg-transparent hover:bg-white hover:text-black transition-all duration-300 cursor-pointer rounded-none"
          >
            Contact
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1 text-white focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-down Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300 shadow-2xl">
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-normal text-white hover:text-white/80 transition-colors duration-200 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="text-center text-sm font-normal text-white border border-white/80 hover:bg-white hover:text-black px-6 py-2.5 mt-4 transition-all cursor-pointer rounded-none"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
