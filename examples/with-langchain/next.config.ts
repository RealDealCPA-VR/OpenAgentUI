import { withAui } from "@openagentui/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@openagentui/react", "@openagentui/react-langchain"],
};

export default withAui(nextConfig);
