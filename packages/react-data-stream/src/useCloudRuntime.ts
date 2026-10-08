"use client";

import type { AssistantCloud } from "openagentui-cloud";
import type { AssistantRuntime } from "@openagentui/core";
import {
  splitLocalRuntimeOptions,
  useLocalRuntime,
} from "@openagentui/core/react";
import type { UseDataStreamRuntimeOptions } from "./useDataStreamRuntime";
import { DataStreamRuntimeAdapter } from "./DataStreamRuntimeAdapter";

type UseCloudRuntimeOptions = Omit<
  UseDataStreamRuntimeOptions,
  "api" | "protocol" | "headers" | "body"
> & {
  cloud: AssistantCloud;
  assistantId: string;
};

export const useCloudRuntime = (
  options: UseCloudRuntimeOptions,
): AssistantRuntime => {
  const { localRuntimeOptions, otherOptions } =
    splitLocalRuntimeOptions(options);
  const opts = options.cloud.runs.__internal_getAssistantOptions(
    options.assistantId,
  );

  return useLocalRuntime(
    new DataStreamRuntimeAdapter(
      {
        ...otherOptions,
        ...opts,
      },
      (messages) => messages,
    ),
    localRuntimeOptions,
  );
};
