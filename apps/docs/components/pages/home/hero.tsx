"use client";

import { Fragment } from "react";
import Link from "next/link";
import { analytics } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "@/components/icons/github";
import { InstallBar } from "@/components/pages/home/install-bar";
import { typeDeck, typeHero } from "@/components/shared/type";
import { REPO_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const HEADLINE_WORDS = ["Open", "source", "UI", "for", "AI", "agents."];

const FACTS = [
  { label: "License", value: "MIT" },
  { label: "Platforms", value: "React · React Native · Ink · Vue" },
  { label: "Language", value: "TypeScript" },
] as const;

export function Hero({ version }: { version: string | null }) {
  return (
    <section className="relative grid gap-10 pb-4 md:pb-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] lg:items-end lg:gap-16">
      <div className="relative flex flex-col gap-4">
        <div className="flex flex-col gap-3 pb-1">
          <h1 className={cn(typeHero, "max-w-[16ch]")}>
            {HEADLINE_WORDS.map((word, index) => (
              <Fragment key={index}>
                <span
                  className="hero-word"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  <span
                    className="hero-word-ink"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {word}
                  </span>
                </span>{" "}
              </Fragment>
            ))}
            <span
              aria-hidden
              className="hero-caret ml-1 inline-block h-[0.72em] w-[3px] bg-blue-500 align-baseline"
            />
          </h1>
          <p
            className={cn(typeDeck, "hero-rise max-w-[46ch]")}
            style={{ animationDelay: "550ms" }}
          >
            Composable React primitives, a streaming runtime, and adapters for
            AI SDK, LangGraph, AG-UI, A2A and more. Every component is source
            you own, and nothing on this page needs an account.
          </p>
        </div>

        <div
          className="hero-rise flex flex-wrap items-center gap-3"
          style={{ animationDelay: "700ms" }}
        >
          <Button
            nativeButton={false}
            render={
              <Link
                href="/docs/installation"
                onClick={() => analytics.cta.clicked("get_started", "hero")}
              />
            }
          >
            Read the quick start
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={
              <a href={REPO_URL} target="_blank" rel="noopener noreferrer" />
            }
          >
            <GitHubIcon className="size-3.5" />
            View source
          </Button>
        </div>

        <dl
          className="hero-rise text-muted-foreground mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[13px]"
          style={{ animationDelay: "850ms" }}
        >
          {FACTS.map((fact) => (
            <div key={fact.label} className="flex items-baseline gap-2">
              <dt className="text-foreground/45">{fact.label}</dt>
              <dd className="text-foreground/80">{fact.value}</dd>
            </div>
          ))}
          {version ? (
            <div className="flex items-baseline gap-2">
              <dt className="text-foreground/45">Latest</dt>
              <dd className="text-foreground/80 font-mono text-[12px] [font-variant-ligatures:none]">
                @openagentui/react@{version}
              </dd>
            </div>
          ) : null}
        </dl>
      </div>

      <div className="hero-rise" style={{ animationDelay: "650ms" }}>
        <InstallBar />
      </div>
    </section>
  );
}
