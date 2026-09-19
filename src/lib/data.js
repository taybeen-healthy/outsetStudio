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
      label: "GET IN TOUCH",
      href: "mailto:outsetstudio@gmail.com",
      variant: "primary",
    },
    {
      label: "START A PROJECT",
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
    {
      id: 7,
      slug: "luxury-jewellery-showroom",
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
      avatar: "/image1.jpg",
      image: "/image38.png",
    },
    {
      id: 2,
      name: "Ananya Patel",
      company: "ARTISAN CAFE",
      rating: 4,
      quote:
        "Working with Outset Studio was a game changer for our outlet launch. Their attention to detail and commercial focus set them apart from traditional studios.",
      avatar: "/image2.jpg",
      image: "/image38.png",
    },
    {
      id: 3,
      name: "Vikram Mehra",
      company: "BREW HOUSE",
      rating: 4,
      quote:
        "Good team to work with. They understood our vision and delivered a café space that our customers genuinely love. Minor delays but overall satisfied.",
      avatar: "/image3.jpg",
      image: "/image38.png",
    },
    {
      id: 4,
      name: "Priya Singh",
      company: "THE GOLD ROOM",
      rating: 5,
      quote:
        "Outset Studio transformed our jewellery showroom into a luxury experience. The display design and lighting work was exceptional. Highly recommend them.",
      avatar: "/image4.jpg",
      image: "/image38.png",
    },
    {
      id: 5,
      name: "Amit郭",
      company: "SPICE ROUTE KITCHEN",
      rating: 3,
      quote:
        "Decent work on our restaurant interiors. The design was good but execution took longer than expected. Communication could be better during the project.",
      avatar: "/image5.jpg",
      image: "/image38.png",
    },
    {
      id: 6,
      name: "Neha Kapoor",
      company: "BLOOM SALON",
      rating: 4,
      quote:
        "Our salon looks absolutely stunning now. The team was professional and creative. Only feedback would be faster turnaround on revision requests.",
      avatar: "/image6.jpg",
      image: "/image38.png",
    },
    {
      id: 7,
      name: "Rajesh Gupta",
      company: "TECH FORWARD OFFICE",
      rating: 5,
      quote:
        "Exceptional workspace design. Our team productivity and client impressions have improved significantly since moving into the new office designed by Outset Studio.",
      avatar: "/image7.jpg",
      image: "/image38.png",
    },
    {
      id: 8,
      name: "Sonia Verma",
      company: "SAFFRON RESTAURANT",
      rating: 4,
      quote:
        "Beautiful restaurant design that perfectly captures our brand essence. The team was responsive and delivered quality work within budget.",
      avatar: "/image8.jpg",
      image: "/image38.png",
    },
    {
      id: 9,
      name: "Karan Bajaj",
      company: "FITZONE GYM",
      rating: 3,
      quote:
        "The gym design is functional and looks good. However, some equipment placement decisions could have been better discussed beforehand. Acceptable overall.",
      avatar: "/image9.jpg",
      image: "/image38.png",
    },
    {
      id: 10,
      name: "Meera Reddy",
      company: "THE BOOK CAFÉ",
      rating: 5,
      quote:
        "Our book café has become the most Instagrammed spot in the city thanks to Outset Studio. Their understanding of ambiance and customer flow is unmatched.",
      avatar: "/image10.jpg",
      image: "/image38.png",
    },
    {
      id: 11,
      name: "Arjun Nair",
      company: "PHARMA PLUS",
      rating: 4,
      quote:
        "Clean, professional pharmacy design. The storage solutions and customer flow were well planned. Good experience working with the team.",
      avatar: "/image11.jpg",
      image: "/image38.png",
    },
    {
      id: 12,
      name: "Deepika Joshi",
      company: "Wellness Spa",
      rating: 4,
      quote:
        "The spa interior design perfectly balances luxury and tranquility. Our clients constantly compliment the space. Slightly over budget but worth it.",
      avatar: "/image12.jpg",
      image: "/image38.png",
    },
    {
      id: 13,
      name: "Mohit Aggarwal",
      company: "URBAN EATS",
      rating: 3,
      quote:
        "Standard QSR design, nothing extraordinary but gets the job done. The team was easy to work with though. Would consider for basic projects.",
      avatar: "/image13.jpg",
      image: "/image38.png",
    },
    {
      id: 14,
      name: "Pooja Saxena",
      company: "LUXE BOUTIQUE",
      rating: 5,
      quote:
        "Outset Studio understood our high-end retail vision from day one. The boutique design is sophisticated and our sales have increased since the redesign.",
      avatar: "/image14.jpg",
      image: "/image38.png",
    },
    {
      id: 15,
      name: "Sanjay Mishra",
      company: "CORPORATE HUB",
      rating: 4,
      quote:
        "Professional office interiors with great attention to detail. The project management was solid. Minor scheduling issues but handled well.",
      avatar: "/image15.png",
      image: "/image38.png",
    },
    {
      id: 16,
      name: "Kavita Sharma",
      company: "GREEN LEAF CAFÉ",
      rating: 4,
      quote:
        "Love how our café turned out. The natural materials and warm lighting create exactly the vibe we wanted. Great team to collaborate with.",
      avatar: "/image16.png",
      image: "/image38.png",
    },
    {
      id: 17,
      name: "Rohit Verma",
      company: "PIZZA CORNER",
      rating: 3,
      quote:
        "Functional design for our pizza outlet. The kitchen layout works well but the dining area could have been more creative. Acceptable for the price point.",
      avatar: "/image17.png",
      image: "/image38.png",
    },
    {
      id: 18,
      name: "Shruti Gupta",
      company: "HAIR STUDIO",
      rating: 5,
      quote:
        "Our hair studio looks absolutely fantastic. The lighting design for the styling stations was genius. Clients love the modern yet cozy atmosphere.",
      avatar: "/image18.png",
      image: "/image38.png",
    },
    {
      id: 19,
      name: "Anil Kumar",
      company: "MEDICAL CENTER",
      rating: 4,
      quote:
        "Clean, functional medical center design. The patient flow and waiting area design were well thought out. Professional team with good execution.",
      avatar: "/image19.png",
      image: "/image38.png",
    },
    {
      id: 20,
      name: "Tanvi Malhotra",
      company: "THE GREEN ROOM",
      rating: 4,
      quote:
        "Beautiful co-working space design. The team captured our brand's modern aesthetic perfectly. Some minor finish issues but overall very happy.",
      avatar: "/image20.png",
      image: "/image38.png",
    },
    {
      id: 21,
      name: "Vishal Chauhan",
      company: "STEAK HOUSE",
      rating: 3,
      quote:
        "Good restaurant design with nice ambiance. The bar area turned out great. Dining section could use more character but overall a decent project.",
      avatar: "/image21.png",
      image: "/image38.png",
    },
    {
      id: 22,
      name: "Preeti Singh",
      company: "YOGA STUDIO",
      rating: 5,
      quote:
        "Outset Studio created a serene, beautiful yoga studio that perfectly embodies our philosophy. The natural light and material choices are spot on.",
      avatar: "/image22.png",
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
    { name: "Industries", href: "/industries" },
  ],
  services: ["Outlet", "Build", "Growth", "Scale"],
  copyright: "© 2024 Outset Studio. All rights reserved.",
  legalLinks: [
    { name: "Terms and conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};
