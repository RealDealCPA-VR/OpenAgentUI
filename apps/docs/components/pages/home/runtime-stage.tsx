"use client";

import {
  useEffect,
  useRef,
  useState,
  type ComponentType,
  type FocusEvent,
} from "react";
import Link from "next/link";
import { ApprovalCardDemo } from "@/components/demo/elements/approval-card";
import { ChartDemo } from "@/components/demo/elements/chart";
import { ComposerVoiceDemo } from "@/components/demo/elements/composer-voice";
import { MessageAttachmentDemo } from "@/components/demo/elements/message-attachment";
import { MessageBranchesDemo } from "@/components/demo/elements/message-branches";
import { ReasoningPanelDemo } from "@/components/demo/elements/reasoning-panel";
import { SourcesDemo } from "@/components/demo/elements/sources";
import { StreamingTextDemo } from "@/components/demo/elements/streaming-text";
import { SuggestionsDemo } from "@/components/demo/elements/suggestions";
import { ToolCallDemo } from "@/components/demo/elements/tool-call";
import { cn } from "@/lib/utils";

const SLOT_MS = 7000;

const ACTS: {
  label: string;
  Component: ComponentType;
  maxWidth?: string;
  docs?: string;
}[] = [
  { label: "Streaming", Component: StreamingTextDemo },
  {
    label: "Reasoning",
    docs: "/elements/reasoning",
    Component: ReasoningPanelDemo,
  },
  { label: "Tools", docs: "/docs/tools", Component: ToolCallDemo },
  {
    label: "Approval",
    docs: "/docs/tools/tool-ui",
    Component: ApprovalCardDemo,
  },
  { label: "Sources", docs: "/elements/sources", Component: SourcesDemo },
  {
    label: "Attachments",
    docs: "/docs/guides/attachments",
    Component: MessageAttachmentDemo,
  },
  {
    label: "Branching",
    docs: "/docs/guides/branching",
    Component: MessageBranchesDemo,
  },
  {
    label: "Suggestions",
    docs: "/docs/guides/suggestions",
    Component: SuggestionsDemo,
  },
  {
    label: "Voice",
    docs: "/docs/guides/voice",
    Component: ComposerVoiceDemo,
    maxWidth: "34rem",
  },
  {
    label: "Generative UI",
    docs: "/docs/tools/generative-ui",
    Component: ChartDemo,
  },
];

function useAutoCycle(count: number) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const [epoch, setEpoch] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const frozen = !visible || hovered || pageHidden || reduceMotion;

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      (entries) => setVisible(entries.some((entry) => entry.isIntersecting)),
      { threshold: 0.3 },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = () => setReduceMotion(motion.matches);
    applyMotion();
    motion.addEventListener("change", applyMotion);

    const applyVisibility = () => setPageHidden(document.hidden);
    applyVisibility();
    document.addEventListener("visibilitychange", applyVisibility);

    return () => {
      motion.removeEventListener("change", applyMotion);
      document.removeEventListener("visibilitychange", applyVisibility);
    };
  }, []);

  useEffect(() => {
    if (frozen) return;
    const id = window.setTimeout(() => {
      setIndex((current) => (current + 1) % count);
      setEpoch((current) => current + 1);
    }, SLOT_MS);
    return () => window.clearTimeout(id);
  }, [frozen, index, epoch, count]);

  const jump = (next: number) => {
    setIndex(next);
    setEpoch((current) => current + 1);
  };

  return {
    rootRef,
    index,
    epoch,
    frozen,
    visible,
    jump,
    hold: {
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setHovered(true),
      onBlur: (event: FocusEvent<HTMLElement>) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setHovered(false);
        }
      },
    },
  };
}

function CycleProgress({
  playKey,
  frozen,
}: {
  playKey: string;
  frozen: boolean;
}) {
  return (
    <span className="bg-foreground/10 absolute inset-x-0 bottom-0 h-px overflow-hidden">
      <span
        key={playKey}
        className="block h-full origin-left bg-blue-500"
        style={
          frozen
            ? { transform: "scaleX(0)" }
            : { animation: `stage-progress ${SLOT_MS}ms linear forwards` }
        }
      />
    </span>
  );
}

export function RuntimeStage() {
  const cycle = useAutoCycle(ACTS.length);
  const act = ACTS[cycle.index]!;
  const Act = act.Component;

  return (
    <div
      ref={cycle.rootRef}
      className="grid gap-6 md:grid-cols-[minmax(0,20rem)_1fr] md:gap-12"
      {...cycle.hold}
    >
      <ol className="flex flex-wrap gap-x-5 gap-y-2 md:flex-col md:gap-y-3">
        {ACTS.map((item, index) => {
          const current = index === cycle.index;
          return (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => cycle.jump(index)}
                className={cn(
                  "relative flex items-baseline gap-2.5 pb-1.5 font-mono text-[11px] font-medium transition-colors",
                  current
                    ? "text-foreground"
                    : "text-foreground/35 hover:text-foreground/70",
                )}
              >
                <span className="tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.label}
                {current ? (
                  <CycleProgress
                    playKey={`${cycle.index}-${cycle.epoch}-${String(cycle.frozen)}`}
                    frozen={cycle.frozen}
                  />
                ) : null}
              </button>
            </li>
          );
        })}
      </ol>

      <div className="flex min-w-0 flex-col gap-3">
        <div className="bg-foreground/[0.025] dark:bg-foreground/[0.04] rounded-document flex min-h-[340px] flex-1 items-center justify-center overflow-hidden px-6 py-10 md:min-h-[380px] md:px-12">
          {cycle.visible ? (
            <div
              key={`${cycle.index}-${cycle.epoch}`}
              className="animate-in fade-in-0 w-full duration-500"
              style={{ maxWidth: act.maxWidth ?? "30rem" }}
            >
              <Act />
            </div>
          ) : null}
        </div>
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 font-mono text-[11px]">
          {act.docs ? (
            <Link
              key={`act-docs-${cycle.index}`}
              href={act.docs}
              className="animate-in fade-in-0 text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              read the {act.label} guide →
            </Link>
          ) : (
            <span />
          )}
          <Link
            href="/elements"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            All elements →
          </Link>
        </div>
      </div>
    </div>
  );
}
