# @openagentui/eve

Eve runtime adapter for openagentui.

```tsx
"use client";

import { AssistantRuntimeProvider } from "@openagentui/react";
import { useEveAgentRuntime } from "@openagentui/eve";

export function RuntimeProvider({ children }: { children: React.ReactNode }) {
  const runtime = useEveAgentRuntime();

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {children}
    </AssistantRuntimeProvider>
  );
}
```
