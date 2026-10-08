import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@openagentui/react-mcp",
    "@openagentui/store",
    "@openagentui/tap",
    "@openagentui/ui",
  ],
  allowedDevOrigins: ["*"],
};

export default nextConfig;
