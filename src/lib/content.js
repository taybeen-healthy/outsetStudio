import { ourWorkData, testimonialsData, industriesData } from "@/lib/data";

const BACKEND = process.env.BACKEND_URL || "http://127.0.0.1:3005";

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
  const local = ourWorkData.projects;
  let remote = null;
  try {
    const res = await fetch(`${BACKEND}/api/projects`, { next: { revalidate: 60 } });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) remote = data;
    }
  } catch {
    remote = null;
  }
  if (!remote) return local;

  const remoteBySlug = new Map(remote.map((p) => [p.slug, p]));
  const localSlugs = new Set(local.map((p) => p.slug));
  const merged = local.map((p) =>
    remoteBySlug.has(p.slug) ? { ...p, ...remoteBySlug.get(p.slug) } : p
  );
  const remoteOnly = remote.filter((p) => !localSlugs.has(p.slug));
  return [...merged, ...remoteOnly];
}

export async function getApprovedTestimonials() {
  const list = await fetchList("/api/testimonials", testimonialsData.testimonials);
  const EXTRA_AVATARS = {
    "tanya sharma": "/image33.png",
    "karan mehta": "/image34.png",
    "rohan malhotra": "/image30.png",
  };
  const tones = ["blush", "sage", "clay", "sand", "slate"];
  const usedTones = new Set();
  let toneCursor = 0;
  return list.map((t) => {
    const hasAvatar = isImageSrc(t.avatar);
    const name = String(t.name ?? "").trim();
    const assigned = EXTRA_AVATARS[name.toLowerCase()] ?? null;
    let avatar = hasAvatar ? t.avatar : assigned;
    let tone = null;
    if (!avatar) {
      const original = typeof t.avatar === "string" && t.avatar && !t.avatar.startsWith("/") ? t.avatar : null;
      if (original && !usedTones.has(original)) {
        tone = original;
      } else {
        while (usedTones.has(tones[toneCursor % tones.length])) toneCursor += 1;
        tone = tones[toneCursor % tones.length];
        toneCursor += 1;
      }
      usedTones.add(tone);
    }
    const derived = name.split(/\s+/).map((w) => w[0] ?? "").join("").slice(0, 2).toUpperCase();
    return {
      ...t,
      rating: Math.min(5, Math.max(1, Math.round(Number(t.rating) || 5))),
      avatar,
      tone,
      initials: (String(t.initials ?? "").trim() || derived || "OS"),
      image: isImageSrc(t.image) ? t.image : "/image38.png",
    };
  });
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
