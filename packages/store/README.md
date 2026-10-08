# `@openagentui/store`

[![npm version](https://img.shields.io/npm/v/@openagentui/store)](https://www.npmjs.com/package/@openagentui/store)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)

Tap-based state container with React Context integration. Bridges `@openagentui/tap` resources into React via `useAui`, `useAuiState`, `AuiConfig`, and `<AuiProvider>`.

`store` powers the runtime layer of openagentui. Most users do not install it directly; reach for `@openagentui/react` instead.

## Framework-neutral entry

`@openagentui/store/client` exposes `createAssistantClient`, which builds the same client inside a standalone tap root with no React renderer. Non-React bindings consume the store through this entry; react-less consumers additionally alias `react` to `@openagentui/tap/standalone-shim` in their bundler. The `react` peer dependency is optional for exactly this configuration.

## Installation

```bash
npm install @openagentui/store @openagentui/tap
```

## Usage

```typescript
import { resource } from "@openagentui/tap";
import { useState } from "react";
import {
  useAui,
  useAuiState,
  AuiProvider,
  AuiConfig,
  type ClientOutput,
} from "@openagentui/store";

declare module "@openagentui/store" {
  interface ScopeRegistry {
    counter: {
      methods: {
        getState: () => { count: number };
        increment: () => void;
      };
    };
  }
}

const useCounterClient = (): ClientOutput<"counter"> => {
  const [state, setState] = useState({ count: 0 });
  return {
    getState: () => state,
    increment: () => setState({ count: state.count + 1 }),
  };
};

const CounterClient = resource(useCounterClient);

function App() {
  const config = AuiConfig({ counter: CounterClient() });
  return (
    <AuiProvider config={config}>
      <Counter />
    </AuiProvider>
  );
}

function Counter() {
  const count = useAuiState((s) => s.counter.count);
  const aui = useAui();
  return <button onClick={() => aui.counter().increment()}>{count}</button>;
}
```

Full API reference (clients, derived clients, events, `useClientLookup`, `useClientList`) at [openagentui.dev/docs/store/api-reference](https://openagentui.dev/docs/store/api-reference).
