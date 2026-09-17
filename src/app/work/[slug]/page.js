import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ourWorkData } from "@/lib/data";

export function generateStaticParams() {
  return ourWorkData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = ourWorkData.projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Outset Studio" };
  return {
    title: `${project.title} | Outset Studio`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} - Architectural Case Study | Outset Studio`,
      description: project.subtitle,
      url: `https://outsetstudio.com/work/${project.slug}`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const projectIndex = ourWorkData.projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = ourWorkData.projects[projectIndex];
  const nextProject = ourWorkData.projects[(projectIndex + 1) % ourWorkData.projects.length];

  return (
    <div className="relative w-full bg-[#FAF7F2] text-[#1a1a1a] min-h-screen font-sans select-none overflow-x-hidden">
      {/* Header */}
      <div className="lg:hidden">
        <Navbar />
      </div>
      <div className="hidden lg:flex items-center justify-between py-5 sm:py-6 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 flex items-center justify-between w-full">
          <Link href="/#our-work" className="flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-700 hover:text-[#1a1a1a] transition-colors cursor-pointer whitespace-nowrap">
            <span>&larr;</span>
            <span>BACK TO PROJECTS</span>
          </Link>
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-700 whitespace-nowrap">{project.specs.location}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-6 sm:pt-12 pb-20">
        {/* Title */}
        <div className="mb-5 sm:mb-8 animate-slide-up animate-slide-up-delay-1">
          <h1 className="font-serif text-[32px] sm:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.08] tracking-tight">
            <span>{project.titleRoman} </span>
            <span className="italic text-[#2C2623]">{project.titleItalic}</span>
          </h1>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-neutral-100 animate-slide-up animate-slide-up-delay-2">
          <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" />
        </div>

        {/* Specs Bar */}
        <div className="grid grid-cols-2 border-t border-b border-neutral-200/80 my-6 sm:my-10 py-5 sm:py-6 gap-y-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 animate-slide-up animate-slide-up-delay-3">
          <div className="pt-2 sm:pt-0 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">PROJECT</span>
            <span className="block font-sans text-[13px] font-semibold text-[#1a1a1a]">{project.specs.projectName}</span>
          </div>
          <div className="pt-2 sm:pt-0 pl-0 sm:pl-6 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">TYPE</span>
            <span className="block font-sans text-[13px] font-semibold text-[#1a1a1a]">{project.specs.type}</span>
          </div>
          <div className="pt-5 sm:pt-0 pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">LOCATION</span>
            <span className="block font-sans text-[13px] font-semibold text-[#1a1a1a]">{project.specs.location}</span>
          </div>
          <div className="pt-5 sm:pt-0 pl-0 sm:pl-6">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">SCOPE</span>
            <span className="block font-sans text-[13px] font-semibold text-[#1a1a1a]">{project.specs.scope}</span>
          </div>
        </div>

        {/* Concept Section */}
        <section className="bg-neutral-100/60 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-10 sm:py-14 mb-12 sm:mb-16 animate-slide-up animate-slide-up-delay-4">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#C2592D]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C2592D]">CONCEPT</span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-4xl lg:text-[42px] font-normal text-[#1a1a1a] leading-tight mb-4">{project.concept.title}</h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-neutral-600 leading-[1.75]">{project.concept.description}</p>
        </section>

        {/* Key Design Elements */}
        <section className="bg-neutral-100/60 -mx-4 sm:-mx-8 lg:-mx-12 px-4 sm:px-8 lg:px-12 py-10 sm:py-14 mb-12 sm:mb-16 animate-slide-up animate-slide-up-delay-5">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-10">
            <h2 className="font-serif text-[22px] sm:text-3xl text-[#1a1a1a] font-normal">Key Design Elements</h2>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">MATERIALITY &amp; ARCHITECTURAL LANGUAGE</span>
          </div>

          <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {/* Material & Texture */}
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                <Image src={project.keyElements.material.image} alt={project.keyElements.material.title} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
              </div>
              <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{project.keyElements.material.subtitle}</span>
              <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{project.keyElements.material.title}</h3>
              <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{project.keyElements.material.description}</p>
            </div>

            {/* Colour Palette */}
            <div>
              <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{project.keyElements.palette.subtitle}</span>
              <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-5">{project.keyElements.palette.title}</h3>
              <div className="space-y-4">
                {project.keyElements.palette.swatches.map((swatch, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-neutral-200/60 flex-shrink-0" style={{ backgroundColor: swatch.bg }} />
                    <div>
                      <span className="block font-sans text-[11px] font-semibold tracking-wider text-neutral-800 uppercase">{swatch.name}</span>
                      <span className="block font-mono text-[10px] text-[#C2592D]">{swatch.hex}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 mt-6 border-t border-neutral-200/80">
                <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium">{project.keyElements.palette.bottomTag}</span>
              </div>
            </div>

            {/* Lighting */}
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                <Image src={project.keyElements.lighting.image} alt={project.keyElements.lighting.title} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
              </div>
              <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{project.keyElements.lighting.subtitle}</span>
              <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{project.keyElements.lighting.title}</h3>
              <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{project.keyElements.lighting.description}</p>
            </div>

            {/* Furniture & Detailing */}
            <div>
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                <Image src={project.keyElements.furniture.image} alt={project.keyElements.furniture.title} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
              </div>
              <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{project.keyElements.furniture.subtitle}</span>
              <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{project.keyElements.furniture.title}</h3>
              <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{project.keyElements.furniture.description}</p>
            </div>
          </div>
        </section>

        {/* Spatial Experience */}
        <section className="py-10 sm:py-14 mb-12 sm:mb-16 animate-slide-up animate-slide-up-delay-6">
          <h2 className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C2592D] font-semibold mb-6 sm:mb-10">SPATIAL EXPERIENCE</h2>
          <div className="space-y-4 sm:space-y-6">
            {project.spatialExperience.map((exp, eIdx) => (
              <div key={eIdx} className="bg-neutral-100/60 p-6 sm:p-8">
                <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.16em] text-[#C2592D] font-medium mb-2 block">{exp.number}</span>
                <h3 className="font-serif text-[20px] sm:text-2xl text-[#1a1a1a] font-normal mb-2">{exp.title}</h3>
                <p className="font-sans text-[13px] sm:text-[14px] text-neutral-600 leading-[1.7]">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Gallery Plates */}
        <section className="py-10 sm:py-14 animate-slide-up animate-slide-up-delay-7">
          <div className="flex items-baseline justify-between gap-2 mb-6 sm:mb-10">
            <h2 className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C2592D] font-semibold">CURATED GALLERY PLATES</h2>
            <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-medium">07 PLATES</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[project.galleryPlates.plate1, project.galleryPlates.plate2, project.galleryPlates.plate3, project.galleryPlates.plate4, project.galleryPlates.plate5, project.galleryPlates.plate6].map((plate, idx) => (
              <div key={idx} className="bg-white border border-neutral-200/70 overflow-hidden">
                <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                  <Image src={plate.image} alt={plate.caption} fill sizes="(max-width: 640px) 50vw, 400px" className="object-cover object-center" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-10 sm:pt-14 mt-12 sm:mt-16 border-t border-neutral-200/80 flex items-center justify-between font-sans text-[11px] tracking-[0.16em] uppercase font-medium">
          <Link href="/#our-work" className="text-neutral-700 hover:text-[#1a1a1a] transition-colors cursor-pointer inline-flex items-center gap-2">
            <span>&larr;</span>
            <span>INDEX OF ALL</span>
          </Link>
          <Link href={`/work/${nextProject.slug}`} className="text-[#C2592D] hover:opacity-80 transition-opacity cursor-pointer font-semibold inline-flex items-center gap-2">
            <span>NEXT: {nextProject.title} &rarr;</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
