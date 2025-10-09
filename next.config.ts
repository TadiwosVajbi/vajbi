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

  // Environment variables for Amplify
  env: {
    EMAIL_PROVIDER: process.env.EMAIL_PROVIDER,
    TENANT_ID: process.env.TENANT_ID,
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    GRAPH_SENDER: process.env.GRAPH_SENDER,
    FROM_EMAIL: process.env.FROM_EMAIL,
    CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
    JOBS_FROM_EMAIL: process.env.JOBS_FROM_EMAIL,
    CONTACT_EMAIL: process.env.CONTACT_EMAIL,
    JOBS_EMAIL: process.env.JOBS_EMAIL,
  },
};

export default nextConfig;
