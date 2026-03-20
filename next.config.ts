import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.sanmar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanmar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdnp.sanmar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'previews.us-east-1.widencdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'sanmarsports.com',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
