# `create-openagentui`

[![npm version](https://img.shields.io/npm/v/create-openagentui)](https://www.npmjs.com/package/create-openagentui)
[![npm downloads](https://img.shields.io/npm/dm/create-openagentui)](https://www.npmjs.com/package/create-openagentui)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)

Scaffold a new OpenAgentUI project from a chosen template (default AI SDK, minimal, cloud, langchain, MCP, Eve, and more).

## Usage

```bash
npm create openagentui my-app
pnpm create openagentui my-app
yarn create openagentui my-app
bunx create-openagentui my-app
```

This wraps the `openagentui create` command from the [`openagentui` CLI](https://www.npmjs.com/package/openagentui). Pass `-t <template>` to pick a starter, or `--preset <url>` to scaffold from an `openagentui.dev` playground link.

## Templates

| Name           | Description                                                |
| -------------- | ---------------------------------------------------------- |
| `default`      | Next.js + Vercel AI SDK (the recommended starting point).  |
| `minimal`      | Smallest possible Next.js + OpenAgentUI setup.            |
| `cloud`        | Default template plus Assistant Cloud thread persistence.  |
| `cloud-clerk`  | Cloud template with Clerk authentication.                  |
| `langchain`    | Next.js + LangGraph agent via the react-langchain adapter. |
| `mcp`          | Next.js + an MCP server integration.                       |
| `eve`          | Next.js + Eve agent backend.                               |

## Documentation

Full template list and flag reference at [openagentui.dev/docs/cli](https://openagentui.dev/docs/cli).
