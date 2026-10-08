import { createRuntimeExtras } from "@openagentui/core/react";
import type { AdkRuntimeExtras } from "./types";

export const adkExtras = createRuntimeExtras<AdkRuntimeExtras>("useAdkRuntime");
