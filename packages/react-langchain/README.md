# `@openagentui/react-langchain`

Adapter that wraps [`useStream`](https://docs.langchain.com/oss/javascript/langgraph-sdk/react-stream) from `@langchain/react` and exposes it as an OpenAgentUI runtime. Bridges LangChain's `useStream` to an `AssistantRuntime` with hooks for interrupts, raw state submission, and reading custom LangGraph state keys.

## When to use this

OpenAgentUI also ships `@openagentui/react-langgraph`, which integrates with `@langchain/langgraph-sdk` directly and has a broader feature set (subgraph events, UI messages, message metadata, cancellation). The two packages are independent adapters targeting different upstream libraries; pick whichever matches the SDK you already use.

## Installation

```bash
npm install @openagentui/react @openagentui/react-langchain @langchain/react @langchain/langgraph-sdk
```

## Usage

```tsx
import { useStreamRuntime } from "@openagentui/react-langchain";
import { AssistantRuntimeProvider } from "@openagentui/react";
import { Thread } from "@/components/openagentui/elements/thread.aui";

export function App() {
  const runtime = useStreamRuntime({
    assistantId: "agent",
    apiUrl: "http://localhost:2024",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

`useStreamRuntime` accepts every option `@langchain/react`'s `useStream` does, plus `cloud` for thread persistence, an `adapters` bag, and a `messagesKey` override.

Full reference for `useLangChainState`, `useLangChainInterruptState`, `useLangChainError`, `useLangChainSubmit`, and `convertLangChainBaseMessage` at [openagentui.dev/docs/runtimes/langchain](https://openagentui.dev/docs/runtimes/langchain).
