// @vitest-environment jsdom

import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it, vi } from "vitest";

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.resetModules();
});

it("never asks for consent when no analytics key is configured", async () => {
  vi.stubEnv("NEXT_PUBLIC_POSTHOG_API_KEY", "");
  const fetchMock = vi.fn();
  vi.stubGlobal("fetch", fetchMock);
  const { ConsentBanner } = await import("./consent-banner");

  await act(async () => {
    render(<ConsentBanner />);
  });

  expect(screen.queryByRole("region", { name: "Cookie consent" })).toBeNull();
  expect(fetchMock).not.toHaveBeenCalled();
});
