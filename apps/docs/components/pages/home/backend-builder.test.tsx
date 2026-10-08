// @vitest-environment jsdom

import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { BackendBuilder, type BackendTab } from "./backend-builder";
import { BACKENDS } from "./backends";

afterEach(() => {
  cleanup();
});

const tabs: BackendTab[] = BACKENDS.map((backend) => ({
  ...backend,
  html: `<pre><code>${backend.id}</code></pre>`,
}));

describe("BackendBuilder", () => {
  it("shows the first backend's install command, scaffold and guide", () => {
    render(<BackendBuilder tabs={tabs} />);
    const first = BACKENDS[0]!;

    expect(
      screen.getByText(`npm install ${first.packages.join(" ")}`),
    ).toBeTruthy();
    expect(screen.getByText(first.scaffold!)).toBeTruthy();
    expect(
      screen
        .getByRole("link", { name: `open the ${first.label} guide →` })
        .getAttribute("href"),
    ).toBe(first.docs);
  });

  it("switches the panel when another backend is picked", () => {
    render(<BackendBuilder tabs={tabs} />);
    const a2a = BACKENDS.find((backend) => backend.id === "a2a")!;

    fireEvent.click(screen.getByRole("button", { name: a2a.label }));

    expect(
      screen
        .getByRole("button", { name: a2a.label })
        .getAttribute("aria-pressed"),
    ).toBe("true");
    expect(
      screen.getByText(`npm install ${a2a.packages.join(" ")}`),
    ).toBeTruthy();
    expect(screen.queryByText("or scaffold")).toBeNull();
    expect(screen.getByText(a2a.caption)).toBeTruthy();
  });
});

describe("BACKENDS", () => {
  it("imports every listed adapter package in its snippet", () => {
    for (const backend of BACKENDS) {
      for (const pkg of backend.packages.filter((name) =>
        name.startsWith("@openagentui/"),
      )) {
        expect(backend.code, `${backend.id} imports ${pkg}`).toContain(
          `"${pkg}"`,
        );
      }
    }
  });

  it("links every backend to a docs page", () => {
    for (const backend of BACKENDS) {
      expect(backend.docs.startsWith("/docs/")).toBe(true);
    }
  });
});
