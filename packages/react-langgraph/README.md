# `@openagentui/react-langgraph`

[LangGraph](https://langchain-ai.github.io/langgraph/) integration for `@openagentui/react`. Wraps a LangGraph stream in an openagentui runtime with thread persistence, interrupts, and message-tuple events.

## Installation

```bash
npm install @openagentui/react @openagentui/react-langgraph @langchain/langgraph-sdk
```

## Usage

```tsx
"use client";

import { AssistantRuntimeProvider } from "@openagentui/react";
import { useLangGraphRuntime } from "@openagentui/react-langgraph";
import { createThread, sendMessage, getThreadState } from "@/lib/chatApi";

export function Provider({ children }: { children: React.ReactNode }) {
  const runtime = useLangGraphRuntime({
    stream: async function* (messages, { initialize, ...config }) {
      const { externalId } = await initialize();
      yield* sendMessage({ threadId: externalId!, messages, config });
    },
    create: async () => {
      const { thread_id } = await createThread();
      return { externalId: thread_id };
    },
    load: async (externalId) => {
      const state = await getThreadState(externalId);
      return { messages: state.values.messages ?? [], interrupts: [] };
    },
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
```

## See also

- `@openagentui/react-langchain` targets `@langchain/react`'s `useStream`; pick it if that's the SDK you already use.

Full API reference at [openagentui.dev/docs/runtimes/langgraph](https://openagentui.dev/docs/runtimes/langgraph). See [`examples/with-langgraph`](https://github.com/RealDealCPA-VR/OpenAgentUI/tree/main/examples/with-langgraph) for a complete app.
