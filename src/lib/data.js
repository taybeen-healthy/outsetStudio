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
  { id: 1, value: "10+", label: "TOTAL VENDORS", highlight: true },
  { id: 2, value: "10+", label: "EXPERIENCED VENDORS", highlight: false },
  { id: 3, value: "15+", label: "TOTAL NUMBER OF PROJECTS", highlight: false },
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
  mainImage: "/image2.jpg",
  secondaryImage: "/image3.jpg",
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
  filters: ["ALL", "DELHI", "GURUGRAM", "PATNA BIHAR", "RAJASTHAN"],
  projects: [
    {
      id: 1,
      slug: "sardar-ji-baksh-cafe",
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
      image: "/image38.png",
    },
    {
      id: 2,
      name: "Ananya Patel",
      company: "ARTISAN CAFE",
      rating: 5,
      quote:
        "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
      avatar: "/image14.jpg",
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
    email: "outsetstudio@gmail.com",
    phone: "9958544930",
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
