# `@openagentui/vue`

[![npm version](https://img.shields.io/npm/v/@openagentui/vue)](https://www.npmjs.com/package/@openagentui/vue)
[![npm downloads](https://img.shields.io/npm/dm/@openagentui/vue)](https://www.npmjs.com/package/@openagentui/vue)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)
![License](https://img.shields.io/npm/l/@openagentui/vue)

Vue bindings for openagentui. A provider, composables, and unstyled primitives for streaming AI chat in Vue and Nuxt, running the same runtime as `@openagentui/react`.

## Installation

Requires Vue 3.5 or newer.

```bash
npm install @openagentui/vue @openagentui/ai-sdk ai react
```

`@openagentui/ai-sdk` connects the [AI SDK](https://ai-sdk.dev). It runs the AI SDK's chat state on the shared runtime, so it needs `react` installed even though React renders nothing.

## Usage

```vue
<!-- app/components/Assistant.client.vue -->
<script setup lang="ts">
import {
  AuiConfig,
  AuiProvider,
  ComposerPrimitiveInput,
  ComposerPrimitiveSend,
  MessagePrimitiveParts,
  ThreadPrimitiveMessages,
  ThreadPrimitiveViewport,
} from "@openagentui/vue";
import { AISDKChat } from "@openagentui/ai-sdk";

const config = AuiConfig({ threads: AISDKChat() });
</script>

<template>
  <AuiProvider :config="config">
    <ThreadPrimitiveViewport class="h-dvh overflow-y-auto">
      <ThreadPrimitiveMessages>
        <MessagePrimitiveParts />
      </ThreadPrimitiveMessages>
    </ThreadPrimitiveViewport>
    <ComposerPrimitiveInput placeholder="Message..." />
    <ComposerPrimitiveSend>Send</ComposerPrimitiveSend>
  </AuiProvider>
</template>
```

`AISDKChat()` posts to `/api/chat`, a route that returns `streamText(...).toUIMessageStreamResponse()`. Mount the provider client-only, as a `.client.vue` component in Nuxt: Vue's server renderer never disposes effect scopes, so a provider rendered on the server would keep one runtime per request.

Styled components (thread, messages, reasoning, tool calls, thread list) install from the openagentui registry; the [quickstart](https://openagentui.dev/docs/vue/quickstart) walks through them.

## API

- `AuiProvider` owns an assistant client built from an `AuiConfig`; `AuiIf` renders its slot while a state selector returns true.
- `useAui()` returns a stable client whose scope accessors resolve to the provider's current client. `useAuiState(selector)` returns a computed ref that updates when the selected slice changes. `useAuiEvent(event, callback)` subscribes for the lifetime of the current effect scope.
- Primitives cover threads (`ThreadPrimitiveRoot`, `Messages`, `Viewport`, `ViewportFooter`, `ScrollToBottom`, `Suggestions`), messages (`MessagePrimitiveRoot`, `Parts`, `Attachments`), composers (`ComposerPrimitiveInput`, `Send`, `Cancel`, `Attachments`, `AddAttachment`, `AttachmentDropzone`), attachments, branch pickers, action bars, suggestions, errors, chain of thought, and thread lists, each exported under its full name such as `ThreadPrimitiveMessages`.
- Tool calls render through Vue components registered with `Tools({ toolkit })` or `aui.tools.setToolUI`, which receive a single `tool` prop typed `ToolUIProps`; a React renderer from a toolkit shared with a React app does not render in Vue.

## Without the AI SDK

To run a runtime that does not need React, such as one mounted with `RuntimeAdapter` from `@openagentui/core/store`, alias `react` to `@openagentui/tap/standalone-shim` so the shared runtime code resolves without React installed:

```ts
// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      "react/compiler-runtime": "@openagentui/tap/standalone-shim/compiler-runtime",
      react: "@openagentui/tap/standalone-shim",
    },
  },
});
```

## Documentation

- [Getting Started](https://openagentui.dev/docs/vue)
- [Quickstart](https://openagentui.dev/docs/vue/quickstart)
- [Runtimes](https://openagentui.dev/docs/vue/runtimes)
- [Server rendering](https://openagentui.dev/docs/vue/ssr)
- [Tool UI](https://openagentui.dev/docs/vue/tool-ui)

## For other platforms

- Web with React: [`@openagentui/react`](https://www.npmjs.com/package/@openagentui/react)
- React Native: [`@openagentui/react-native`](https://www.npmjs.com/package/@openagentui/react-native)
- Terminal: [`@openagentui/react-ink`](https://www.npmjs.com/package/@openagentui/react-ink)
