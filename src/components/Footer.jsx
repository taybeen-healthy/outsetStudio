import Link from "next/link";

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "What We Do", href: "/what-we-do" },
  { name: "Our Work", href: "#our-work" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
];

const services = ["Outlet", "Build", "Growth", "Scale"];

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="w-full bg-[#111111] text-white pt-16 sm:pt-20 pb-10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        {/* Main 3-Column Layout matching Screenshot 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          {/* Brand & Contact Column (Left) */}
          <div className="md:col-span-6 lg:col-span-6 flex flex-col">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-baseline gap-2 w-fit focus:outline-none group"
              aria-label="Outset Studio Homepage"
            >
              <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] text-[#B84E29] font-normal uppercase">
                OUTSET
              </span>
              <span className="font-serif text-xl sm:text-2xl tracking-[0.16em] text-white font-normal uppercase">
                STUDIO
              </span>
            </Link>

            {/* Description */}
            <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm mt-5">
              Outset Studio brings strategy, design, execution, digital
              presence, and growth together to transform spaces into distinctive,
              high-performing outlets.
            </p>

            {/* Contact list with Terracotta icons */}
            <div className="flex flex-col gap-3 mt-6">
              <a
                href="mailto:outsetstudio@gmail.com"
                className="font-sans text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors font-light flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4 text-[#B84E29] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                outsetstudio@gmail.com
              </a>

              <a
                href="tel:9898844855"
                className="font-sans text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors font-light flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4 text-[#B84E29] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                9898844855
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">
              QUICK LINKS
            </h3>
            <nav className="flex flex-col space-y-3.5" aria-label="Footer navigation">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-sans text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors font-light"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 lg:col-span-3 flex flex-col">
            <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">
              SERVICES
            </h3>
            <ul className="flex flex-col space-y-3.5">
              {services.map((service) => (
                <li
                  key={service}
                  className="font-sans text-xs sm:text-sm text-neutral-300 font-light hover:text-white transition-colors cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar with divider line */}
        <div className="border-t border-neutral-800/80 mt-16 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-sans text-xs text-neutral-500 font-light">
            &copy; 2024 Outset Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-2.5 text-xs text-neutral-500 font-light">
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Terms and conditions
            </a>
            <span>&middot;</span>
            <a href="#" className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
