"use client";

import { Thread } from "@/components/openagentui/elements/thread.aui";
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useEveAgentRuntime } from "@openagentui/eve";

export default function Home() {
  const runtime = useEveAgentRuntime();

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <div className="h-dvh">
        <Thread />
      </div>
    </AssistantRuntimeProvider>
  );
}
