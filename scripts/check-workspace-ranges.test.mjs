import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import test from "node:test";
import {
  dedupesWithCaret,
  findDriftingPeerRanges,
  findNarrowWorkspaceRanges,
  findPrivatePeerCopies,
  runCheck,
} from "./check-workspace-ranges.mjs";

const repoRoot = path.resolve(import.meta.dirname, "..");

function createWorkspace(manifests) {
  const root = mkdtempSync(path.join(tmpdir(), "aui-workspace-ranges-"));
  writeFileSync(
    path.join(root, "pnpm-workspace.yaml"),
    "packages:\n  - packages/*\n\nlinkWorkspacePackages: true\n",
  );
  for (const [dir, manifest] of manifests) {
    mkdirSync(path.join(root, "packages", dir), { recursive: true });
    writeFileSync(
      path.join(root, "packages", dir, "package.json"),
      JSON.stringify(manifest),
    );
  }
  return root;
}

function consumer(dependencies, field = "dependencies") {
  return {
    manifest: "packages/consumer/package.json",
    pkg: { name: "@fixture/consumer", version: "1.0.0", [field]: dependencies },
  };
}

const dep = {
  manifest: "packages/dep/package.json",
  pkg: { name: "@fixture/dep", version: "1.0.0" },
};

test("only ranges that unify with a caret are accepted", () => {
  for (const range of ["workspace:^", "^1.0.0", "*"]) {
    assert.equal(dedupesWithCaret(range), true, range);
  }
  for (const range of [
    "workspace:*",
    "workspace:~",
    "workspace:1.0.0",
    "1.0.0",
    "~1.0.0",
    "=1.0.0",
    ">=1.0.0 <1.1.0",
  ]) {
    assert.equal(dedupesWithCaret(range), false, range);
  }
});

test("a pin is reported whichever spelling it uses", () => {
  const problems = findNarrowWorkspaceRanges([
    dep,
    {
      manifest: "packages/protocol/package.json",
      pkg: {
        name: "@fixture/protocol",
        version: "1.0.0",
        dependencies: { "@fixture/dep": "workspace:*" },
      },
    },
    {
      manifest: "packages/literal/package.json",
      pkg: {
        name: "@fixture/literal",
        version: "1.0.0",
        peerDependencies: { "@fixture/dep": "1.0.0" },
      },
    },
    {
      manifest: "packages/tilde/package.json",
      pkg: {
        name: "@fixture/tilde",
        version: "1.0.0",
        optionalDependencies: { "@fixture/dep": "~1.0.0" },
      },
    },
  ]);

  assert.deepEqual(
    problems.map(({ name, field, range }) => ({ name, field, range })),
    [
      {
        name: "@fixture/protocol",
        field: "dependencies",
        range: "workspace:*",
      },
      { name: "@fixture/literal", field: "peerDependencies", range: "1.0.0" },
      {
        name: "@fixture/tilde",
        field: "optionalDependencies",
        range: "~1.0.0",
      },
    ],
  );
});

test("an aliased key does not hide a workspace protocol range", () => {
  const problems = findNarrowWorkspaceRanges([
    dep,
    consumer({ "dep-alias": "workspace:*" }),
  ]);

  assert.deepEqual(
    problems.map(({ dependency, range }) => ({ dependency, range })),
    [{ dependency: "dep-alias", range: "workspace:*" }],
  );
});

test("a pinned dependency outside the workspace is not this check's business", () => {
  assert.deepEqual(
    findNarrowWorkspaceRanges([
      dep,
      consumer({ "react-dom": "19.2.3", "ts-alias": "npm:typescript@5.9.3" }),
    ]),
    [],
  );
});

test("fields that never ship and private packages are exempt", () => {
  const problems = findNarrowWorkspaceRanges([
    dep,
    {
      manifest: "packages/tooling/package.json",
      pkg: {
        name: "@fixture/tooling",
        version: "1.0.0",
        devDependencies: { "@fixture/dep": "workspace:*" },
      },
    },
    {
      manifest: "packages/internal/package.json",
      pkg: {
        name: "@fixture/internal",
        private: true,
        dependencies: { "@fixture/dep": "workspace:*" },
      },
    },
  ]);

  assert.deepEqual(problems, []);
});

const bare = (name, version) => ({
  manifest: `packages/${name.split("/").pop()}/package.json`,
  pkg: { name, version },
});

