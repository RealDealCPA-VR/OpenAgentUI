import { describe, expect, it } from "vitest";
import { ComposerPrimitiveQueue } from "@openagentui/core/react";
import { ComposerQueue } from "./ComposerQueue";

describe("ComposerPrimitive.Queue", () => {
  it("re-exports the shared core queue primitive", () => {
    expect(ComposerQueue).toBe(ComposerPrimitiveQueue);
  });
});
