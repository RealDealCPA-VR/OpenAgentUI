import { withAui } from "@openagentui/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@openagentui/react", "@openagentui/ai-sdk"],
};

export default withAui(nextConfig);
