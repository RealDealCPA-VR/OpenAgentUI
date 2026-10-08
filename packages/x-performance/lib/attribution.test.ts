import { afterEach, describe, expect, it } from "vitest";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  attributeRows,
  benchCoverage,
  benchFileOf,
  closure,
  importedPackages,
  planBenches,
  workspaceGraph,
} from "./attribution.mjs";

const pkgRoot = process.cwd();
const repoRoot = resolve(pkgRoot, "../..");

describe("importedPackages", () => {
  it("collects measured packages from bare and subpath imports", () => {
    const source = `
      import { resource } from "@openagentui/tap";
      import { shim } from '@openagentui/tap/react-shim';
      import { createRoot } from "react-dom/client";
      const utils = await import("openagentui-stream/utils");
      import { bench } from "vitest";
    `;
    expect([...importedPackages(source)].sort()).toEqual([
      "@openagentui/tap",
      "openagentui-stream",
    ]);
  });

  it("counts side-effect imports and skips statement-level type imports", () => {
    const source = `
      import "@openagentui/tap/react-shim";
      import type { Foo } from "@openagentui/core";
      import { type Bar, baz } from "@openagentui/store";
    `;
    expect([...importedPackages(source)].sort()).toEqual([
      "@openagentui/store",
      "@openagentui/tap",
    ]);
  });

  it("counts runtime re-exports and rejects relative imports", () => {
    expect([
      ...importedPackages('export { x } from "@openagentui/core";'),
    ]).toEqual(["@openagentui/core"]);
    expect([
      ...importedPackages('export type { T } from "@openagentui/core";'),
    ]).toEqual([]);
    expect(() =>
      importedPackages('import { helper } from "./helper";'),
    ).toThrow(/public package entries only/);
  });

  it("does not confuse a package with a longer name sharing a prefix", () => {
    expect(importedPackages('import x from "@openagentui/tapestry";')).toEqual(
      new Set(),
    );
  });
});

describe("closure", () => {
  it("follows workspace edges transitively", () => {
    const graph = new Map([
      ["core", ["store", "stream"]],
      ["store", ["tap"]],
      ["tap", []],
      ["stream", []],
    ]);
    expect([...closure(["core"], graph)].sort()).toEqual([
      "core",
      "store",
      "stream",
      "tap",
    ]);
    expect([...closure(["store"], graph)].sort()).toEqual(["store", "tap"]);
  });
});

