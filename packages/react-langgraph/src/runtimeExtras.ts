import { createRuntimeExtras } from "@openagentui/core/react";
import type { LangGraphRuntimeExtras } from "./types";

export const langGraphExtras = createRuntimeExtras<LangGraphRuntimeExtras>(
  "useLangGraphRuntime",
);
