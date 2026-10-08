import { describe, expect, it } from "vitest";
import { NextRequest } from "next/server";

import { proxy } from "./proxy";

describe("legacy changelog proxy", () => {
  it("preserves the legacy changelog redirect", () => {
    const response = proxy(
      new NextRequest("https://openagentui.dev/changelog?pkg=react&page=2"),
    );
    expect(response.status).toBe(308);
    expect(response.headers.get("location")).toBe(
      "https://openagentui.dev/changelog/react/2",
    );
  });
});
