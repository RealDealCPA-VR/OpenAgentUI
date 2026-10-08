# `@openagentui/mcp-docs-server`

`@openagentui/mcp-docs-server` is a stdio proxy for the live hosted OpenAgentUI documentation MCP endpoint. It forwards JSON-RPC messages to `https://openagentui.dev/mcp`, so stdio clients always use the current documentation without downloading a bundled snapshot.

## Zed

Add the server to your Zed settings:

```json
{
  "context_servers": {
    "openagentui": {
      "command": {
        "path": "npx",
        "args": ["-y", "@openagentui/mcp-docs-server"]
      }
    }
  }
}
```

## Claude Desktop

Add the server to your Claude Desktop configuration:

```json
{
  "mcpServers": {
    "openagentui": {
      "command": "npx",
      "args": ["-y", "@openagentui/mcp-docs-server"]
    }
  }
}
```

## HTTP clients

Clients that support Streamable HTTP should connect to `https://openagentui.dev/mcp` directly.

## Endpoint override

Set `OPENAGENTUI_MCP_URL` to override the hosted endpoint, for example when testing against a local MCP server.
