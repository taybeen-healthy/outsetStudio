import { notFound } from "next/navigation";
import { ourWorkData } from "@/lib/data";
import ProjectDetailClient from "./ProjectDetailClient";

export function generateStaticParams() {
  return ourWorkData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = ourWorkData.projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found | Outset Studio" };
  }

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

  if (projectIndex === -1) {
    notFound();
  }

  const project = ourWorkData.projects[projectIndex];
  const nextProject = ourWorkData.projects[(projectIndex + 1) % ourWorkData.projects.length];

  return <ProjectDetailClient project={project} nextProject={nextProject} />;
}
