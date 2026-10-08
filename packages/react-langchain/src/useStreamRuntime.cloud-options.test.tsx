// @vitest-environment jsdom

import { renderHook } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { AssistantCloud } from "openagentui-cloud";
import type { AssistantRuntime } from "@openagentui/core";
import type { UseStreamRuntimeOptions } from "./types";

const mocks = vi.hoisted(() => ({
  cloudAdapter: {},
  runtime: {},
  useCloudThreadListAdapter: vi.fn(() => ({})),
  useRemoteThreadListRuntime: vi.fn(() => ({})),
}));

vi.mock("@openagentui/core/react", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@openagentui/core/react")>()),
  useCloudThreadListAdapter: mocks.useCloudThreadListAdapter,
  useRemoteThreadListRuntime: mocks.useRemoteThreadListRuntime,
}));

vi.mock("@openagentui/store", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@openagentui/store")>()),
  useAui: () => ({
    threadListItem: {
      source: null,
      getState: () => ({ externalId: undefined }),
      initialize: vi.fn(),
    },
  }),
}));

import { LANGCHAIN_SDK } from "./sdkIdentity";
import { useStreamRuntime } from "./useStreamRuntime";

describe("useStreamRuntime Cloud options", () => {
  it("forwards the Cloud scope to the thread-list adapter", () => {
    const cloud = {} as AssistantCloud;
    mocks.useCloudThreadListAdapter.mockReturnValue(mocks.cloudAdapter);
    mocks.useRemoteThreadListRuntime.mockReturnValue(
      mocks.runtime as AssistantRuntime,
    );

    const options = {
      apiUrl: "/api",
      assistantId: "assistant-1",
      cloud,
      scopeId: "workspace-1",
    } satisfies UseStreamRuntimeOptions;

    renderHook(() => useStreamRuntime(options));

    expect(mocks.useCloudThreadListAdapter).toHaveBeenCalledWith(
      expect.objectContaining({
        cloud,
        scopeId: "workspace-1",
        sdk: LANGCHAIN_SDK,
      }),
    );
  });
});
