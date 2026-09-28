/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    const backend = process.env.BACKEND_URL || "http://127.0.0.1:3006";
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
