import { createRuntimeExtras } from "@openagentui/core/react";
import type { OpenCodeRuntimeExtras } from "./types";

export const openCodeExtras =
  createRuntimeExtras<OpenCodeRuntimeExtras>("useOpenCodeRuntime");
