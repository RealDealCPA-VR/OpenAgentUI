import { REVALIDATE, getRepo } from "./github";
import { NPM_REVALIDATE, getWeeklyDownloads } from "./npm";
import { PACKAGES } from "./traction";

export const OSS_MONOREPO = "RealDealCPA-VR/OpenAgentUI";

export type OssCategory =
  | "sdk"
  | "runtime"
  | "adapters"
  | "platforms"
  | "ui"
  | "primitives"
  | "agents"
  | "tooling";

export type OssProject = {
  id: string;
  name: string;
  description: string;
  category: OssCategory;
  repo: string;
  /** Directory of the project inside the monorepo. */
  path: string;
  docs?: string;
  site?: string;
  npm: string;
  license: string | null;
};

export const OSS_CATEGORIES: Record<
  OssCategory,
  { label: string; description: string }
> = {
  sdk: {
    label: "Core SDK",
    description: "The chat runtime and everything that ships with it.",
  },
  runtime: {
    label: "Runtime",
    description: "State, streaming, and persistence under the React bindings.",
  },
  adapters: {
    label: "Adapters",
    description: "Bindings for AI SDKs and open agent protocols.",
  },
  platforms: {
    label: "Platforms",
    description: "Native, terminal, and Vue bindings.",
  },
  ui: {
    label: "UI and rendering",
    description: "Markdown, rich composers, generative UI, and devtools.",
  },
  primitives: {
    label: "Primitives",
    description: "Standalone packages that work without the runtime.",
  },
  agents: {
    label: "Agent tooling",
    description: "What coding agents and MCP hosts use with OpenAgentUI.",
  },
  tooling: {
    label: "Tooling",
    description: "Scaffolding, the CLI, and build plugins.",
  },
};

type OssProjectInput = {
  /** Directory under `packages/`. */
  dir: string;
  npm: string;
  category: OssCategory;
  docs?: string;
  site?: string;
};

const OSS_PROJECT_INPUTS: OssProjectInput[] = [
  { dir: "react", npm: "@openagentui/react", category: "sdk", docs: "/docs" },

  { dir: "core", npm: "@openagentui/core", category: "runtime" },
  {
    dir: "store",
    npm: "@openagentui/store",
    category: "runtime",
    docs: "/docs/store/why-store",
  },
  {
    dir: "tap",
    npm: "@openagentui/tap",
    category: "runtime",
    docs: "/docs/tap",
  },
  { dir: "openagentui-stream", npm: "openagentui-stream", category: "runtime" },
  { dir: "cloud", npm: "openagentui-cloud", category: "runtime" },

  { dir: "ai-sdk", npm: "@openagentui/ai-sdk", category: "adapters" },
  {
    dir: "react-ai-sdk",
    npm: "@openagentui/react-ai-sdk",
    category: "adapters",
  },
  {
    dir: "react-langgraph",
    npm: "@openagentui/react-langgraph",
    category: "adapters",
  },
  {
    dir: "react-langchain",
    npm: "@openagentui/react-langchain",
    category: "adapters",
  },
  {
    dir: "react-google-adk",
    npm: "@openagentui/react-google-adk",
    category: "adapters",
  },
  { dir: "eve", npm: "@openagentui/eve", category: "adapters" },
  {
    dir: "react-opencode",
    npm: "@openagentui/react-opencode",
    category: "adapters",
  },
  { dir: "react-pi", npm: "@openagentui/react-pi", category: "adapters" },
  { dir: "react-a2a", npm: "@openagentui/react-a2a", category: "adapters" },
  { dir: "react-ag-ui", npm: "@openagentui/react-ag-ui", category: "adapters" },
  {
    dir: "react-data-stream",
    npm: "@openagentui/react-data-stream",
    category: "adapters",
  },

  {
    dir: "react-native",
    npm: "@openagentui/react-native",
    category: "platforms",
    site: "/native",
  },
  {
    dir: "react-ink",
    npm: "@openagentui/react-ink",
    category: "platforms",
    site: "/ink",
  },
  {
    dir: "vue",
    npm: "@openagentui/vue",
    category: "platforms",
    docs: "/docs/vue",
  },

  { dir: "react-markdown", npm: "@openagentui/react-markdown", category: "ui" },
  {
    dir: "react-streamdown",
    npm: "@openagentui/react-streamdown",
    category: "ui",
  },
  {
    dir: "react-syntax-highlighter",
    npm: "@openagentui/react-syntax-highlighter",
    category: "ui",
  },
  {
    dir: "react-ink-markdown",
    npm: "@openagentui/react-ink-markdown",
    category: "ui",
  },
  { dir: "react-lexical", npm: "@openagentui/react-lexical", category: "ui" },
  {
    dir: "react-hook-form",
    npm: "@openagentui/react-hook-form",
    category: "ui",
  },
  {
    dir: "react-generative-ui",
    npm: "@openagentui/react-generative-ui",
    category: "ui",
  },
  { dir: "react-devtools", npm: "@openagentui/react-devtools", category: "ui" },
  {
    dir: "react-o11y",
    npm: "@openagentui/react-o11y",
    category: "ui",
    site: "/react-o11y",
  },

  {
    dir: "tw-shimmer",
    npm: "@openagentui/tw-shimmer",
    category: "primitives",
    site: "/tw-shimmer",
  },
  {
    dir: "heat-graph",
    npm: "@openagentui/heat-graph",
    category: "primitives",
    site: "/heat-graph",
  },
  {
    dir: "safe-content-frame",
    npm: "@openagentui/safe-content-frame",
    category: "primitives",
    site: "/safe-content-frame",
  },

  {
    dir: "mcp-docs-server",
    npm: "@openagentui/mcp-docs-server",
    category: "agents",
  },
  {
    dir: "agent-launcher",
    npm: "@openagentui/agent-launcher",
    category: "agents",
  },
  { dir: "react-mcp", npm: "@openagentui/react-mcp", category: "agents" },

  { dir: "cli", npm: "openagentui", category: "tooling" },
  { dir: "create-openagentui", npm: "create-openagentui", category: "tooling" },
  { dir: "next", npm: "@openagentui/next", category: "tooling" },
  { dir: "vite", npm: "@openagentui/vite", category: "tooling" },
  { dir: "metro", npm: "@openagentui/metro", category: "tooling" },
  {
    dir: "x-generative-compiler",
    npm: "@openagentui/x-generative-compiler",
    category: "tooling",
  },
  {
    dir: "x-buildutils",
    npm: "@openagentui/x-buildutils",
    category: "tooling",
  },
];

