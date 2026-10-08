# `@openagentui/react-opencode`

[OpenCode](https://opencode.ai) runtime adapter for `@openagentui/react`. Maps OpenCode activity onto the standard openagentui message primitives so an OpenCode session can drive a Thread UI.

> [!NOTE]
> This integration is experimental. APIs may change between minor versions.

## Installation

```bash
npm install @openagentui/react @openagentui/react-opencode
```

## Usage

```tsx
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useOpenCodeRuntime } from "@openagentui/react-opencode";
import { Thread } from "@/components/openagentui/elements/thread.aui";

export function App() {
  const runtime = useOpenCodeRuntime({
    apiUrl: "http://localhost:4096",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

## See also

- `@openagentui/ai-sdk` for general-purpose Vercel AI SDK integration.
- `@openagentui/react-langgraph` for LangGraph agents.

Full reference at [openagentui.dev/docs/runtimes/opencode](https://openagentui.dev/docs/runtimes/opencode).
