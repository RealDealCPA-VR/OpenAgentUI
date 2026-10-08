import { withAui } from "@openagentui/next";
import type { NextConfig } from "next";
import { withEve } from "eve/next";

const nextConfig: NextConfig = {
  transpilePackages: ["@openagentui/eve", "@openagentui/react"],
};

export default withEve(withAui(nextConfig));
