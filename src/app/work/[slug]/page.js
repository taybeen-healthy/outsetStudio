import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getPortfolioProjects } from "@/lib/content";

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getPortfolioProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const projects = await getPortfolioProjects();
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found | Outset Studio" };
  return {
    title: `${project.title || "Project"} | Outset Studio`,
    description: project.subtitle || "Architectural case study by Outset Studio",
    openGraph: {
      title: `${project.title || "Project"} - Architectural Case Study | Outset Studio`,
      description: project.subtitle || "Architectural case study by Outset Studio",
      url: `https://outsetstudio.in/work/${project.slug}`,
      images: project.image ? [{ url: project.image, width: 1200, height: 630, alt: project.title || "Outset Studio" }] : [],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const projects = await getPortfolioProjects();
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const currentCategories = (project.categories ?? []).map((c) => String(c).toUpperCase());
  const sameCategory = projects.filter(
    (p) =>
      p.slug !== project.slug &&
      (p.categories ?? []).some((c) => currentCategories.includes(String(c).toUpperCase()))
  );
  let nextProject;
  if (sameCategory.length > 0) {
    const afterCurrent = projects
      .slice(projectIndex + 1)
      .find((p) => sameCategory.some((s) => s.slug === p.slug));
    nextProject = afterCurrent ?? sameCategory[0];
  } else {
    nextProject = projects[(projectIndex + 1) % projects.length];
  }

  // Safe Fallback Helpers
  const titleParts = (project.title || "Project Space").trim().split(" ");
  const titleRoman = project.titleRoman || (titleParts.length > 1 ? titleParts.slice(0, -1).join(" ") : titleParts[0]);
  const titleItalic = project.titleItalic || (titleParts.length > 1 ? titleParts.slice(-1)[0] : "");

  const specs = {
    projectName: project.specs?.projectName || project.title || "PROJECT SPACE",
    type: project.specs?.type || project.type || "COMMERCIAL & INTERIOR",
    location: project.specs?.location || project.location || "DELHI NCR",
    scope: project.specs?.scope || "INTERIOR DESIGN & FIT-OUT",
  };

  const concept = {
    title: project.concept?.title || `Distinctive spatial architecture for ${project.title || "commercial outlets"}.`,
    description: project.concept?.description || project.subtitle || "Designed around intuitive layout planning, high quality material finishes, and precision spatial execution.",
  };

  const keyElements = project.keyElements || {};
  const hasKeyElements = Boolean(
    keyElements.material || keyElements.palette || keyElements.lighting || keyElements.furniture
  );

  const galleryPlatesList = [
    keyElements?.material?.image ? { image: keyElements.material.image, caption: "01 • MATERIAL" } : null,
    project.galleryPlates?.plate1,
    project.galleryPlates?.plate2,
    project.galleryPlates?.plate3,
    project.galleryPlates?.plate4,
    project.galleryPlates?.plate5,
    project.galleryPlates?.plate6,
  ].filter((plate) => plate && plate.image);

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
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-700 whitespace-nowrap">{specs.location}</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-14 pt-6 sm:pt-12 pb-20">
        {/* Title */}
        <div className="mb-5 sm:mb-8 animate-slide-up animate-slide-up-delay-1">
          <h1 className="font-serif text-[32px] sm:text-6xl lg:text-[72px] text-[#1a1a1a] font-normal leading-[1.08] tracking-tight">
            <span>{titleRoman} </span>
            {titleItalic && <span className="italic text-[#2C2623]">{titleItalic}</span>}
          </h1>
        </div>

        {/* Hero Image */}
        {project.image && (
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/10] overflow-hidden bg-neutral-100 animate-slide-up animate-slide-up-delay-2">
            <Image src={project.image} alt={project.title || "Project Image"} fill priority sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover object-center" />
          </div>
        )}

        {/* Specs Bar */}
        <div className="grid grid-cols-2 border-t border-b border-neutral-200/80 my-6 sm:my-10 py-5 sm:py-6 gap-y-5 divide-y sm:divide-y-0 sm:divide-x divide-neutral-200/80 animate-slide-up animate-slide-up-delay-3">
          <div className="pt-2 sm:pt-0 pr-3 sm:pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">PROJECT</span>
            <span className="block font-sans text-[11px] sm:text-[13px] font-semibold text-[#1a1a1a] leading-snug">{specs.projectName}</span>
          </div>
          <div className="pt-2 sm:pt-0 pl-3 sm:pl-6 pr-3 sm:pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">TYPE</span>
            <span className="block font-sans text-[11px] sm:text-[13px] font-semibold text-[#1a1a1a] leading-snug">{specs.type}</span>
          </div>
          <div className="pt-5 sm:pt-0 pr-3 sm:pr-4">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">LOCATION</span>
            <span className="block font-sans text-[11px] sm:text-[13px] font-semibold text-[#1a1a1a] leading-snug">{specs.location}</span>
          </div>
          <div className="pt-5 sm:pt-0 pl-3 sm:pl-6">
            <span className="block font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400 font-medium mb-1">SCOPE</span>
            <span className="block font-sans text-[11px] sm:text-[13px] font-semibold text-[#1a1a1a] leading-snug">{specs.scope}</span>
          </div>
        </div>

        {/* Concept Section */}
        <section className="bg-neutral-100/60 -mx-5 sm:-mx-10 lg:-mx-14 px-5 sm:px-10 lg:px-14 py-10 sm:py-14 mb-12 sm:mb-16 animate-slide-up animate-slide-up-delay-4">
          <div className="flex items-center gap-3 mb-5 sm:mb-6">
            <div className="w-8 h-[1.5px] bg-[#C2592D]" />
            <span className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase text-[#C2592D]">CONCEPT</span>
          </div>
          <h2 className="font-serif text-[26px] sm:text-4xl lg:text-[42px] font-normal text-[#1a1a1a] leading-tight mb-4">{concept.title}</h2>
          <p className="font-sans text-[14px] sm:text-[15px] text-neutral-600 leading-[1.75]">{concept.description}</p>
        </section>

        {/* Key Design Elements */}
        {hasKeyElements && (
          <section className="bg-neutral-100/60 -mx-5 sm:-mx-10 lg:-mx-14 px-5 sm:px-10 lg:px-14 py-10 sm:py-14 mb-12 sm:mb-16 animate-slide-up animate-slide-up-delay-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-8 sm:mb-10">
              <h2 className="font-serif text-[22px] sm:text-3xl text-[#1a1a1a] font-normal">Key Design Elements</h2>
              <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-500 font-medium">MATERIALITY &amp; ARCHITECTURAL LANGUAGE</span>
            </div>

            <div className="space-y-8 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
              {/* Material & Texture */}
              {keyElements.material && (
                <div>
                  {keyElements.material.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                      <Image src={keyElements.material.image} alt={keyElements.material.title || "Material"} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
                    </div>
                  )}
                  {keyElements.material.subtitle && (
                    <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{keyElements.material.subtitle}</span>
                  )}
                  {keyElements.material.title && (
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{keyElements.material.title}</h3>
                  )}
                  {keyElements.material.description && (
                    <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{keyElements.material.description}</p>
                  )}
                </div>
              )}

              {/* Colour Palette */}
              {keyElements.palette && (
                <div>
                  {keyElements.palette.subtitle && (
                    <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{keyElements.palette.subtitle}</span>
                  )}
                  {keyElements.palette.title && (
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-5">{keyElements.palette.title}</h3>
                  )}
                  {Array.isArray(keyElements.palette.swatches) && (
                    <div className="space-y-4">
                      {keyElements.palette.swatches.map((swatch, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-3">
                          <div className="w-10 h-10 border border-neutral-200/60 flex-shrink-0" style={{ backgroundColor: swatch.bg || swatch.hex }} />
                          <div>
                            <span className="block font-sans text-[11px] font-semibold tracking-wider text-neutral-800 uppercase">{swatch.name}</span>
                            <span className="block font-mono text-[10px] text-[#C2592D]">{swatch.hex}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {keyElements.palette.bottomTag && (
                    <div className="pt-4 mt-6 border-t border-neutral-200/80">
                      <span className="font-sans text-[10px] tracking-[0.18em] uppercase text-neutral-400 font-medium">{keyElements.palette.bottomTag}</span>
                    </div>
                  )}
                </div>
              )}

              {/* Lighting */}
              {keyElements.lighting && (
                <div>
                  {keyElements.lighting.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                      <Image src={keyElements.lighting.image} alt={keyElements.lighting.title || "Lighting"} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
                    </div>
                  )}
                  {keyElements.lighting.subtitle && (
                    <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{keyElements.lighting.subtitle}</span>
                  )}
                  {keyElements.lighting.title && (
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{keyElements.lighting.title}</h3>
                  )}
                  {keyElements.lighting.description && (
                    <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{keyElements.lighting.description}</p>
                  )}
                </div>
              )}

              {/* Furniture & Detailing */}
              {keyElements.furniture && (
                <div>
                  {keyElements.furniture.image && (
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-200 mb-4">
                      <Image src={keyElements.furniture.image} alt={keyElements.furniture.title || "Furniture"} fill sizes="(max-width: 640px) 100vw, 300px" className="object-cover object-center" />
                    </div>
                  )}
                  {keyElements.furniture.subtitle && (
                    <span className="block font-sans text-[10px] font-semibold tracking-[0.16em] uppercase text-[#C2592D] mb-1.5">{keyElements.furniture.subtitle}</span>
                  )}
                  {keyElements.furniture.title && (
                    <h3 className="font-serif text-xl text-[#1a1a1a] font-normal mb-2">{keyElements.furniture.title}</h3>
                  )}
                  {keyElements.furniture.description && (
                    <p className="font-sans text-[13px] text-neutral-500 leading-[1.65]">{keyElements.furniture.description}</p>
                  )}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Spatial Experience */}
        {Array.isArray(project.spatialExperience) && project.spatialExperience.length > 0 && (
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
        )}

        {/* Curated Gallery Plates */}
        {galleryPlatesList.length > 0 && (
          <section className="py-10 sm:py-14 animate-slide-up animate-slide-up-delay-7">
            <div className="flex items-baseline justify-between gap-2 mb-6 sm:mb-10">
              <h2 className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#C2592D] font-semibold">CURATED GALLERY PLATES</h2>
              <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-neutral-500 font-medium">{galleryPlatesList.length} PLATES</span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {galleryPlatesList.map((plate, idx) => (
                <div key={idx} className="bg-white border border-neutral-200/70 overflow-hidden">
                  <div className="relative w-full aspect-square overflow-hidden bg-neutral-100">
                    <Image src={plate.image} alt={plate.caption || "Gallery Plate"} fill sizes="(max-width: 640px) 50vw, 400px" className="object-cover object-center" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Navigation */}
        <div className="pt-10 sm:pt-14 mt-12 sm:mt-16 border-t border-neutral-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-sans text-[11px] tracking-[0.16em] uppercase font-medium">
          <Link href="/#our-work" className="text-neutral-700 hover:text-[#1a1a1a] transition-colors cursor-pointer inline-flex items-center gap-2">
            <span>←</span>
            <span>INDEX OF ALL</span>
          </Link>
          {nextProject && (
            <Link href={`/work/${nextProject.slug}`} className="text-[#C2592D] hover:opacity-80 transition-opacity cursor-pointer font-semibold inline-flex items-center gap-2 max-w-[60vw] sm:max-w-none">
              <span className="truncate">NEXT: {nextProject.title || "Next Project"}</span>
              <span className="flex-shrink-0">→</span>
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
