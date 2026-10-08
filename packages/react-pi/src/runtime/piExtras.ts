import { createRuntimeExtras } from "@openagentui/core/react";
import type { PiRuntimeExtrasInternal } from "./runtimeTypes";

export const piExtras =
  createRuntimeExtras<PiRuntimeExtrasInternal>("usePiRuntime");
