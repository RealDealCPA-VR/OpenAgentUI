"use client";

import { useState } from "react";
import { CopyButton } from "@/components/shared/copy-button";
import { cn } from "@/lib/utils";

const MODES = [
  {
    id: "new",
    label: "New app",
    note: "Scaffolds a Next.js app with a working thread.",
    args: "create",
  },
  {
    id: "existing",
    label: "Existing app",
    note: "Adds the runtime and the thread component to your project.",
    args: "init",
  },
  {
    id: "native",
    label: "Expo",
    note: "Scaffolds an Expo app on the React Native bindings.",
    args: "create --example with-expo",
  },
  {
    id: "ink",
    label: "Terminal",
    note: "Scaffolds a React Ink app that chats in the terminal.",
    args: "create --ink",
  },
] as const;

const RUNNERS = [
  { id: "npm", run: "npx" },
  { id: "pnpm", run: "pnpm dlx" },
  { id: "yarn", run: "yarn dlx" },
  { id: "bun", run: "bunx" },
] as const;

function Tabs<T extends { id: string }>({
  items,
  value,
  onChange,
  label,
  render,
}: {
  items: readonly T[];
  value: string;
  onChange: (id: string) => void;
  label: string;
  render: (item: T) => string;
}) {
  return (
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-x-4">
      {items.map((item) => {
        const selected = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => onChange(item.id)}
            className={cn(
              "relative pb-1.5 font-mono text-[11px] font-medium transition-colors",
              selected
                ? "text-foreground"
                : "text-foreground/35 hover:text-foreground/70",
            )}
          >
            {render(item)}
            {selected ? (
              <span className="bg-foreground absolute inset-x-0 bottom-0 h-px" />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}

export function InstallBar() {
  const [modeId, setModeId] = useState<string>("new");
  const [runnerId, setRunnerId] = useState<string>("npm");
  const mode = MODES.find((m) => m.id === modeId) ?? MODES[0];
  const runner = RUNNERS.find((r) => r.id === runnerId) ?? RUNNERS[0];
  const command = `${runner.run} openagentui@latest ${mode.args}`;

  return (
    <div className="bg-foreground/[0.025] dark:bg-foreground/[0.04] rounded-document flex flex-col gap-5 px-5 py-6 md:px-7">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <Tabs
          items={MODES}
          value={mode.id}
          onChange={setModeId}
          label="Project type"
          render={(m) => m.label}
        />
        <Tabs
          items={RUNNERS}
          value={runner.id}
          onChange={setRunnerId}
          label="Package manager"
          render={(r) => r.id}
        />
      </div>

      <div className="flex items-center gap-3">
        <span aria-hidden className="text-foreground/30 font-mono text-[15px]">
          $
        </span>
        <pre className="m-0 min-w-0 flex-1 overflow-x-auto bg-transparent font-mono text-[15px] tracking-[-0.01em] [font-variant-ligatures:none] md:text-[16px]">
          <code>{command}</code>
        </pre>
        <CopyButton text={command} />
      </div>

      <p className="text-muted-foreground text-[13px] leading-relaxed">
        {mode.note}
      </p>
    </div>
  );
}
