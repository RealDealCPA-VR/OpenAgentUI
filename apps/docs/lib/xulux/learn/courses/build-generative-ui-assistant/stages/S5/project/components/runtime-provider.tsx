"use client";

import {
  AssistantRuntimeProvider,
  unstable_Interactables,
  AuiConfig,
} from "@openagentui/react";
import { AssistantChatTransport, useChatRuntime } from "@openagentui/ai-sdk";

export function RuntimeProvider({
  api = "/api/chat",
  children,
}: Readonly<{ api?: string; children: React.ReactNode }>) {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({ api }),
  });
  const config = AuiConfig({
    unstable_interactables: unstable_Interactables(),
  });

  return (
    <AssistantRuntimeProvider config={config} runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
