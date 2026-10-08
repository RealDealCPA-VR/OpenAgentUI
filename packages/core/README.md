# `@openagentui/core`

[![npm version](https://img.shields.io/npm/v/@openagentui/core)](https://www.npmjs.com/package/@openagentui/core)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)

The framework-agnostic core of openagentui. Defines the shared types, runtime interfaces, adapter contracts, and React bindings that the distribution packages re-export.

Most users do not install `@openagentui/core` directly. Reach for the distribution that matches your target:

| Distribution                  | Use this for          |
| ----------------------------- | --------------------- |
| `@openagentui/react`         | Web applications.     |
| `@openagentui/react-native`  | React Native apps.    |
| `@openagentui/react-ink`     | Terminal/Ink apps.    |

`core` is published so that integration libraries (for example `@openagentui/react-ag-ui`) can depend on the runtime types without pulling in DOM or native primitives.

## Installation

```bash
npm install @openagentui/core
```

## Usage

```ts
import { tool, ModelContextRegistry } from "@openagentui/core";
import { z } from "zod";

const registry = new ModelContextRegistry();

registry.addTool({
  toolName: "getWeather",
  ...tool({
    parameters: z.object({ city: z.string() }),
    execute: async ({ city }) => fetchWeather(city),
  }),
});
```

## Sub-paths

`@openagentui/core` exposes `.`, `./react`, `./store`, and `./internal` sub-paths. The `./react` sub-path holds the React hooks and providers consumed by `@openagentui/react` and `@openagentui/react-native`.

Full reference for message types, runtime interfaces, and adapter contracts at [openagentui.dev/docs/architecture](https://openagentui.dev/docs/architecture).
