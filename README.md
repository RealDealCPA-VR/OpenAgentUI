<p align="center">
  <img src="apps/docs/public/favicon/icon.svg" width="56" height="56" alt="OpenAgentUI logo" />
</p>

<h1 align="center">OpenAgentUI</h1>

<p align="center">
  Open-source UI for AI agents. Composable React primitives, a streaming runtime,
  and adapters for AI SDK, LangGraph, LangChain, AG-UI, A2A, Google ADK and more.
</p>

<p align="center">
  <a href="https://openagentui.dev/docs">Docs</a> ·
  <a href="https://openagentui.dev/elements">Components</a> ·
  <a href="https://openagentui.dev/examples">Examples</a> ·
  <a href="https://github.com/RealDealCPA-VR/OpenAgentUI/discussions">Discussions</a> ·
  <a href="CONTRIBUTING.md">Contributing</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-black" alt="MIT License" />
  <a href="https://github.com/RealDealCPA-VR/OpenAgentUI"><img src="https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI" alt="GitHub stars" /></a>
</p>

OpenAgentUI is free and MIT licensed. There is no paid tier, hosted service or
account: every package, component and doc page lives in this repository.

## Quick start

```bash
npx openagentui@latest create          # new Next.js app with a working thread
npx openagentui@latest init            # add to an existing project
npx openagentui@latest create --ink    # chat in the terminal (React Ink)
npx openagentui@latest create --example with-expo   # React Native / Expo
```

Or install the packages yourself:

```bash
npm install @openagentui/react @openagentui/ai-sdk ai @ai-sdk/react @ai-sdk/openai
```

```tsx
"use client";

import { AssistantRuntimeProvider } from "@openagentui/react";
import { useChatRuntime, AssistantChatTransport } from "@openagentui/ai-sdk";
import { Thread } from "@/components/openagentui/elements/thread.aui";

export function Chat() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({ api: "/api/chat" }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}
```

Swap `useChatRuntime` for any other runtime below; the UI does not change.

## What is in the box

- **Primitives**: `Thread`, `Message`, `Composer`, `ThreadList`, `ActionBar`,
  `BranchPicker`, `Attachment` and more, unstyled and composable.
- **Components**: a shadcn/ui registry of styled components (Base UI or Radix)
  that the CLI copies into your repo, so you own the source.
- **Runtime**: streaming, tool calls, human approvals, branching, editing,
  attachments, voice, suggestions, thread lists and persistence adapters.
- **Generative UI**: render tool calls as components, and colocate a tool's
  schema, server execute and client render with the `"use generative"` compiler.
- **Platforms**: React, React Native, React Ink (terminal) and Vue.
- **For coding agents**: `llms.txt`, a Markdown twin of every docs page, a docs
  MCP server and agent skills.

## Backends

| Backend                    | Package                                                        |
| -------------------------- | -------------------------------------------------------------- |
| Vercel AI SDK              | `@openagentui/ai-sdk`                                          |
| LangGraph / LangChain      | `@openagentui/react-langgraph`, `@openagentui/react-langchain` |
| AG-UI / A2A protocols      | `@openagentui/react-ag-ui`, `@openagentui/react-a2a`           |
| Google ADK / OpenCode / Pi | `@openagentui/react-google-adk`, `@openagentui/react-opencode`, `@openagentui/react-pi` |
| Eve                        | `@openagentui/eve`                                             |
| Any data-stream endpoint   | `@openagentui/react-data-stream`                               |
| Your own store or adapter  | `useExternalStoreRuntime`, `useLocalRuntime` in `@openagentui/react` |

## Repository layout

| Path         | What it holds                                              |
| ------------ | ---------------------------------------------------------- |
| `packages/`  | Every published package (runtime, adapters, UI, CLI)       |
| `apps/docs`  | The website: landing page, docs, elements, playground      |
| `apps/registry` | The shadcn registry the CLI installs components from    |
| `examples/`  | Runnable integrations (`npx openagentui create --example`) |
| `templates/` | Starter apps (`npx openagentui create -t <template>`)      |
| `python/`    | Python streaming and transport backends                    |

## Develop

Requires Node.js 24.11+ and pnpm 12 (`corepack enable`).

```bash
pnpm install
pnpm build                       # build every package
pnpm docs:dev                    # run the website on http://localhost:3000
pnpm test                        # unit tests and typecheck
```

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow and
[DEPLOYMENT.md](DEPLOYMENT.md) for hosting the website and registry.

## Credits

OpenAgentUI is derived from [assistant-ui](https://github.com/assistant-ui/assistant-ui)
(MIT). See [NOTICE.md](NOTICE.md).

## License

[MIT](LICENSE)
