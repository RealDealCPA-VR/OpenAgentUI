import { cacheLife } from "next/cache";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import { AgentReady } from "@/components/pages/home/agent-ready";
import {
  BackendBuilder,
  type BackendTab,
} from "@/components/pages/home/backend-builder";
import { BACKENDS } from "@/components/pages/home/backends";
import { HomeDemo } from "@/components/pages/home/demo";
import { Hero } from "@/components/pages/home/hero";
import { PackageIndex } from "@/components/pages/home/package-index";
import { PrimitivesAnatomy } from "@/components/pages/home/primitives-anatomy";
import { RuntimeStage } from "@/components/pages/home/runtime-stage";
import { CopyButton } from "@/components/shared/copy-button";
import { PageFrame } from "@/components/shared/page-frame";
import { typeDeck, typeSection } from "@/components/shared/type";
import { Button } from "@/components/ui/button";
import { highlightElementSource } from "@/lib/element-source";
import { REPO_URL } from "@/lib/constants";

async function getReactVersion(): Promise<string | null> {
  "use cache";
  cacheLife("hours");
  try {
    const raw = await fs.readFile(
      path.join(
        process.cwd(),
        "node_modules",
        "@openagentui",
        "react",
        "package.json",
      ),
      "utf8",
    );
    const version = (JSON.parse(raw) as { version?: unknown }).version;
    return typeof version === "string" ? version : null;
  } catch {
    return null;
  }
}

function Section({
  id,
  fig,
  title,
  deck,
  aside,
  children,
}: {
  id: string;
  fig: string;
  title: string;
  deck: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="border-foreground/10 flex scroll-mt-20 flex-col gap-8 border-t pt-10"
    >
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <div className="flex max-w-[44rem] flex-col gap-2.5">
          <p className="text-muted-foreground font-mono text-[11px]">
            fig. {fig}
          </p>
          <h2 id={`${id}-heading`} className={typeSection}>
            {title}
          </h2>
          <p className={typeDeck}>{deck}</p>
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}

const asideLink =
  "text-muted-foreground hover:text-foreground pb-1.5 font-mono text-[11px] font-medium transition-colors";

export default async function HomePage() {
  const [version, highlighted] = await Promise.all([
    getReactVersion(),
    Promise.all(
      BACKENDS.map((backend) => highlightElementSource(backend.code, "tsx")),
    ),
  ]);

  const backendTabs: BackendTab[] = BACKENDS.map((backend, index) => ({
    id: backend.id,
    label: backend.label,
    group: backend.group,
    docs: backend.docs,
    packages: backend.packages,
    scaffold: backend.scaffold,
    caption: backend.caption,
    code: backend.code,
    html: highlighted[index]!,
  }));

  return (
    <PageFrame pad="heroBody" className="relative z-2 flex flex-col">
      <div className="flex flex-col gap-10 md:gap-14">
        <Hero version={version} />
        <figure className="m-0 flex flex-col gap-3">
          <HomeDemo />
          <figcaption className="text-muted-foreground font-mono text-[11px]">
            fig. 01 · the thread from the docs, running live. Type into it.
          </figcaption>
        </figure>
      </div>

      <div className="mt-16 flex flex-col gap-16 md:mt-20 md:gap-20">
        <Section
          id="backends"
          fig="02"
          title="One client for whichever backend you run."
          deck="Pick the backend. The panel shows the packages, a scaffold command when one exists, and the provider code from its quickstart."
          aside={
            <Link href="/docs/runtimes/pick-a-runtime" className={asideLink}>
              Compare runtimes →
            </Link>
          }
        >
          <BackendBuilder tabs={backendTabs} />
        </Section>

        <Section
          id="runtime"
          fig="03"
          title="The runtime owns the hard parts of a chat."
          deck="Streaming, tool calls, approvals, branching, attachments and voice are runtime state, so every component reads the same source of truth."
        >
          <RuntimeStage />
        </Section>

        <Section
          id="primitives"
          fig="04"
          title="Composable down to the primitive."
          deck="The UI is unstyled primitives plus components the CLI copies into your repo. Restyle a part or replace it without forking the library."
          aside={
            <Link href="/elements/thread" className={asideLink}>
              Customize the thread →
            </Link>
          }
        >
          <PrimitivesAnatomy />
        </Section>

        <Section
          id="packages"
          fig="05"
          title="Every package in the monorepo."
          deck="Install the core and add only the adapters, renderers and platforms your app uses."
        >
          <PackageIndex />
        </Section>

        <Section
          id="agents"
          fig="06"
          title="Readable by your coding agent."
          deck="The docs are published in formats a model can load, so an agent can write OpenAgentUI code against the current API."
        >
          <AgentReady />
        </Section>

        <section className="border-foreground/10 grid gap-6 border-t pt-10 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-12">
          <div className="flex flex-col gap-2.5">
            <h2 className={typeSection}>Start in the docs.</h2>
            <p className="text-muted-foreground max-w-[36ch] text-[14px] leading-relaxed">
              The command scaffolds a working thread. The docs take it from
              there.
            </p>
          </div>

          <div className="bg-foreground/[0.025] dark:bg-foreground/[0.04] rounded-document flex min-w-0 flex-col gap-7 px-6 py-8 md:px-10 md:py-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="font-mono text-[1.125rem] tracking-[-0.01em] break-all [font-variant-ligatures:none] md:text-[1.375rem]">
                npx openagentui@latest create
              </p>
              <CopyButton text="npx openagentui@latest create" />
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button nativeButton={false} render={<Link href="/docs" />}>
                Read the docs
              </Button>
              <a
                href={`${REPO_URL}/blob/main/CONTRIBUTING.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-[13px] transition-colors"
              >
                Contribute on GitHub
              </a>
            </div>
            <p className="text-muted-foreground font-mono text-[11px] tracking-wide">
              @openagentui/react
              {version && <span>@{version}</span>} · MIT License
            </p>
          </div>
        </section>
      </div>
    </PageFrame>
  );
}