describe("against the real workspace", () => {
  const graph = workspaceGraph(repoRoot);
  const coverage = benchCoverage(`${pkgRoot}/bench`, graph);

  it("reads the measured packages' workspace edges", () => {
    expect(graph.get("@openagentui/tap")).toEqual([]);
    expect(graph.get("@openagentui/store")).toEqual(["@openagentui/tap"]);
    expect([...(graph.get("@openagentui/core") ?? [])].sort()).toEqual([
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
    expect(
      [...(graph.get("@openagentui/react-markdown") ?? [])].sort(),
    ).toEqual(["@openagentui/react"]);
    expect([...(graph.get("@openagentui/react-pi") ?? [])].sort()).toEqual([
      "@openagentui/core",
      "@openagentui/react",
      "@openagentui/store",
      "openagentui-stream",
    ]);
    expect([...(graph.get("@openagentui/ai-sdk") ?? [])].sort()).toEqual([
      "@openagentui/core",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
  });

  it("attributes each bench file to the dists it exercises", () => {
    const covers = (file: string) => [...(coverage.get(file) ?? [])].sort();
    expect(covers("bench/accumulator.bench.ts")).toEqual([
      "openagentui-stream",
    ]);
    expect(covers("bench/data-stream.bench.ts")).toEqual([
      "openagentui-stream",
    ]);
    expect(covers("bench/tree.bench.tsx")).toEqual(["@openagentui/tap"]);
    expect(covers("bench/useResources.bench.tsx")).toEqual([
      "@openagentui/tap",
    ]);
    expect(covers("bench/from-thread-message-like.bench.ts")).toEqual([
      "@openagentui/core",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
    expect(covers("bench/thread-scaling.bench.tsx")).toEqual([
      "@openagentui/core",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
    expect(covers("bench/markdown-streaming.bench.tsx")).toEqual([
      "@openagentui/core",
      "@openagentui/react",
      "@openagentui/react-markdown",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
    expect(covers("bench/react-pi-message-projection.bench.ts")).toEqual([
      "@openagentui/core",
      "@openagentui/react",
      "@openagentui/react-pi",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
    expect(covers("bench/ai-sdk-toolkit.bench.ts")).toEqual([
      "@openagentui/ai-sdk",
      "@openagentui/core",
      "@openagentui/store",
      "@openagentui/tap",
      "openagentui-stream",
    ]);
  });

  it("plans a core change as its own benches plus three controls", () => {
    expect(planBenches(coverage, ["@openagentui/core"])).toEqual({
      measured: [
        "bench/ai-sdk-toolkit.bench.ts",
        "bench/external-message-conversion.bench.ts",
        "bench/from-thread-message-like.bench.ts",
        "bench/interactable-array-patches.bench.ts",
        "bench/markdown-streaming.bench.tsx",
        "bench/react-langgraph.bench.ts",
        "bench/react-pi-message-projection.bench.ts",
        "bench/thread-scaling.bench.tsx",
      ],
      controls: [
        "bench/accumulator.bench.ts",
        "bench/data-stream.bench.ts",
        "bench/sse-fragmentation.bench.ts",
      ],
      unchanged: 6,
    });
  });

  it("splits rows into measured and control by the changed dists", () => {
    const rows = [
      { id: "bench/accumulator.bench.ts > g > 100 deltas" },
      { id: "bench/tree.bench.tsx > g > react" },
      { id: "bench/from-thread-message-like.bench.ts > g > 1 text parts" },
    ];
    const out = attributeRows(rows, coverage, ["@openagentui/tap"]);
    expect(out.map((r) => [r.measured, r.touched])).toEqual([
      [false, []],
      [true, ["@openagentui/tap"]],
      [true, ["@openagentui/tap"]],
    ]);
    expect(attributeRows(rows, coverage, []).every((r) => !r.measured)).toBe(
      true,
    );
  });
});

describe("benchCoverage", () => {
  const dirs: string[] = [];
  afterEach(() => {
    for (const dir of dirs.splice(0))
      rmSync(dir, { recursive: true, force: true });
  });

  it("walks nested bench directories and keys entries the way row ids are prefixed", () => {
    const dir = mkdtempSync(join(tmpdir(), "aui-perf-bench-"));
    dirs.push(dir);
    mkdirSync(join(dir, "nested"));
    writeFileSync(
      join(dir, "top.bench.ts"),
      'import { x } from "@openagentui/tap";',
    );
    writeFileSync(
      join(dir, "nested", "deep.bench.tsx"),
      'import "@openagentui/store";',
    );
    writeFileSync(join(dir, "helper.ts"), 'import "@openagentui/core";');
    const graph = new Map([
      ["@openagentui/tap", []],
      ["@openagentui/store", ["@openagentui/tap"]],
    ]);
    const coverage = benchCoverage(dir, graph);
    expect([...coverage.keys()]).toEqual([
      "bench/nested/deep.bench.tsx",
      "bench/top.bench.ts",
    ]);
    expect(
      [...(coverage.get("bench/nested/deep.bench.tsx") ?? [])].sort(),
    ).toEqual(["@openagentui/store", "@openagentui/tap"]);
  });

  it("refuses rows whose bench file has no coverage entry", () => {
    expect(() =>
      attributeRows([{ id: "bench/unknown.bench.ts > g > x" }], new Map(), []),
    ).toThrow(/no coverage entry for bench\/unknown\.bench\.ts/);
  });
});

describe("planBenches", () => {
  const coverage = new Map([
    ["bench/a.bench.ts", new Set(["s"])],
    ["bench/b.bench.ts", new Set(["s"])],
    ["bench/c.bench.ts", new Set(["c", "s", "t"])],
    ["bench/d.bench.ts", new Set(["t"])],
    ["bench/e.bench.ts", new Set(["t"])],
  ]);

  it("runs the files on a changed dist and the first three on unchanged ones", () => {
    expect(planBenches(coverage, ["c"])).toEqual({
      measured: ["bench/c.bench.ts"],
      controls: ["bench/a.bench.ts", "bench/b.bench.ts", "bench/d.bench.ts"],
      unchanged: 4,
    });
  });

  it("runs every file on an unchanged dist as a control with all", () => {
    expect(planBenches(coverage, ["c"], { all: true }).controls).toEqual([
      "bench/a.bench.ts",
      "bench/b.bench.ts",
      "bench/d.bench.ts",
      "bench/e.bench.ts",
    ]);
  });

  it("measures nothing when no measured dist changed", () => {
    expect(planBenches(coverage, []).measured).toEqual([]);
  });
});

describe("benchFileOf", () => {
  it("returns the id prefix up to the first group separator", () => {
    expect(benchFileOf("bench/tree.bench.tsx > a > b > c")).toBe(
      "bench/tree.bench.tsx",
    );
  });
});
