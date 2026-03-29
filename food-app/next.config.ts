const API_BASE = process.env.NEXT_PUBLIC_API_URL;

import type { NextConfig } from "next";

console.log("🚀 当前加载的后端地址是:", process.env.NEXT_PUBLIC_API_URL);

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.51.170:3000"],
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `${API_BASE}/:path*`,
      },
    ];
  },
};

export default nextConfig;
