"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
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
    { name: "ABOUT", href: "/about" },
    { name: "WHAT WE DO", href: "/what-we-do" },
    { name: "OUR WORK", href: "#our-work" },
    { name: "INDUSTRIES", href: "#industries" },
  ];

  return (
    <header
      className={`relative z-30 w-full border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-black/85 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 flex items-center justify-between py-5 sm:py-6">
        {/* Brand Logo matching Screenshot */}
        <Link
          href="/"
          className="group flex items-baseline gap-2 focus:outline-none"
          aria-label="Outset Studio Homepage"
        >
          <span className="font-serif text-xl sm:text-[22px] tracking-[0.16em] text-[#B84E29] font-normal uppercase">
            OUTSET
          </span>
          <span className="font-serif text-xl sm:text-[22px] tracking-[0.16em] text-white font-normal uppercase">
            STUDIO
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center space-x-10 xl:space-x-14"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase font-normal text-neutral-300 hover:text-white transition-colors duration-200 py-1 font-sans"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact Action Button */}
        <div className="hidden lg:block">
          <a
            href="mailto:outsetstudio@gmail.com"
            className="inline-block text-xs tracking-[0.2em] uppercase font-normal text-neutral-200 border border-neutral-600/80 hover:border-white hover:text-white px-7 py-2.5 bg-black/20 hover:bg-white hover:text-black transition-all duration-300 rounded-none font-sans"
          >
            CONTACT
          </a>
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
                className="text-xs tracking-[0.2em] uppercase font-normal text-neutral-300 hover:text-white transition-colors duration-200 py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="mailto:outsetstudio@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center text-xs tracking-[0.2em] uppercase font-normal text-white border border-white/40 hover:bg-white hover:text-black px-6 py-2.5 mt-4 transition-all rounded-none"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
