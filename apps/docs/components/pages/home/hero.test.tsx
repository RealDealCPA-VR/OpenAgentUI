// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { REPO_URL } from "@/lib/constants";
import { Hero } from "./hero";

afterEach(() => {
  cleanup();
});

describe("hero", () => {
  it("links the quick start and the source", () => {
    render(<Hero version={null} />);

    expect(
      screen
        .getByRole("button", { name: "Read the quick start" })
        .getAttribute("href"),
    ).toBe("/docs/installation");
    expect(
      screen.getByRole("button", { name: "View source" }).getAttribute("href"),
    ).toBe(REPO_URL);
  });

  it("builds the install command from the selected project type and runner", () => {
    render(<Hero version={null} />);

    expect(screen.getByText("npx openagentui@latest create")).toBeTruthy();

    fireEvent.click(screen.getByRole("tab", { name: "Existing app" }));
    fireEvent.click(screen.getByRole("tab", { name: "pnpm" }));

    expect(screen.getByText("pnpm dlx openagentui@latest init")).toBeTruthy();
  });

  it("shows the published version only when it is known", () => {
    const { rerender } = render(<Hero version={null} />);
    expect(screen.queryByText(/@openagentui\/react@/)).toBeNull();

    rerender(<Hero version="0.15.22" />);
    expect(screen.getByText("@openagentui/react@0.15.22")).toBeTruthy();
  });
});
