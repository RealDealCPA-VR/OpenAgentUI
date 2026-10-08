import { installPackageIfNeeded } from "./utils/package-installer";

export default async function installEdgeLib(): Promise<void> {
  // Only the retired edge specifier is unambiguous here. `useChatRuntime` and
  // the AI SDK package specifiers are shared by both AI SDK packages, so
  // installAiSdkLib resolves those by the specifier the file actually imports.
  await installPackageIfNeeded({
    packageName: "@openagentui/ai-sdk",
    importPatterns: ["@openagentui/react-edge"],
    promptMessage:
      "Edge Runtime imports were detected but @openagentui/ai-sdk is not installed. Do you want to install it? (Y/n) ",
    skipMessage:
      "@openagentui/ai-sdk is already installed. Skipping installation.",
    notFoundMessage: "No Edge Runtime imports found; skipping installation.",
  });
}