test("a peer on a package this workspace releases must ride the protocol", () => {
  const problems = findDriftingPeerRanges([
    bare("@openagentui/store", "0.3.11"),
    bare("@openagentui/tap", "0.9.15"),
    bare("@openagentui/react", "0.15.17"),
    {
      manifest: "packages/core/package.json",
      pkg: {
        name: "@openagentui/core",
        version: "0.3.16",
        peerDependencies: {
          "@openagentui/store": "^0.3.0",
          "@openagentui/tap": "workspace:^",
          react: "^18 || ^19",
        },
      },
    },
    {
      manifest: "packages/react-lexical/package.json",
      pkg: {
        name: "@openagentui/react-lexical",
        version: "0.2.11",
        peerDependencies: {
          "@openagentui/react": "^0.15.0",
          "@openagentui/store": "*",
        },
      },
    },
  ]);

  assert.deepEqual(
    problems.map(({ name, dependency, range }) => ({
      name,
      dependency,
      range,
    })),
    [
      {
        name: "@openagentui/core",
        dependency: "@openagentui/store",
        range: "^0.3.0",
      },
      {
        name: "@openagentui/react-lexical",
        dependency: "@openagentui/store",
        range: "*",
      },
    ],
  );
});

test("a first-party peer nobody classified is enforced, not exempt", () => {
  const problems = findDriftingPeerRanges([
    bare("openagentui-stream", "0.3.40"),
    {
      manifest: "packages/adapter/package.json",
      pkg: {
        name: "@openagentui/adapter",
        version: "1.0.0",
        peerDependencies: { "openagentui-stream": "^0.3.40" },
      },
    },
  ]);

  assert.deepEqual(
    problems.map(({ dependency, range }) => ({ dependency, range })),
    [{ dependency: "openagentui-stream", range: "^0.3.40" }],
  );
});

test("an ordinary range and a private package are not this rule's business", () => {
  assert.deepEqual(
    findDriftingPeerRanges([
      bare("@openagentui/store", "0.3.11"),
      {
        manifest: "packages/react/package.json",
        pkg: {
          name: "@openagentui/react",
          version: "0.15.17",
          dependencies: { "@openagentui/store": "^0.3.11" },
        },
      },
      {
        manifest: "packages/ui/package.json",
        pkg: {
          name: "@openagentui/ui",
          private: true,
          peerDependencies: { "@openagentui/store": "^0.3.0" },
        },
      },
    ]),
    [],
  );
});

const cloud = {
  manifest: "packages/cloud/package.json",
  pkg: {
    name: "openagentui-cloud",
    version: "0.2.2",
    peerDependencies: { ai: "^6.0.0 || ^7.0.0" },
    peerDependenciesMeta: { ai: { optional: true } },
  },
};

test("a private copy of a workspace package's peer is reported from either installed field", () => {
  const problems = findPrivatePeerCopies([
    cloud,
    {
      manifest: "packages/ai-sdk/package.json",
      pkg: {
        name: "@openagentui/ai-sdk",
        version: "0.0.7",
        dependencies: { ai: "^7.0.101", "openagentui-cloud": "workspace:^" },
      },
    },
    {
      manifest: "packages/telemetry/package.json",
      pkg: {
        name: "@fixture/telemetry",
        version: "1.0.0",
        dependencies: { "openagentui-cloud": "workspace:^" },
        optionalDependencies: { ai: "^7.0.0" },
      },
    },
  ]);

  assert.deepEqual(problems, [
    {
      manifest: "packages/ai-sdk/package.json",
      name: "@openagentui/ai-sdk",
      field: "dependencies",
      dependency: "ai",
      range: "^7.0.101",
      peerOf: "openagentui-cloud",
    },
    {
      manifest: "packages/telemetry/package.json",
      name: "@fixture/telemetry",
      field: "optionalDependencies",
      dependency: "ai",
      range: "^7.0.0",
      peerOf: "openagentui-cloud",
    },
  ]);
});

test("a peer declared further down the workspace tree is reported once per private copy", () => {
  const problems = findPrivatePeerCopies([
    cloud,
    {
      manifest: "packages/ai-sdk/package.json",
      pkg: {
        name: "@openagentui/ai-sdk",
        version: "0.0.8",
        dependencies: { "openagentui-cloud": "workspace:^" },
      },
    },
    {
      manifest: "packages/telemetry/package.json",
      pkg: {
        name: "@fixture/telemetry",
        version: "1.0.0",
        dependencies: { "openagentui-cloud": "workspace:^" },
      },
    },
    {
      manifest: "packages/react-ai-sdk/package.json",
      pkg: {
        name: "@openagentui/react-ai-sdk",
        version: "1.4.13",
        dependencies: {
          "@openagentui/ai-sdk": "workspace:^",
          "@fixture/telemetry": "workspace:^",
          ai: "^7.0.101",
        },
      },
    },
  ]);

  assert.deepEqual(problems, [
    {
      manifest: "packages/react-ai-sdk/package.json",
      name: "@openagentui/react-ai-sdk",
      field: "dependencies",
      dependency: "ai",
      range: "^7.0.101",
      peerOf: "openagentui-cloud",
    },
  ]);
});

