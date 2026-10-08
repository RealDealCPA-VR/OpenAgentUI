"use client";

import { useState } from "react";
import Link from "next/link";
import { CopyButton } from "@/components/shared/copy-button";
import { cn } from "@/lib/utils";
import type { Backend } from "./backends";

export type BackendTab = Pick<
  Backend,
  "id" | "label" | "group" | "docs" | "packages" | "scaffold" | "caption"
> & {
  code: string;
  html: string;
};

const GROUPS: Backend["group"][] = [
  "Frameworks",
  "Protocols",
  "Bring your own",
];

export function BackendBuilder({ tabs }: { tabs: BackendTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id);
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0];
  if (!active) return null;

  const install = `npm install ${active.packages.join(" ")}`;

  return (
    <div className="grid gap-6 md:grid-cols-[minmax(0,13rem)_1fr] md:gap-12">
      <nav aria-label="Backend" className="flex flex-col gap-5">
        {GROUPS.map((group) => (
          <div key={group} className="flex flex-col gap-1.5">
            <p className="text-muted-foreground text-xs font-medium">{group}</p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col">
              {tabs
                .filter((tab) => tab.group === group)
                .map((tab) => {
                  const selected = tab.id === active.id;
                  return (
                    <li key={tab.id}>
                      <button
                        type="button"
                        aria-pressed={selected}
                        onClick={() => setActiveId(tab.id)}
                        className={cn(
                          "flex items-center gap-2 py-0.5 font-mono text-[12px] font-medium transition-colors",
                          selected
                            ? "text-foreground"
                            : "text-foreground/40 hover:text-foreground/75",
                        )}
                      >
                        <span
                          aria-hidden
                          className={cn(
                            "rounded-capsule size-1.5",
                            selected ? "bg-foreground" : "bg-transparent",
                          )}
                        />
                        {tab.label}
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="flex min-w-0 flex-col gap-3">
        <div className="bg-foreground/[0.025] dark:bg-foreground/[0.04] rounded-document flex min-w-0 flex-col">
          <div className="flex flex-col gap-2 px-6 pt-5 md:px-8">
            <CommandRow label="install" command={install} />
            {active.scaffold ? (
              <CommandRow label="or scaffold" command={active.scaffold} />
            ) : null}
          </div>
          <div className="relative">
            <div
              key={`code-${active.id}`}
              className="code-cascade min-w-0 overflow-x-auto px-6 pt-5 pb-2 font-mono text-[13px] leading-relaxed md:px-8 [&_.line]:pr-0! [&_.line]:pl-2.5! [&_code]:[font-variant-ligatures:none] [&_pre]:m-0 [&_pre]:bg-transparent! [&_pre]:whitespace-pre"
              dangerouslySetInnerHTML={{ __html: active.html }}
            />
            <CopyButton text={active.code} className="absolute top-4 right-4" />
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-6 pt-3 pb-5 font-mono text-[11px] md:px-8">
            <p className="text-muted-foreground">{active.caption}</p>
            <Link
              href={active.docs}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              open the {active.label} guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CommandRow({ label, command }: { label: string; command: string }) {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <span className="text-foreground/40 w-20 shrink-0 font-mono text-[11px]">
        {label}
      </span>
      <pre className="m-0 min-w-0 flex-1 overflow-x-auto bg-transparent font-mono text-[12.5px] [font-variant-ligatures:none]">
        <code>{command}</code>
      </pre>
      <CopyButton text={command} className="shrink-0" />
    </div>
  );
}
