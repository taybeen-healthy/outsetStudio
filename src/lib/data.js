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
  backgroundImage: "/image1.jpg",
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
  mainImage: "/image2.jpg",
  secondaryImage: "/image3.jpg",
};

export const howWeWorkData = {
  title: "How We Work",
  blueprintImage: "/image7.png",
  steps: [
    {
      number: "01",
      phase: "PHASE ONE",
      title: "Discover",
      description:
        "Understand your brand identity, spatial constraints, target customer psychology, and financial goals before a single line is drawn.",
      image: "/image7.png",
    },
    {
      number: "02",
      phase: "PHASE TWO",
      title: "Design",
      description:
        "Author the spatial narrative, architectural drawings, lighting schemes, tactile material selection, and 3D sensory experience that define the space.",
      image: "/image8.jpg",
    },
    {
      number: "03",
      phase: "PHASE THREE",
      title: "Build",
      description:
        "Oversee general contracting, precision carpentry, custom fixture fabrication, MEP coordination, and site delivery — on rate and on time.",
      image: "/image9.jpg",
    },
    {
      number: "04",
      phase: "PHASE FOUR",
      title: "Launch & Grow",
      description:
        "Coordinate grand openings, digital presence rollouts, and ongoing operational spatial refinement to scale your outlet sustainably.",
      image: "/image10.jpg",
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
      image: "/image8.jpg",
    },
    {
      id: "interiors",
      name: "Interiors",
      description:
        "Smart interior spaces designed to better flow, experience, and impact.",
      image: "/image9.jpg",
    },
    {
      id: "cafes",
      name: "Cafes",
      description:
        "Simplify orders, inventory and sales for smoother daily operations.",
      image: "/image10.jpg",
    },
    {
      id: "exteriors",
      name: "Exteriors",
      description:
        "Outdoor spaces designed to elevate your brand and attract customers.",
      image: "/image11.jpg",
    },
    {
      id: "furniture",
      name: "Furniture",
      description:
        "Custom furniture designed to complement your space and brand.",
      image: "/image12.jpg",
    },
    {
      id: "salons",
      name: "Salons",
      description:
        "Manage appointments, services and inventory from one place.",
      image: "/image13.jpg",
    },
  ],
};

export const ourWorkData = {
  title: "One Studio from Concept to Growth.",
  subtitle:
    "From concept to growth, Outset Studio creates distinctive, high-performing outlets.",
  filters: ["ALL", "DELHI", "GURUGRAM", "RAJASTHAN"],
  projects: [
    {
      id: 1,
      title: "Sardar Ji Baksh Cafe",
      subtitle:
        "A thoughtfully crafted café experience where distinctive interiors, warm atmospheres, and memorable moments come together to create a space people want to return to.",
      image: "/image4.png",
      location: "GURUGRAM",
    },
    {
      id: 2,
      title: "Rigo Cafe",
      subtitle:
        "More than a place to dine, Rigo Cafe brings together thoughtful design, inviting spaces, and memorable experiences that keep people coming back.",
      image: "/image5.png",
      location: "GURUGRAM",
    },
    {
      id: 3,
      title: "Sardar Ji Baksh Cafe",
      subtitle:
        "A thoughtfully crafted café experience where distinctive interiors, warm atmospheres, and memorable moments come together to create a space people want to return to.",
      image: "/image6.png",
      location: "GURUGRAM",
    },
    {
      id: 4,
      title: "Blue Tokai Coffee",
      subtitle:
        "Modern roastery & cafe designed for community and fast-paced commercial footfall.",
      image: "/image4.png",
      location: "DELHI",
    },
    {
      id: 5,
      title: "The House of Coffee",
      subtitle:
        "Artisanal interior architecture crafted to maximize customer flow and dining ambiance.",
      image: "/image5.png",
      location: "RAJASTHAN",
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
      avatar: "/image14.jpg",
      image: "/image10.jpg",
    },
    {
      id: 2,
      name: "Ananya Patel",
      company: "ARTISAN CAFE",
      rating: 5,
      quote:
        "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
      avatar: "/image14.jpg",
      image: "/image11.jpg",
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
