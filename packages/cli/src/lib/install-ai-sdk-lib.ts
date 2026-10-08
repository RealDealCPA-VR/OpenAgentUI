import { installPackageIfNeeded } from "./utils/package-installer";

export default async function installAiSdkLib(): Promise<void> {
  await installPackageIfNeeded({
    packageName: "@openagentui/ai-sdk",
    importPatterns: ["@openagentui/ai-sdk"],
    promptMessage:
      "AI SDK imports were added but @openagentui/ai-sdk is not installed. Do you want to install it? (Y/n) ",
    skipMessage:
      "@openagentui/ai-sdk is already installed. Skipping installation.",
    notFoundMessage: "No AI SDK imports found; skipping installation.",
  });

  // The previous name is a separate package, so an import of it needs that
  // package installed; the neutral one would not make it resolvable.
  await installPackageIfNeeded({
    packageName: "@openagentui/react-ai-sdk",
    importPatterns: ["@openagentui/react-ai-sdk"],
    promptMessage:
      "AI SDK imports were added but @openagentui/react-ai-sdk is not installed. Do you want to install it? (Y/n) ",
    skipMessage:
      "@openagentui/react-ai-sdk is already installed. Skipping installation.",
    notFoundMessage: "No legacy AI SDK imports found; skipping installation.",
  });
}
