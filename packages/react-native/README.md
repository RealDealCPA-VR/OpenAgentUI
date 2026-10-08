# `@openagentui/react-native`

[![npm version](https://img.shields.io/npm/v/@openagentui/react-native)](https://www.npmjs.com/package/@openagentui/react-native)
[![npm downloads](https://img.shields.io/npm/dm/@openagentui/react-native)](https://www.npmjs.com/package/@openagentui/react-native)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)
![License](https://img.shields.io/npm/l/@openagentui/react-native)

React Native bindings for openagentui. Native primitives for `Thread`, `Composer`, `Message`, and `ThreadList` that share the same runtime and adapters as `@openagentui/react`.

## Installation

```bash
npm install @openagentui/react-native
```

## Usage

```tsx
import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@openagentui/react-native";

const adapter: ChatModelAdapter = {
  async *run({ messages }) {
    yield { content: [{ type: "text", text: "Hello!" }] };
  },
};

export function App() {
  const runtime = useLocalRuntime(adapter);
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {/* Thread, Composer, Message primitives */}
    </AssistantRuntimeProvider>
  );
}
```

## Documentation

Full primitives, hooks, and adapter reference at [openagentui.dev/docs/react-native](https://openagentui.dev/docs/react-native).

## For other platforms

- Web: [`@openagentui/react`](https://www.npmjs.com/package/@openagentui/react)
- Terminal (Ink): [`@openagentui/react-ink`](https://www.npmjs.com/package/@openagentui/react-ink)
