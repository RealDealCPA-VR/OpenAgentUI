import { FLAGSHIP_PACKAGE, getDownloadsRange, getLastWeek } from "./npm";

export type PackageInfo = {
  name: string;
  description: string;
  category: PackageCategory;
  deprecated?: boolean;
};

export type PackageCategory =
  | "core"
  | "tooling"
  | "cloud"
  | "frameworks"
  | "protocols"
  | "platforms"
  | "ui"
  | "effects"
  | "mcp"
  | "observability"
  | "deprecated";

export const PACKAGE_CATEGORIES: Record<
  PackageCategory,
  { label: string; description: string }
> = {
  core: {
    label: "Core",
    description: "Runtime primitives every distribution shares.",
  },
  tooling: {
    label: "Tooling & CLI",
    description: "Scaffolding and build tooling.",
  },
  cloud: {
    label: "Streaming & persistence",
    description: "Stream formats and a client for thread backends.",
  },
  frameworks: {
    label: "Framework adapters",
    description: "Drop-in bindings for popular AI SDKs.",
  },
  protocols: {
    label: "Protocol adapters",
    description: "Open agent protocols, ready to wire up.",
  },
  platforms: {
    label: "Platform bindings",
    description: "Native, terminal, and Vue bindings.",
  },
  ui: {
    label: "UI & rendering",
    description: "Markdown, rich composers, and devtools.",
  },
  effects: {
    label: "Effects & primitives",
    description: "Standalone packages that work without the runtime.",
  },
  mcp: {
    label: "MCP & agents",
    description: "Tooling for MCP hosts and agent runtimes.",
  },
  observability: {
    label: "Observability",
    description: "Trace, debug, and measure assistants.",
  },
  deprecated: {
    label: "Deprecated",
    description: "No longer maintained. Kept on npm for existing installs.",
  },
};

export const PACKAGES: PackageInfo[] = [
  {
    name: "@openagentui/react",
    description: "Primitives and runtime for AI chat in React.",
    category: "core",
  },
  {
    name: "@openagentui/core",
    description: "Framework-agnostic core runtime.",
    category: "core",
  },
  {
    name: "@openagentui/store",
    description: "Tap-based state management.",
    category: "core",
  },
  {
    name: "@openagentui/tap",
    description: "Zero-dependency reactive primitives.",
    category: "core",
  },
  {
    name: "openagentui",
    description: "CLI to create, init, add, upgrade and diagnose projects.",
    category: "tooling",
  },
  {
    name: "create-openagentui",
    description: "Scaffold an OpenAgentUI app in one command.",
    category: "tooling",
  },
  {
    name: "@openagentui/next",
    description: 'Next.js config wrapper and the "use generative" compiler.',
    category: "tooling",
  },
  {
    name: "@openagentui/vite",
    description: 'Vite plugin for the "use generative" compiler.',
    category: "tooling",
  },
  {
    name: "@openagentui/metro",
    description: 'Metro and Expo plugin for the "use generative" compiler.',
    category: "tooling",
  },
  {
    name: "@openagentui/x-generative-compiler",
    description: 'Framework-agnostic "use generative" compiler.',
    category: "tooling",
  },
  {
    name: "@openagentui/x-buildutils",
    description: "Shared build utilities for the monorepo.",
    category: "tooling",
  },
  {
    name: "openagentui-stream",
    description: "Streaming utilities and wire formats for assistants.",
    category: "cloud",
  },
  {
    name: "openagentui-cloud",
    description:
      "Client for Assistant Cloud compatible thread and run backends.",
    category: "cloud",
  },
  {
    name: "@openagentui/ai-sdk",
    description: "Vercel AI SDK adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-ai-sdk",
    description: "Re-export of @openagentui/ai-sdk.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-langgraph",
    description: "LangGraph adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-langchain",
    description: "LangChain useStream adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-google-adk",
    description: "Google ADK adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/eve",
    description: "Eve runtime adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-opencode",
    description: "OpenCode runtime adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-pi",
    description: "Pi coding-agent runtime adapter.",
    category: "frameworks",
  },
  {
    name: "@openagentui/react-a2a",
    description: "A2A v1.0 agent-to-agent protocol adapter.",
    category: "protocols",
  },
  {
    name: "@openagentui/react-ag-ui",
    description: "AG-UI protocol adapter.",
    category: "protocols",
  },
  {
    name: "@openagentui/react-data-stream",
    description: "Generic data stream adapter.",
    category: "protocols",
  },
  {
    name: "@openagentui/react-native",
    description: "React Native bindings.",
    category: "platforms",
  },
  {
    name: "@openagentui/react-ink",
    description: "Terminal UI bindings via Ink.",
    category: "platforms",
  },
  {
    name: "@openagentui/vue",
    description: "Vue bindings.",
    category: "platforms",
  },
  {
    name: "@openagentui/react-markdown",
    description: "Streaming-aware markdown renderer.",
    category: "ui",
  },
  {
    name: "@openagentui/react-streamdown",
    description: "Streamdown-based markdown rendering.",
    category: "ui",
  },
  {
    name: "@openagentui/react-syntax-highlighter",
    description: "Syntax highlighting for code blocks.",
    category: "ui",
  },
  {
    name: "@openagentui/react-ink-markdown",
    description: "Markdown for the terminal distribution.",
    category: "ui",
  },
  {
    name: "@openagentui/react-lexical",
    description: "Lexical composer with @-mention support.",
    category: "ui",
  },
  {
    name: "@openagentui/react-hook-form",
    description: "React Hook Form integration.",
    category: "ui",
  },
  {
    name: "@openagentui/react-generative-ui",
    description: "Render model-authored component trees.",
    category: "ui",
  },
  {
    name: "@openagentui/react-devtools",
    description: "Inspect runtime state in the browser.",
    category: "ui",
  },
  {
    name: "@openagentui/tw-shimmer",
    description: "Tailwind v4 plugin for shimmer effects.",
    category: "effects",
  },
  {
    name: "@openagentui/heat-graph",
    description: "Headless React components for activity heatmaps.",
    category: "effects",
  },
  {
    name: "@openagentui/safe-content-frame",
    description: "Secure iframe rendering for untrusted content.",
    category: "effects",
  },
  {
    name: "@openagentui/mcp-docs-server",
    description: "Stdio proxy for the documentation MCP server.",
    category: "mcp",
  },
  {
    name: "@openagentui/agent-launcher",
    description: "Launch Claude Code with bundled plugins and skills.",
    category: "mcp",
  },
  {
    name: "@openagentui/react-mcp",
    description: "MCP server configuration and connection primitives.",
    category: "mcp",
  },
  {
    name: "@openagentui/react-o11y",
    description: "Observability primitives for assistants.",
    category: "observability",
  },
];

