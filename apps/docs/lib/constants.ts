import { isAiPlaygroundEnabled } from "./feature-flags";

export const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://openagentui.dev"
).replace(/\/+$/, "");
export const REPO_URL = "https://github.com/RealDealCPA-VR/OpenAgentUI";
export const DISCUSSIONS_URL = `${REPO_URL}/discussions`;
export const ISSUES_URL = `${REPO_URL}/issues`;

export const SURFACES = ["react", "rn", "ink"] as const;
export type Surface = (typeof SURFACES)[number];

export const PLATFORMS = [...SURFACES, "vue", "tap"] as const;
export type Platform = (typeof PLATFORMS)[number];

export const DEFAULT_PLATFORM: Surface = "react";

export const PLATFORM_LABELS: Record<Platform, string> = {
  react: "React",
  rn: "React Native",
  ink: "React Ink",
  vue: "Vue",
  tap: "Tap",
};

export type Product = {
  /** Route segment for internal products (e.g. "@openagentui/tw-shimmer", "native"). Omit for external. */
  slug?: string;
  label: string;
  href: string;
  description: string;
  external: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "tw-shimmer",
    label: "tw-shimmer",
    href: "/tw-shimmer",
    description: "Tailwind CSS shimmer effects",
    external: false,
  },
  {
    slug: "safe-content-frame",
    label: "Safe Content Frame",
    href: "/safe-content-frame",
    description: "Secure sandboxed iframes",
    external: false,
  },
  {
    slug: "native",
    label: "React Native",
    href: "/native",
    description: "Build mobile apps with React Native",
    external: false,
  },
  {
    slug: "ink",
    label: "Ink",
    href: "/ink",
    description: "Build interactive experiences with Ink",
    external: false,
  },
  {
    slug: "heat-graph",
    label: "Heat Graph",
    href: "/heat-graph",
    description: "Activity heatmap graph components",
    external: false,
  },
  {
    slug: "react-o11y",
    label: "react-o11y",
    href: "/react-o11y",
    description: "Observability span primitives",
    external: false,
  },
];

/** Internal products/pages that have sub-project routes (used by SubProjectLayout switcher). */
export const SUB_PROJECTS: (Product & { slug: string })[] = [
  ...(isAiPlaygroundEnabled
    ? [
        {
          slug: "learn",
          label: "Learn",
          href: "/learn",
          description: "Guided openagentui courses",
          external: false,
        },
      ]
    : []),
  {
    slug: "playground",
    label: "Playground",
    href: "/playground",
    description: "Interactive playground",
    external: false,
  },
  ...PRODUCTS.filter((p): p is Product & { slug: string } => !!p.slug),
];

export type NavGlyphKind =
  | "elements"
  | "design"
  | "react"
  | "native"
  | "ink"
  | "vue"
  | "playground"
  | "shimmer"
  | "heat"
  | "frame"
  | "o11y"
  | "examples"
  | "changelog"
  | "oss"
  | "packages"
  | "blog";

export type DropdownItem = {
  label: string;
  href: string;
  description: string;
  external: boolean;
  glyph?: NavGlyphKind;
};

export type NavGroup = {
  label: string;
  items: DropdownItem[];
};

export type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "mega";
      label: string;
      featured?: {
        label: string;
        item: DropdownItem;
        extraItems?: DropdownItem[];
      };
      groups: NavGroup[];
    };

export const NAV_ITEMS: NavItem[] = [
  { type: "link", label: "Docs", href: "/docs" },
  {
    type: "mega",
    label: "Products",
    featured: {
      label: "Extend",
      item: {
        label: "Elements",
        href: "/elements",
        description: "Multimodal UI. An extension, not a replacement.",
        external: false,
        glyph: "elements",
      },
      extraItems: [
        {
          label: "Design",
          href: "/design",
          description: "Every component, live.",
          external: false,
          glyph: "design",
        },
      ],
    },
    groups: [
      {
        label: "Platforms",
        items: [
          {
            label: "React",
            href: "/docs",
            description: "The web distribution",
            external: false,
            glyph: "react",
          },
          {
            label: "React Native",
            href: "/native",
            description: "Mobile apps on the same runtime",
            external: false,
            glyph: "native",
          },
          {
            label: "Ink",
            href: "/ink",
            description: "Terminal UIs on the same runtime",
            external: false,
            glyph: "ink",
          },
          {
            label: "Vue",
            href: "/docs/vue",
            description: "Vue and Nuxt apps on the same runtime",
            external: false,
            glyph: "vue",
          },
        ],
      },
      {
        label: "Try",
        items: [
          {
            label: "Playground",
            href: "/playground",
            description: "Try the library in the browser",
            external: false,
            glyph: "playground",
          },
        ],
      },
      {
        label: "Primitives",
        items: [
          {
            label: "tw-shimmer",
            href: "/tw-shimmer",
            description: "Shimmer loading states for Tailwind",
            external: false,
            glyph: "shimmer",
          },
          {
            label: "Heat Graph",
            href: "/heat-graph",
            description: "Headless activity heatmaps",
            external: false,
            glyph: "heat",
          },
          {
            label: "Safe Content Frame",
            href: "/safe-content-frame",
            description: "Sandboxed iframes for untrusted HTML",
            external: false,
            glyph: "frame",
          },
          {
            label: "react-o11y",
            href: "/react-o11y",
            description: "Span primitives for agent runs",
            external: false,
            glyph: "o11y",
          },
        ],
      },
    ],
  },
  {
    type: "mega",
    label: "Resources",
    featured: {
      label: "Explore",
      item: {
        label: "Examples",
        href: "/examples",
        description: "Full implementations and demos",
        external: false,
        glyph: "examples",
      },
    },
    groups: [
      {
        label: "Learn",
        items: [
          ...(isAiPlaygroundEnabled
            ? [
                {
                  label: "Interactive course",
                  href: "/learn",
                  description: "Build your first AI app, step by step",
                  external: false,
                  glyph: "playground" as const,
                },
              ]
            : []),
          {
            label: "Changelog",
            href: "/changelog",
            description: "Release notes and updates",
            external: false,
            glyph: "changelog",
          },
          {
            label: "Open source",
            href: "/oss",
            description: "Projects and repos in the open",
            external: false,
            glyph: "oss",
          },
          {
            label: "Packages",
            href: "/packages",
            description: "Every package we publish on npm",
            external: false,
            glyph: "packages",
          },
        ],
      },
      {
        label: "Community",
        items: [
          {
            label: "GitHub",
            href: REPO_URL,
            description: "Source, issues and pull requests",
            external: true,
            glyph: "oss",
          },
          {
            label: "Discussions",
            href: DISCUSSIONS_URL,
            description: "Questions, ideas and show-and-tell",
            external: true,
            glyph: "blog",
          },
          {
            label: "Contributing",
            href: `${REPO_URL}/blob/main/CONTRIBUTING.md`,
            description: "How to build, test and send a change",
            external: true,
            glyph: "packages",
          },
        ],
      },
    ],
  },
  { type: "link", label: "Components", href: "/elements" },
];
