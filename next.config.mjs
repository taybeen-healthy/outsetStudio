/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async rewrites() {
    const backend = process.env.BACKEND_URL || "http://127.0.0.1:3005";
    return [
      { source: "/api/contacts", destination: `${backend}/api/contacts` },
      { source: "/api/vendors", destination: `${backend}/api/vendors` },
      { source: "/api/reviews", destination: `${backend}/api/testimonials` },
    ];
  },
  async redirects() {
    return [
      {
        source: "/work",
        destination: "/our-work",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
