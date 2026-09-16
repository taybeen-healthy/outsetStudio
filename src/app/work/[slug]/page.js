import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import { ourWorkData } from "@/lib/data";

export async function generateStaticParams() {
  return ourWorkData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = ourWorkData.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found | Outset Studio",
    };
  }

  return {
    title: `${project.title} | Outset Studio`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} - Architectural Case Study | Outset Studio`,
      description: project.subtitle,
      url: `https://outsetstudio.com/work/${project.slug}`,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const projectIndex = ourWorkData.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = ourWorkData.projects[projectIndex];
  const nextProject = ourWorkData.projects[(projectIndex + 1) % ourWorkData.projects.length];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#1a1a1a] min-h-screen font-sans select-none overflow-x-hidden">
      {/* Top Bar */}
      <header className="w-full border-b border-neutral-200/80 bg-[#FAF7F2] sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-14 flex items-center justify-between">
          <Link
            href="/#our-work"
            className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-600 hover:text-[#1a1a1a] transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>BACK TO PROJECTS</span>
          </Link>

          <span className="font-sans text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-500">
            {project.location}
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-8 sm:pt-12 pb-20">
        {/* Project Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.08] tracking-tight">
            <span>{project.titleRoman} </span>
            <span className="italic text-[#2C2623]">{project.titleItalic}</span>
          </h1>
        </div>

        {/* Hero Feature Image */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-neutral-100 shadow-sm border border-neutral-200/50">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
          />
        </div>

        {/* 4-Column Specs Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-neutral-200/80 my-8 sm:my-10 py-5 sm:py-6 gap-y-4 md:gap-y-0 divide-y md:divide-y-0 md:divide-x divide-neutral-200/80">
          <div className="pt-2 md:pt-0 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
              PROJECT NAME
            </span>
            <span className="block font-sans text-xs sm:text-[13px] font-semibold tracking-wider text-[#1a1a1a] mt-1.5 uppercase">
              {project.specs.projectName}
            </span>
          </div>

          <div className="pt-2 md:pt-0 pl-0 md:pl-6 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
              TYPE
            </span>
            <span className="block font-sans text-xs sm:text-[13px] font-semibold tracking-wider text-[#1a1a1a] mt-1.5 uppercase">
              {project.specs.type}
            </span>
          </div>

          <div className="pt-2 md:pt-0 pl-0 md:pl-6 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
              LOCATION
            </span>
            <span className="block font-sans text-xs sm:text-[13px] font-semibold tracking-wider text-[#1a1a1a] mt-1.5 uppercase">
              {project.specs.location}
            </span>
          </div>

          <div className="pt-2 md:pt-0 pl-0 md:pl-6">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium">
              SCOPE
            </span>
            <span className="block font-sans text-xs sm:text-[13px] font-semibold tracking-wider text-[#1a1a1a] mt-1.5 uppercase">
              {project.specs.scope}
            </span>
          </div>
        </div>

        {/* Concept Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 lg:gap-16 pt-10 sm:pt-14 pb-16 sm:pb-20 border-b border-neutral-200/60">
          <div className="md:col-span-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C2592D] block mb-2">
              CONCEPT
            </span>
            <div className="w-10 h-[1.5px] bg-[#C2592D]" />
          </div>

          <div className="md:col-span-9">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1a1a1a] leading-tight mb-5">
              {project.concept.title}
            </h2>
            <p className="font-sans text-sm sm:text-[15px] text-neutral-600 leading-relaxed max-w-3xl">
              {project.concept.description}
            </p>
          </div>
        </section>

        {/* Key Design Elements Section */}
        <section className="py-14 sm:py-20 border-b border-neutral-200/60">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-normal">
              Key Design Elements
            </h2>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
              MATERIALITY &amp; ARCHITECTURAL LANGUAGE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Material & Texture */}
            <div className="bg-white border border-neutral-200/70 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={project.keyElements.material.image}
                    alt={project.keyElements.material.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">
                  {project.keyElements.material.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">
                  {project.keyElements.material.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed mt-2">
                {project.keyElements.material.description}
              </p>
            </div>

            {/* Card 2: Colour Palette */}
            <div className="bg-white border border-neutral-200/70 shadow-sm p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">
                  {project.keyElements.palette.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-5">
                  {project.keyElements.palette.title}
                </h3>

                <div className="space-y-3">
                  {project.keyElements.palette.swatches.map((swatch, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-none border border-neutral-200/60 flex-shrink-0"
                        style={{ backgroundColor: swatch.bg }}
                      />
                      <div>
                        <span className="block font-sans text-[10px] font-semibold tracking-wider text-neutral-800 uppercase">
                          {swatch.name}
                        </span>
                        <span className="block font-mono text-[9px] text-neutral-400">
                          {swatch.hex}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-100">
                <span className="font-sans text-[9px] tracking-[0.18em] uppercase text-neutral-400 font-medium">
                  {project.keyElements.palette.bottomTag}
                </span>
              </div>
            </div>

            {/* Card 3: Lighting */}
            <div className="bg-white border border-neutral-200/70 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={project.keyElements.lighting.image}
                    alt={project.keyElements.lighting.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">
                  {project.keyElements.lighting.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">
                  {project.keyElements.lighting.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed mt-2">
                {project.keyElements.lighting.description}
              </p>
            </div>

            {/* Card 4: Furniture & Detailing */}
            <div className="bg-white border border-neutral-200/70 shadow-sm p-4 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100 mb-4">
                  <Image
                    src={project.keyElements.furniture.image}
                    alt={project.keyElements.furniture.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover object-center"
                  />
                </div>
                <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">
                  {project.keyElements.furniture.subtitle}
                </span>
                <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">
                  {project.keyElements.furniture.title}
                </h3>
              </div>
              <p className="font-sans text-xs text-neutral-500 leading-relaxed mt-2">
                {project.keyElements.furniture.description}
              </p>
            </div>
          </div>
        </section>

        {/* Spatial Experience Section */}
        <section className="py-14 sm:py-20 border-b border-neutral-200/60">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-normal">
              Spatial Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {project.spatialExperience.map((exp, eIdx) => (
              <div
                key={eIdx}
                className="bg-white border border-neutral-200/70 shadow-sm p-7 sm:p-8 flex flex-col"
              >
                <span className="font-serif text-2xl text-[#C2592D] font-normal mb-3">
                  {exp.number}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-normal mb-3">
                  {exp.title}
                </h3>
                <p className="font-sans text-xs sm:text-[13px] text-neutral-600 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Gallery Plates Section */}
        <section className="py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-normal">
              Curated Gallery Plates
            </h2>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-medium">
              ARCHITECTURAL DOCUMENTATION (7 PLATES)
            </span>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Plate 1: Big Full-width image */}
            <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-neutral-100">
                <Image
                  src={project.galleryPlates.plate1.image}
                  alt={project.galleryPlates.plate1.caption}
                  fill
                  sizes="(max-width: 1280px) 100vw, 1280px"
                  className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                />
              </div>
              <div className="pt-3 flex items-center justify-between font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600">
                <span>{project.galleryPlates.plate1.index}</span>
                <span>{project.galleryPlates.plate1.caption}</span>
              </div>
            </div>

            {/* Plates 2 & 3: Two 50/50 columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.galleryPlates.plate2.image}
                    alt={project.galleryPlates.plate2.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600">
                  <span>{project.galleryPlates.plate2.index}</span>
                  <span>{project.galleryPlates.plate2.caption}</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.galleryPlates.plate3.image}
                    alt={project.galleryPlates.plate3.caption}
                    fill
                    sizes="(max-width: 768px) 100vw, 600px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600">
                  <span>{project.galleryPlates.plate3.index}</span>
                  <span>{project.galleryPlates.plate3.caption}</span>
                </div>
              </div>
            </div>

            {/* Plates 4, 5 & 6: Three 33/33/33 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.galleryPlates.plate4.image}
                    alt={project.galleryPlates.plate4.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600 text-center">
                  <span>{project.galleryPlates.plate4.caption}</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.galleryPlates.plate5.image}
                    alt={project.galleryPlates.plate5.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600 text-center">
                  <span>{project.galleryPlates.plate5.caption}</span>
                </div>
              </div>

              <div className="bg-white border border-neutral-200/70 p-3 sm:p-4 shadow-sm">
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-100">
                  <Image
                    src={project.galleryPlates.plate6.image}
                    alt={project.galleryPlates.plate6.caption}
                    fill
                    sizes="(max-width: 640px) 100vw, 400px"
                    className="object-cover object-center hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                <div className="pt-3 font-sans text-[10px] tracking-[0.16em] uppercase text-neutral-600 text-center">
                  <span>{project.galleryPlates.plate6.caption}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Navigation Bar */}
        <div className="pt-12 sm:pt-16 pb-4 border-t border-neutral-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-sans text-xs tracking-[0.2em] uppercase font-medium">
          <Link
            href="/#our-work"
            className="text-neutral-700 hover:text-[#1a1a1a] transition-colors cursor-pointer inline-flex items-center gap-2"
          >
            <span>←</span>
            <span>INDEX OF ALL COMMISSIONS</span>
          </Link>

          <Link
            href={`/work/${nextProject.slug}`}
            className="text-[#C2592D] hover:opacity-80 transition-opacity cursor-pointer font-semibold inline-flex items-center gap-2"
          >
            <span>NEXT PROJECT →</span>
            <span>{nextProject.title}, {nextProject.location}</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
