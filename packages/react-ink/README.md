# `@openagentui/react-ink`

[![npm version](https://img.shields.io/npm/v/@openagentui/react-ink)](https://www.npmjs.com/package/@openagentui/react-ink)
[![npm downloads](https://img.shields.io/npm/dm/@openagentui/react-ink)](https://www.npmjs.com/package/@openagentui/react-ink)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)
![License](https://img.shields.io/npm/l/@openagentui/react-ink)

[Ink](https://github.com/vadimdemedes/ink) bindings for openagentui. Composable, unstyled terminal primitives that share the same runtime, adapters, and tools as `@openagentui/react`, so you can ship a CLI chat UI without rewriting your backend code.

## Installation

Requires React 19 and ink 6 or newer.

```bash
npm install @openagentui/react-ink ink react
```

For markdown rendering with syntax highlighting, also install [`@openagentui/react-ink-markdown`](https://www.npmjs.com/package/@openagentui/react-ink-markdown).

## Usage

```tsx
import { render, Box, Text } from "ink";
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  ThreadPrimitive,
  ComposerPrimitive,
  useAuiState,
  type ChatModelAdapter,
} from "@openagentui/react-ink";

const adapter: ChatModelAdapter = {
  async *run({ messages }) {
    yield { content: [{ type: "text", text: "Hello from AI!" }] };
  },
};

const Message = () => {
  const message = useAuiState((s) => s.message);
  const text = message.content.find((p) => p.type === "text")?.text ?? "";
  return (
    <Box marginBottom={1}>
      <Text color={message.role === "user" ? "green" : "blue"}>
        {message.role === "user" ? "You: " : "AI: "}
      </Text>
      <Text>{text}</Text>
    </Box>
  );
};

const App = () => {
  const runtime = useLocalRuntime(adapter);
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <ThreadPrimitive.Root>
        <ThreadPrimitive.Messages>{() => <Message />}</ThreadPrimitive.Messages>
        <Box borderStyle="round" paddingX={1}>
          <Text>{"> "}</Text>
          <ComposerPrimitive.Input submitOnEnter placeholder="Message..." autoFocus />
        </Box>
      </ThreadPrimitive.Root>
    </AssistantRuntimeProvider>
  );
};

render(<App />);
```

## Documentation

- [Getting Started](https://openagentui.dev/docs/ink)
- [Migration from Web](https://openagentui.dev/docs/ink/migration)
- [Primitives](https://openagentui.dev/docs/ink/primitives)
- [Hooks](https://openagentui.dev/docs/ink/hooks)

## For other platforms

- Web: [`@openagentui/react`](https://www.npmjs.com/package/@openagentui/react)
- React Native: [`@openagentui/react-native`](https://www.npmjs.com/package/@openagentui/react-native)
