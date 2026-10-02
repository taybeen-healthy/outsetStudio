/**
 * Outset Studio Centralized Content Data
 * Ready to be connected to MongoDB, PostgreSQL, Prisma, or a CMS in future backend integration.
 */

export const heroData = {
  headline: {
    text: "“We Design and Build Cafes, QSRs, & Salons That Perform From Day One.”",
  },
  subtitle:
    "Outset Studio brings strategy, design, execution, digital presence, and growth together to transform empty spaces into distinctive outlets that attract customers, strengthen brands, and drive growth.",
  actions: [
    {
      label: "GET IN TOUCH",
      href: "mailto:info@outsetstudio.in",
      variant: "primary",
    },
    {
      label: "START A PROJECT",
      href: "#our-work",
      variant: "outline",
    },
  ],
  backgroundImage: "/hero.jpg",
};

export const statsData = [
  { id: 1, value: "10+", label: "TOTAL VENDORS", highlight: true },
  { id: 2, value: "10+", label: "EXPERIENCED VENDORS", highlight: false },
  { id: 3, value: "40+", label: "SPECIALIZED CATEGORIES", highlight: false },
  { id: 4, value: "07+", label: "YEARS OF EXPERIENCE", highlight: false },
];

export const aboutData = {
  title: "More Than Design. Spaces That Perform.",
  description:
    "Outset Studio transforms physical spaces into distinctive, efficient, and highly-performing outlets that elevate every customer experience.",
  bullets: [
    "Brand-focused spaces that connect with customers.",
    "From concept to complete execution.",
    "Functional spaces built to perform.",
    "Systems designed to scale.",
  ],
  mainImage: "/hs2.png",
  secondaryImage: "/hs22.png",
};

