// @vitest-environment jsdom

import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, expect, it } from "vitest";
import { AgentReady } from "./agent-ready";

afterEach(() => {
  cleanup();
});

it("offers llms.txt, the MCP setup command and the agent launcher", () => {
  render(<AgentReady />);

  expect(screen.getByText(/\/llms\.txt$/)).toBeTruthy();
  expect(screen.getByText("npx openagentui@latest mcp")).toBeTruthy();
  expect(screen.getByText("npx openagentui@latest agent")).toBeTruthy();
  expect(
    screen.getByRole("link", { name: "Docs over MCP" }).getAttribute("href"),
  ).toBe("/docs/llm");
});
