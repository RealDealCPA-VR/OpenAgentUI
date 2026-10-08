// The backends the home page code builder can show. Every snippet mirrors the
// quickstart linked in `docs`, so keep them in sync when a quickstart changes.

export type Backend = {
  id: string;
  label: string;
  group: "Frameworks" | "Protocols" | "Bring your own";
  docs: string;
  /** Packages a manual install adds, in install order. */
  packages: readonly string[];
  /** A `create` command that scaffolds a working app, when one exists. */
  scaffold: string | null;
  caption: string;
  code: string;
};

const THREAD_IMPORT = `import { Thread } from "@/components/openagentui/elements/thread.aui";`;

export const BACKENDS: readonly Backend[] = [
  {
    id: "ai-sdk",
    label: "AI SDK",
    group: "Frameworks",
    docs: "/docs/runtimes/ai-sdk/overview",
    packages: [
      "@openagentui/react",
      "@openagentui/ai-sdk",
      "ai",
      "@ai-sdk/react",
      "@ai-sdk/openai",
    ],
    scaffold: "npx openagentui@latest create",
    caption: "Your route runs the model. The transport streams it back.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useChatRuntime, AssistantChatTransport } from "@openagentui/ai-sdk";
${THREAD_IMPORT}

export default function App() {
  const runtime = useChatRuntime({
    transport: new AssistantChatTransport({ api: "/api/chat" }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "langgraph",
    label: "LangGraph",
    group: "Frameworks",
    docs: "/docs/runtimes/langgraph/overview",
    packages: [
      "@openagentui/react",
      "@openagentui/react-langgraph",
      "@langchain/langgraph-sdk",
    ],
    scaffold: "npx openagentui@latest create --example with-langgraph",
    caption: "Point stream at your graph. Threads and interrupts included.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useLangGraphRuntime } from "@openagentui/react-langgraph";
${THREAD_IMPORT}

export default function App() {
  const runtime = useLangGraphRuntime({
    stream: (messages, config) => streamMessage({ messages, config }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "langchain",
    label: "LangChain",
    group: "Frameworks",
    docs: "/docs/runtimes/langchain",
    packages: [
      "@openagentui/react",
      "@openagentui/react-langchain",
      "@langchain/react",
      "@langchain/langgraph-sdk",
    ],
    scaffold: "npx openagentui@latest create -t langchain",
    caption: "Connects to your deployed assistant by id.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useStreamRuntime } from "@openagentui/react-langchain";
${THREAD_IMPORT}

export default function App() {
  const runtime = useStreamRuntime({
    assistantId: process.env["NEXT_PUBLIC_LANGGRAPH_ASSISTANT_ID"]!,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "google-adk",
    label: "Google ADK",
    group: "Frameworks",
    docs: "/docs/runtimes/google-adk/quickstart",
    packages: [
      "@openagentui/react",
      "@openagentui/react-google-adk",
      "@google/adk",
    ],
    scaffold: "npx openagentui@latest create --example with-google-adk",
    caption: "Your route runs the ADK agent. The stream adapter reads it.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import {
  useAdkRuntime,
  createAdkStream,
} from "@openagentui/react-google-adk";
${THREAD_IMPORT}

export function MyAssistant() {
  const runtime = useAdkRuntime({
    stream: createAdkStream({ api: "/api/chat" }),
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "eve",
    label: "Eve",
    group: "Frameworks",
    docs: "/docs/runtimes/eve/quickstart",
    packages: ["@openagentui/react", "@openagentui/eve", "eve"],
    scaffold: "npx create-openagentui@latest -t eve my-app",
    caption: "The Eve agent owns the run. The runtime renders it.",
    code: `${THREAD_IMPORT}
import { useEveAgentRuntime } from "@openagentui/eve";
import { AssistantRuntimeProvider } from "@openagentui/react";

export default function Home() {
  const runtime = useEveAgentRuntime();

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "ag-ui",
    label: "AG-UI",
    group: "Protocols",
    docs: "/docs/runtimes/ag-ui/quickstart",
    packages: [
      "@openagentui/react",
      "@openagentui/react-ag-ui",
      "@ag-ui/client",
    ],
    scaffold: "npx openagentui@latest create --example with-ag-ui",
    caption: "Any AG-UI server, through an HttpAgent.",
    code: `import { useMemo } from "react";
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useAgUiRuntime } from "@openagentui/react-ag-ui";
import { HttpAgent } from "@ag-ui/client";
${THREAD_IMPORT}

export default function App() {
  const agent = useMemo(
    () => new HttpAgent({ url: "http://localhost:8000/agent" }),
    [],
  );
  const runtime = useAgUiRuntime({ agent });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "a2a",
    label: "A2A",
    group: "Protocols",
    docs: "/docs/runtimes/a2a/quickstart",
    packages: ["@openagentui/react", "@openagentui/react-a2a"],
    scaffold: null,
    caption: "Talks A2A v1.0 to any agent by base URL.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useA2ARuntime } from "@openagentui/react-a2a";
${THREAD_IMPORT}

export default function App() {
  const runtime = useA2ARuntime({
    baseUrl: "http://localhost:9999",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "opencode",
    label: "OpenCode",
    group: "Protocols",
    docs: "/docs/runtimes/opencode/quickstart",
    packages: ["@openagentui/react", "@openagentui/react-opencode"],
    scaffold: null,
    caption: "Sessions, tools and permissions from an OpenCode server.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useOpenCodeRuntime } from "@openagentui/react-opencode";
${THREAD_IMPORT}

export default function App() {
  const runtime = useOpenCodeRuntime({
    baseUrl: "http://localhost:4096",
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "data-stream",
    label: "Data stream",
    group: "Bring your own",
    docs: "/docs/runtimes/custom/data-stream",
    packages: ["@openagentui/react", "@openagentui/react-data-stream"],
    scaffold: null,
    caption: "Any endpoint that speaks the data stream protocol.",
    code: `import { AssistantRuntimeProvider } from "@openagentui/react";
import { useDataStreamRuntime } from "@openagentui/react-data-stream";
${THREAD_IMPORT}

export default function ChatPage() {
  const runtime = useDataStreamRuntime({ api: "/api/chat" });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "external-store",
    label: "External store",
    group: "Bring your own",
    docs: "/docs/runtimes/custom/external-store",
    packages: ["@openagentui/react"],
    scaffold: "npx openagentui@latest create --example with-external-store",
    caption: "Your store owns the messages. The runtime renders them.",
    code: `import {
  AssistantRuntimeProvider,
  useExternalStoreRuntime,
} from "@openagentui/react";
${THREAD_IMPORT}

export default function App() {
  const runtime = useExternalStoreRuntime({
    messages,
    convertMessage,
    onNew,
  });

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
  {
    id: "local",
    label: "Local runtime",
    group: "Bring your own",
    docs: "/docs/runtimes/custom/local-runtime",
    packages: ["@openagentui/react"],
    scaffold: null,
    caption: "Write one adapter function. The runtime keeps the state.",
    code: `import {
  AssistantRuntimeProvider,
  useLocalRuntime,
  type ChatModelAdapter,
} from "@openagentui/react";
${THREAD_IMPORT}

const MyModelAdapter: ChatModelAdapter = {
  async *run({ messages, abortSignal }) {
    // call your backend and yield content as it streams
  },
};

export default function App() {
  const runtime = useLocalRuntime(MyModelAdapter);

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <Thread />
    </AssistantRuntimeProvider>
  );
}`,
  },
];
