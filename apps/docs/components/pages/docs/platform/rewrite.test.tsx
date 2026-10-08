import { createElement } from "react";
import { describe, expect, it } from "vitest";
import { rewritePlatformPackages } from "./rewrite";

describe("rewritePlatformPackages", () => {
  it("rewrites the web package without changing adapter package names", () => {
    expect(
      rewritePlatformPackages(
        "@openagentui/react @openagentui/react-ai-sdk",
        "rn",
      ),
    ).toBe("@openagentui/react-native @openagentui/react-ai-sdk");
  });

  it("rewrites package names inside nested code nodes", () => {
    const node = createElement(
      "code",
      null,
      'import { Thread } from "@openagentui/react";',
    );
    const rewritten = rewritePlatformPackages(node, "ink");

    expect(rewritten).toMatchObject({
      props: {
        children: 'import { Thread } from "@openagentui/react-ink";',
      },
    });
  });

  it("preserves React content by reference", () => {
    const node = createElement("code", null, "@openagentui/react");
    expect(rewritePlatformPackages(node, "react")).toBe(node);
  });
});
