import { withAui } from "@openagentui/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@openagentui/react", "@openagentui/react-google-adk"],
  // @google/adk reaches its optional Google Cloud and database peers through
  // dynamic require, which Turbopack would otherwise resolve at build time.
  serverExternalPackages: ["@google/adk"],
};

export default withAui(nextConfig);
