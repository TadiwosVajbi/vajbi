import type { NextConfig } from "next";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  // Disable the Next.js development mode indicator (the circular button with "N")
  devIndicators: false,

  // Disable ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Image optimization settings
  images: {
    unoptimized: true,
  },

  // Experimental features for React 19 compatibility
  experimental: {
    optimizePackageImports: ['@formatjs/intl-localematcher', 'negotiator'],
  },
};

export default nextConfig;
