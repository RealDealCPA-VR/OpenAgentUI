"use client";

import { type ReactNode } from "react";
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useDocsChatRuntime, useSpeechAdapters } from "./chat-runtime";

export function PlaygroundRuntimeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const adapters = useSpeechAdapters();
  const runtime = useDocsChatRuntime({ adapters });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
