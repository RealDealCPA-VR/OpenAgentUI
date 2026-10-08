/// <reference types="node" />

import { describe, expect, it, vi } from "vitest";

const { nativeEntryPath } = await vi.hoisted(async () => {
  const { fileURLToPath } = await import("node:url");
  return {
    nativeEntryPath: fileURLToPath(
      new URL(
        "../node_modules/@openagentui/ai-sdk/dist/index.native.js",
        import.meta.url,
      ),
    ),
  };
});

vi.mock("@openagentui/ai-sdk", () => import(nativeEntryPath));

describe("@openagentui/react-ai-sdk react-native entry", () => {
  it("exports exactly what the @openagentui/ai-sdk react-native entry exports", async () => {
    const upstream: Record<string, unknown> = await import(nativeEntryPath);
    const entry: Record<string, unknown> = await import("./index.native");

    expect(Object.keys(entry).sort()).toEqual(Object.keys(upstream).sort());
    for (const name of Object.keys(upstream)) {
      expect(entry[name]).toBe(upstream[name]);
    }
    expect(entry["useChatRuntime"]).toBeTypeOf("function");
    expect(entry).not.toHaveProperty("AISDKThreads");
    expect(entry).not.toHaveProperty("AISDKToolkit");
  });
});
