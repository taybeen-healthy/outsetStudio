import Link from "next/link";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "What We Do", href: "#what-we-do" },
  { name: "Our Work", href: "#our-work" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
];

const services = ["Outlet", "Build", "Growth", "Scale"];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-14 pt-12 sm:pt-18 lg:pt-20 pb-6 sm:pb-12">
        {/* Main layout matching Figma */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 mb-12 sm:mb-20">
          {/* Brand & Contact Column (Left, 7 cols on md/lg) */}
          <div className="md:col-span-6 lg:col-span-7 flex flex-col gap-4">
            <Link
              href="/"
              className="flex items-baseline gap-1.5 w-fit focus:outline-none"
              aria-label="Outset Studio Homepage"
            >
              <span className="font-serif text-2xl sm:text-[28px] text-[#bf572b] font-normal leading-none">
                Outset
              </span>
              <span className="font-serif text-2xl sm:text-[28px] text-white font-normal leading-none">
                Studio
              </span>
            </Link>

            <p className="font-sans text-sm text-[#cccccc] font-light leading-[1.75] max-w-sm">
              Outset Studio brings strategy, design, execution, digital
              presence, and growth together to transform spaces into distinctive,
              high-performing outlets.
            </p>

            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href="mailto:Outsetstudio@gmail.com"
                className="font-sans text-sm text-[#e5e5e5] hover:text-white transition-colors font-light flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Outsetstudio@gmail.com
              </a>
              <a
                href="tel:9958544930"
                className="font-sans text-sm text-[#e5e5e5] hover:text-white transition-colors font-light flex items-center gap-2.5"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                </svg>
                9958544930
              </a>
            </div>
          </div>

          {/* Quick Links Column (Cormorant Garamond title) */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-2 lg:col-start-9 flex-col gap-4">
            <h3 className="font-serif text-white text-lg sm:text-xl font-normal">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-sm text-[#cccccc] hover:text-white transition-colors duration-200 font-light"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column (Cormorant Garamond title) */}
          <div className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col gap-4">
            <h3 className="font-serif text-white text-lg sm:text-xl font-normal">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((service) => (
                <li
                  key={service}
                  className="font-sans text-sm text-[#cccccc] font-light hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar with divider line */}
        <div className="border-t border-neutral-900 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-sm sm:text-xs text-[#bdbdbd] sm:text-[#888888] font-light">
            &copy; 2026 Outset Studio. All rights reserved.
          </p>
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#"
              className="font-sans text-xs text-[#888888] hover:text-white transition-colors font-light"
            >
              Terms and conditions
            </a>
            <a
              href="#"
              className="font-sans text-xs text-[#888888] hover:text-white transition-colors font-light"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