export const howWeWorkData = {
  title: "How We Work",
  blueprintImage: "/image7.jpg",
  steps: [
    {
      number: "01",
      phase: "PHASE ONE",
      title: "Discover",
      description:
        "Understand your brand identity, spatial constraints, target customer psychology, and financial goals before a single line is drawn.",
      image: "/image7.jpg",
    },
    {
      number: "02",
      phase: "PHASE TWO",
      title: "Design",
      description:
        "Author the spatial narrative, architectural drawings, lighting schemes, tactile material selection, and 3D sensory experience that define the space.",
      image: "/image35.png",
    },
    {
      number: "03",
      phase: "PHASE THREE",
      title: "Build",
      description:
        "Oversee general contracting, precision carpentry, custom fixture fabrication, MEP coordination, and site delivery — on rate and on time.",
      image: "/image36.png",
    },
    {
      number: "04",
      phase: "PHASE FOUR",
      title: "Launch & Grow",
      description:
        "Coordinate grand openings, digital presence rollouts, and ongoing operational spatial refinement to scale your outlet sustainably.",
      image: "/image37.png",
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
      name: "Cafés",
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
    {
      id: "retail",
      name: "Retail Stores",
      description:
        "Outdoor spaces designed to elevate your brand and attract customers.",
      image: "/image15.png",
    },
    {
      id: "pharmacies",
      name: "Pharmacies",
      description:
        "Manage orders, inventory and operations while keeping service fast and efficient.",
      image: "/image16.png",
    },
    {
      id: "clinics",
      name: "Clinics & Healthcare",
      description:
        "Calm, functional environments designed for patient comfort, accessibility.",
      image: "/image17.png",
    },
    {
      id: "hospitality",
      name: "Hospitality & Hotels",
      description:
        "Manage appointments, services and inventory from one place.",
      image: "/image18.png",
    },
    {
      id: "fitness",
      name: "Fitness & Wellness",
      description:
        "Purposeful environments designed to create energy and motivation.",
      image: "/image19.png",
    },
    {
      id: "offices",
      name: "Offices & Workspaces",
      description:
        "Calm, functional environments designed around patient comfort, and accessibility.",
      image: "/image20.png",
    },
  ],
};

export const ourWorkData = {
  title: "One Studio from Concept to Growth.",
  subtitle:
    "From concept to growth, Outset Studio creates distinctive, high-performing outlets.",
  filters: ["ALL", "RENOVATION", "POLICE STATION", "BEDROOM", "KITCHEN", "LIVING ROOM", "COMMERCIAL & OFFICE", "FECADE", "BATHROOM & SPA", "CAFE"],
  projects: [
    {
      id: 1,
      slug: "sardar-ji-baksh-cafe",
      categories: ["CAFE"],
      title: "Sardar Ji Baksh Cafe",
      titleRoman: "Sardar Ji",
      titleItalic: "Baksh Cafe",
      subtitle:
        "A thoughtfully crafted café experience where distinctive interiors, warm atmospheres, and memorable moments come together to create a space people want to return to.",
      image: "/image39.png",
      location: "GURUGRAM",
      specs: {
        projectName: "SARDAR JI BAKSH CAFE",
        type: "CAFÉ & ROASTERY",
        location: "GOLF COURSE EXT., GURUGRAM",
        scope: "INTERIOR DESIGN & MILLWORK",
      },
      concept: {
        title: "A warm and contemporary café experience.",
        description:
          "A contemporary café designed around warm materials, comfortable seating, and a welcoming atmosphere. Natural textures, fluted woodwork, terracotta tones, and soft lighting create a relaxed space for coffee, conversation, and everyday moments.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Natural & Textured",
          description:
            "Fluted white oak millwork, hand-fired Rajasthan terracotta tile, unlacquered brass, and breathable lime wash plaster.",
          image: "/image40.png",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Harmonious Tones",
          bottomTag: "NATURAL EARTH PIGMENTS",
          swatches: [
            { name: "TERRACOTTA BRICK", hex: "#C2592D", bg: "#C2592D" },
            { name: "WARM LIME PLASTER", hex: "#EFECE6", bg: "#EFECE6" },
            { name: "FLUTED WHITE OAK", hex: "#B89778", bg: "#B89778" },
            { name: "OBSIDIAN SHADOW", hex: "#1B1918", bg: "#1B1918" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Warm & Comfortable",
          description:
            "Custom 2700K hand-blown amber glass pendants casting warm luminescence across curved acoustic terracotta walls.",
          image: "/image41.png",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Simple & Custom",
          description:
            "Custom wooden furniture, comfortable seating, and handcrafted tables bring warmth and character to the café.",
          image: "/image42.png",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "The Roastery Bar",
          description:
            "The main bar area is designed for easy movement and a smooth coffee-making experience. Its warm wood finish also makes it a key feature of the café.",
        },
        {
          number: "02.",
          title: "Comfortable Seating",
          description:
            "Soft seating and cosy corners create a warm and comfortable space to relax, work, and enjoy coffee with friends. The seating is arranged to make the café feel open, and easy to enjoy.",
        },
        {
          number: "03.",
          title: "Natural Light",
          description:
            "Large windows bring in plenty of natural light and connect the café with the outdoors, making the space feel open and welcoming. The natural light adds warmth to the interiors.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image43.png",
          index: "INDEX: ARCH-081-MAIN",
          caption: "NATURAL DIURNAL PENETRATION",
        },
        plate2: {
          image: "/image44.png",
          index: "INDEX: ARCH-082-LUX",
          caption: "2700K EVENING GLOW",
        },
        plate3: {
          image: "/image45.png",
          index: "INDEX: ARCH-083-FURN",
          caption: "TRAVERTINE & COGNAC LEATHER",
        },
        plate4: {
          image: "/image46.jpg",
          caption: "ARCH-084-MAT • TACTILE STUDY",
        },
        plate5: {
          image: "/image47.jpg",
          caption: "ARCH-085-INT • FLUTED GLAZING",
        },
        plate6: {
          image: "/image48.jpg",
          caption: "ARCH-086-EXT • STREET VERANDAH",
        },
      },
    },
    {
      id: 2,
      slug: "rigo-cafe",
      categories: ["CAFE"],
      title: "Rigo Cafe",
      titleRoman: "Rigo",
      titleItalic: "Cafe",
      subtitle:
        "More than a place to dine, Rigo Cafe brings together thoughtful design, inviting spaces, and memorable experiences that keep people coming back.",
      image: "/image32.png",
      location: "GURUGRAM",
      specs: {
        projectName: "RIGO CAFE",
        type: "CASUAL DINING & CAFÉ",
        location: "DLF CYBER CITY, GURUGRAM",
        scope: "SPATIAL DESIGN & CUSTOM SEATING",
      },
      concept: {
        title: "An intimate and welcoming dining atmosphere.",
        description:
          "Designed with curved architectural contours, plush custom banquettes, and diffused cove lighting to eliminate cold zones and cultivate an inviting neighborhood dining destination.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Warm Limewash & Oak",
          description:
            "Velvety textured limewash plaster surfaces paired with warm walnut joinery and custom brass accent trims.",
          image: "/image32.png",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Earth Tones",
          bottomTag: "HARMONIC NATURAL PIGMENTS",
          swatches: [
            { name: "SADDLE TAN", hex: "#B8653B", bg: "#B8653B" },
            { name: "LIMEWASH ECRU", hex: "#F2EFEB", bg: "#F2EFEB" },
            { name: "DEEP WALNUT", hex: "#5C3E2C", bg: "#5C3E2C" },
            { name: "CHARCOAL SLATE", hex: "#222120", bg: "#222120" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Diffused & Atmospheric",
          description:
            "Concealed cove illumination washing across textured walls, complemented by low-glare brass table sconces.",
          image: "/image15.png",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Bespoke Banquettes",
          description:
            "Custom-molded leatherette booths providing privacy and acoustic comfort during busy service hours.",
          image: "/image12.jpg",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Curved Seating Bays",
          description:
            "Sculptural semi-circular booths designed to maximize guest comfort and provide intimate dining enclaves.",
        },
        {
          number: "02.",
          title: "Acoustic Attenuation",
          description:
            "Wall-mounted fabric panels and sound-dampening plaster ensuring quiet conversational acoustics even at peak capacity.",
        },
        {
          number: "03.",
          title: "Open Service Vista",
          description:
            "Unobstructed sightlines connecting the front entrance to the dessert bar, welcoming patrons with visual warmth.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image32.png",
          index: "INDEX: ARCH-001-MAIN",
          caption: "SPATIAL COVE & SEATING STUDY",
        },
        plate2: {
          image: "/image15.png",
          index: "INDEX: ARCH-002-LUX",
          caption: "EVENING AMBIENT ILLUMINATION",
        },
        plate3: {
          image: "/image12.jpg",
          index: "INDEX: ARCH-003-FURN",
          caption: "BESPOKE BANQUETTE DETAIL",
        },
        plate4: {
          image: "/image36.png",
          caption: "ARCH-004-MAT • JOINERY INTEGRATION",
        },
        plate5: {
          image: "/image37.png",
          caption: "ARCH-005-INT • SERVICE FLOW",
        },
        plate6: {
          image: "/image8.jpg",
          caption: "ARCH-006-EXT • STREET ENTRANCE",
        },
      },
    },
    {
      id: 3,
      slug: "patna-bihar-sardar-ji-baksh",
      categories: ["CAFE"],
      title: "Patna Bihar Sardar Ji Baksh",
      titleRoman: "Sardar Ji Baksh",
      titleItalic: "Patna Flagship",
      subtitle:
        "A vibrant coffee destination offering freshly brewed beverages, delicious bites, and a welcoming atmosphere. Sardar-Ji-Bakhsh Coffee brings together great coffee, comforting flavours, and a relaxed space to unwind, catch up, or enjoy a quick break.",
      image: "/image31.png",
      location: "PATNA BIHAR",
      specs: {
        projectName: "PATNA SARDAR JI BAKSH",
        type: "FLAGSHIP REGIONAL ROASTERY",
        location: "BORING ROAD, PATNA",
        scope: "TURNKEY ARCHITECTURE & CIVIL FIT-OUT",
      },
      concept: {
        title: "A flagship cultural destination for specialty coffee.",
        description:
          "Bringing metro-grade architectural standards to Bihar with generous 3,100 sq.ft spatial volume, communal library tables, and an expansive glazed street façade.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Exposed Brick & Terrazzo",
          description:
            "Hand-cast custom floor terrazzo integrated with indigenous exposed brickwork and fluted timber wall partitions.",
          image: "/image2.jpg",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Earthy Terracotta & Cream",
          bottomTag: "INDIGENOUS MINERAL PIGMENTS",
          swatches: [
            { name: "RIVER SAND BRICK", hex: "#BD5B34", bg: "#BD5B34" },
            { name: "LIMESTONE CREME", hex: "#F4F0E8", bg: "#F4F0E8" },
            { name: "ROAST OAK", hex: "#8A6448", bg: "#8A6448" },
            { name: "RAW IRON", hex: "#1C1B1B", bg: "#1C1B1B" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Zoned Architectural Lighting",
          description:
            "Focused 3000K task lighting over reading bars balanced by soft ambient perimeter wash for evening social gatherings.",
          image: "/image3.jpg",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Solid Wood Communal Tables",
          description:
            "Handcrafted 12-seater central oak sharing tables equipped with integrated wire management for co-working comfort.",
          image: "/image16.png",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Dual-Side Espresso Bar",
          description:
            "Centered coffee workstation engineered for simultaneous dine-in extraction and express takeaway fulfillment.",
        },
        {
          number: "02.",
          title: "Elevated Mezzanine Lounge",
          description:
            "Intimate second-level mezzanine overlooking the main roastery hall, offering serene seating for remote professionals.",
        },
        {
          number: "03.",
          title: "Curated Reading Nooks",
          description:
            "Acoustically softened perimeter pockets framed by architectural bookshelves and tactile fabric chairs.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image31.png",
          index: "INDEX: ARCH-001-MAIN",
          caption: "ATRIUM HALL & ESPRESSO LINE",
        },
        plate2: {
          image: "/image2.jpg",
          index: "INDEX: ARCH-002-LUX",
          caption: "DAYLIGHT PENETRATION AT ENTRANCE",
        },
        plate3: {
          image: "/image16.png",
          index: "INDEX: ARCH-003-FURN",
          caption: "COMMUNAL BAR & JOINERY",
        },
        plate4: {
          image: "/image38.png",
          caption: "ARCH-004-MAT • TERRAZZO CASTING",
        },
        plate5: {
          image: "/image35.png",
          caption: "ARCH-005-INT • MEZZANINE GLAZING",
        },
        plate6: {
          image: "/image7.jpg",
          caption: "ARCH-006-EXT • STREET ENTRANCE FAÇADE",
        },
      },
    },
    {
      id: 4,
      slug: "minerals-the-garden-cafe",
      categories: ["CAFE"],
      title: "Minerals The Garden Cafe",
      titleRoman: "Minerals",
      titleItalic: "The Garden Cafe",
      subtitle:
        "A refreshing garden café that brings together great food, a relaxed atmosphere, and a beautiful outdoor setting. Minerals The Garden Cafe offers a comfortable space to enjoy delicious meals, refreshing beverages, and quality time with friends and family.",
      image: "/image4.jpg",
      location: "DELHI",
      specs: {
        projectName: "MINERALS THE GARDEN CAFE",
        type: "GARDEN BISTRO & AL FRESCO",
        location: "CHANAKYAPURI, NEW DELHI",
        scope: "LANDSCAPE & CONSERVATORY ARCHITECTURE",
      },
      concept: {
        title: "A botanical oasis in the heart of the capital.",
        description:
          "Transforming outdoor open air into a year-round climate-adaptive dining retreat using bespoke steel pavilions, misting systems, and rich horticultural integration.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Travertine & Weathered Teak",
          description:
            "Porous natural travertine stone paving bordered by plantation teak woodwork and matte-black structural steel framing.",
          image: "/image4.jpg",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Organic Olive & Stone",
          bottomTag: "BOTANICAL LANDSCAPE SHADES",
          swatches: [
            { name: "BOTANICAL MOSS", hex: "#5C6B56", bg: "#5C6B56" },
            { name: "TRAVERTINE BUFF", hex: "#E8E2D5", bg: "#E8E2D5" },
            { name: "WEATHERED TEAK", hex: "#9E7B58", bg: "#9E7B58" },
            { name: "STRUCTURAL STEEL", hex: "#232625", bg: "#232625" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Canopy & Tree Uplighting",
          description:
            "Low-voltage garden illuminators concealed within landscape beds casting gentle upward luminescence into the foliage.",
          image: "/image13.jpg",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Weatherproof Outdoor Wicker",
          description:
            "All-weather woven rattan seating and cast-concrete pedestal dining tables designed for Delhi's shifting seasons.",
          image: "/image11.jpg",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "The Glass Conservatory",
          description:
            "An enclosed air-conditioned glasshouse pavilion offering garden views while protecting patrons from extreme weather.",
        },
        {
          number: "02.",
          title: "Pergola Terrace",
          description:
            "Shaded timber trellis bays draped in flowering bougainvillea, creating serene outdoor tables for evening gatherings.",
        },
        {
          number: "03.",
          title: "Water-Cooled Microclimate",
          description:
            "Integrated water features and fine aerosol nozzles that reduce ambient summer temperatures by 4–6 degrees.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image4.jpg",
          index: "INDEX: ARCH-001-MAIN",
          caption: "CONSERVATORY PAVILION & TERRACE",
        },
        plate2: {
          image: "/image13.jpg",
          index: "INDEX: ARCH-002-LUX",
          caption: "TWILIGHT GARDEN ILLUMINATION",
        },
        plate3: {
          image: "/image11.jpg",
          index: "INDEX: ARCH-003-FURN",
          caption: "AL FRESCO DINING DECK",
        },
        plate4: {
          image: "/image6.jpg",
          caption: "ARCH-004-MAT • TRAVERTINE HARDSCAPE",
        },
        plate5: {
          image: "/image35.png",
          caption: "ARCH-005-INT • GLASSHOUSE STRUCTURE",
        },
        plate6: {
          image: "/image10.jpg",
          caption: "ARCH-006-EXT • BOTANICAL COURTYARD",
        },
      },
    },
    {
      id: 5,
      slug: "punjabi-bagh-sardar-ji-baksh",
      categories: ["CAFE"],
      title: "Punjabi Bagh Sardar ji Baksh",
      titleRoman: "Sardar Ji Baksh",
      titleItalic: "Punjabi Bagh",
      subtitle:
        "A vibrant coffee destination offering freshly brewed beverages, delicious bites, and a welcoming atmosphere. Sardar-Ji-Bakhsh Coffee brings together great coffee, comforting flavours, and a relaxed space to unwind, catch up, or enjoy a quick break.",
      image: "/image5.jpg",
      location: "DELHI",
      specs: {
        projectName: "PUNJABI BAGH SARDAR JI BAKSH",
        type: "HIGH-STREET SPECIALTY COFFEE",
        location: "CLUB ROAD, PUNJABI BAGH, DELHI",
        scope: "FAÇADE ENGINEERING & INTERIOR FIT-OUT",
      },
      concept: {
        title: "High-street visual power and streamlined coffee flow.",
        description:
          "Engineered for high pedestrian impact along West Delhi's premier commercial avenue, pairing a recessed takeaway window with an intimate indoor espresso lounge.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Microcement & Brushed Bronze",
          description:
            "Seamless concrete plaster walls contrasted with brushed antique bronze signage profiles and fluted glass partitions.",
          image: "/image5.jpg",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Urban Warm Grays",
          bottomTag: "CONTEMPORARY METROPOLITAN SCHEME",
          swatches: [
            { name: "BRONZE ACCENT", hex: "#A66D3B", bg: "#A66D3B" },
            { name: "WARM MICROCEMENT", hex: "#D6D1CA", bg: "#D6D1CA" },
            { name: "ESPRESSO WOOD", hex: "#4A3528", bg: "#4A3528" },
            { name: "DEEP CHARCOAL", hex: "#1E1E1E", bg: "#1E1E1E" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Architectural Recessed Slots",
          description:
            "Flush linear ceiling channels paired with custom spherical brass pendants highlighting the bar perimeter.",
          image: "/image3.jpg",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Compact Ergonomic Seating",
          description:
            "High-density cantilevered cocktail tables and upholstered stools facilitating rapid guest turnover.",
          image: "/image8.jpg",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Curbside Takeaway Window",
          description:
            "Dedicated street-facing barista portal enabling swift grab-and-go fulfillment without disrupting indoor diners.",
        },
        {
          number: "02.",
          title: "Acoustic Fluted Ceiling",
          description:
            "Linear oak ceiling baffles that soak up high-street traffic noise, creating an immediate sanctuary within.",
        },
        {
          number: "03.",
          title: "Linear Espresso Showcase",
          description:
            "A showcase bar visible from the sidewalk that puts the craftsmanship of the baristas on full display.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image5.jpg",
          index: "INDEX: ARCH-001-MAIN",
          caption: "HIGH-STREET FAÇADE & ENTRANCE",
        },
        plate2: {
          image: "/image3.jpg",
          index: "INDEX: ARCH-002-LUX",
          caption: "ARCHITECTURAL CEILING & BRONZE",
        },
        plate3: {
          image: "/image8.jpg",
          index: "INDEX: ARCH-003-FURN",
          caption: "LINEAR ESPRESSO BAR DETAIL",
        },
        plate4: {
          image: "/image35.png",
          caption: "ARCH-004-MAT • FLUTED OAK DETAIL",
        },
        plate5: {
          image: "/image36.png",
          caption: "ARCH-005-INT • INTERIOR SEATING BAY",
        },
        plate6: {
          image: "/image1.jpg",
          caption: "ARCH-006-EXT • EVENING STREET PRESENCE",
        },
      },
    },
    {
      id: 6,
      slug: "bakery-house",
      categories: ["CAFE"],
      title: "Bakery House",
      titleRoman: "Bakery House",
      titleItalic: "Artisanal Patisserie",
      subtitle:
        "A thoughtfully designed bakery offering freshly baked breads, pastries, and handcrafted treats in a warm and inviting setting. With a focus on quality, freshness, and a welcoming experience, it creates a space where great food and everyday moments come together.",
      image: "/image33.png",
      location: "RAJASTHAN",
      specs: {
        projectName: "BAKERY HOUSE",
        type: "ARTISANAL BAKERY & CAFÉ",
        location: "C-SCHEME, JAIPUR, RAJASTHAN",
        scope: "DISPLAY COUNTER & FIT-OUT ENGINEERING",
      },
      concept: {
        title: "A theatrical stage for artisanal baking.",
        description:
          "Marrying European patisserie refinement with local Rajasthani lime finishes, centered around a transparent glass baking workshop and custom-chilled display cases.",
      },
      keyElements: {
        material: {
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Lime Plaster & Solid Ash",
          description:
            "Smooth hand-rubbed Araish lime plaster combined with solid ash counters and brass pastry vitrine frames.",
          image: "/image33.png",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Golden Crust & Cream",
          bottomTag: "PATISSERIE INSPIRED PALETTE",
          swatches: [
            { name: "CRUST GOLDEN", hex: "#C78238", bg: "#C78238" },
            { name: "FLOUR WHITE", hex: "#FAF8F2", bg: "#FAF8F2" },
            { name: "LIGHT ASH", hex: "#C4A88B", bg: "#C4A88B" },
            { name: "FURNACE IRON", hex: "#292725", bg: "#292725" },
          ],
        },
        lighting: {
          subtitle: "03 // LIGHTING",
          title: "Color-True 3000K Display Lighting",
          description:
            "CRI 95+ concealed LED extrusions within display glass that showcase bread crusts and delicate pastry glazes without glare.",
          image: "/image16.png",
        },
        furniture: {
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Bistro Seating & Marble Rounds",
          description:
            "Cast-iron cafe bistro bases paired with white Carrara marble tabletops and cane-back bentwood chairs.",
          image: "/image9.jpg",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Live Baking Theatre",
          description:
            "A floor-to-ceiling insulated glass bay allowing patrons to watch bakers laminate croissants and bake sourdough loaves.",
        },
        {
          number: "02.",
          title: "The 18-Foot Vitrine",
          description:
            "A monolithic dual-temperature glass display counter designed for seamless guest browsing and prompt barista packaging.",
        },
        {
          number: "03.",
          title: "Verandah Breakfast Tables",
          description:
            "Morning sun-drenched street-side tables framed by fragrant potted jasmine plants and custom awnings.",
        },
      ],
      galleryPlates: {
        plate1: {
          image: "/image33.png",
          index: "INDEX: ARCH-001-MAIN",
          caption: "CENTRAL VITRINE & DISPLAY HALL",
        },
        plate2: {
          image: "/image16.png",
          index: "INDEX: ARCH-002-LUX",
          caption: "BAKERY ILLUMINATION & COUNTERS",
        },
        plate3: {
          image: "/image9.jpg",
          index: "INDEX: ARCH-003-FURN",
          caption: "BISTRO SEATING & ASH WOODWORK",
        },
        plate4: {
          image: "/image36.png",
          caption: "ARCH-004-MAT • ASH TIMBER FABRICATION",
        },
        plate5: {
          image: "/image35.png",
          caption: "ARCH-005-INT • GLASS OVEN BAY",
        },
        plate6: {
          image: "/image11.jpg",
          caption: "ARCH-006-EXT • VERANDAH MORNING SUN",
        },
      },
    },
    {
      id: 7,
      slug: "luxury-jewellery-showroom",
      categories: [],
      title: "Luxury Jewellery Showroom",
      titleRoman: "Luxury",
      titleItalic: "Jewellery Showroom",
      subtitle:
        "An opulent retail experience where curated displays, ambient lighting, and refined craftsmanship come together to showcase timeless elegance.",
      image: "/LJ.png",
      location: "DELHI",
      specs: {
        projectName: "LUXURY JEWELLERY SHOWROOM",
        type: "RETAIL SHOWROOM",
        location: "DELHI",
        scope: "INTERIOR DESIGN & DISPLAY FIT-OUT",
      },
      concept: {
        title: "Where elegance meets experience.",
        description:
          "A luxury showroom designed around premium materials, sophisticated displays, and ambient lighting. Rich textures, polished surfaces, and curated arrangements create an immersive space that elevates the art of fine jewellery.",
      },
      keyElements: {
        material: {
          image: "/LJ.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Rich & Refined",
          description:
            "Rich marbles, polished brass accents, velvet upholstery, and warm wood tones create a tactile journey through luxury and craftsmanship.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Opulent Hues",
          swatches: [
            { name: "CHAMPAGNE GOLD", hex: "#C9A96E", bg: "#C9A96E" },
            { name: "DEEP EMERALD", hex: "#1B4332", bg: "#1B4332" },
            { name: "IVORY CREAM", hex: "#F5F0E8", bg: "#F5F0E8" },
          ],
          bottomTag: "LUXURY JEWELLERY RETAIL PALETTE",
        },
        lighting: {
          image: "/LJ.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Ambient Brilliance",
          description:
            "Focused spotlighting on display cases, warm ambient wash on walls, and subtle accent lights that bring gemstones and metals to life.",
        },
        furniture: {
          image: "/LJ.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Bespoke Craft",
          description:
            "Custom display vitrines, velvet-lined presentation trays, and handcrafted detailing that mirror the precision of the jewellery they showcase.",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Grand Entrance Lobby",
          description:
            "A sweeping entrance with polished marble floors, backlit display panels, and a statement chandelier that sets the tone for luxury.",
        },
        {
          number: "02.",
          title: "Bridal Collection Hall",
          description:
            "An intimate gallery showcasing bridal collections under warm, focused lighting with private consultation seating.",
        },
        {
          number: "03.",
          title: "Heritage Vault Section",
          description:
            "A climate-controlled heritage zone housing antique and bespoke pieces in museum-grade display cases.",
        },
        {
          number: "04.",
          title: "Private Viewing Suites",
          description:
            "Exclusive consultation rooms with soft seating, soundproofing, and personalised display lighting for high-value clients.",
        },
        {
          number: "05.",
          title: "Custom Design Studio",
          description:
            "An open workshop area where artisans and designers collaborate with clients to create bespoke pieces.",
        },
        {
          number: "06.",
          title: "VIP Lounge & Refreshment Bar",
          description:
            "A relaxed lounge with premium finishes, offering refreshments while clients browse curated collections.",
        },
      ],
      galleryPlates: {
        plate1: { image: "/LJ.png", caption: "LOUX-001 • MAIN SHOWROOM FLOOR" },
        plate2: { image: "/LJ.png", caption: "LOUX-002 • DISPLAY VITRINE GALLERY" },
        plate3: { image: "/LJ.png", caption: "LOUX-003 • AMBIENT LIGHTING DETAIL" },
        plate4: { image: "/LJ.png", caption: "LOUX-004 • BESPOKE FURNITURE" },
        plate5: { image: "/LJ.png", caption: "LOUX-005 • BRIDAL COLLECTION HALL" },
        plate6: { image: "/LJ.png", caption: "LOUX-006 • PRIVATE VIEWING SUITE" },
      },
    },
    {
      id: 8,
      slug: "yaa-securities",
      categories: [],
      title: "YAA Securities",
      titleRoman: "YAA",
      titleItalic: "Securities",
      subtitle:
        "A modern financial workspace where clean lines, professional aesthetics, and functional design come together to create a confident, trust-driven environment.",
      image: "/YAA.png",
      location: "GURUGRAM",
      specs: {
        projectName: "YAA SECURITIES",
        type: "CORPORATE OFFICE",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & WORKSPACE FIT-OUT",
      },
      concept: {
        title: "Designing trust through professional spaces.",
        description:
          "A contemporary corporate office designed around clean geometry, professional palettes, and functional layouts. Neutral tones, glass partitions, and strategic lighting create a focused environment that reflects reliability and growth.",
      },
      keyElements: {
        material: {
          image: "/YAA.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Sleek & Professional",
          description:
            "Glass partitions, matte finishes, engineered wood, and metallic accents combine to create a workspace that balances professionalism with modern comfort.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Corporate Neutrals",
          swatches: [
            { name: "CHARCOAL GRAY", hex: "#36454F", bg: "#36454F" },
            { name: "SLATE BLUE", hex: "#4A6274", bg: "#4A6274" },
            { name: "WARM WHITE", hex: "#F8F6F0", bg: "#F8F6F0" },
          ],
          bottomTag: "CORPORATE WORKSPACE PALETTE",
        },
        lighting: {
          image: "/YAA.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Focused Illumination",
          description:
            "Layered lighting with recessed ceiling panels, task lighting at workstations, and feature pendants in reception areas.",
        },
        furniture: {
          image: "/YAA.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Ergonomic Elegance",
          description:
            "Ergonomic workstations, executive desks in engineered wood, and meeting tables that combine form with function.",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Reception & Welcome Zone",
          description:
            "A clean, professional reception with branded feature wall, comfortable seating, and ambient lighting that instills confidence.",
        },
        {
          number: "02.",
          title: "Open Trading Floor",
          description:
            "An expansive collaborative workspace with multiple monitor setups, acoustic paneling, and task-focused lighting.",
        },
        {
          number: "03.",
          title: "Executive Cabins",
          description:
            "Private offices with glass partitions, premium finishes, and personalised layouts for senior leadership.",
        },
        {
          number: "04.",
          title: "Client Meeting Rooms",
          description:
            "Formal meeting spaces with conference tables, AV integration, and branded design elements.",
        },
        {
          number: "05.",
          title: "Breakout & Informal Zones",
          description:
            "Relaxed collaborative areas with casual seating, coffee stations, and a lighter colour palette.",
        },
        {
          number: "06.",
          title: "Boardroom & Strategy Hall",
          description:
            "A premium boardroom with executive seating, integrated presentation systems, and a commanding view.",
        },
      ],
      galleryPlates: {
        plate1: { image: "/YAA.png", caption: "YAAS-001 • LOBBY & RECEPTION" },
        plate2: { image: "/YAA.png", caption: "YAAS-002 • OPEN TRADING FLOOR" },
        plate3: { image: "/YAA.png", caption: "YAAS-003 • LIGHTING DETAIL" },
        plate4: { image: "/YAA.png", caption: "YAAS-004 • ERGONOMIC WORKSTATION" },
        plate5: { image: "/YAA.png", caption: "YAAS-005 • CLIENT MEETING ROOM" },
        plate6: { image: "/YAA.png", caption: "YAAS-006 • BOARDROOM" },
      },
    },
    {
      id: 9,
      slug: "home-renovation-delhi",
      categories: ["RENOVATION"],
      title: "Home Renovation",
      titleRoman: "Home",
      titleItalic: "Renovation",
      subtitle:
        "We rethink existing spaces with thoughtful design, practical planning and refined details — creating homes that feel better and work better.",
      image: "/delhi.png",
      location: "DELHI",
      specs: {
        projectName: "HOME RENOVATION",
        type: "RESIDENTIAL INTERIOR",
        location: "DELHI",
        scope: "INTERIOR DESIGN & RENOVATION",
      },
      concept: {
        title: "Transforming existing spaces into refined living.",
        description:
          "A residential renovation project that reimagined an existing home with thoughtful design, practical planning and refined details — creating a living space that feels both elevated and effortlessly functional.",
      },
      keyElements: {
        material: {
          image: "/delhi.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Warm & Refined",
          description:
            "Engineered wood cabinetry, marble countertops, brass accents, and soft neutral tones combine to create a kitchen that balances luxury with everyday functionality.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Neutrals",
          swatches: [
            { name: "WALNUT BROWN", hex: "#5C4033", bg: "#5C4033" },
            { name: "WARM BEIGE", hex: "#C2A68C", bg: "#C2A68C" },
            { name: "CREAM WHITE", hex: "#F5F0E8", bg: "#F5F0E8" },
          ],
          bottomTag: "RESIDENTIAL INTERIOR PALETTE",
        },
        lighting: {
          image: "/delhi.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Ambient Elegance",
          description:
            "Statement pendant lighting over the island, integrated LED strip lighting in display cabinets, and recessed ceiling lights for layered illumination throughout.",
        },
        furniture: {
          image: "/delhi.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Curated Comfort",
          description:
            "Custom upholstered bar stools with brass legs, marble-top island counter, and bespoke glass display shelving with integrated backlighting.",
        },
      },
      spatialExperience: [
        {
          number: "01.",
          title: "Kitchen Island & Dining",
          description:
            "A central marble-top island with integrated seating, creating a social hub for casual dining and entertaining.",
        },
        {
          number: "02.",
          title: "Cabinetry & Storage",
          description:
            "Full-height engineered wood cabinetry with clean lines, soft-close mechanisms, and integrated appliances for a seamless look.",
        },
        {
          number: "03.",
          title: "Display & Accent Wall",
          description:
            "Glass-front display cabinets with LED backlighting showcase curated collections and add depth to the space.",
        },
        {
          number: "04.",
          title: "Lighting & Ambience",
          description:
            "Layered lighting design combining statement pendants, task lighting, and ambient LEDs to create the perfect mood for every moment.",
        },
        {
          number: "05.",
          title: "Material Transitions",
          description:
            "Thoughtful transitions between marble, wood, and brass surfaces create visual rhythm and tactile interest throughout the space.",
        },
        {
          number: "06.",
          title: "Finishing Details",
          description:
            "Brass hardware, fluted glass panels, and carefully selected accessories complete the refined yet welcoming aesthetic.",
        },
      ],
      galleryPlates: {
        plate1: { image: "/delhi.png", caption: "HRDL-001 • KITCHEN ISLAND VIEW" },
        plate2: { image: "/delhi.png", caption: "HRDL-002 • CABINETRY DETAIL" },
        plate3: { image: "/delhi.png", caption: "HRDL-003 • DISPLAY CABINET" },
        plate4: { image: "/delhi.png", caption: "HRDL-004 • LIGHTING DESIGN" },
        plate5: { image: "/delhi.png", caption: "HRDL-005 • MATERIAL PALETTE" },
        plate6: { image: "/delhi.png", caption: "HRDL-006 • FINISHING DETAILS" },
      },
    },
    {
      id: 10,
      slug: "old-rao-hotel",
      categories: [],
      title: "Old Rao Hotel",
      titleRoman: "Old Rao",
      titleItalic: "Hotel",
      subtitle:
        "A thoughtfully designed hospitality space that blends timeless character with contemporary comfort, creating a warm and memorable experience for every guest.",
      image: "/OR.png",
      location: "DELHI",
      specs: {
        projectName: "OLD RAO HOTEL",
        type: "HOSPITALITY",
        location: "DELHI",
        scope: "EXTERIOR & INTERIOR DESIGN",
      },
      concept: {
        title: "Timeless hospitality with contemporary warmth.",
        description:
          "A hospitality project that brings together classic architectural character and modern comfort. The design creates an inviting atmosphere that resonates with guests from the moment they arrive.",
      },
      keyElements: {
        material: {
          image: "/OR.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Classic Meets Modern",
          description:
            "Stone facades, warm wood accents, ambient lighting, and rich textures combine to create a hotel that feels both grand and welcoming.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Hospitality",
          swatches: [
            { name: "WARM GOLD", hex: "#C9A96E", bg: "#C9A96E" },
            { name: "DEEP BROWN", hex: "#3E2723", bg: "#3E2723" },
            { name: "CREAM", hex: "#F5F0E1", bg: "#F5F0E1" },
          ],
          bottomTag: "HOSPITALITY PALETTE",
        },
        lighting: {
          image: "/OR.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Grand Illumination",
          description:
            "Exterior facade lighting, warm lobby chandeliers, and accent wall lights create a dramatic yet inviting presence.",
        },
        furniture: {
          image: "/OR.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Refined Comfort",
          description:
            "Plush lobby seating, custom headboards, and curated artwork that reflect the hotel's personality and heritage.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Grand Facade & Entrance", description: "A striking exterior with illuminated signage, arched windows, and a welcoming portico." },
        { number: "02.", title: "Lobby & Reception", description: "A warm, elegant lobby with rich textures, ambient lighting, and comfortable seating." },
        { number: "03.", title: "Guest Rooms", description: "Thoughtfully designed rooms with premium finishes, layered lighting, and personalised touches." },
        { number: "04.", title: "Dining & Lounge", description: "A versatile dining space with curated decor, ambient lighting, and a distinctive atmosphere." },
        { number: "05.", title: "Corridors & Transition Spaces", description: "Designed pathways that maintain the hotel's character with art, lighting, and texture." },
        { number: "06.", title: "Exterior Courtyard", description: "A landscaped outdoor area with seating, fountain features, and evening illumination." },
      ],
      galleryPlates: {
        plate1: { image: "/OR.png", caption: "ORH-001 • GRAND FACADE" },
        plate2: { image: "/OR.png", caption: "ORH-002 • LOBBY & RECEPTION" },
        plate3: { image: "/OR.png", caption: "ORH-003 • GUEST ROOM" },
        plate4: { image: "/OR.png", caption: "ORH-004 • DINING SPACE" },
        plate5: { image: "/OR.png", caption: "ORH-005 • CORRIDOR DETAIL" },
        plate6: { image: "/OR.png", caption: "ORH-006 • COURTYARD" },
      },
    },
    {
      id: 11,
      slug: "builder-flat-delhi",
      categories: [],
      title: "Builder Flat",
      titleRoman: "Builder",
      titleItalic: "Flat",
      subtitle:
        "We transform builder flats with smart planning, refined interiors and personalised details that make the space feel truly yours.",
      image: "/builder.png",
      location: "DELHI",
      specs: {
        projectName: "BUILDER FLAT",
        type: "RESIDENTIAL INTERIOR",
        location: "DELHI",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Personalised living in compact spaces.",
        description:
          "A builder flat transformed with smart spatial planning, refined material choices, and personalised design details that maximise both functionality and aesthetics within a compact footprint.",
      },
      keyElements: {
        material: {
          image: "/builder.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Smart & Refined",
          description:
            "Marble flooring, mirrored panels, decorative wall treatments, and layered lighting create a sense of spaciousness and luxury.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Crisp Modern",
          swatches: [
            { name: "PEARL WHITE", hex: "#F0EDE5", bg: "#F0EDE5" },
            { name: "SOFT GOLD", hex: "#C5A880", bg: "#C5A880" },
            { name: "DARK CHARCOAL", hex: "#2C2C2C", bg: "#2C2C2C" },
          ],
          bottomTag: "RESIDENTIAL PALETTE",
        },
        lighting: {
          image: "/builder.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Layered Brilliance",
          description:
            "Statement chandeliers, concealed cove lighting, and accent wall lights that make compact rooms feel open and inviting.",
        },
        furniture: {
          image: "/builder.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Space-Smart Design",
          description:
            "Custom modular furniture, storage-integrated seating, and multi-functional pieces designed for modern urban living.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Living Room", description: "An open, well-lit living space with decorative wall panels and statement lighting." },
        { number: "02.", title: "Bedroom Suite", description: "A serene bedroom with layered lighting, custom headboard, and warm material palette." },
        { number: "03.", title: "Kitchen & Dining", description: "A compact, efficient kitchen with smart storage solutions and modern finishes." },
        { number: "04.", title: "Bathroom", description: "Clean, contemporary bathroom with quality fittings and refined tile work." },
        { number: "05.", title: "Balcony & View", description: "A small but well-designed outdoor extension with seating and greenery." },
        { number: "06.", title: "Entry Foyer", description: "A welcoming entryway with mirror accents, shoe storage, and ambient lighting." },
      ],
      galleryPlates: {
        plate1: { image: "/builder.png", caption: "BFL-001 • LIVING ROOM" },
        plate2: { image: "/builder.png", caption: "BFL-002 • BEDROOM SUITE" },
        plate3: { image: "/builder.png", caption: "BFL-003 • KITCHEN" },
        plate4: { image: "/builder.png", caption: "BFL-004 • BATHROOM" },
        plate5: { image: "/builder.png", caption: "BFL-005 • BALCONY" },
        plate6: { image: "/builder.png", caption: "BFL-006 • ENTRY FOYER" },
      },
    },
    {
      id: 12,
      slug: "fecade-gurugram",
      categories: [],
      title: "Fecade",
      titleRoman: "",
      titleItalic: "Fecade",
      subtitle:
        "We create distinctive facades that give your building a strong identity while balancing aesthetics, functionality and architectural character.",
      image: "/fecade.png",
      location: "GURUGRAM",
      specs: {
        projectName: "FECADE",
        type: "ARCHITECTURAL EXTERIOR",
        location: "GURUGRAM",
        scope: "FACADE DESIGN & EXECUTION",
      },
      concept: {
        title: "Building identity through facade design.",
        description:
          "An architectural facade project designed to create a strong visual identity. The design balances aesthetic appeal with functional requirements including weather resistance, lighting integration, and material durability.",
      },
      keyElements: {
        material: {
          image: "/fecade.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Bold & Distinctive",
          description:
            "Natural stone cladding, decorative mouldings, arched window frames, and premium exterior paint create a facade with presence and durability.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Architectural Classic",
          swatches: [
            { name: "IVORY STONE", hex: "#E8DCC8", bg: "#E8DCC8" },
            { name: "WARM GREY", hex: "#8C8278", bg: "#8C8278" },
            { name: "DARK FOREST", hex: "#1A2E1A", bg: "#1A2E1A" },
          ],
          bottomTag: "EXTERIOR PALETTE",
        },
        lighting: {
          image: "/fecade.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Dramatic Facade Lighting",
          description:
            "Warm uplights, window accent lights, and landscape lighting that highlight architectural features after dark.",
        },
        furniture: {
          image: "/fecade.png",
          subtitle: "04 // ARCHITECTURAL DETAILING",
          title: "Classical Character",
          description:
            "Decorative cornices, pilasters, arched doorways, and wrought-iron accents that define the building's architectural personality.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Main Facade", description: "A grand front elevation with classical proportions, stone cladding, and decorative elements." },
        { number: "02.", title: "Window Treatments", description: "Arched and rectangular windows with premium frames and decorative surrounds." },
        { number: "03.", title: "Entrance Portico", description: "A welcoming covered entrance with columns, lighting, and a sense of arrival." },
        { number: "04.", title: "Landscape & Approach", description: "Thoughtfully designed landscaping with pathway lighting and greenery framing the building." },
        { number: "05.", title: "Evening Illumination", description: "Strategic lighting design that transforms the facade's character after sunset." },
        { number: "06.", title: "Side Elevation", description: "Consistent design language extended to side profiles for a cohesive architectural statement." },
      ],
      galleryPlates: {
        plate1: { image: "/fecade.png", caption: "FCD-001 • MAIN FACADE" },
        plate2: { image: "/fecade.png", caption: "FCD-002 • WINDOW DETAIL" },
        plate3: { image: "/fecade.png", caption: "FCD-003 • ENTRANCE PORTICO" },
        plate4: { image: "/fecade.png", caption: "FCD-004 • LANDSCAPE" },
        plate5: { image: "/fecade.png", caption: "FCD-005 • EVENING VIEW" },
        plate6: { image: "/fecade.png", caption: "FCD-006 • SIDE ELEVATION" },
      },
    },
    {
      id: 13,
      slug: "police-station-gurugram",
      categories: ["POLICE STATION"],
      title: "Police Station",
      titleRoman: "Police",
      titleItalic: "Station",
      subtitle:
        "Thoughtfully designed to create a secure, functional and welcoming environment, with clear planning, durable materials and efficient spaces that support both public needs and daily police operations.",
      image: "/PS.png",
      location: "GURUGRAM",
      specs: {
        projectName: "POLICE STATION",
        type: "GOVERNMENT / INSTITUTIONAL",
        location: "GURUGRAM",
        scope: "ARCHITECTURE & INTERIOR DESIGN",
      },
      concept: {
        title: "Designing trust through functional architecture.",
        description:
          "A police station designed to project security, efficiency, and approachability. The layout separates public and operational zones while maintaining clear circulation and accessibility.",
      },
      keyElements: {
        material: {
          image: "/PS.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Durable & Purposeful",
          description:
            "Reinforced concrete, anti-skid flooring, security-grade glazing, and impact-resistant surfaces built for high-traffic institutional use.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Civic Authority",
          swatches: [
            { name: "NAVAL BLUE", hex: "#003366", bg: "#003366" },
            { name: "CONCRETE GREY", hex: "#8E9196", bg: "#8E9196" },
            { name: "CLEAN WHITE", hex: "#F2F2F2", bg: "#F2F2F2" },
          ],
          bottomTag: "INSTITUTIONAL PALETTE",
        },
        lighting: {
          image: "/PS.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Functional Brightness",
          description:
            "High-output LED panels, emergency lighting systems, and exterior security lights ensuring 24/7 visibility and safety.",
        },
        furniture: {
          image: "/PS.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Operational Efficiency",
          description:
            "Modular desk systems, secure filing stations, waiting area seating, and CCTV monitoring positions designed for workflow.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Public Reception & Help Desk", description: "A clearly marked, accessible entrance with a secure help desk and waiting area." },
        { number: "02.", title: "Complaint & Filing Area", description: "A semi-private zone for public complaints with counter service and seating." },
        { number: "03.", title: "Investigation Rooms", description: "Private, sound-insulated rooms for interviews and case work with secure storage." },
        { number: "04.", title: "Operations Room", description: "A central monitoring hub with CCTV screens, communication systems, and rapid response coordination." },
        { number: "05.", title: "Evidence & Records Room", description: "A secure, climate-controlled area for evidence preservation and document storage." },
        { number: "06.", title: "Staff Quarters & Break Area", description: "Comfortable rest areas for officers with lockers, refreshment facilities, and quiet zones." },
      ],
      galleryPlates: {
        plate1: { image: "/PS.png", caption: "PS-001 • BUILDING EXTERIOR" },
        plate2: { image: "/PS.png", caption: "PS-002 • RECEPTION AREA" },
        plate3: { image: "/PS.png", caption: "PS-003 • COMPLAINT DESK" },
        plate4: { image: "/PS.png", caption: "PS-004 • OPERATIONS ROOM" },
        plate5: { image: "/PS.png", caption: "PS-005 • INVESTIGATION ROOM" },
        plate6: { image: "/PS.png", caption: "PS-006 • STAFF AREA" },
      },
    },
    {
      id: 14,
      slug: "bhutan-residence-gurugram",
      categories: [],
      title: "Bhutan Residence",
      titleRoman: "Bhutan",
      titleItalic: "Residence",
      subtitle:
        "A thoughtfully designed residence that blends Bhutanese architectural character with modern comfort, creating a warm, elegant and timeless home.",
      image: "/BR.png",
      location: "GURUGRAM",
      specs: {
        projectName: "BHUTAN RESIDENCE",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Cultural heritage meets modern living.",
        description:
          "A residential project that draws from Bhutanese architectural traditions — warm wood tones, artisanal textures, and a deep connection to nature — while delivering all the comforts of a modern home.",
      },
      keyElements: {
        material: {
          image: "/BR.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Natural & Warm",
          description:
            "Solid wood panelling, woven textiles, natural stone, and handcrafted details that create an atmosphere of warmth, culture, and timeless elegance.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Himalayan Earth",
          swatches: [
            { name: "RICH WALNUT", hex: "#5B3A29", bg: "#5B3A29" },
            { name: "TERRACOTTA", hex: "#B7572A", bg: "#B7572A" },
            { name: "WARM SAND", hex: "#C8B69A", bg: "#C8B69A" },
          ],
          bottomTag: "CULTURAL RESIDENCE PALETTE",
        },
        lighting: {
          image: "/BR.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Soft Glow",
          description:
            "Warm pendant lights, backlit wooden shelving, and concealed LED strips that enhance the natural material palette.",
        },
        furniture: {
          image: "/BR.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Artisanal Character",
          description:
            "Custom wood dining tables, leather-upholstered seating, handcrafted shelving, and cultural art pieces as focal points.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Living & Lounge", description: "A rich, warm living space with wood panelling, leather seating, and cultural art displays." },
        { number: "02.", title: "Dining Hall", description: "A statement dining area with a solid wood table, pendant lighting, and an art wall." },
        { number: "03.", title: "Bedroom Suite", description: "A serene bedroom with wooden headboard wall, layered lighting, and soft textile palette." },
        { number: "04.", title: "Study & Library", description: "A contemplative space with built-in bookshelves, warm desk lighting, and wood-wrapped walls." },
        { number: "05.", title: "Bathroom & Spa", description: "A spa-inspired bathroom with natural stone, wood accents, and soft ambient lighting." },
        { number: "06.", title: "Courtyard Connection", description: "Seamless indoor-outdoor transitions connecting living spaces to a private courtyard garden." },
      ],
      galleryPlates: {
        plate1: { image: "/BR.png", caption: "BHR-001 • LIVING SPACE" },
        plate2: { image: "/BR.png", caption: "BHR-002 • DINING HALL" },
        plate3: { image: "/BR.png", caption: "BHR-003 • BEDROOM SUITE" },
        plate4: { image: "/BR.png", caption: "BHR-004 • STUDY" },
        plate5: { image: "/BR.png", caption: "BHR-005 • BATHROOM" },
        plate6: { image: "/BR.png", caption: "BHR-006 • COURTYARD" },
      },
    },
    {
      id: 15,
      slug: "graphite-modular-kitchen",
      categories: ["KITCHEN"],
      title: "Graphite Modular Kitchen",
      titleRoman: "Graphite Modular",
      titleItalic: "Kitchen",
      subtitle:
        "A U-shaped modular kitchen where handleless beige cabinetry, black glass fronts and warm cove lighting come together to make everyday cooking effortless.",
      image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png",
      location: "DELHI",
      specs: {
        projectName: "GRAPHITE MODULAR KITCHEN",
        type: "MODULAR KITCHEN",
        location: "DELHI",
        scope: "KITCHEN DESIGN & FIT-OUT",
      },
      concept: {
        title: "A U-shaped kitchen built for effortless cooking.",
        description:
          "Designed around a continuous work triangle, this U-shaped kitchen pairs handleless beige shutters with tinted black glass overheads, a durable granite counter, and warm concealed cove lighting that makes the space glow after dark.",
      },
      keyElements: {
        material: {
          image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Granite & Glass",
          description:
            "Speckled granite counters, matte beige laminate shutters, and tinted black glass overhead cabinets create a durable, easy-to-clean palette.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Neutrals",
          swatches: [
            { name: "SOFT BEIGE", hex: "#E6DFD3", bg: "#E6DFD3" },
            { name: "GRAPHITE BLACK", hex: "#1C1C1C", bg: "#1C1C1C" },
            { name: "WARM GREY", hex: "#8E8B85", bg: "#8E8B85" },
          ],
          bottomTag: "MODULAR KITCHEN PALETTE",
        },
        lighting: {
          image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Concealed Cove Glow",
          description:
            "Warm LED strips under the overhead cabinets and along the ceiling cove illuminate the counter run without glare.",
        },
        furniture: {
          image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Handleless Cabinetry",
          description:
            "Full-height overhead units, soft-close drawers, and a dedicated hob-and-chimney bay keep the U-layout clean and efficient.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Continuous Counter Run", description: "An uninterrupted granite counter along three walls, giving generous prep space on every side." },
        { number: "02.", title: "Glass Overhead Bank", description: "Tinted black glass cabinets that hide clutter while reflecting light back into the kitchen." },
        { number: "03.", title: "Hob & Chimney Bay", description: "A centered cooking zone with a sleek black chimney and easy-access drawer storage below." },
        { number: "04.", title: "Breakfast Corner", description: "A slim counter extension at the opening that doubles as a quick-bite breakfast ledge." },
        { number: "05.", title: "Tall Appliance Unit", description: "A floor-to-ceiling housing for the refrigerator and microwave, keeping small appliances off the counter." },
        { number: "06.", title: "Warm Night Lighting", description: "Cove and under-cabinet lighting that turns the kitchen into a warm feature of the home after sunset." },
      ],
      galleryPlates: {
        plate1: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-001 • U-SHAPED COUNTER RUN" },
        plate2: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-002 • GLASS OVERHEADS" },
        plate3: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-003 • HOB & CHIMNEY BAY" },
        plate4: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-004 • GRANITE COUNTER DETAIL" },
        plate5: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-005 • COVE LIGHTING" },
        plate6: { image: "/5ed22d0f5336c8d4c87aaa50835a726df94275b0.png", caption: "GMK-006 • HANDLELESS SHUTTERS" },
      },
    },
    {
      id: 16,
      slug: "fluted-modular-kitchen",
      categories: ["KITCHEN"],
      title: "Fluted Modular Kitchen",
      titleRoman: "Fluted Modular",
      titleItalic: "Kitchen",
      subtitle:
        "A compact kitchen with fluted marble-look overheads, a deep black backsplash and warm under-cove lighting — small in footprint, generous in character.",
      image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png",
      location: "DELHI",
      specs: {
        projectName: "FLUTED MODULAR KITCHEN",
        type: "MODULAR KITCHEN",
        location: "DELHI",
        scope: "KITCHEN DESIGN & FIT-OUT",
      },
      concept: {
        title: "Compact kitchen, sculpted surfaces.",
        description:
          "Every millimetre is put to work in this compact kitchen. Fluted stone-finish overheads run above a deep black backsplash and a practical sink zone, while a warm cove light washes the whole wall in soft glow.",
      },
      keyElements: {
        material: {
          image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Fluted Stone & Gloss",
          description:
            "Fluted marble-patterned shutters paired with a glossy black backsplash and a durable dark granite counter.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ivory & Obsidian",
          swatches: [
            { name: "IVORY STONE", hex: "#EFEAE0", bg: "#EFEAE0" },
            { name: "OBSIDIAN BLACK", hex: "#141414", bg: "#141414" },
            { name: "OAK FLOOR", hex: "#B08D6A", bg: "#B08D6A" },
          ],
          bottomTag: "COMPACT KITCHEN PALETTE",
        },
        lighting: {
          image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Under-Cove Wash",
          description:
            "A concealed warm LED cove above the overheads throws light across the ceiling and the fluted fronts.",
        },
        furniture: {
          image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Efficient Base Units",
          description:
            "Deep soft-close drawers and a dedicated sink cabinet that keep daily essentials within arm's reach.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Fluted Overhead Wall", description: "Overhead cabinets with a fluted stone finish that adds texture to the compact volume." },
        { number: "02.", title: "Sink & Prep Zone", description: "A practical stainless sink set into the granite counter with dish rack and utility access." },
        { number: "03.", title: "Black Backsplash", description: "A full-height glossy black backsplash that is easy to wipe and makes the ivory cabinetry pop." },
        { number: "04.", title: "Corner Storage", description: "Dead corner space converted into deep storage for bulky vessels and daily-use jars." },
        { number: "05.", title: "Warm Wood Floor", description: "Wood-look plank flooring that keeps the small kitchen warm and comfortable underfoot." },
        { number: "06.", title: "Task Lighting", description: "Focused light at the counter for safe prep, balanced by the ambient cove glow above." },
      ],
      galleryPlates: {
        plate1: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-001 • FLUTED OVERHEAD WALL" },
        plate2: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-002 • SINK & PREP ZONE" },
        plate3: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-003 • BLACK BACKSPLASH" },
        plate4: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-004 • GRANITE COUNTER" },
        plate5: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-005 • UNDER-COVE LIGHTING" },
        plate6: { image: "/9ce30cadd3f79de15a944b9970ba417bc19b183a.png", caption: "FMK-006 • BASE UNIT DETAIL" },
      },
    },
    {
      id: 17,
      slug: "marble-island-kitchen",
      categories: ["KITCHEN"],
      title: "Marble Island Kitchen",
      titleRoman: "Marble Island",
      titleItalic: "Kitchen",
      subtitle:
        "A sculpted marble island with patterned bar stools forms the heart of this warm contemporary kitchen, framed by wood veneer, glossy shutters and an arched fluted niche.",
      image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png",
      location: "GURUGRAM",
      specs: {
        projectName: "MARBLE ISLAND KITCHEN",
        type: "ISLAND KITCHEN",
        location: "GURUGRAM",
        scope: "KITCHEN DESIGN & MILLWORK",
      },
      concept: {
        title: "The island as the social centre of the home.",
        description:
          "A waterfall marble island with integrated seating anchors the room, while warm wood veneer, high-gloss shutters, and an arched fluted niche create a layered, gallery-like backdrop for everyday living.",
      },
      keyElements: {
        material: {
          image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Marble & Warm Oak",
          description:
            "Dramatic marble across counters and island, warm oak veneer panelling, and glossy ivory overhead shutters.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ivory & Veined Stone",
          swatches: [
            { name: "MARBLE WHITE", hex: "#F1EEE8", bg: "#F1EEE8" },
            { name: "WARM OAK", hex: "#B4906B", bg: "#B4906B" },
            { name: "SOFT TAUPE", hex: "#A79B8C", bg: "#A79B8C" },
          ],
          bottomTag: "ISLAND KITCHEN PALETTE",
        },
        lighting: {
          image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Linear Cove System",
          description:
            "Black recessed linear coves and spot lights wash the island and fluted arch evenly without visible fixtures.",
        },
        furniture: {
          image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Patterned Bar Stools",
          description:
            "Sculptural printed bar stools with brass-toned legs that give the island a bold graphic signature.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Waterfall Island", description: "A marble island with a raised breakfast ledge and seating for three along the outer edge." },
        { number: "02.", title: "Arched Fluted Niche", description: "A central arched panel with fluted shutters framing the sink and open display shelving." },
        { number: "03.", title: "Full-Height Storage", description: "Glossy overheads and tall units wrapping the perimeter for a clutter-free working wall." },
        { number: "04.", title: "Prep & Wash Zone", description: "An undermount sink with a matte black tap set into the marble backsplash run." },
        { number: "05.", title: "Appliance Alcove", description: "Dedicated counters for the coffee machine, air fryer and daily appliances with power at hand." },
        { number: "06.", title: "Stone Flooring", description: "Large-format grey stone tiles that ground the light cabinetry and take heavy footfall." },
      ],
      galleryPlates: {
        plate1: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-001 • WATERFALL ISLAND" },
        plate2: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-002 • ARCHED FLUTED NICHE" },
        plate3: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-003 • MARBLE BACKSPLASH" },
        plate4: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-004 • BAR SEATING" },
        plate5: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-005 • CEILING COVE DETAIL" },
        plate6: { image: "/7205b41557d71177f5a4c60efbac209a0ad33c52.png", caption: "MIK-006 • TALL STORAGE WALL" },
      },
    },
    {
      id: 18,
      slug: "l-shape-modular-kitchen",
      categories: ["KITCHEN"],
      title: "L-Shape Modular Kitchen",
      titleRoman: "L-Shape Modular",
      titleItalic: "Kitchen",
      subtitle:
        "A glossy beige L-shaped kitchen with a dramatic black backsplash, cove-lit ceiling and a clean work triangle designed for compact urban homes.",
      image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png",
      location: "DELHI",
      specs: {
        projectName: "L-SHAPE MODULAR KITCHEN",
        type: "MODULAR KITCHEN",
        location: "DELHI",
        scope: "KITCHEN DESIGN & FIT-OUT",
      },
      concept: {
        title: "Efficient geometry for everyday cooking.",
        description:
          "The L-layout puts sink, hob and storage on two connected runs, opening the kitchen towards the home. Glossy beige shutters, a black granite counter and a cove-lit ceiling keep the space bright, clean and easy to maintain.",
      },
      keyElements: {
        material: {
          image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Gloss & Granite",
          description:
            "High-gloss beige acrylic shutters, black granite counters, and a polished vitrified floor that reflects the cove light.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Champagne & Charcoal",
          swatches: [
            { name: "CHAMPAGNE BEIGE", hex: "#E8DFD1", bg: "#E8DFD1" },
            { name: "CHARCOAL BLACK", hex: "#171717", bg: "#171717" },
            { name: "SOFT WHITE", hex: "#F6F4EF", bg: "#F6F4EF" },
          ],
          bottomTag: "GALLERY KITCHEN PALETTE",
        },
        lighting: {
          image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Perimeter Cove Ceiling",
          description:
            "A recessed cove ceiling with warm LED lines and downlights that evenly wash the L-run without shadows.",
        },
        furniture: {
          image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Handleless Drawers",
          description:
            "J-pull handleless shutters, soft-close drawer stacks, and a tall pantry unit at the return of the L.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "The L Work Triangle", description: "Sink, hob and fridge placed at the three points of the triangle for minimal steps while cooking." },
        { number: "02.", title: "Black Backsplash Run", description: "A continuous dark backsplash behind the hob that hides splashes and contrasts the glossy shutters." },
        { number: "03.", title: "Glass-Front Overheads", description: "Tinted glass overheads displaying glassware while keeping dust out." },
        { number: "04.", title: "Cove Ceiling", description: "A tray ceiling with concealed warm cove light that gives the kitchen a soft, even glow." },
        { number: "05.", title: "Tall Pantry Unit", description: "A full-height pantry at the end of the run for grains, spices and dry goods." },
        { number: "06.", title: "Open Floor Zone", description: "An open centre that keeps the kitchen comfortable for two people working together." },
      ],
      galleryPlates: {
        plate1: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-001 • L-SHAPED RUN" },
        plate2: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-002 • HOB & BACKSPLASH" },
        plate3: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-003 • GLASS OVERHEADS" },
        plate4: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-004 • COVE CEILING" },
        plate5: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-005 • SINK CORNER" },
        plate6: { image: "/99899c7bc291bd4ed6b02b11c6fdb7f786b30542.png", caption: "LSK-006 • BASE DRAWER STACK" },
      },
    },
    {
      id: 19,
      slug: "onyx-island-kitchen",
      categories: ["KITCHEN"],
      title: "Onyx Island Kitchen",
      titleRoman: "Onyx Island",
      titleItalic: "Kitchen",
      subtitle:
        "A green onyx island set against warm oak walls and garden views — a serene kitchen where natural stone, herringbone floors and open shelving set a calm, organic tone.",
      image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png",
      location: "GURUGRAM",
      specs: {
        projectName: "ONYX ISLAND KITCHEN",
        type: "ISLAND KITCHEN",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & STONE WORK",
      },
      concept: {
        title: "Natural stone as the centrepiece.",
        description:
          "A monolithic green onyx island anchors the kitchen within floor-to-ceiling oak joinery. Full-height windows pull the garden inside, while open shelves and warm sconces keep the space relaxed and lived-in.",
      },
      keyElements: {
        material: {
          image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Onyx & Oak",
          description:
            "A book-matched green onyx island, warm oak wall panelling, and light herringbone timber flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Garden Greens",
          swatches: [
            { name: "ONYX GREEN", hex: "#8FA07A", bg: "#8FA07A" },
            { name: "WARM OAK", hex: "#B8906B", bg: "#B8906B" },
            { name: "PARCHMENT", hex: "#EFE9DD", bg: "#EFE9DD" },
          ],
          bottomTag: "ORGANIC KITCHEN PALETTE",
        },
        lighting: {
          image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Sconces & Daylight",
          description:
            "Fluted glass wall sconces and slim spotlights complement the abundant daylight from full-height garden windows.",
        },
        furniture: {
          image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Open Shelving",
          description:
            "Floating oak shelves displaying glassware and ceramics, plus a round dining table with sculptural leather chairs.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Onyx Monolith", description: "A floor-to-ceiling-height onyx island that reads as sculpture from every angle of the room." },
        { number: "02.", title: "Garden Outlook", description: "Full-height glazed doors framing the trees and pulling green views into the kitchen." },
        { number: "03.", title: "Oak Library Wall", description: "Warm oak joinery wrapping the room with integrated open shelves and closed base units." },
        { number: "04.", title: "Coffee Station", description: "A dedicated espresso corner on the counter with power and storage for daily rituals." },
        { number: "05.", title: "Dining Nook", description: "A round dining table beside the island for casual meals and conversation while cooking." },
        { number: "06.", title: "Herringbone Floor", description: "Light timber herringbone boards that add rhythm and warmth underfoot." },
      ],
      galleryPlates: {
        plate1: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-001 • ONYX ISLAND" },
        plate2: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-002 • OAK SHELVING WALL" },
        plate3: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-003 • GARDEN WINDOWS" },
        plate4: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-004 • DINING NOOK" },
        plate5: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-005 • SCONCE DETAIL" },
        plate6: { image: "/a47b92b11ace4464e6020ab555f4434d0462d869.png", caption: "OIK-006 • HERRINGBONE FLOOR" },
      },
    },
    {
      id: 20,
      slug: "minimal-stone-kitchen",
      categories: ["KITCHEN"],
      title: "Minimal Stone Kitchen",
      titleRoman: "Minimal Stone",
      titleItalic: "Kitchen",
      subtitle:
        "A minimal linear kitchen in soft taupe with a dramatic dark marble island, track lighting and handleless fronts — quiet, precise and architectural.",
      image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png",
      location: "GURUGRAM",
      specs: {
        projectName: "MINIMAL STONE KITCHEN",
        type: "ISLAND KITCHEN",
        location: "GURUGRAM",
        scope: "KITCHEN DESIGN & FIT-OUT",
      },
      concept: {
        title: "Restraint, geometry and stone.",
        description:
          "A single clean line of handleless taupe cabinetry runs along the wall, answered by a monolithic dark marble island. Track lighting and a slim linear pendant complete an intentionally quiet, architectural room.",
      },
      keyElements: {
        material: {
          image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Matte Lacquer & Marble",
          description:
            "Matte taupe lacquer shutters, a dark veined marble island and backsplash, and pale porcelain floor tiles.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Taupe & Nero",
          swatches: [
            { name: "SOFT TAUPE", hex: "#B9AFA1", bg: "#B9AFA1" },
            { name: "NERO MARBLE", hex: "#1E1B18", bg: "#1E1B18" },
            { name: "PALE ASH", hex: "#E9E6E0", bg: "#E9E6E0" },
          ],
          bottomTag: "MINIMAL KITCHEN PALETTE",
        },
        lighting: {
          image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Track & Linear Pendant",
          description:
            "A black magnetic track system with adjustable spots paired with a slim linear pendant over the island.",
        },
        furniture: {
          image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Handleless Precision",
          description:
            "Push-to-open shutters, shadow-gap detailing, and a glass-front display cabinet for glassware.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Linear Working Wall", description: "One uninterrupted run of counter, sink and hob with tall units at the left flank." },
        { number: "02.", title: "Marble Island", description: "A dark marble island that doubles as prep surface and informal dining bar." },
        { number: "03.", title: "Glass Display Cabinet", description: "Smoked glass overheads with internal lighting for glassware and collectibles." },
        { number: "04.", title: "Concealed Appliances", description: "Microwave and small appliances integrated into the tall units to keep counters clear." },
        { number: "05.", title: "Track Lighting Grid", description: "A ceiling track grid that lets light be aimed exactly where work happens." },
        { number: "06.", title: "Shadow-Gap Details", description: "Fine shadow gaps between panels and floor that give the joinery a floating, precise look." },
      ],
      galleryPlates: {
        plate1: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-001 • LINEAR WORKING WALL" },
        plate2: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-002 • MARBLE ISLAND" },
        plate3: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-003 • GLASS DISPLAY" },
        plate4: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-004 • TRACK LIGHTING" },
        plate5: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-005 • BACKSPLASH VEINING" },
        plate6: { image: "/d35e5a0259d459b9e52e33a15229c5da6a638989.png", caption: "MSK-006 • HANDLELESS FRONTS" },
      },
    },
    {
      id: 21,
      slug: "classic-shaker-kitchen",
      categories: ["KITCHEN"],
      title: "Classic Shaker Kitchen",
      titleRoman: "Classic Shaker",
      titleItalic: "Kitchen",
      subtitle:
        "A classic grey shaker kitchen with gold-veined marble, open black shelving and a curved banquette — timeless cabinetry meets relaxed, everyday dining.",
      image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png",
      location: "RAJASTHAN",
      specs: {
        projectName: "CLASSIC SHAKER KITCHEN",
        type: "KITCHEN & DINING",
        location: "RAJASTHAN",
        scope: "CABINETRY & INTERIOR DESIGN",
      },
      concept: {
        title: "Timeless cabinetry, made for gathering.",
        description:
          "Grey shaker frames, brass hardware and a dramatic gold-veined marble slab create a refined backdrop, while a curved olive banquette and round marble table turn the kitchen into the home's favourite gathering spot.",
      },
      keyElements: {
        material: {
          image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Shaker & Slab Marble",
          description:
            "Painted grey shaker shutters with brass pulls, a full-height gold-veined marble slab, and dark timber flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Dove Grey & Brass",
          swatches: [
            { name: "DOVE GREY", hex: "#A9AEB0", bg: "#A9AEB0" },
            { name: "MARBLE WHITE", hex: "#F4F1EA", bg: "#F4F1EA" },
            { name: "OLIVE MOSS", hex: "#8A8A4F", bg: "#8A8A4F" },
          ],
          bottomTag: "CLASSIC KITCHEN PALETTE",
        },
        lighting: {
          image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Woven Pendant",
          description:
            "A large sculptural woven pendant over the dining table, supported by discreet ceiling spots across the kitchen.",
        },
        furniture: {
          image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Curved Banquette",
          description:
            "A ribbed olive banquette wrapping the round marble table, paired with a cane-backed dining chair.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Marble Feature Wall", description: "A full-height marble slab behind open shelving that becomes the room's focal wall." },
        { number: "02.", title: "Open Shelf Display", description: "Black floating shelves styling everyday ceramics, jars and small appliances within easy reach." },
        { number: "03.", title: "Banquette Dining", description: "A curved upholstered bench that seats the family comfortably around the round table." },
        { number: "04.", title: "Tall Larder Run", description: "Floor-to-ceiling shaker units hiding the fridge and pantry behind matching doors." },
        { number: "05.", title: "Island Breakfast Bar", description: "A marble-topped island with backless stools for quick breakfasts and conversation." },
        { number: "06.", title: "Brass Details", description: "Brass handles, taps and shelf brackets that warm up the cool grey cabinetry." },
      ],
      galleryPlates: {
        plate1: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-001 • MARBLE FEATURE WALL" },
        plate2: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-002 • OPEN SHELVING" },
        plate3: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-003 • BANQUETTE DINING" },
        plate4: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-004 • SHAKER CABINETRY" },
        plate5: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-005 • WOVEN PENDANT" },
        plate6: { image: "/e47b2892c7db8a8323976f8ebd349c7f4a286f44.png", caption: "CSK-006 • ISLAND SEATING" },
      },
    },
    {
      id: 22,
      slug: "open-plan-kitchen",
      categories: ["KITCHEN"],
      title: "Open Plan Kitchen",
      titleRoman: "Open Plan",
      titleItalic: "Kitchen",
      subtitle:
        "An open-plan kitchen under a richly detailed wood coffered ceiling and brass chandelier — glossy beige cabinetry, a dark granite counter and a layout that flows into the home.",
      image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png",
      location: "DELHI",
      specs: {
        projectName: "OPEN PLAN KITCHEN",
        type: "OPEN KITCHEN & DINING",
        location: "DELHI",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "A kitchen that flows with the home.",
        description:
          "Set beneath a coffered walnut ceiling with a statement brass chandelier, this open kitchen keeps glossy beige cabinetry and a black granite counter visible from the living areas — designed to host as much as to cook.",
      },
      keyElements: {
        material: {
          image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Walnut & Gloss",
          description:
            "A coffered walnut ceiling, high-gloss beige shutters, black granite counters, and polished tile flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Walnut & Cream",
          swatches: [
            { name: "WALNUT BROWN", hex: "#5C3F2B", bg: "#5C3F2B" },
            { name: "GLOSSY CREAM", hex: "#E9E2D6", bg: "#E9E2D6" },
            { name: "GRANITE BLACK", hex: "#1A1A1A", bg: "#1A1A1A" },
          ],
          bottomTag: "OPEN KITCHEN PALETTE",
        },
        lighting: {
          image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Brass Chandelier",
          description:
            "A tiered brass and crystal chandelier anchoring the ceiling, supported by recessed spots and cove lines.",
        },
        furniture: {
          image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Gloss Handleless Units",
          description:
            "Handleless glossy base and overhead units with a tall unit run housing appliances and storage.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Coffered Ceiling", description: "A walnut grid ceiling with integrated spots that defines the kitchen zone in the open plan." },
        { number: "02.", title: "Statement Chandelier", description: "A brass chandelier centred over the circulation space, adding warmth and occasion." },
        { number: "03.", title: "L-Shaped Counter", description: "Granite counters running along two walls with the hob and sink placed for an easy triangle." },
        { number: "04.", title: "Gloss Overhead Run", description: "Handleless glossy cabinets with lift-up shutters above the counter." },
        { number: "05.", title: "Tall Storage Column", description: "A full-height unit run at the edge of the kitchen for pantry and appliance storage." },
        { number: "06.", title: "Open Connection", description: "No partition walls — clear sightlines from kitchen to passage and living areas." },
      ],
      galleryPlates: {
        plate1: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-001 • COFFERED CEILING" },
        plate2: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-002 • CHANDELIER DETAIL" },
        plate3: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-003 • L-SHAPED COUNTER" },
        plate4: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-004 • GLOSS OVERHEADS" },
        plate5: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-005 • TALL STORAGE" },
        plate6: { image: "/e603a5f4aa22f2567f1d7164eb61c73cfc618e23.png", caption: "OPK-006 • OPEN CONNECTION" },
      },
    },
    {
      id: 23,
      slug: "cove-lit-interior",
      categories: ["LIVING ROOM"],
      title: "Cove Lit Interior",
      titleRoman: "Cove Lit",
      titleItalic: "Interior",
      subtitle:
        "A warm residential interior where a tray ceiling with concealed cove lighting floats over handleless gloss cabinetry and a dramatic dark stone counter — calm, luminous and easy to live with.",
      image: "/l.png",
      location: "DELHI",
      specs: {
        projectName: "COVE LIT INTERIOR",
        type: "RESIDENTIAL INTERIOR",
        location: "DELHI",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Light that shapes the room.",
        description:
          "A layered ceiling cove washes the space in warm light, while handleless gloss shutters, a dark veined backsplash and a continuous counter line keep the interior composed and uncluttered.",
      },
      keyElements: {
        material: {
          image: "/l.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Gloss & Dark Stone",
          description:
            "High-gloss beige shutters, dark veined stone across the counter and backsplash, and polished tile flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Ivory",
          swatches: [
            { name: "GLOSSY BEIGE", hex: "#E7DFD2", bg: "#E7DFD2" },
            { name: "DARK STONE", hex: "#1C1A18", bg: "#1C1A18" },
            { name: "WARM WHITE", hex: "#F5F2EC", bg: "#F5F2EC" },
          ],
          bottomTag: "RESIDENTIAL PALETTE",
        },
        lighting: {
          image: "/l.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Tray Cove Ceiling",
          description:
            "A recessed tray ceiling with warm concealed LED cove lines and spot lights for even, glare-free illumination.",
        },
        furniture: {
          image: "/l.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Handleless Run",
          description:
            "Push-to-open shutters, soft-close drawers, and a full-height unit run keeping everyday clutter out of sight.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Floating Ceiling Tray", description: "A recessed ceiling plane with warm cove light that defines and lifts the whole room." },
        { number: "02.", title: "Gloss Unit Run", description: "Seamless handleless cabinetry offering generous storage along the full wall." },
        { number: "03.", title: "Dark Stone Counter", description: "A durable dark counter and backsplash that contrast the pale cabinetry." },
        { number: "04.", title: "Window Nook", description: "A naturally lit corner beside the window, ideal for a small breakfast ledge." },
        { number: "05.", title: "Ventilation Core", description: "Concealed chimney and exhaust routing that keeps the ceiling lines clean." },
        { number: "06.", title: "Polished Floor", description: "Large-format polished tiles that reflect the cove glow and extend the sense of space." },
      ],
      galleryPlates: {
        plate1: { image: "/l.png", caption: "CLI-001 • TRAY CEILING" },
        plate2: { image: "/l.png", caption: "CLI-002 • GLOSS UNIT RUN" },
        plate3: { image: "/l.png", caption: "CLI-003 • DARK STONE COUNTER" },
        plate4: { image: "/l.png", caption: "CLI-004 • WINDOW NOOK" },
        plate5: { image: "/l.png", caption: "CLI-005 • COVE LIGHT DETAIL" },
        plate6: { image: "/l.png", caption: "CLI-006 • FLOOR & FINISH" },
      },
    },
    {
      id: 24,
      slug: "banquette-dining-interior",
      categories: ["LIVING ROOM"],
      title: "Banquette Dining Interior",
      titleRoman: "Banquette Dining",
      titleItalic: "Interior",
      subtitle:
        "Grey shaker joinery, gold-veined marble and a curved olive banquette gather around a round table — a refined dining corner designed for long, unhurried meals.",
      image: "/lv2.png",
      location: "GURUGRAM",
      specs: {
        projectName: "BANQUETTE DINING INTERIOR",
        type: "DINING & LIVING INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & MILLWORK",
      },
      concept: {
        title: "A dining corner that invites you to stay.",
        description:
          "A curved ribbed banquette wraps a round marble table beneath a sculptural woven pendant. Grey shaker cabinetry and a gold-veined marble slab form a composed backdrop, with open black shelves for everyday display.",
      },
      keyElements: {
        material: {
          image: "/lv2.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Marble & Painted Timber",
          description:
            "Gold-veined marble across table and counters, painted grey shaker joinery, and dark timber flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Grey & Olive",
          swatches: [
            { name: "SHAKER GREY", hex: "#B7BAB6", bg: "#B7BAB6" },
            { name: "OLIVE MOSS", hex: "#8A8A4F", bg: "#8A8A4F" },
            { name: "MARBLE IVORY", hex: "#F2EFE8", bg: "#F2EFE8" },
          ],
          bottomTag: "DINING PALETTE",
        },
        lighting: {
          image: "/lv2.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Woven Pendant",
          description:
            "A large black woven pendant casting patterned shadow over the table, supported by discreet ceiling spots.",
        },
        furniture: {
          image: "/lv2.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Curved Banquette",
          description:
            "A channel-tufted olive bench following the curve of the round table, paired with a cane-back chair.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Banquette Seating", description: "A curved upholstered bench that seats four to five comfortably and saves floor space." },
        { number: "02.", title: "Marble Slab Wall", description: "A full-height veined marble panel behind open shelves as the room's feature wall." },
        { number: "03.", title: "Open Display Shelves", description: "Black floating shelves styling ceramics, coffee ware and plants within easy reach." },
        { number: "04.", title: "Shaker Cabinetry", description: "Floor-to-ceiling grey shaker units with brass pulls for pantry and tableware storage." },
        { number: "05.", title: "Island Counter", description: "A marble-topped counter connecting dining to the working side of the room." },
        { number: "06.", title: "Timber Flooring", description: "Warm dark timber boards that ground the light cabinetry and soft upholstery." },
      ],
      galleryPlates: {
        plate1: { image: "/lv2.png", caption: "BDI-001 • BANQUETTE TABLE" },
        plate2: { image: "/lv2.png", caption: "BDI-002 • MARBLE SLAB WALL" },
        plate3: { image: "/lv2.png", caption: "BDI-003 • OPEN SHELVING" },
        plate4: { image: "/lv2.png", caption: "BDI-004 • SHAKER JOINERY" },
        plate5: { image: "/lv2.png", caption: "BDI-005 • WOVEN PENDANT" },
        plate6: { image: "/lv2.png", caption: "BDI-006 • ISLAND COUNTER" },
      },
    },
    {
      id: 25,
      slug: "fluted-stone-interior",
      categories: ["LIVING ROOM"],
      title: "Fluted Stone Interior",
      titleRoman: "Fluted Stone",
      titleItalic: "Interior",
      subtitle:
        "Fluted marble-look panels, a deep black backsplash and warm under-cove lighting define this compact interior — tactile, bright and meticulously finished.",
      image: "/lv3.png",
      location: "GURUGRAM",
      specs: {
        projectName: "FLUTED STONE INTERIOR",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Texture as the main event.",
        description:
          "Fluted stone-finish panels run across the overheads, lit from beneath by a warm cove that grazes every ridge. Against a glossy black backsplash and pale base units, the texture becomes the room's centrepiece.",
      },
      keyElements: {
        material: {
          image: "/lv3.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Fluted Stone & Grain",
          description:
            "Fluted marble-patterned panels, a deep black glossy backsplash, matte beige base units and warm wood-plank flooring.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ivory & Charcoal",
          swatches: [
            { name: "FLUTED IVORY", hex: "#EFEAE1", bg: "#EFEAE1" },
            { name: "GLOSS BLACK", hex: "#131313", bg: "#131313" },
            { name: "OAK FLOOR", hex: "#A98A67", bg: "#A98A67" },
          ],
          bottomTag: "TEXTURED INTERIOR PALETTE",
        },
        lighting: {
          image: "/lv3.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Grazing Cove Light",
          description:
            "A concealed warm LED cove beneath the overheads that grazes down the fluted ridges and lights the counter.",
        },
        furniture: {
          image: "/lv3.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Slim Base Units",
          description:
            "Handleless base drawers with aluminium profile grips and a deep stainless sink set into the stone counter.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Fluted Panel Wall", description: "Floor-run overheads faced in fluted stone-finish panels that catch light along every ridge." },
        { number: "02.", title: "Black Backsplash", description: "A glossy black backsplash that hides marks, reflects light and sharpens the pale joinery." },
        { number: "03.", title: "Window Wash", description: "A side window bringing daylight across the counter and opening the compact volume." },
        { number: "04.", title: "Sink & Utility Zone", description: "A deep sink with practical counter space for daily utility routines." },
        { number: "05.", title: "Warm Timber Floor", description: "Wood-plank flooring that keeps the space warm and soft underfoot." },
        { number: "06.", title: "Under-Cove Glow", description: "Warm concealed lighting that turns the panelled band into a glowing feature after dark." },
      ],
      galleryPlates: {
        plate1: { image: "/lv3.png", caption: "FSI-001 • FLUTED PANEL WALL" },
        plate2: { image: "/lv3.png", caption: "FSI-002 • BLACK BACKSPLASH" },
        plate3: { image: "/lv3.png", caption: "FSI-003 • SINK ZONE" },
        plate4: { image: "/lv3.png", caption: "FSI-004 • BASE UNITS" },
        plate5: { image: "/lv3.png", caption: "FSI-005 • COVE LIGHTING" },
        plate6: { image: "/lv3.png", caption: "FSI-006 • TIMBER FLOOR" },
      },
    },
    {
      id: 26,
      slug: "creative-office-lounge",
      categories: ["COMMERCIAL & OFFICE"],
      title: "Creative Office Lounge",
      titleRoman: "Creative Office",
      titleItalic: "Lounge",
      subtitle:
        "A playful office lounge where terracotta and moss-green display modules, soft poufs and a neon statement wall turn a breakout corner into the loudest idea in the room.",
      image: "/office.png",
      location: "DELHI",
      specs: {
        projectName: "CREATIVE OFFICE LOUNGE",
        type: "COMMERCIAL OFFICE",
        location: "DELHI",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "A breakout space that thinks out of the box.",
        description:
          "Designed as the creative heart of the office, this lounge pairs a modular terracotta-and-green display wall with soft cylindrical poufs and a glowing statement graphic — a space built for informal chats, quick brainstorms and recharging between meetings.",
      },
      keyElements: {
        material: {
          image: "/office.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Terra Modules & Felt",
          description:
            "Powder-coated terracotta framing, moss-green felt inserts, micro-cement walls, and a natural jute area rug.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Terracotta & Moss",
          swatches: [
            { name: "SOFT TERRACOTTA", hex: "#C97B5A", bg: "#C97B5A" },
            { name: "MOSS GREEN", hex: "#6E7B52", bg: "#6E7B52" },
            { name: "WARM SAND", hex: "#E7DED0", bg: "#E7DED0" },
          ],
          bottomTag: "WORKPLACE LOUNGE PALETTE",
        },
        lighting: {
          image: "/office.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Statement Glow",
          description:
            "Backlit lettering on the feature wall balanced by soft daylight falling through the skylight above.",
        },
        furniture: {
          image: "/office.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Soft Poufs & Ottomans",
          description:
            "Cylindrical terracotta poufs, a low bouclé bench, and moss-green cube seats arranged for flexible, informal seating.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Modular Display Wall", description: "A floor-to-ceiling grid of terracotta frames holding green felt cylinders, discs and storage cubes." },
        { number: "02.", title: "Neon Statement Wall", description: "A glowing lettered graphic that gives the lounge its identity and doubles as a photo moment." },
        { number: "03.", title: "Flexible Seating Cluster", description: "Lightweight poufs and ottomans that can be rearranged for quick team huddles." },
        { number: "04.", title: "Skylit Daylight", description: "Overhead daylight washing the rug and seating, keeping the room bright through the day." },
        { number: "05.", title: "Round Rug Zone", description: "A large woven rug that anchors the seating and softens the acoustics of the lounge." },
        { number: "06.", title: "Colour-Blocked Corners", description: "Painted ceiling and wall planes in deep green that frame the warm terracotta elements." },
      ],
      galleryPlates: {
        plate1: { image: "/office.png", caption: "COL-001 • DISPLAY WALL" },
        plate2: { image: "/office.png", caption: "COL-002 • STATEMENT GRAPHIC" },
        plate3: { image: "/office.png", caption: "COL-003 • SEATING CLUSTER" },
        plate4: { image: "/office.png", caption: "COL-004 • SKYLIGHT WASH" },
        plate5: { image: "/office.png", caption: "COL-005 • RUG & FLOOR" },
        plate6: { image: "/office.png", caption: "COL-006 • COLOUR-BLOCK DETAIL" },
      },
    },
    {
      id: 27,
      slug: "serene-modern-bedroom",
      categories: ["BEDROOM"],
      title: "Serene Modern Bedroom",
      titleRoman: "Serene Modern",
      titleItalic: "Bedroom",
      subtitle:
        "A tranquil bedroom sanctuary featuring warm fluted wall panels, integrated ambient lighting, and bespoke minimalist joinery designed for restorative living.",
      image: "/0c631bce40062ee011179ea9239574ee79d74be8.png",
      location: "DELHI",
      specs: {
        projectName: "SERENE MODERN BEDROOM",
        type: "RESIDENTIAL BEDROOM",
        location: "DELHI",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Calm proportions and tactile warmth.",
        description:
          "Designed as a restful retreat from urban life, combining soft earthy textures, concealed acoustic wall panels, and bespoke millwork tailored to modern daily rituals.",
      },
      keyElements: {
        material: {
          image: "/0c631bce40062ee011179ea9239574ee79d74be8.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Warm Oak & Linen",
          description:
            "Natural oak timber slats, tactile linen wall upholstery, unlacquered brass hardware, and plush woven wool carpeting.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Earth Tones",
          swatches: [
            { name: "OATMEAL LINEN", hex: "#EBE5DC", bg: "#EBE5DC" },
            { name: "NATURAL OAK", hex: "#B89778", bg: "#B89778" },
            { name: "DEEP TERRA", hex: "#8A4A40", bg: "#8A4A40" },
          ],
          bottomTag: "BEDROOM SUITE PALETTE",
        },
        lighting: {
          image: "/0c631bce40062ee011179ea9239574ee79d74be8.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Concealed 2700K Glow",
          description:
            "Concealed headboard LED grazing, dimmable architectural recessed spots, and ambient low-glare reading pendants.",
        },
        furniture: {
          image: "/0c631bce40062ee011179ea9239574ee79d74be8.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Custom Floating Bedframe",
          description:
            "A bespoke upholstered king bedframe with integrated floating bedside ledges and wireless charging hubs.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Floating Bed Wall", description: "Architectural wood slats with embedded warm illumination anchoring the bed." },
        { number: "02.", title: "Seamless Wardrobe Run", description: "Floor-to-ceiling flush-fit wardrobes with concealed profile handles." },
        { number: "03.", title: "Lounge Nook", description: "A comfortable reading chair positioned beside daylight windows." },
        { number: "04.", title: "Bedside Accents", description: "Floating stone and oak nightstands keeping floor space clear and airy." },
        { number: "05.", title: "Acoustic Insulation", description: "Multi-layered fabric walling dampening sound for peaceful sleep." },
        { number: "06.", title: "Dimmable Circadian Glow", description: "Smart ambient lighting transitioning from day warmth to evening calm." },
      ],
      galleryPlates: {
        plate1: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-001 • BED WALL" },
        plate2: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-002 • HEADBOARD GLOW" },
        plate3: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-003 • WARDROBE RUN" },
        plate4: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-004 • NIGHTSTAND DETAIL" },
        plate5: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-005 • MATERIAL PALETTE" },
        plate6: { image: "/0c631bce40062ee011179ea9239574ee79d74be8.png", caption: "SMB-006 • READING NOOK" },
      },
    },
    {
      id: 28,
      slug: "contemporary-master-suite",
      categories: ["BEDROOM"],
      title: "Contemporary Master Suite",
      titleRoman: "Contemporary Master",
      titleItalic: "Suite",
      subtitle:
        "A spacious master bedroom suite featuring architectural wall detailing, curated textural fabrics, and a sophisticated muted color palette.",
      image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png",
      location: "GURUGRAM",
      specs: {
        projectName: "CONTEMPORARY MASTER SUITE",
        type: "RESIDENTIAL BEDROOM",
        location: "GURUGRAM",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Sophistication in modern repose.",
        description:
          "A refined master suite where architectural geometry meets soft bouclé upholstery, creating an elevated private sanctuary with integrated walk-in wardrobe access.",
      },
      keyElements: {
        material: {
          image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Bouclé & Fluted Wood",
          description:
            "Textured bouclé headboard, satin-lacquer cabinetry, dark brushed bronze accents, and hand-finished micro-cement.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Muted Sophistication",
          swatches: [
            { name: "CHAMPAGNE", hex: "#E8E2D8", bg: "#E8E2D8" },
            { name: "WARM TAUPE", hex: "#9E9385", bg: "#9E9385" },
            { name: "SMOKED BRONZE", hex: "#38322B", bg: "#38322B" },
          ],
          bottomTag: "MASTER SUITE PALETTE",
        },
        lighting: {
          image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Layered Ambient Lighting",
          description:
            "Perimeter ceiling cove illumination paired with hand-blown glass bedside globes.",
        },
        furniture: {
          image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Integrated Headboard Suite",
          description:
            "Extended upholstered headboard panel with built-in satin brass switches and floating drawer units.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Extended Headboard", description: "Wall-to-wall upholstered headboard providing luxurious backing." },
        { number: "02.", title: "Dressing Corridor", description: "Private transition corridor connecting the bedroom to walk-in wardrobe." },
        { number: "03.", title: "Luminance Control", description: "Multi-scene lighting presets for work, relaxation, and night." },
        { number: "04.", title: "Bespoke Joinery", description: "Precision crafted storage with internal soft lighting." },
        { number: "05.", title: "Window Framing", description: "Floor-to-ceiling sheer drapery diffusing soft natural daylight." },
        { number: "06.", title: "Tactile Finishes", description: "Carefully selected materials that enrich the sensory experience." },
      ],
      galleryPlates: {
        plate1: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-001 • MASTER BED" },
        plate2: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-002 • HEADBOARD DETAIL" },
        plate3: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-003 • CEILING COVE" },
        plate4: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-004 • LIGHTING STUDY" },
        plate5: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-005 • JOINERY CORNER" },
        plate6: { image: "/2dd3f1ffb0edf9715443e343de576ee04e325b88.png", caption: "CMS-006 • ROOM OVERVIEW" },
      },
    },
    {
      id: 29,
      slug: "minimal-wood-bedroom",
      categories: ["BEDROOM"],
      title: "Minimal Wood Bedroom",
      titleRoman: "Minimal Wood",
      titleItalic: "Bedroom",
      subtitle:
        "A warm, minimalist bedroom characterized by rich natural timber panelling, subtle accent lighting, and uncluttered spatial flow.",
      image: "/435f513b1617032676eafaca508a0d89bffd39d5.png",
      location: "DELHI",
      specs: {
        projectName: "MINIMAL WOOD BEDROOM",
        type: "RESIDENTIAL BEDROOM",
        location: "DELHI",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Pure lines and natural materiality.",
        description:
          "Honoring natural wood grains with architectural precision, creating an organic yet polished bedroom setting centered on restful simplicity.",
      },
      keyElements: {
        material: {
          image: "/435f513b1617032676eafaca508a0d89bffd39d5.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Natural Teak & Plaster",
          description:
            "Veneered teak wall panelling, hand-applied lime plaster, matte black metal accents, and woven textiles.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Timber Tones",
          swatches: [
            { name: "WARM TEAK", hex: "#9C6B43", bg: "#9C6B43" },
            { name: "LIME WASH", hex: "#ECE7DE", bg: "#ECE7DE" },
            { name: "CHARCOAL ACCENT", hex: "#222120", bg: "#222120" },
          ],
          bottomTag: "TIMBER BEDROOM PALETTE",
        },
        lighting: {
          image: "/435f513b1617032676eafaca508a0d89bffd39d5.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Architectural Sconces",
          description:
            "Directional minimalist sconces casting gentle pools of light against natural grain walls.",
        },
        furniture: {
          image: "/435f513b1617032676eafaca508a0d89bffd39d5.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Low-Profile Platform Bed",
          description:
            "Crafted low platform bed with shadow-gap base and integrated seamless drawer storage.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Timber Feature Wall", description: "Continuous wood panelling bringing organic warmth to the bed space." },
        { number: "02.", title: "Flush Storage Walls", description: "Storage hidden seamlessly behind full-height timber panel doors." },
        { number: "03.", title: "Low Horizon Line", description: "Low-profile furniture enhancing the perceived ceiling height." },
        { number: "04.", title: "Soft Daylight Influx", description: "Generous window exposures balanced with privacy screening." },
        { number: "05.", title: "Minimal Bedside Pods", description: "Cantilevered ledges keeping surfaces functional and minimal." },
        { number: "06.", title: "Natural Floor Warmth", description: "Plank flooring complementing the vertical wall panelling." },
      ],
      galleryPlates: {
        plate1: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-001 • TIMBER BED" },
        plate2: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-002 • GRAIN DETAIL" },
        plate3: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-003 • FLUSH STORAGE" },
        plate4: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-004 • SCONCE LIGHTING" },
        plate5: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-005 • PLATFORM BASE" },
        plate6: { image: "/435f513b1617032676eafaca508a0d89bffd39d5.png", caption: "MWB-006 • SUITE PERSPECTIVE" },
      },
    },
    {
      id: 30,
      slug: "luxury-accent-bedroom",
      categories: ["BEDROOM"],
      title: "Luxury Accent Bedroom",
      titleRoman: "Luxury Accent",
      titleItalic: "Bedroom",
      subtitle:
        "An opulent bedroom concept pairing statement architectural feature walls with plush upholstery, metallic details, and tailored illumination.",
      image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png",
      location: "GURUGRAM",
      specs: {
        projectName: "LUXURY ACCENT BEDROOM",
        type: "RESIDENTIAL BEDROOM",
        location: "GURUGRAM",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Bespoke luxury in every proportion.",
        description:
          "Rich contrasts of metallic inlays, fluted acoustic panels, and tailored upholstery creating a boutique hotel ambience at home.",
      },
      keyElements: {
        material: {
          image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Velvet, Stone & Brass",
          description:
            "Rich velvet headboard upholstery, polished travertine accents, brass trims, and dark timber millwork.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Rich Contrast",
          swatches: [
            { name: "ROYAL TAUPE", hex: "#C7B8A5", bg: "#C7B8A5" },
            { name: "BRUSHED GOLD", hex: "#CCA35A", bg: "#CCA35A" },
            { name: "NOIR SHADOW", hex: "#171615", bg: "#171615" },
          ],
          bottomTag: "LUXURY SUITE PALETTE",
        },
        lighting: {
          image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Sculptural Pendants",
          description:
            "Dual designer drop pendants flanking the bed with warm 2400K illumination.",
        },
        furniture: {
          image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Custom Wingback Bed",
          description:
            "Custom-built wingback bed with integrated nightstands and brushed metallic channel inlays.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Statement Headboard", description: "Sculptural back panel with brass inlay details framing the king bed." },
        { number: "02.", title: "Luxe Vanity Station", description: "Dedicated vanity mirror with backlit halo illumination." },
        { number: "03.", title: "Boutique Wardrobe Bay", description: "Smoked-glass wardrobe doors with internal warm strip lights." },
        { number: "04.", title: "Side Lounge Seating", description: "Plush velvet armchair paired with a marble drink table." },
        { number: "05.", title: "Layered Floor Rugs", description: "Silk-wool blend area rugs providing soft underfoot texture." },
        { number: "06.", title: "Integrated Media Console", description: "Floating wall console with hidden cable management." },
      ],
      galleryPlates: {
        plate1: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-001 • MASTER VIEW" },
        plate2: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-002 • HEADBOARD INLAY" },
        plate3: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-003 • PENDANT DROP" },
        plate4: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-004 • VANITY CORNER" },
        plate5: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-005 • MATERIAL CONTRAST" },
        plate6: { image: "/b24d5c0c3e931ed57cc3d728a5ad31a73d8bae60.png", caption: "LAB-006 • SUITE ELEVATION" },
      },
    },
    {
      id: 31,
      slug: "curated-suite-bedroom",
      categories: ["BEDROOM"],
      title: "Curated Suite Bedroom",
      titleRoman: "Curated Suite",
      titleItalic: "Bedroom",
      subtitle:
        "A modern master suite combining soft textured wall panelling, refined custom joinery, and warm layered ambient lighting.",
      image: "/de954718378fd394bd6ef09119de4f275b97715a.png",
      location: "DELHI",
      specs: {
        projectName: "CURATED SUITE BEDROOM",
        type: "RESIDENTIAL BEDROOM",
        location: "DELHI",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Elegance through tailored simplicity.",
        description:
          "Balancing functional storage and open circulation with soothing natural textures, creating a timeless space designed for comfort and elegance.",
      },
      keyElements: {
        material: {
          image: "/de954718378fd394bd6ef09119de4f275b97715a.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Textured Fabric & Walnut",
          description:
            "Textured woven wallcoverings, rich walnut timber accents, matte lacquer finishes, and wool drapery.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Neutral Tones",
          swatches: [
            { name: "SAND BEIGE", hex: "#DFD7CA", bg: "#DFD7CA" },
            { name: "WALNUT GRAIN", hex: "#6E4C33", bg: "#6E4C33" },
            { name: "SOFT IVORY", hex: "#F3EFE8", bg: "#F3EFE8" },
          ],
          bottomTag: "CURATED SUITE PALETTE",
        },
        lighting: {
          image: "/de954718378fd394bd6ef09119de4f275b97715a.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Recessed Wall Graze",
          description:
            "Soft top-cove LED lighting grazing down the textured headboard feature wall.",
        },
        furniture: {
          image: "/de954718378fd394bd6ef09119de4f275b97715a.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Tailored Joinery Unit",
          description:
            "Floating walnut dressing unit and nightstands with precision mitred corners.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Cove-Lit Feature Wall", description: "Textured headboard backdrop highlighted by warm grazing light." },
        { number: "02.", title: "Floating Nightstands", description: "Bespoke nightstands keeping the floor zone open and clean." },
        { number: "03.", title: "Bespoke Wardrobe Run", description: "Seamless floor-to-ceiling wardrobes integrating full interior lighting." },
        { number: "04.", title: "Private Dressing Zone", description: "Dedicated corner with backlit grooming mirror." },
        { number: "05.", title: "Acoustic Comfort", description: "Layered fabric textures absorbing echo and external noise." },
        { number: "06.", title: "Circadian Light System", description: "Even light distribution for calming day-to-night transitions." },
      ],
      galleryPlates: {
        plate1: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-001 • ROOM ELEVATION" },
        plate2: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-002 • WALL GRAZING" },
        plate3: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-003 • NIGHTSTAND JOINERY" },
        plate4: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-004 • WARDROBE RUN" },
        plate5: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-005 • MATERIAL BOARD" },
        plate6: { image: "/de954718378fd394bd6ef09119de4f275b97715a.png", caption: "CSB-006 • SUITE PERSPECTIVE" },
      },
    },
    {
      id: 32,
      slug: "warm-ambient-bedroom",
      categories: ["BEDROOM"],
      title: "Warm Ambient Bedroom",
      titleRoman: "Warm Ambient",
      titleItalic: "Bedroom",
      subtitle:
        "A peaceful modern bedroom with layered natural textures, ambient cove illumination, and minimalist bespoke furnishings.",
      image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png",
      location: "DELHI",
      specs: {
        projectName: "WARM AMBIENT BEDROOM",
        type: "RESIDENTIAL BEDROOM",
        location: "DELHI",
        scope: "INTERIOR ARCHITECTURE & FIT-OUT",
      },
      concept: {
        title: "Intimate warmth and tranquil rhythm.",
        description:
          "Warm wood tones, soft ambient lighting, and refined detailing create a quiet sanctuary tailored for restorative rest and modern living.",
      },
      keyElements: {
        material: {
          image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Warm Oak & Bouclé",
          description:
            "Natural oak slatted panels, soft bouclé bedframe, satin-finished brass fixtures, and woven natural rugs.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Warm Honey & Cream",
          swatches: [
            { name: "HONEY OAK", hex: "#C49A6C", bg: "#C49A6C" },
            { name: "CREAM BOUCLÉ", hex: "#EBE6DD", bg: "#EBE6DD" },
            { name: "DEEP ESPRESSO", hex: "#2E241E", bg: "#2E241E" },
          ],
          bottomTag: "AMBIENT BEDROOM PALETTE",
        },
        lighting: {
          image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Warm Perimeter Cove",
          description:
            "Concealed architectural cove lighting washing vertical surfaces in soft golden light.",
        },
        furniture: {
          image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Low-Slung Bed & Ledgers",
          description:
            "Custom-built platform bed with extended floating ledger nightstands.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Perimeter Cove Illumination", description: "Concealed light lines lifting the ceiling and enriching the room." },
        { number: "02.", title: "Low-Slung Platform Bed", description: "Grounding the room with elegant low-profile proportions." },
        { number: "03.", title: "Floating Night Ledgers", description: "Uncluttered surfaces with concealed wire management." },
        { number: "04.", title: "Floor-to-Ceiling Wardrobes", description: "Flush cabinetry integrating ample, organized storage." },
        { number: "05.", title: "Soft Daylight Filtration", description: "Double-layered linen curtains balancing privacy and daylight." },
        { number: "06.", title: "Natural Texture Harmony", description: "Seamless cohesion between oak, textiles, and warm plaster." },
      ],
      galleryPlates: {
        plate1: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-001 • ROOM PERSPECTIVE" },
        plate2: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-002 • COVE LIGHTING" },
        plate3: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-003 • PLATFORM BED" },
        plate4: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-004 • WARDROBE RUN" },
        plate5: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-005 • MATERIAL BOARD" },
        plate6: { image: "/eae2a8599187761e4f10e1bc99eb5868eb130b93.png", caption: "WAB-006 • SUITE OVERVIEW" },
      },
    },
    {
      id: 33,
      slug: "island-track-interior",
      categories: [],
      title: "Island Track Interior",
      titleRoman: "Island Track",
      titleItalic: "Interior",
      subtitle:
        "A minimal island-led interior with a black track-light ceiling, veined stone island and a single clean counter wall — precise, quiet and architectural.",
      image: "/b7.png",
      location: "GURUGRAM",
      specs: {
        projectName: "ISLAND TRACK INTERIOR",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Everything aligned, nothing extra.",
        description:
          "A single counter wall of taupe lacquer and veined stone faces a monolithic island, while a black magnetic track glides across the ceiling — a study in line, plane and controlled light.",
      },
      keyElements: {
        material: {
          image: "/b7.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Stone & Matte Lacquer",
          description:
            "Dramatic veined stone across island and backsplash, matte taupe lacquer fronts and pale porcelain floor.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ink & Oat",
          swatches: [
            { name: "INK STONE", hex: "#26241F", bg: "#26241F" },
            { name: "OAT TAUPE", hex: "#CFC5B5", bg: "#CFC5B5" },
            { name: "MIST WHITE", hex: "#EFEDE8", bg: "#EFEDE8" },
          ],
          bottomTag: "MINIMAL ISLAND PALETTE",
        },
        lighting: {
          image: "/b7.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Magnetic Track",
          description:
            "A slim black ceiling track with adjustable heads washing the counter and island, plus a linear pendant drop.",
        },
        furniture: {
          image: "/b7.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Monolithic Island",
          description:
            "A stone-wrapped island with waterfall ends, housing storage on the inner face and seating on the outer.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Stone Island", description: "A waterfall-ends island reading as a single carved block in the room's centre." },
        { number: "02.", title: "Counter Wall", description: "One clean run of counter, sink and storage against the wall." },
        { number: "03.", title: "Track Ceiling", description: "A black magnetic track drawing a precise line across the white ceiling." },
        { number: "04.", title: "Linear Pendant", description: "A slim horizontal light floating over the island for task and mood." },
        { number: "05.", title: "Glass Display Bay", description: "A smoked glass cabinet section breaking the lacquer run with a lit display." },
        { number: "06.", title: "Pale Floor Plane", description: "Quiet pale tiles keeping the focus on stone and line." },
      ],
      galleryPlates: {
        plate1: { image: "/b7.png", caption: "ITI-001 • STONE ISLAND" },
        plate2: { image: "/b7.png", caption: "ITI-002 • COUNTER WALL" },
        plate3: { image: "/b7.png", caption: "ITI-003 • TRACK CEILING" },
        plate4: { image: "/b7.png", caption: "ITI-004 • LINEAR PENDANT" },
        plate5: { image: "/b7.png", caption: "ITI-005 • GLASS DISPLAY" },
        plate6: { image: "/b7.png", caption: "ITI-006 • FLOOR PLANE" },
      },
    },
    {
      id: 34,
      slug: "relief-wall-detail",
      categories: [],
      title: "Relief Wall Detail",
      titleRoman: "Relief Wall",
      titleItalic: "Detail",
      subtitle:
        "A close-up of calm: a hand-sculpted relief wall in warm ivory, bronze pendant light and herringbone timber — texture, art and light composed in one quiet corner.",
      image: "/b8.png",
      location: "GURUGRAM",
      specs: {
        projectName: "RELIEF WALL DETAIL",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & DETAILING",
      },
      concept: {
        title: "Texture does the talking.",
        description:
          "An undulating relief panel in warm ivory meets fluted timber, a floating bronze-art canvas and a single pendant — proving that one tactile wall can carry an entire room.",
      },
      keyElements: {
        material: {
          image: "/b8.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Carved Plaster & Oak",
          description:
            "Hand-finished relief plaster in warm ivory, fluted oak panelling, honed stone ledge and herringbone timber floor.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ivory & Bronze",
          swatches: [
            { name: "WARM IVORY", hex: "#EAE3D6", bg: "#EAE3D6" },
            { name: "BRONZE OCHRE", hex: "#A97B4F", bg: "#A97B4F" },
            { name: "SMOKED OAK", hex: "#6E573F", bg: "#6E573F" },
          ],
          bottomTag: "TEXTURED DETAIL PALETTE",
        },
        lighting: {
          image: "/b8.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Grazing Pendant & Cove",
          description:
            "A shallow dome pendant over the ledge with cove light grazing the relief's ridges for soft shadow play.",
        },
        furniture: {
          image: "/b8.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Floating Ledge",
          description:
            "A honed stone ledge carrying sculptural side boxes, with concealed switches set flush into the plaster.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Relief Panel", description: "A flowing sculpted wall whose ridges catch light and shift through the day." },
        { number: "02.", title: "Bronze Art Canvas", description: "A framed tonal artwork bridging the ivory wall and timber panels." },
        { number: "03.", title: "Fluted Timber Panels", description: "Full-height fluted oak adding vertical rhythm beside the relief." },
        { number: "04.", title: "Stone Ledge", description: "A floating honed ledge with sculptural boxes acting as a display plinth." },
        { number: "05.", title: "Bronze Pendant", description: "A single shallow-dome pendant dropping warm light at the ledge." },
        { number: "06.", title: "Herringbone Floor", description: "Dark herringbone timber grounding the pale, textured composition." },
      ],
      galleryPlates: {
        plate1: { image: "/b8.png", caption: "RWD-001 • RELIEF PANEL" },
        plate2: { image: "/b8.png", caption: "RWD-002 • ART CANVAS" },
        plate3: { image: "/b8.png", caption: "RWD-003 • FLUTED PANELS" },
        plate4: { image: "/b8.png", caption: "RWD-004 • STONE LEDGE" },
        plate5: { image: "/b8.png", caption: "RWD-005 • BRONZE PENDANT" },
        plate6: { image: "/b8.png", caption: "RWD-006 • HERRINGBONE FLOOR" },
      },
    },
    {
      id: 35,
      slug: "stone-line-interior",
      categories: ["FECADE"],
      title: "Stone Line Interior",
      titleRoman: "Stone Line",
      titleItalic: "Interior",
      subtitle:
        "A single-wall composition where veined stone runs the full backsplash against cream lacquer fronts, smoked glass cabinets and a black track line overhead.",
      image: "/fe2.png",
      location: "GURUGRAM",
      specs: {
        projectName: "STONE LINE INTERIOR",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "One strong line, everything else quiet.",
        description:
          "A dramatic grey-veined slab draws a horizontal line across the entire wall, while cream handleless fronts and smoked-glass display units stay deliberately calm around it. A magnetic track and slim linear pendant finish the composition.",
      },
      keyElements: {
        material: {
          image: "/fe2.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Veined Stone & Lacquer",
          description:
            "Grey-veined stone slab, cream lacquer fronts, smoked glass cabinet panels and large pale floor tiles.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Cream & Storm",
          swatches: [
            { name: "CREAM LACQUER", hex: "#E6DCCB", bg: "#E6DCCB" },
            { name: "STORM STONE", hex: "#4A4A48", bg: "#4A4A48" },
            { name: "PALE MIST", hex: "#EFEDE8", bg: "#EFEDE8" },
          ],
          bottomTag: "STONE FEATURE PALETTE",
        },
        lighting: {
          image: "/fe2.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Track & Linear Drop",
          description:
            "A black magnetic track with adjustable heads and a slim linear pendant floating over the island.",
        },
        furniture: {
          image: "/fe2.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Stone-Clad Island",
          description:
            "A waterfall island wrapped in the same veined stone, with concealed storage on the inner face.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Full-Width Slab", description: "One continuous stone slab behind the counter acting as the room's horizon line." },
        { number: "02.", title: "Smoked Glass Bay", description: "Dark-framed glass cabinets with internal light breaking the lacquer run." },
        { number: "03.", title: "Linear Island", description: "A stone-clad island for prep, serving and casual conversation." },
        { number: "04.", title: "Black Track Line", description: "A ceiling track tracing the room's length with precisely aimed spots." },
        { number: "05.", title: "Handleless Fronts", description: "Push-to-open cream lacquer shutters with soft-close drawer stacks." },
        { number: "06.", title: "Pale Tile Floor", description: "Quiet large-format tiles reflecting daylight across the plan." },
      ],
      galleryPlates: {
        plate1: { image: "/fe2.png", caption: "SLI-001 • STONE SLAB WALL" },
        plate2: { image: "/fe2.png", caption: "SLI-002 • GLASS BAY" },
        plate3: { image: "/fe2.png", caption: "SLI-003 • LINEAR ISLAND" },
        plate4: { image: "/fe2.png", caption: "SLI-004 • TRACK LINE" },
        plate5: { image: "/fe2.png", caption: "SLI-005 • LACQUER FRONTS" },
        plate6: { image: "/fe2.png", caption: "SLI-006 • FLOOR PLANE" },
      },
    },
    {
      id: 36,
      slug: "bedside-ledge-detail",
      categories: ["FECADE"],
      title: "Bedside Ledge Detail",
      titleRoman: "Bedside Ledge",
      titleItalic: "Detail",
      subtitle:
        "A tranquil bedside moment — honed stone ledge, walnut boxes, sculptural pendant and a beaded relief wall composed in soft, earthy light.",
      image: "/fe3.png",
      location: "GURUGRAM",
      specs: {
        projectName: "BEDSIDE LEDGE DETAIL",
        type: "RESIDENTIAL INTERIOR",
        location: "GURUGRAM",
        scope: "INTERIOR DESIGN & DETAILING",
      },
      concept: {
        title: "Materials in quiet conversation.",
        description:
          "A floating honed-stone ledge carries two walnut boxes beneath a shallow disc pendant. Behind, fluted timber, a marble reveal and a beaded relief panel layer texture without noise — a restful corner built from five materials and one light.",
      },
      keyElements: {
        material: {
          image: "/fe3.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Stone, Walnut & Relief",
          description:
            "Honed travertine ledge, walnut box side tables, beaded ivory relief plaster and herringbone timber floor.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Earth & Ember",
          swatches: [
            { name: "TRAVERTINE", hex: "#D8C7A8", bg: "#D8C7A8" },
            { name: "WALNUT", hex: "#6B4A32", bg: "#6B4A32" },
            { name: "WARM GREIGE", hex: "#C9BFB2", bg: "#C9BFB2" },
          ],
          bottomTag: "BEDSIDE DETAIL PALETTE",
        },
        lighting: {
          image: "/fe3.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Shallow Disc Pendant",
          description:
            "A slim disc pendant dropping warm light onto the ledge, grazing the relief wall behind.",
        },
        furniture: {
          image: "/fe3.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Floating Ledge & Boxes",
          description:
            "A stone ledge spanning the bed edge with two lid-top walnut boxes for books and bedside essentials.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Travertine Ledge", description: "A continuous stone plinth floating above the floor, tying bed and side zone together." },
        { number: "02.", title: "Walnut Boxes", description: "Two simple lidded boxes acting as adaptable bedside tables." },
        { number: "03.", title: "Beaded Relief Wall", description: "A hand-finished panel of flowing beaded lines catching the pendant glow." },
        { number: "04.", title: "Fluted Timber Reveal", description: "Vertical timber channels and a slim marble reveal framing the bed head." },
        { number: "05.", title: "Disc Pendant", description: "A shallow metal disc pendant hanging low for intimate night light." },
        { number: "06.", title: "Herringbone Floor", description: "Deep-toned herringbone boards grounding the earthy palette." },
      ],
      galleryPlates: {
        plate1: { image: "/fe3.png", caption: "BLD-001 • STONE LEDGE" },
        plate2: { image: "/fe3.png", caption: "BLD-002 • WALNUT BOXES" },
        plate3: { image: "/fe3.png", caption: "BLD-003 • RELIEF WALL" },
        plate4: { image: "/fe3.png", caption: "BLD-004 • DISC PENDANT" },
        plate5: { image: "/fe3.png", caption: "BLD-005 • TIMBER REVEAL" },
        plate6: { image: "/fe3.png", caption: "BLD-006 • HERRINGBONE FLOOR" },
      },
    },
    {
      id: 37,
      slug: "jali-stone-facade",
      categories: ["FECADE"],
      title: "Jali Stone Facade",
      titleRoman: "Jali Stone",
      titleItalic: "Facade",
      subtitle:
        "A contemporary street facade built from grey stone, perforated jali screens and black steel — privacy, greenery and a strong address presence on one elevation.",
      image: "/fe4.png",
      location: "GURUGRAM",
      specs: {
        projectName: "JALI STONE FACADE",
        type: "ARCHITECTURAL EXTERIOR",
        location: "GURUGRAM",
        scope: "FACADE DESIGN & EXECUTION",
      },
      concept: {
        title: "Privacy screen as architecture.",
        description:
          "Stacked stone volumes are punched with square jali screens that filter light and views while giving the building its graphic identity. A landscaped boundary wall with the house number completes the street presence.",
      },
      keyElements: {
        material: {
          image: "/fe4.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Stone, Jali & Steel",
          description:
            "Split-face grey stone cladding, cast perforated jali panels, black steel frames and warm timber accents.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Granite & Green",
          swatches: [
            { name: "GRANITE GREY", hex: "#8B8880", bg: "#8B8880" },
            { name: "JALI CREAM", hex: "#E4DED2", bg: "#E4DED2" },
            { name: "DEEP CHARDON", hex: "#1D1F1E", bg: "#1D1F1E" },
          ],
          bottomTag: "FACADE PALETTE",
        },
        lighting: {
          image: "/fe4.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Grazing Wall Wash",
          description:
            "Concealed grazers washing the stone texture and uplighting the planting along the boundary wall.",
        },
        furniture: {
          image: "/fe4.png",
          subtitle: "04 // ARCHITECTURAL DETAILING",
          title: "Jali Screens & Gate",
          description:
            "Perforated screen panels for balcony privacy and a matching black steel pedestrian gate with house number.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Stone Elevation", description: "A stacked composition of stone-clad boxes with deep window reveals." },
        { number: "02.", title: "Perforated Jali", description: "Cast screens filtering sun and sightlines on the upper floors." },
        { number: "03.", title: "Green Terrace Edge", description: "Planting along the podium edge softening the stone mass." },
        { number: "04.", title: "Boundary Wall", description: "A textured compound wall carrying jali inserts, sconces and the house number." },
        { number: "05.", title: "Steel Gate", description: "A black steel gate aligned with the facade's grid and materials." },
        { number: "06.", title: "Deep Reveals", description: "Recessed openings throwing shadow lines that shift through the day." },
      ],
      galleryPlates: {
        plate1: { image: "/fe4.png", caption: "JSF-001 • STREET VIEW" },
        plate2: { image: "/fe4.png", caption: "JSF-002 • JALI SCREENS" },
        plate3: { image: "/fe4.png", caption: "JSF-003 • BOUNDARY WALL" },
        plate4: { image: "/fe4.png", caption: "JSF-004 • STONE CLADDING" },
        plate5: { image: "/fe4.png", caption: "JSF-005 • GREEN TERRACE" },
        plate6: { image: "/fe4.png", caption: "JSF-006 • GATE & NUMBER" },
      },
    },
    {
      id: 38,
      slug: "classic-villa-facade",
      categories: ["FECADE"],
      title: "Classic Villa Facade",
      titleRoman: "Classic Villa",
      titleItalic: "Facade",
      subtitle:
        "A stately villa elevation in warm ivory — pilasters, arched glazing, iron balconies and lantern lighting composed in perfect symmetry at dusk.",
      image: "/fec.png",
      location: "RAJASTHAN",
      specs: {
        projectName: "CLASSIC VILLA FACADE",
        type: "ARCHITECTURAL EXTERIOR",
        location: "RAJASTHAN",
        scope: "FACADE DESIGN & EXECUTION",
      },
      concept: {
        title: "Symmetry, light and arrival.",
        description:
          "Classical proportions frame a two-storey villa: fluted pilasters, a grand arched window, colonnaded balcony and a hipped roof. Warm lantern light and a lit stair reveal turn the elevation into a glowing landmark after sunset.",
      },
      keyElements: {
        material: {
          image: "/fec.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Ivory Render & Iron",
          description:
            "Smooth ivory render, cast mouldings and cornices, black wrought-iron railings and dark timber door.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "Ivory & Amber",
          swatches: [
            { name: "IVORY RENDER", hex: "#E8DFCE", bg: "#E8DFCE" },
            { name: "AMBER GLOW", hex: "#D9A75F", bg: "#D9A75F" },
            { name: "SLATE ROOF", hex: "#2E2C29", bg: "#2E2C29" },
          ],
          bottomTag: "CLASSIC FACADE PALETTE",
        },
        lighting: {
          image: "/fec.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Lantern & Wall Light",
          description:
            "Pair wall lanterns flanking openings, a glowing arched window and a lit stair reveal for dusk drama.",
        },
        furniture: {
          image: "/fec.png",
          subtitle: "04 // ARCHITECTURAL DETAILING",
          title: "Pilasters & Balustrade",
          description:
            "Fluted pilasters, a colonnaded balcony with iron balustrade, and a carved cartouche over the arch.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Arched Feature Window", description: "A tall arched glazed opening glowing amber through sheers at dusk." },
        { number: "02.", title: "Colonnaded Balcony", description: "A first-floor balcony carried on fluted columns with iron balustrade." },
        { number: "03.", title: "Grand Entrance", description: "A dark timber door framed by pilasters and approached by wide steps." },
        { number: "04.", title: "Lantern Pairing", description: "Symmetric wall lanterns marking openings and lighting the approach." },
        { number: "05.", title: "Lit Stair Reveal", description: "A narrow illuminated slot stair slicing the elevation vertically." },
        { number: "06.", title: "Dusk Landscape", description: "Trimmed hedges, flowering beds and a paved drive framing the villa." },
      ],
      galleryPlates: {
        plate1: { image: "/fec.png", caption: "CVF-001 • DUSK ELEVATION" },
        plate2: { image: "/fec.png", caption: "CVF-002 • ARCHED WINDOW" },
        plate3: { image: "/fec.png", caption: "CVF-003 • BALCONY COLONNADE" },
        plate4: { image: "/fec.png", caption: "CVF-004 • ENTRANCE DOOR" },
        plate5: { image: "/fec.png", caption: "CVF-005 • LANTERN DETAIL" },
        plate6: { image: "/fec.png", caption: "CVF-006 • GARDEN APPROACH" },
      },
    },
    {
      id: 39,
      slug: "marble-vanity-bathroom",
      categories: ["BATHROOM & SPA"],
      title: "Marble Vanity Bathroom",
      titleRoman: "Marble Vanity",
      titleItalic: "Bathroom",
      subtitle:
        "A bright marble bathroom where a floating walnut vanity, brass fittings and a glass walk-in shower compose a calm, hotel-like daily ritual.",
      image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png",
      location: "DELHI",
      specs: {
        projectName: "MARBLE VANITY BATHROOM",
        type: "BATHROOM & SPA",
        location: "DELHI",
        scope: "INTERIOR DESIGN & FIT-OUT",
      },
      concept: {
        title: "Warm wood against cool stone.",
        description:
          "Book-veined white marble wraps the walls and floor, while a floating walnut vanity with brass pulls warms the room. A frameless glass shower with brushed-brass shower column keeps the volume open and light.",
      },
      keyElements: {
        material: {
          image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png",
          subtitle: "01 // MATERIAL & TEXTURE",
          title: "Marble & Walnut",
          description:
            "Veined white marble across walls and floor, a walnut-veneer floating vanity with honed dark counter, and brushed brass hardware.",
        },
        palette: {
          subtitle: "02 // COLOUR PALETTE",
          title: "White Marble & Walnut",
          swatches: [
            { name: "MARBLE WHITE", hex: "#F2F0EB", bg: "#F2F0EB" },
            { name: "WALNUT BROWN", hex: "#6B4A32", bg: "#6B4A32" },
            { name: "BRASS GOLD", hex: "#C9A96E", bg: "#C9A96E" },
          ],
          bottomTag: "BATHROOM PALETTE",
        },
        lighting: {
          image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png",
          subtitle: "03 // LIGHTING DESIGN",
          title: "Soft Daylight & Spots",
          description:
            "Natural daylight from the side window supported by ceiling spots that keep the vanity mirror evenly lit.",
        },
        furniture: {
          image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png",
          subtitle: "04 // FURNITURE & DETAILING",
          title: "Floating Vanity",
          description:
            "A wall-hung walnut vanity with open towel niches, brass bar pulls and an inset stone counter under a brass-framed mirror.",
        },
      },
      spatialExperience: [
        { number: "01.", title: "Floating Vanity", description: "A wall-hung walnut unit with open niches keeping towels handy and the floor clear." },
        { number: "02.", title: "Brass-Framed Mirror", description: "A soft-cornered mirror with slim brass frame echoing the fittings." },
        { number: "03.", title: "Walk-In Shower", description: "A glass partition separating the wet zone with a brushed-brass shower column." },
        { number: "04.", title: "Veined Marble Shell", description: "Floor-to-ceiling marble with flowing grey veins as the room's backdrop." },
        { number: "05.", title: "Vessel Basin", description: "A matte rectangular vessel basin paired with a tall brass mixer tap." },
        { number: "06.", title: "Warm Styling", description: "Greenery, stone-effect vessels and folded towels adding softness to the stone room." },
      ],
      galleryPlates: {
        plate1: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-001 • VANITY VIEW" },
        plate2: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-002 • MIRROR & BRASS" },
        plate3: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-003 • SHOWER COLUMN" },
        plate4: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-004 • MARBLE WALLS" },
        plate5: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-005 • WALNUT DRAWERS" },
        plate6: { image: "/0d380b5ba19b71024d9a24b393f9ee0fa425c02e.png", caption: "MVB-006 • WET ZONE" },
      },
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
      avatar: "/avatars/avatar-1.jpg",
      image: "/image38.png",
    },
    {
      id: 2,
      name: "Ananya Patel",
      company: "ARTISAN CAFE",
      rating: 4,
      quote:
        "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
      avatar: "/avatars/avatar-2.jpg",
      image: "/image38.png",
    },
    {
      id: 3,
      name: "Vikram Mehra",
      company: "BREW HOUSE",
      rating: 4,
      quote:
        "Good team to work with. They understood our vision and delivered a café space that our customers genuinely love. Minor delays but overall satisfied.",
      avatar: "/avatars/avatar-3.jpg",
      image: "/image38.png",
    },
    {
      id: 4,
      name: "Priya Singh",
      company: "THE GOLD ROOM",
      rating: 5,
      quote:
        "Outset Studio transformed our jewellery showroom into a luxury experience. The display design and lighting work was exceptional. Highly recommend them.",
      avatar: "/avatars/avatar-4.jpg",
      image: "/image38.png",
    },
    {
      id: 5,
      name: "Amit Sharma",
      company: "SPICE ROUTE KITCHEN",
      rating: 3,
      quote:
        "Decent work on our restaurant interiors. The design was good but execution took longer than expected. Communication could be better during the project.",
      avatar: "/avatars/avatar-5.jpg",
      image: "/image38.png",
    },
    {
      id: 6,
      name: "Neha Kapoor",
      company: "BLOOM SALON",
      rating: 4,
      quote:
        "Our salon looks absolutely stunning now. The team was professional and creative. Only feedback would be faster turnaround on revision requests.",
      avatar: "/avatars/avatar-6.jpg",
      image: "/image38.png",
    },
    {
      id: 7,
      name: "Rajesh Gupta",
      company: "TECH FORWARD OFFICE",
      rating: 5,
      quote:
        "Exceptional workspace design. Our team productivity and client impressions have improved significantly since moving into the new office designed by Outset Studio.",
      avatar: "/avatars/avatar-7.jpg",
      image: "/image38.png",
    },
    {
      id: 8,
      name: "Sonia Verma",
      company: "SAFFRON RESTAURANT",
      rating: 4,
      quote:
        "Beautiful restaurant design that perfectly captures our brand essence. The team was responsive and delivered quality work within budget.",
      avatar: "/avatars/avatar-8.jpg",
      image: "/image38.png",
    },
    {
      id: 9,
      name: "Karan Bajaj",
      company: "FITZONE GYM",
      rating: 3,
      quote:
        "The gym design is functional and looks good. However, some equipment placement decisions could have been better discussed beforehand. Acceptable overall.",
      avatar: "/avatars/avatar-9.jpg",
      image: "/image38.png",
    },
    {
      id: 10,
      name: "Meera Reddy",
      company: "THE BOOK CAFÉ",
      rating: 5,
      quote:
        "Our book café has become the most Instagrammed spot in the city thanks to Outset Studio. Their understanding of ambiance and customer flow is unmatched.",
      avatar: "/avatars/avatar-10.jpg",
      image: "/image38.png",
    },
    {
      id: 11,
      name: "Arjun Nair",
      company: "PHARMA PLUS",
      rating: 4,
      quote:
        "Clean, professional pharmacy design. The storage solutions and customer flow were well planned. Good experience working with the team.",
      avatar: "/avatars/avatar-11.jpg",
      image: "/image38.png",
    },
    {
      id: 12,
      name: "Deepika Joshi",
      company: "Wellness Spa",
      rating: 4,
      quote:
        "The spa interior design perfectly balances luxury and tranquility. Our clients constantly compliment the space. Slightly over budget but worth it.",
      avatar: "/avatars/avatar-12.jpg",
      image: "/image38.png",
    },
    {
      id: 13,
      name: "Mohit Aggarwal",
      company: "URBAN EATS",
      rating: 3,
      quote:
        "Standard QSR design, nothing extraordinary but gets the job done. The team was easy to work with though. Would consider for basic projects.",
      avatar: "/avatars/avatar-13.jpg",
      image: "/image38.png",
    },
    {
      id: 14,
      name: "Pooja Saxena",
      company: "LUXE BOUTIQUE",
      rating: 5,
      quote:
        "Outset Studio understood our high-end retail vision from day one. The boutique design is sophisticated and our sales have increased since the redesign.",
      avatar: "/avatars/avatar-14.jpg",
      image: "/image38.png",
    },
    {
      id: 15,
      name: "Sanjay Mishra",
      company: "CORPORATE HUB",
      rating: 4,
      quote:
        "Professional office interiors with great attention to detail. The project management was solid. Minor scheduling issues but handled well.",
      avatar: "/avatars/avatar-15.jpg",
      image: "/image38.png",
    },
    {
      id: 16,
      name: "Kavita Sharma",
      company: "GREEN LEAF CAFÉ",
      rating: 4,
      quote:
        "Love how our café turned out. The natural materials and warm lighting create exactly the vibe we wanted. Great team to collaborate with.",
      avatar: "/avatars/avatar-16.jpg",
      image: "/image38.png",
    },
    {
      id: 17,
      name: "Rohit Verma",
      company: "PIZZA CORNER",
      rating: 3,
      quote:
        "Functional design for our pizza outlet. The kitchen layout works well but the dining area could have been more creative. Acceptable for the price point.",
      avatar: "/avatars/avatar-17.jpg",
      image: "/image38.png",
    },
    {
      id: 18,
      name: "Shruti Gupta",
      company: "HAIR STUDIO",
      rating: 5,
      quote:
        "Our hair studio looks absolutely fantastic. The lighting design for the styling stations was genius. Clients love the modern yet cozy atmosphere.",
      avatar: "/avatars/avatar-18.jpg",
      image: "/image38.png",
    },
    {
      id: 19,
      name: "Anil Kumar",
      company: "MEDICAL CENTER",
      rating: 4,
      quote:
        "Clean, functional medical center design. The patient flow and waiting area design were well thought out. Professional team with good execution.",
      avatar: "/avatars/avatar-19.jpg",
      image: "/image38.png",
    },
    {
      id: 20,
      name: "Tanvi Malhotra",
      company: "THE GREEN ROOM",
      rating: 4,
      quote:
        "Beautiful co-working space design. The team captured our brand's modern aesthetic perfectly. Some minor finish issues but overall very happy.",
      avatar: "/avatars/avatar-20.jpg",
      image: "/image38.png",
    },
    {
      id: 21,
      name: "Vishal Chauhan",
      company: "STEAK HOUSE",
      rating: 3,
      quote:
        "Good restaurant design with nice ambiance. The bar area turned out great. Dining section could use more character but overall a decent project.",
      avatar: "/avatars/avatar-21.jpg",
      image: "/image38.png",
    },
    {
      id: 22,
      name: "Preeti Singh",
      company: "YOGA STUDIO",
      rating: 5,
      quote:
        "Outset Studio created a serene, beautiful yoga studio that perfectly embodies our philosophy. The natural light and material choices are spot on.",
      avatar: "/avatars/avatar-22.jpg",
      image: "/image38.png",
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
    email: "info@outsetstudio.in",
    phone: "9958544930",
  },
  quickLinks: [
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Our Work", href: "#our-work" },
    { name: "Process", href: "#process" },
    { name: "Industries", href: "/industries" },
  ],
  services: ["Outlet", "Build", "Growth", "Scale"],
  copyright: "© 2024 Outset Studio. All rights reserved.",
  legalLinks: [
    { name: "Terms and conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};
