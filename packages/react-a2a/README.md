# `@openagentui/react-a2a`

[A2A (Agent-to-Agent) v1.0](https://github.com/a2aproject/A2A) protocol integration for `@openagentui/react`. Built-in HTTP client with SSE streaming, agent-card discovery, multi-tenancy, and structured error handling.

## Installation

```bash
npm install @openagentui/react @openagentui/react-a2a
```

## Usage

```tsx
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useA2ARuntime } from "@openagentui/react-a2a";
import { Thread } from "@/components/openagentui/elements/thread.aui";

export function App() {
  const runtime = useA2ARuntime({ baseUrl: "http://localhost:9999" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

Supports all 9 A2A task states (including `input_required` and `auth_required`), artifact streaming, push-notification config, extension negotiation, and streaming/non-streaming auto-fallback.

## See also

- `@openagentui/react-ag-ui` for the AG-UI protocol.
- `@openagentui/react-langgraph` for LangGraph agents.

Full reference at [openagentui.dev/docs/runtimes/a2a](https://openagentui.dev/docs/runtimes/a2a/overview).
