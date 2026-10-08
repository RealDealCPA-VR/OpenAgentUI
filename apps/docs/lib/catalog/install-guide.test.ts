import { describe, expect, it } from "vitest";
import { installGuideUrl, parseItemSlugs } from "./install-guide";

describe("install guide url", () => {
  it("round-trips items through the query string", () => {
    const url = installGuideUrl(["openagentui", "cloud"]);
    expect(url).toBe("/install.md?items=openagentui,cloud");
    expect(
      parseItemSlugs(new URL(url, "https://x").searchParams.get("items")),
    ).toEqual(["openagentui", "cloud"]);
  });

  it("builds the absolute form", () => {
    expect(installGuideUrl(["cloud"], { absolute: true })).toBe(
      "https://openagentui.dev/install.md?items=cloud",
    );
    expect(installGuideUrl([])).toBe("/install.md");
  });

  it("dedupes and trims parsed items", () => {
    expect(parseItemSlugs(" cloud , cloud,,openagentui ")).toEqual([
      "cloud",
      "openagentui",
    ]);
    expect(parseItemSlugs(null)).toEqual([]);
  });
});
