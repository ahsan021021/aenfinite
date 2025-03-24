/** @type {import('next').NextConfig} */
const nextConfig = {
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Remove trailing slashes from URLs
  trailingSlash: false,
  // Generate static pages at build time
  generateStaticParams: async () => {
    return [];
  },
};

module.exports = nextConfig;