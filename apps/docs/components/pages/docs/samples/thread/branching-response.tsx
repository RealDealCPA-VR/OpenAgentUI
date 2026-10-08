"use client";

import { Thread } from "@/components/openagentui/elements/thread.aui";
import { AssistantRuntimeProvider, useLocalRuntime } from "@openagentui/react";
import { SampleFrame } from "@/components/pages/docs/samples/sample-frame";

export function Chat() {
  const runtime = useLocalRuntime(
    {
      async *run() {
        yield {
          content: [
            {
              type: "text",
              text: "OpenAgentUI ships primitives, runtimes, and a component registry for chat interfaces.",
            },
          ],
        };
      },
    },
    {
      initialMessages: [
        { role: "user", content: "What is OpenAgentUI?" },
        {
          role: "assistant",
          content:
            "OpenAgentUI provides composable primitives for AI chat interfaces.",
        },
      ],
    },
  );

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}

export function ThreadBranchSample() {
  return (
    <SampleFrame className="bg-muted/40 h-120 overflow-hidden">
      <Chat />
    </SampleFrame>
  );
}
