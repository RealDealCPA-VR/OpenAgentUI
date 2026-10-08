"use client";

import type { ReactNode } from "react";
import { AssistantRuntimeProvider, AuiConfig } from "@openagentui/react";
import { useChatRuntime } from "@openagentui/ai-sdk";
import { McpManagerResource, defineConnector } from "@openagentui/react-mcp";

const connectors = [
  defineConnector({
    id: "local-test",
    name: "Local test MCP",
    url: "http://localhost:8787/mcp",
    auth: { type: "oauth", scopes: ["mcp"] },
  }),
];

export function Providers({ children }: { children: ReactNode }) {
  const config = AuiConfig({ mcp: McpManagerResource({ connectors }) });
  const runtime = useChatRuntime();
  return (
    <AssistantRuntimeProvider runtime={runtime} config={config}>
      {children}
    </AssistantRuntimeProvider>
  );
}
