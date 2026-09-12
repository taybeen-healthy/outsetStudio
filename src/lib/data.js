/**
 * Outset Studio Centralized Content Data
 * Ready to be connected to MongoDB, PostgreSQL, Prisma, or a CMS in future backend integration.
 */

export const heroData = {
  headline: {
    prefix: "We Transform",
    highlight: "Empty Spaces",
    middle: "Into",
    suffix: "Business-Driving Experiences.",
  },
  subtitle:
    "Outset Studio brings strategy, design, execution, digital presence, and growth together to transform empty spaces into distinctive outlets that attract customers, strengthen brands, and drive growth.",
  actions: [
    {
      label: "START A PROJECT",
      href: "mailto:outsetstudio@gmail.com",
      variant: "primary",
    },
    {
      label: "EXPLORE OUR WORK",
      href: "#our-work",
      variant: "outline",
    },
  ],
  backgroundImage: "/Image (10).svg",
};

export const statsData = [
  { id: 1, value: "90+", label: "TOTAL VENDORS", highlight: true },
  { id: 2, value: "30+", label: "EXPERIENCED VENDORS", highlight: false },
  { id: 3, value: "15+", label: "SPECIALIZED CATEGORIES", highlight: false },
  { id: 4, value: "50+", label: "YEARS OF EXPERIENCE", highlight: false },
];

export const aboutData = {
  title: "More Than Design. Spaces That Perform.",
  description:
    "Outset Studio transforms physical spaces into distinctive, efficient, and high-performing outlets that elevate every customer experience.",
  bullets: [
    "Brand-focused spaces that connect with customers.",
    "From concept to complete execution.",
    "Functional spaces built to perform.",
    "Systems designed to scale.",
  ],
  mainImage: "/Image (1).svg",
  secondaryImage: "/Image (2).svg",
};

export const howWeWorkData = {
  title: "How We Work",
  blueprintImage: "/Image (3).svg",
  steps: [
    {
      number: "01",
      title: "Discover",
      description:
        "Understand your brand, space, customers, and goals before a single line is drawn.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Create the concept, layout, identity, and experience that define the room.",
    },
    {
      number: "03",
      title: "Build",
      description:
        "Manage fabrication, execution, signage, and delivery — on rate, on time.",
    },
    {
      number: "04",
      title: "Launch & Grow",
      description:
        "Launch, strengthen, and grow your outlet long after the ribbon is cut.",
    },
  ],
};

export const industriesData = {
  title: "Built Around Your Business.",
  subtitle:
    "We create distinctive spaces that align your brand, customer experience, and business goals to help every outlet grow.",
  viewAllUrl: "#industries",
  industries: [
    {
      id: "qsrs",
      name: "QSRs",
      description:
        "Manage orders, inventory and operations while keeping service fast and efficient.",
      image: "/Image (4).svg",
    },
    {
      id: "interiors",
      name: "Interiors",
      description:
        "Smart interior spaces designed to better flow, experience, and impact.",
      image: "/Image (6).svg",
    },
    {
      id: "cafes",
      name: "Cafes",
      description:
        "Simplify orders, inventory and sales for smoother daily operations.",
      image: "/Image (5).svg",
    },
    {
      id: "exteriors",
      name: "Exteriors",
      description:
        "Outdoor spaces designed to elevate your brand and attract customers.",
      image: "/Image.png",
    },
    {
      id: "furniture",
      name: "Furniture",
      description:
        "Custom furniture designed to complement your space and brand.",
      image: "/Image (7).svg",
    },
    {
      id: "salons",
      name: "Salons",
      description:
        "Manage appointments, services and inventory from one place.",
      image: "/Image (8).svg",
    },
  ],
};

export const ourWorkData = {
  title: "Our Work",
  subtitle: "Spaces designed for commercial success across key regions.",
  filters: ["Delhi", "Gurugram", "Rajasthan", "View All"],
  projects: [
    {
      id: 1,
      title: "Sardar Ji Baksh Cafe",
      subtitle: "A refined space with a character of its own.",
      image: "/Image (5).svg",
      location: "Delhi",
    },
    {
      id: 2,
      title: "Rigo Cafe",
      subtitle: "A warm, thoughtfully designed cafe experience.",
      image: "/image 9.svg",
      location: "Gurugram",
    },
    {
      id: 3,
      title: "Sardar Ji Baksh",
      subtitle: "A refined space with a character of its own.",
      image: "/Image (5).svg",
      location: "Rajasthan",
    },
    {
      id: 4,
      title: "Blue Tokai Coffee",
      subtitle: "Modern roastery & cafe designed for community.",
      image: "/image 9.svg",
      location: "Gurugram",
    },
  ],
};

export const testimonialsData = {
  title: "What Our Customer's say",
  testimonials: [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "WORKSPACE STUDIO",
      rating: 5,
      quote:
        "Outset Studio delivers thoughtful design, seamless execution, and strategic growth solutions that transform spaces into memorable, customer-focused experiences.",
      avatar: "/image 8 (1).png",
      image: "/image 9.svg",
    },
    {
      id: 2,
      name: "Ananya Patel",
      company: "ARTISAN CAFE",
      rating: 5,
      quote:
        "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
      avatar: "/image 8 (1).png",
      image: "/image 9.svg",
    },
  ],
};

export const footerData = {
  brand: {
    name: "OUTSET STUDIO",
    description:
      "Outset Studio brings strategy, design, execution, digital presence, and growth together to transform spaces into distinctive, high-performing outlets.",
  },
  contacts: {
    email: "outsetstudio@gmail.com",
    phone: "9898844855",
  },
  quickLinks: [
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Work", href: "#our-work" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "#industries" },
  ],
  services: ["Outlet", "Build", "Growth", "Scale"],
  copyright: "© 2024 Outset Studio. All rights reserved.",
  legalLinks: [
    { name: "Terms and conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};
