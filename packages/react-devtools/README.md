# `@openagentui/react-devtools`

React DevTools UI for `@openagentui/react`. Embed an event log, context viewer, and runtime inspector in any host application.

## Installation

```bash
npm install @openagentui/react-devtools
```

## Usage

Drop `DevToolsModal` inside your `AssistantRuntimeProvider`. It renders a floating launcher and an inline panel (isolated in a shadow root), and is a no-op in production builds.

```tsx
import { AssistantRuntimeProvider } from "@openagentui/react";
import { DevToolsModal } from "@openagentui/react-devtools";

export function App() {
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <DevToolsModal />
      {/* ...your openagentui... */}
    </AssistantRuntimeProvider>
  );
}
```

## Custom tabs

The panel is extensible through a plugin registry. Each plugin receives the inspected instance's projected data and renders a tab body.

```tsx
import { createDevToolsPlugin, DevToolsModal } from "@openagentui/react-devtools";

const myTab = createDevToolsPlugin({
  id: "my-tab",
  label: "My tab",
  Component: ({ data }) => <pre>{JSON.stringify(data.state, null, 2)}</pre>,
});

<DevToolsModal plugins={[myTab]} />;
```

## Documentation

Full reference at [openagentui.dev/docs/devtools](https://openagentui.dev/docs/devtools).
