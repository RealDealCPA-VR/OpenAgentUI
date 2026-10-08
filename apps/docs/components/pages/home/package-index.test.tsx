// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { REPO_URL } from "@/lib/constants";
import { packageSourceUrl } from "@/lib/package-source";
import { PACKAGES } from "@/lib/traction";
import { PackageIndex } from "./package-index";

afterEach(() => {
  cleanup();
});

describe("PackageIndex", () => {
  it("lists every package and links it to its source folder", () => {
    render(<PackageIndex />);

    for (const pkg of PACKAGES) {
      const name = screen.getByText(pkg.name);
      expect(name.closest("a")?.getAttribute("href")).toBe(
        packageSourceUrl(pkg.name),
      );
    }
  });
});

describe("packageSourceUrl", () => {
  it("maps package names to their workspace folders", () => {
    expect(packageSourceUrl("@openagentui/react")).toBe(
      `${REPO_URL}/tree/main/packages/react`,
    );
    expect(packageSourceUrl("openagentui")).toBe(
      `${REPO_URL}/tree/main/packages/cli`,
    );
    expect(packageSourceUrl("openagentui-cloud")).toBe(
      `${REPO_URL}/tree/main/packages/cloud`,
    );
    expect(packageSourceUrl("openagentui-stream")).toBe(
      `${REPO_URL}/tree/main/packages/openagentui-stream`,
    );
  });
});
