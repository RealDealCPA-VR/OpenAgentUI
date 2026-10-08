"use client";

import type { MessageTiming } from "@openagentui/core";
import { useStreamingTiming } from "@openagentui/core/react";
import { createLangChainStreamingTimingAccessors } from "@openagentui/react-langchain/converter";
import type { LangChainMessage } from "./types";

const langGraphStreamingTimingAccessors =
  createLangChainStreamingTimingAccessors<LangChainMessage>(
    (message) => message.type,
  );

/**
 * Tracks per-message streaming timing for LangGraph messages. Delegates to
 * the shared `useStreamingTiming` primitive in `@openagentui/core/react`,
 * adapted to the LangGraph message shape via the accessors above.
 */
export const useLangGraphStreamingTiming = (
  messages: readonly LangChainMessage[],
  isRunning: boolean,
): Record<string, MessageTiming> =>
  useStreamingTiming(messages, isRunning, langGraphStreamingTimingAccessors);
