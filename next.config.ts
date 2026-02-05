import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Local images are stored in /public/listings/{slug}/
  // No remote patterns needed - all listing photos are self-hosted
  experimental: {
    turbopackUseSystemTlsCerts: true,
  },
};

export default nextConfig;
