import { withAui } from "@openagentui/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@openagentui/react",
    "@openagentui/ai-sdk",
    "@openagentui/react-markdown",
  ],
};

export default withAui(nextConfig);
