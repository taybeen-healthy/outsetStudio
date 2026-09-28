import { ourWorkData, testimonialsData, industriesData } from "@/lib/data";

const BACKEND = process.env.BACKEND_URL || "http://127.0.0.1:3006";

async function fetchList(path, fallback) {
  try {
    const res = await fetch(`${BACKEND}${path}`, { next: { revalidate: 60 } });
    if (!res.ok) return fallback;
    const data = await res.json();
    return Array.isArray(data) && data.length > 0 ? data : fallback;
  } catch {
    return fallback;
  }
}

function isImageSrc(value) {
  return typeof value === "string" && (value.startsWith("/") || value.startsWith("http"));
}

export async function getPortfolioProjects() {
  return fetchList("/api/projects", ourWorkData.projects);
}

export async function getApprovedTestimonials() {
  const list = await fetchList("/api/testimonials", testimonialsData.testimonials);
  return list.map((t) => ({
    ...t,
    rating: Math.min(5, Math.max(1, Math.round(Number(t.rating) || 5))),
    avatar: isImageSrc(t.avatar) ? t.avatar : "/image1.jpg",
    image: isImageSrc(t.image) ? t.image : "/image38.png",
  }));
}

export async function getIndustries() {
  const list = await fetchList("/api/industries", industriesData.industries);
  return list.map((i) => ({
    id: i.id || String(i._id),
    name: i.name,
    description: i.description,
    image: i.image,
  }));
}
