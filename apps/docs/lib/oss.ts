import { REVALIDATE, getRepo } from "./github";
import { NPM_REVALIDATE, getWeeklyDownloads } from "./npm";
import { PACKAGES } from "./traction";

export const OSS_MONOREPO = "openagentui/openagentui";

export type OssCategory =
  | "sdk"
  | "libraries"
  | "apps"
  | "primitives"
  | "agents"
  | "infrastructure";

export type OssProject = {
  id: string;
  name: string;
  description: string;
  category: OssCategory;
  repo: string;
  path?: string;
  docs?: string;
  site?: string;
  npm?: string;
  pypi?: string;
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
  libraries: {
    label: "Libraries",
    description: "Standalone libraries with their own release cycle.",
  },
  apps: {
    label: "Applications",
    description: "Complete products, open sourced end to end.",
  },
  primitives: {
    label: "Primitives",
    description: "Small packages we extracted along the way.",
  },
  agents: {
    label: "Agent tooling",
    description: "What coding agents use to build with openagentui.",
  },
  infrastructure: {
    label: "Infrastructure",
    description: "Services that run behind an assistant.",
  },
};

type OssProjectInput = Omit<OssProject, "description"> & {
  description?: string;
};

const OSS_PROJECT_INPUTS: OssProjectInput[] = [
  {
    id: "openagentui",
    name: "openagentui",
    category: "sdk",
    repo: OSS_MONOREPO,
    docs: "/docs",
    npm: "@openagentui/react",
    license: "MIT",
  },
  {
    id: "tap",
    name: "@openagentui/tap",
    category: "libraries",
    repo: OSS_MONOREPO,
    path: "packages/tap",
    docs: "/docs/tap",
    npm: "@openagentui/tap",
    license: "MIT",
  },
  {
    id: "store",
    name: "@openagentui/store",
    category: "libraries",
    repo: OSS_MONOREPO,
    path: "packages/store",
    docs: "/docs/store/why-store",
    npm: "@openagentui/store",
    license: "MIT",
  },
  {
    id: "openagentui-stream",
    name: "openagentui-stream",
    category: "libraries",
    repo: OSS_MONOREPO,
    path: "packages/openagentui-stream",
    npm: "openagentui-stream",
    pypi: "openagentui-stream",
    license: "MIT",
  },
  {
    id: "tool-ui",
    name: "tool-ui",
    description: "UI components for AI interfaces.",
    category: "libraries",
    repo: "openagentui/tool-ui",
    site: "https://tool-ui.com",
    license: "MIT",
  },
  {
    id: "xpm",
    name: "@openagentui/xpm",
    description: "One command for npm, yarn, pnpm, bun, deno, and uv.",
    category: "libraries",
    repo: "openagentui/xpm",
    npm: "@openagentui/xpm",
    license: "MIT",
  },
  {
    id: "modelpedia",
    name: "modelpedia",
    description: "Open catalog of AI models across providers.",
    category: "apps",
    repo: "openagentui/modelpedia",
    site: "https://modelpedia.dev",
    license: "MIT",
  },
  {
    id: "open-prism",
    name: "open-prism",
    description: "AI LaTeX writing workspace with live preview.",
    category: "apps",
    repo: "openagentui/open-prism",
    site: "https://openprism.vercel.app",
    license: "MIT",
  },
  {
    id: "tw-shimmer",
    name: "@openagentui/tw-shimmer",
    category: "primitives",
    repo: OSS_MONOREPO,
    path: "packages/tw-shimmer",
    site: "/tw-shimmer",
    npm: "@openagentui/tw-shimmer",
    license: "MIT",
  },
  {
    id: "heat-graph",
    name: "@openagentui/heat-graph",
    category: "primitives",
    repo: OSS_MONOREPO,
    path: "packages/heat-graph",
    site: "/heat-graph",
    npm: "@openagentui/heat-graph",
    license: "MIT",
  },
  {
    id: "safe-content-frame",
    name: "@openagentui/safe-content-frame",
    category: "primitives",
    repo: OSS_MONOREPO,
    path: "packages/safe-content-frame",
    site: "/safe-content-frame",
    npm: "@openagentui/safe-content-frame",
    license: "MIT",
  },
  {
    id: "skills",
    name: "skills",
    description: "Agent skills for building AI chat interfaces.",
    category: "agents",
    repo: "openagentui/skills",
    license: null,
  },
  {
    id: "mcp-docs-server",
    name: "@openagentui/mcp-docs-server",
    category: "agents",
    repo: OSS_MONOREPO,
    path: "packages/mcp-docs-server",
    npm: "@openagentui/mcp-docs-server",
    license: "MIT",
  },
  {
    id: "sync-server",
    name: "openagentui-sync-server",
    description: "Resumable streaming proxy for long-running AI tasks.",
    category: "infrastructure",
    repo: "openagentui/openagentui-sync-server",
    license: null,
  },
];

function describe(project: OssProjectInput): string {
  if (project.description) return project.description;
  const pkg = PACKAGES.find((entry) => entry.name === project.npm);
  if (!pkg) {
    throw new Error(
      `OSS project "${project.id}" has no description and no matching package in PACKAGES.`,
    );
  }
  return pkg.description;
}

export const OSS_PROJECTS: OssProject[] = OSS_PROJECT_INPUTS.map((project) => ({
  ...project,
  description: describe(project),
}));

export function ossRepoUrl(project: OssProject): string {
  return project.path
    ? `https://github.com/${project.repo}/tree/main/${project.path}`
    : `https://github.com/${project.repo}`;
}

export function ossPrimaryUrl(project: OssProject): string {
  return project.docs ?? project.site ?? ossRepoUrl(project);
}

export function ossNpmUrl(pkg: string): string {
  return `https://www.npmjs.com/package/${pkg}`;
}

export type OssStats = {
  stars: Record<string, number>;
  weekly: Record<string, number>;
};

export async function fetchOssStats(): Promise<OssStats> {
  const repos = [
    ...new Set(
      OSS_PROJECTS.filter((project) => !project.path).map(
        (project) => project.repo,
      ),
    ),
  ];
  const packages = [
    ...new Set(
      OSS_PROJECTS.map((project) => project.npm).filter(
        (name): name is string => name !== undefined,
      ),
    ),
  ];

  const [repoEntries, packageEntries] = await Promise.all([
    Promise.all(
      repos.map(
        async (repo) =>
          [
            repo,
            (await getRepo(REVALIDATE.WARM, repo))?.stars ?? null,
          ] as const,
      ),
    ),
    Promise.all(
      packages.map(
        async (name) =>
          [name, await getWeeklyDownloads(name, NPM_REVALIDATE.WARM)] as const,
      ),
    ),
  ]);

  const stars: Record<string, number> = {};
  for (const [repo, count] of repoEntries) {
    if (count === null) continue;
    stars[repo] = count;
  }

  const weekly: Record<string, number> = {};
  for (const [name, count] of packageEntries) {
    if (count === null) continue;
    weekly[name] = count;
  }

  return { stars, weekly };
}
