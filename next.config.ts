import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Add basePath for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  // Add trailingSlash for better compatibility
  trailingSlash: true,
};

export default nextConfig;
