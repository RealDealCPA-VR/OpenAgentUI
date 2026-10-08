"use client";

import { AssistantRuntimeProvider } from "@openagentui/react";
import { useAdkRuntime, createAdkStream } from "@openagentui/react-google-adk";

export function MyRuntimeProvider({ children }: { children: React.ReactNode }) {
  const runtime = useAdkRuntime({
    stream: createAdkStream({ api: "/api/chat" }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
