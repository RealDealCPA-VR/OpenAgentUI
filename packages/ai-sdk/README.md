# `@openagentui/ai-sdk`

[Vercel AI SDK](https://sdk.vercel.ai) integration for `@openagentui/react`. Wraps the AI SDK chat in an OpenAgentUI runtime and forwards system messages and frontend tools through `AssistantChatTransport`. Each release line targets the AI SDK major pinned in its dependencies.

## Installation

```bash
npm install @openagentui/react @openagentui/ai-sdk ai
```

## Usage

```tsx
"use client";

import { AssistantRuntimeProvider } from "@openagentui/react";
import { useChatRuntime } from "@openagentui/ai-sdk";
import { Thread } from "@/components/openagentui/elements/thread.aui";

export function Chat() {
  const runtime = useChatRuntime();
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

`useChatRuntime` defaults to `AssistantChatTransport`, which forwards frontend system messages and tool definitions to your backend. To customize the API URL, the cache, or other transport settings, pass a configured `AssistantChatTransport` to keep that forwarding behavior; pass `DefaultChatTransport` to opt out.

Full reference at [openagentui.dev/docs/runtimes/ai-sdk](https://openagentui.dev/docs/runtimes/ai-sdk).
