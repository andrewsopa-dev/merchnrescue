import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnp.sanmar.com',
      },
      {
        protocol: 'https',
        hostname: 'www.sanmar.com',
      },
      {
        protocol: 'https',
        hostname: 'sanmarsports.com',
      },
    ],
  },
};

export default nextConfig;
