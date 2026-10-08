// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { REPO_URL } from "@/lib/constants";
import { LegalLinks } from "./legal-links";

afterEach(() => {
  cleanup();
});

describe("LegalLinks", () => {
  it("links the license and credits in the repository", () => {
    render(<LegalLinks />);

    expect(
      screen.getByRole("link", { name: "MIT License" }).getAttribute("href"),
    ).toBe(`${REPO_URL}/blob/main/LICENSE`);
    expect(
      screen.getByRole("link", { name: "Credits" }).getAttribute("href"),
    ).toBe(`${REPO_URL}/blob/main/NOTICE.md`);
  });
});