export type PackageDownloads = {
  weekly: number;
  series: number[];
  monthly: number;
  prevMonthly: number;
};

export type NpmDownloads = {
  flagshipWeekly: number | null;
  totalWeekly: number | null;
  perPackage: Record<string, PackageDownloads>;
};

const EMPTY_DOWNLOADS: PackageDownloads = {
  weekly: 0,
  series: [],
  monthly: 0,
  prevMonthly: 0,
};

const sum = (arr: number[]) => arr.reduce((acc, n) => acc + n, 0);

async function fetchPackageDownloadRange(
  name: string,
  end: string,
  revalidate?: number,
): Promise<PackageDownloads | null> {
  const downloads = await getDownloadsRange(
    name,
    shiftDays(end, -60),
    end,
    revalidate,
  );
  if (downloads === null) return null;

  const last60 = downloads.map((d) => d.downloads).slice(-60);
  const last30 = last60.slice(-30);
  const prior30 = last60.slice(-60, -30);
  const last7 = last60.slice(-7);

  return {
    weekly: sum(last7),
    series: last30,
    monthly: sum(last30),
    prevMonthly: sum(prior30),
  };
}

export async function fetchNpmDownloads(
  revalidate?: number,
): Promise<NpmDownloads> {
  const end = await getNpmEnd(revalidate);
  const entries = await Promise.all(
    PACKAGES.filter((pkg) => !pkg.deprecated).map(
      async (pkg) =>
        [
          pkg.name,
          end
            ? await fetchPackageDownloadRange(pkg.name, end, revalidate)
            : null,
        ] as const,
    ),
  );
  const perPackage: Record<string, PackageDownloads> = {};
  let flagshipWeekly: number | null = null;
  let totalWeekly: number | null = 0;
  for (const [name, downloads] of entries) {
    perPackage[name] = downloads ?? EMPTY_DOWNLOADS;
    totalWeekly =
      downloads && totalWeekly !== null ? totalWeekly + downloads.weekly : null;
    if (name === FLAGSHIP_PACKAGE && downloads)
      flagshipWeekly = downloads.weekly;
  }
  return { flagshipWeekly, totalWeekly, perPackage };
}

function shiftDays(day: string, by: number): string {
  const date = new Date(`${day}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + by);
  return date.toISOString().slice(0, 10);
}

// A range answers every day it is asked for and reports the days npm has not
// aggregated yet as 0, so there is no end to read to without npm's window.
async function getNpmEnd(revalidate?: number): Promise<string | null> {
  return (await getLastWeek(FLAGSHIP_PACKAGE, revalidate))?.end ?? null;
}
