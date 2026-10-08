# `@openagentui/react-google-adk`

[Google ADK](https://github.com/google/adk-js) (Agent Development Kit) integration for `@openagentui/react`. Connects ADK JS agents to the OpenAgentUI runtime with streaming, tool calls, multi-agent support, tool confirmations, auth flows, and session-state management.

## Installation

```bash
npm install @openagentui/react @openagentui/react-google-adk @google/adk
```

## Usage

The recommended setup proxies through your own API route:

```ts
// app/api/adk/route.ts
import { createAdkApiRoute } from "@openagentui/react-google-adk/server";
import { runner } from "./agent";
import { requireUser } from "./auth"; // Your authentication helper

export const POST = createAdkApiRoute({
  runner,
  userId: async (req) => (await requireUser(req)).id,
  sessionId: (_req, clientSessionId) => {
    if (!clientSessionId) throw new Error("Missing ADK session ID");
    return clientSessionId;
  },
});
```

`createAdkStream` sends its initialized thread ID to the route. Resolve
`userId` from authentication before accepting that identifier; a client-sent
session ID is not proof that the caller owns the session. The route creates a
missing ADK session before the first run when the runner exposes `appName` and
`sessionService`.

```tsx
// client component
import { useAdkRuntime, createAdkStream } from "@openagentui/react-google-adk";

const runtime = useAdkRuntime({
  stream: createAdkStream({ api: "/api/adk" }),
});
```

Or connect directly to an ADK server with `createAdkSessionAdapter`; see the docs for the full setup and option reference.

## See also

- `@openagentui/react-langgraph` for LangGraph SDK agents.
- `@openagentui/react-ag-ui` for the AG-UI protocol.

Full reference for client hooks (`useAdkAgentInfo`, `useAdkSessionState`, `useAdkToolConfirmations`, `useAdkAuthRequests`, etc.), server exports, and direct mode at [openagentui.dev/docs/runtimes/google-adk](https://openagentui.dev/docs/runtimes/google-adk).
