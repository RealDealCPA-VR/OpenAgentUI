import { createRuntimeExtras } from "@openagentui/core/react";
import type { AgUiRuntimeExtras } from "./runtime/types";

export const agUiExtras =
  createRuntimeExtras<AgUiRuntimeExtras>("useAgUiRuntime");
