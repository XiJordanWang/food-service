const API_BASE = process.env.NEXT_PUBLIC_API_URL;

import type { NextConfig } from "next";

console.log("🚀 Current Backend URL:", process.env.NEXT_PUBLIC_API_URL);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.51.170:3000"],
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `${API_BASE}/:path*`,
      },
    ];
  },
};

export default nextConfig;