test("a shared peer, a peered workspace package, a first-party peer, and a private package are not this rule's business", () => {
  assert.deepEqual(
    findPrivatePeerCopies([
      cloud,
      bare("@openagentui/store", "0.3.14"),
      {
        manifest: "packages/core/package.json",
        pkg: {
          name: "@openagentui/core",
          version: "0.3.20",
          peerDependencies: { "@openagentui/store": "workspace:^" },
        },
      },
      {
        manifest: "packages/ai-sdk/package.json",
        pkg: {
          name: "@openagentui/ai-sdk",
          version: "0.0.8",
          dependencies: {
            "@openagentui/core": "workspace:^",
            "@openagentui/store": "workspace:^",
            "openagentui-cloud": "workspace:^",
          },
          peerDependencies: { ai: "^7.0.101" },
          devDependencies: { ai: "^7.0.101" },
        },
      },
      {
        manifest: "packages/relay/package.json",
        pkg: {
          name: "@fixture/relay",
          version: "1.0.0",
          dependencies: { ai: "^7.0.101" },
          peerDependencies: { "openagentui-cloud": "workspace:^" },
        },
      },
      {
        manifest: "examples/with-cloud/package.json",
        pkg: {
          name: "with-cloud",
          private: true,
          dependencies: { ai: "^7.0.101", "openagentui-cloud": "workspace:^" },
        },
      },
    ]),
    [],
  );
});

test("runCheck reads every workspace glob", () => {
  const root = createWorkspace([
    ["dep", { name: "@fixture/dep", version: "1.0.0" }],
    [
      "consumer",
      {
        name: "@fixture/consumer",
        version: "1.0.0",
        dependencies: { "@fixture/dep": "workspace:*" },
      },
    ],
  ]);
  try {
    const { packageCount, problems } = runCheck(root);
    assert.equal(packageCount, 2);
    assert.deepEqual(problems, [
      {
        manifest: "packages/consumer/package.json",
        name: "@fixture/consumer",
        field: "dependencies",
        dependency: "@fixture/dep",
        range: "workspace:*",
      },
    ]);
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

function runExecutable(root) {
  return spawnSync(
    process.execPath,
    [path.join(repoRoot, "scripts", "check-workspace-ranges.mjs")],
    {
      encoding: "utf8",
      env: { ...process.env, WORKSPACE_RANGE_CHECK_ROOT: root },
    },
  );
}

test("the executable reports success and exits 0", () => {
  const root = createWorkspace([
    ["dep", { name: "@fixture/dep", version: "1.0.0" }],
    [
      "consumer",
      {
        name: "@fixture/consumer",
        version: "1.0.0",
        dependencies: { "@fixture/dep": "workspace:^" },
      },
    ],
  ]);
  try {
    const result = runExecutable(root);
    assert.equal(result.status, 0, result.stderr);
    assert.match(
      result.stdout,
      /All published workspace dependencies deduplicate and every first-party peer tracks the release train\./,
      "the guard produced no verdict, so main() never ran",
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("the executable reports a hand-written first-party peer floor and exits 1", () => {
  const root = createWorkspace([
    ["tap", { name: "@openagentui/tap", version: "0.9.15" }],
    [
      "core",
      {
        name: "@openagentui/core",
        version: "0.3.16",
        peerDependencies: { "@openagentui/tap": "^0.9.0" },
      },
    ],
  ]);
  try {
    const result = runExecutable(root);
    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /packages\/core\/package\.json: "@openagentui\/core" peerDependencies\["@openagentui\/tap"\] is "\^0\.9\.0"/,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("the executable reports the offending dependency and exits 1", () => {
  const root = createWorkspace([
    ["dep", { name: "@fixture/dep", version: "1.0.0" }],
    [
      "consumer",
      {
        name: "@fixture/consumer",
        version: "1.0.0",
        dependencies: { "@fixture/dep": "1.0.0" },
      },
    ],
  ]);
  try {
    const result = runExecutable(root);
    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /packages\/consumer\/package\.json: "@fixture\/consumer" dependencies\["@fixture\/dep"\] is "1\.0\.0"/,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});

test("the executable reports a private copy of a workspace package's peer and exits 1", () => {
  const root = createWorkspace([
    ["cloud", cloud.pkg],
    [
      "ai-sdk",
      {
        name: "@openagentui/ai-sdk",
        version: "0.0.7",
        dependencies: { ai: "^7.0.101", "openagentui-cloud": "workspace:^" },
      },
    ],
  ]);
  try {
    const result = runExecutable(root);
    assert.equal(result.status, 1);
    assert.match(
      result.stderr,
      /packages\/ai-sdk\/package\.json: "@openagentui\/ai-sdk" dependencies\["ai"\] is "\^7\.0\.101", a peer of "openagentui-cloud"/,
    );
  } finally {
    rmSync(root, { recursive: true, force: true });
  }
});
