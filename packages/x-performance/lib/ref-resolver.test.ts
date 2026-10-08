import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { resolveRefSpecifier } from "./ref-resolver";

const repoRoot = resolve(import.meta.dirname, "../../..");

describe("resolveRefSpecifier", () => {
  it("resolves package roots through the ref exports map", () => {
    expect(resolveRefSpecifier(repoRoot, "@openagentui/core")).toBe(
      resolve(repoRoot, "packages/core/dist/index.js"),
    );
    expect(resolveRefSpecifier(repoRoot, "openagentui-stream")).toBe(
      resolve(repoRoot, "packages/openagentui-stream/dist/index.js"),
    );
  });

  it("resolves subpath specifiers, including the tap react shim", () => {
    expect(resolveRefSpecifier(repoRoot, "openagentui-stream/utils")).toBe(
      resolve(repoRoot, "packages/openagentui-stream/dist/utils.js"),
    );
    expect(resolveRefSpecifier(repoRoot, "@openagentui/tap/react-shim")).toBe(
      resolve(repoRoot, "packages/tap/dist/react-shim/index.js"),
    );
  });

  it("leaves unrelated specifiers alone and throws on unknown subpaths", () => {
    expect(resolveRefSpecifier(repoRoot, "react")).toBeUndefined();
    expect(resolveRefSpecifier(repoRoot, "vitest")).toBeUndefined();
    expect(() =>
      resolveRefSpecifier(repoRoot, "@openagentui/core/no-such-subpath"),
    ).toThrow(/no exports entry/);
  });
});
