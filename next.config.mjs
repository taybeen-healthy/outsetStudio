/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
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
