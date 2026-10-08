import Link from "next/link";
import { CopyButton } from "@/components/shared/copy-button";
import { BASE_URL } from "@/lib/constants";

const ITEMS = [
  {
    title: "Docs as Markdown",
    body: "Every docs page has a .md twin, and llms.txt indexes them for a model's context window.",
    command: `${BASE_URL}/llms.txt`,
    href: "/llms.txt",
  },
  {
    title: "Docs over MCP",
    body: "The docs site serves an MCP endpoint. The CLI writes it into your editor's config.",
    command: "npx openagentui@latest mcp",
    href: "/docs/llm",
  },
  {
    title: "Skills for coding agents",
    body: "create adds agent skills to new projects, and agent launches Claude Code with them loaded.",
    command: "npx openagentui@latest agent",
    href: "/docs/cli",
  },
] as const;

export function AgentReady() {
  return (
    <ul className="grid gap-x-12 gap-y-8 md:grid-cols-3">
      {ITEMS.map((item) => (
        <li key={item.title} className="flex min-w-0 flex-col gap-3">
          <Link
            href={item.href}
            className="hover:text-foreground/70 text-[15px] font-medium transition-colors"
          >
            {item.title}
          </Link>
          <p className="text-muted-foreground text-[14px] leading-relaxed text-pretty">
            {item.body}
          </p>
          <div className="bg-foreground/[0.025] dark:bg-foreground/[0.04] rounded-document mt-auto flex min-w-0 items-center gap-2 py-1.5 pr-1.5 pl-3">
            <pre className="m-0 min-w-0 flex-1 overflow-x-auto bg-transparent font-mono text-[12px] [font-variant-ligatures:none]">
              <code>{item.command}</code>
            </pre>
            <CopyButton text={item.command} className="shrink-0" />
          </div>
        </li>
      ))}
    </ul>
  );
}
