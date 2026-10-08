// @vitest-environment jsdom

import { getEventListeners } from "node:events";
import { describe, expect, it, vi } from "vitest";
import { flushTapSync, resource, useResource } from "@openagentui/tap";
import {
  attachTransformScopes,
  AuiConfig,
  createAssistantClient,
} from "@openagentui/store/client";
import { useAssistantClientDestroySignal } from "@openagentui/store/internal";
import { inMemoryThreadListTransformScopes } from "@openagentui/core/store";
import type { AssistantCloud } from "openagentui-cloud";
import type { RemoteThreadListAdapter } from "@openagentui/core";
import type { ThreadHistoryAdapter } from "@openagentui/core";

const load = vi.hoisted(() => vi.fn(async () => ({ messages: [] })));
const append = vi.hoisted(() => vi.fn(async () => {}));

const mocks = vi.hoisted(() => {
  const history: ThreadHistoryAdapter = {
    load: async () => ({ messages: [] }),
    append: async () => {},
    withFormat: () => ({
      load,
      append,
      delete: async () => {},
      reportTelemetry: () => {},
    }),
  };
  const adapter: RemoteThreadListAdapter = {
    list: vi.fn(async () => ({
      threads: [
        { status: "regular" as const, remoteId: "t1", title: "One" },
        { status: "regular" as const, remoteId: "t2", title: "Two" },
      ],
    })),
    initialize: vi.fn(async (threadId: string) => ({
      remoteId: threadId,
      externalId: undefined,
    })),
    rename: vi.fn(async () => {}),
    archive: vi.fn(async () => {}),
    unarchive: vi.fn(async () => {}),
    delete: vi.fn(async () => {}),
    generateTitle: vi.fn(
      async () =>
        new ReadableStream({
          start(controller) {
            controller.close();
          },
        }) as never,
    ),
    fetch: vi.fn(async (id: string) => ({
      status: "regular" as const,
      remoteId: id,
      externalId: undefined,
      title: id,
    })),
    unstable_useAdapters: function useAdapters() {
      return { history };
    },
  };
  return {
    adapter,
    useCloudThreadListAdapter: vi.fn(() => adapter),
  };
});

vi.mock("@openagentui/core/react", async (importOriginal) => ({
  ...(await importOriginal<typeof import("@openagentui/core/react")>()),
  useCloudThreadListAdapter: mocks.useCloudThreadListAdapter,
}));

import { AISDKThreads } from "./AISDKThreads";
import { createCancellableTransport } from "./__tests__/controlled-transport";
import { AI_SDK_SDK } from "./sdkIdentity";

describe("AISDKThreads cloud", () => {
  it("reloads history when switching a keyed cloud thread", async () => {
    const cloud = {} as AssistantCloud;
    const scopeId = "workspace-1";
    const handle = createAssistantClient(
      AuiConfig({
        threads: AISDKThreads({
          cloud,
          scopeId,
          threadId: "t1",
        }),
      }),
    );
    handle.subscribe(() => {});
    const aui = handle.getClient();
    await aui.threads.getLoadThreadsPromise();
    await vi.waitFor(() => {
      expect(handle.getClient().threads.getState().mainThreadId).toBe("t1");
    });
    await vi.waitFor(() => {
      expect(load).toHaveBeenCalled();
    });
    expect(mocks.useCloudThreadListAdapter).toHaveBeenCalledWith({
      cloud,
      scopeId,
      sdk: AI_SDK_SDK,
    });
    const afterFirst = load.mock.calls.length;
    flushTapSync(() => aui.threads.switchToThread("t2"));
    await vi.waitFor(() => {
      expect(handle.getClient().threads.getState().mainThreadId).toBe("t2");
    });
    await vi.waitFor(() => {
      expect(load.mock.calls.length).toBeGreaterThan(afterFirst);
    });
    handle.destroy();
  });

  it("keeps an in-flight cloud chat running across a switch and stops it on delete", async () => {
    const chat = createCancellableTransport();
    const handle = createAssistantClient(
      AuiConfig({
        threads: AISDKThreads({
          cloud: {} as AssistantCloud,
          threadId: "t1",
          transport: () => chat.transport,
        }),
      }),
    );
    handle.subscribe(() => {});
    const aui = handle.getClient();
    try {
      await aui.threads.getLoadThreadsPromise();
      await vi.waitFor(() => {
        expect(handle.getClient().threads.getState().mainThreadId).toBe("t1");
      });
      await vi.waitFor(() => expect(load).toHaveBeenCalled());
      await vi.waitFor(() => {
        expect(handle.getClient().thread.getState().isLoading).toBe(false);
      });
      flushTapSync(() => handle.getClient().composer.setText("stream me"));
      flushTapSync(() => handle.getClient().composer.send());
      await vi.waitFor(() => {
        expect(handle.getClient().thread.getState().isRunning).toBe(true);
      });
      flushTapSync(() => handle.getClient().threads.switchToThread("t2"));
      await vi.waitFor(() => {
        expect(handle.getClient().threads.getState().mainThreadId).toBe("t2");
      });
      expect(chat.getCancelCount()).toBe(0);
      await vi.waitFor(() => {
        expect(
          handle.getClient().threads.item({ id: "t1" }).getState().isRunning,
        ).toBe(true);
      });

      flushTapSync(() =>
        handle.getClient().threads.item({ id: "t1" }).delete(),
      );
      await vi.waitFor(() => {
        expect(chat.getCancelCount()).toBe(1);
      });
    } finally {
      handle.destroy();
    }
  });

  it("keeps cloud threads off the client destroy signal and stops them on destroy", async () => {
    const chat = createCancellableTransport();
    let destroySignal: AbortSignal | undefined;
    function useThreads() {
      destroySignal = useAssistantClientDestroySignal();
      return useResource(
        AISDKThreads({
          cloud: {} as AssistantCloud,
          threadId: "t1",
          transport: () => chat.transport,
        }),
      );
    }
    attachTransformScopes(useThreads, inMemoryThreadListTransformScopes);
    const handle = createAssistantClient(
      AuiConfig({ threads: resource(useThreads)() }),
    );
    handle.subscribe(() => {});
    const listeners = () => getEventListeners(destroySignal!, "abort").length;
    try {
      await handle.getClient().threads.getLoadThreadsPromise();
      await vi.waitFor(() => {
        expect(handle.getClient().threads.getState().mainThreadId).toBe("t1");
      });
      await vi.waitFor(() => {
        expect(handle.getClient().thread.getState().isLoading).toBe(false);
      });
      const withFirstThread = listeners();

      flushTapSync(() => handle.getClient().threads.switchToThread("t2"));
      await vi.waitFor(() => {
        expect(handle.getClient().threads.getState().mainThreadId).toBe("t2");
      });
      await vi.waitFor(() => {
        expect(handle.getClient().thread.getState().isLoading).toBe(false);
      });
      expect(listeners()).toBe(withFirstThread);

      flushTapSync(() => handle.getClient().composer.setText("stream me"));
      flushTapSync(() => handle.getClient().composer.send());
      await vi.waitFor(() => {
        expect(handle.getClient().thread.getState().isRunning).toBe(true);
      });
    } finally {
      handle.destroy();
    }
    await vi.waitFor(() => {
      expect(chat.getCancelCount()).toBe(1);
    });
  });
});