function toProject(input: OssProjectInput): OssProject {
  const pkg = PACKAGES.find((entry) => entry.name === input.npm);
  if (!pkg) {
    throw new Error(
      `OSS project "${input.npm}" has no matching package in PACKAGES.`,
    );
  }
  return {
    id: input.dir,
    name: input.npm,
    description: pkg.description,
    category: input.category,
    repo: OSS_MONOREPO,
    path: `packages/${input.dir}`,
    ...(input.docs ? { docs: input.docs } : {}),
    ...(input.site ? { site: input.site } : {}),
    npm: input.npm,
    license: "MIT",
  };
}

export const OSS_PROJECTS: OssProject[] = OSS_PROJECT_INPUTS.map(toProject);

export function ossRepoUrl(project: OssProject): string {
  return `https://github.com/${project.repo}/tree/main/${project.path}`;
}

export function ossPrimaryUrl(project: OssProject): string {
  return project.docs ?? project.site ?? ossRepoUrl(project);
}

export function ossNpmUrl(pkg: string): string {
  return `https://www.npmjs.com/package/${pkg}`;
}

export type OssStats = {
  /** Stars of the repository every project lives in, when GitHub answers. */
  stars: number | null;
  /** Weekly npm downloads per package, only for packages npm reports. */
  weekly: Record<string, number>;
};

export async function fetchOssStats(): Promise<OssStats> {
  const [repo, packageEntries] = await Promise.all([
    getRepo(REVALIDATE.WARM, OSS_MONOREPO),
    Promise.all(
      OSS_PROJECTS.map(
        async (project) =>
          [
            project.npm,
            await getWeeklyDownloads(project.npm, NPM_REVALIDATE.WARM),
          ] as const,
      ),
    ),
  ]);

  const weekly: Record<string, number> = {};
  for (const [name, count] of packageEntries) {
    if (!count) continue;
    weekly[name] = count;
  }

  return { stars: repo?.stars || null, weekly };
}
