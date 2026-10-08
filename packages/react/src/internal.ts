// Re-export from @openagentui/core
export type {
  ThreadRuntimeCore,
  ThreadListRuntimeCore,
} from "@openagentui/core";

// Re-export from @openagentui/core/internal
export {
  DefaultThreadComposerRuntimeCore,
  CompositeContextProvider,
  MessageRepository,
  BaseAssistantRuntimeCore,
  AssistantRuntimeImpl,
  ThreadRuntimeImpl,
  getAutoStatus,
} from "@openagentui/core/internal";
export type {
  ThreadRuntimeCoreBinding,
  ThreadListItemRuntimeBinding,
} from "@openagentui/core/internal";

// React-specific (stay in react)
export { splitLocalRuntimeOptions } from "./legacy-runtime/runtime-cores/local/LocalRuntimeOptions";
export type { ToolExecutionStatus } from "@openagentui/core";

export { useSmooth } from "./utils/smooth/useSmooth";
export {
  useSmoothStatus,
  withSmoothContextProvider,
} from "./utils/smooth/SmoothContext";

// ComposerInput plugin registry (used by react-lexical)
export { useComposerInputPluginRegistryOptional } from "./primitives/composer/ComposerInputPluginContext";
