import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      }],
    domains: ['picsum.photos'],  
    },
    eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
