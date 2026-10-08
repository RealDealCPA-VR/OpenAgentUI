import { createRuntimeExtras } from "@openagentui/core/react";
import type { EveMessageData, UseEveAgentHelpers } from "eve/react";

export type EveRuntimeExtras = Pick<
  UseEveAgentHelpers<EveMessageData>,
  "error" | "events" | "session" | "reset"
>;

export const eveExtras =
  createRuntimeExtras<EveRuntimeExtras>("useEveAgentRuntime");
