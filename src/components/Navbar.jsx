"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContactModal from "./ContactModal";
import VendorModal from "./VendorModal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showVendor, setShowVendor] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isLightBg = isHome || pathname.startsWith("/work/");
  const isDarkNavbar = !isHome && !pathname.startsWith("/work/");

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
    { name: "OUR WORK", href: "/our-work" },
    { name: "INDUSTRIES", href: "/industries" },
  ];

  return (
    <header
      className={`relative z-30 w-full transition-all duration-300 ${
        isLightBg
          ? `border-b border-transparent lg:border-white/10 ${
              scrolled
                ? "bg-[#FAF7F2]/95 lg:bg-black/85 backdrop-blur-md shadow-sm lg:shadow-lg"
                : "bg-[#FAF7F2] lg:bg-transparent"
            }`
          : `border-b border-white/10 ${
              isDarkNavbar
                ? "bg-black/95 backdrop-blur-md"
                : scrolled
                  ? "bg-black/85 backdrop-blur-md shadow-lg"
                  : "bg-transparent"
            }`
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 flex items-center justify-between py-5 sm:py-6">
        <Link
          href="/"
          className="flex items-baseline tracking-[0.18em] focus:outline-none cursor-pointer"
          aria-label="Outset Studio Homepage"
        >
          <span
            className={`font-serif text-[17px] sm:text-[22px] tracking-[0.18em] font-bold sm:font-normal uppercase ${
              isDarkNavbar ? "text-white lg:text-white" : "text-[#1a1a1a] lg:text-white"
            }`}
          >
            OUTSET
          </span>
          <span className="font-serif text-[17px] sm:text-[22px] tracking-[0.18em] text-[#C0532C] font-bold sm:font-normal uppercase">
            STUDIO
          </span>
        </Link>

        <nav
          className="hidden lg:flex items-center space-x-10 xl:space-x-14"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.startsWith("/") && pathname === link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.2em] uppercase font-normal transition-colors duration-200 py-1 font-sans cursor-pointer ${
                  isActive
                    ? "text-[#C0532C] border-b border-[#C0532C] pb-1"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 xl:gap-4">
          <button
            onClick={() => setShowContact(true)}
            className="text-[10px] xl:text-xs tracking-[0.2em] uppercase font-normal text-neutral-200 border border-neutral-600/80 hover:border-white hover:bg-white hover:text-black px-5 xl:px-7 py-2.5 bg-black/20 transition-all duration-300 rounded-none font-sans cursor-pointer whitespace-nowrap"
          >
            CONTACT
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-1 focus:outline-none cursor-pointer transition-colors hover:opacity-70 ${
            isLightBg ? "text-[#1a1a1a]" : "text-white"
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                strokeWidth="1.6"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className={`lg:hidden absolute top-full left-0 w-full px-5 py-6 transition-all duration-300 shadow-2xl ${
            isLightBg
              ? "bg-[#FAF7F2] border-b border-neutral-200"
              : "bg-black/95 backdrop-blur-xl border-b border-white/10"
          }`}
        >
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xs tracking-[0.2em] uppercase font-normal py-2 transition-colors cursor-pointer ${
                  isLightBg
                    ? "text-[#1a1a1a] hover:text-[#C0532C] border-b border-neutral-200"
                    : "text-neutral-300 hover:text-white border-b border-white/5"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowVendor(true);
              }}
              className={`text-center text-xs tracking-[0.2em] uppercase font-normal px-6 py-2.5 mt-4 transition-all rounded-none cursor-pointer ${
                isLightBg
                  ? "text-[#1a1a1a] border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  : "text-white border border-white/40 hover:bg-white hover:text-black"
              }`}
            >
              REGISTER VENDOR
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setShowContact(true);
              }}
              className={`text-center text-xs tracking-[0.2em] uppercase font-normal px-6 py-2.5 mt-4 transition-all rounded-none cursor-pointer ${
                isLightBg
                  ? "text-[#1a1a1a] border border-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white"
                  : "text-white border border-white/40 hover:bg-white hover:text-black"
              }`}
            >
              CONTACT
            </button>
          </nav>
        </div>
      )}
      {showContact && <ContactModal onClose={() => setShowContact(false)} />}
      {showVendor && <VendorModal onClose={() => setShowVendor(false)} />}
    </header>
  );
}
