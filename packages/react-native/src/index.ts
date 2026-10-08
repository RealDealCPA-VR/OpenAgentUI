/// <reference types="@openagentui/core/react" preserve="true" />

// Re-export core types
export type {
  // Message types
  ThreadMessage,
  ThreadUserMessage,
  ThreadAssistantMessage,
  ThreadSystemMessage,
  MessageStatus,
  MessageRole,
  ThreadMessageLike,
  AppendMessage,
  RunConfig,
  // Message parts
  TextMessagePart,
  ReasoningMessagePart,
  SourceMessagePart,
  RespondToToolApprovalOptions,
  ToolApprovalDisplay,
  ToolApprovalOption,
  ToolApprovalOptionKind,
  ToolApprovalAnswer,
  ToolApprovalQuestion,
  ToolApprovalQuestionOption,
  ToolApprovalResponse,
  ToolCallMessagePart,
  ToolCallMessagePartStatus,
  MessagePartTiming,
  ToolCallTiming,
  ToolModelContentPart,
  ImageMessagePart,
  FileMessagePart,
  DataMessagePart,
  Unstable_AudioMessagePart,
  ThreadUserMessagePart,
  ThreadAssistantMessagePart,
  // Runtime types
  AssistantRuntime,
  ThreadRuntime,
  ThreadRuntimeState,
  MessageRuntime,
  MessageRuntimeState,
  ThreadComposerRuntime,
  EditComposerRuntime,
  ComposerRuntime,
  ComposerRuntimeState,
  ThreadListRuntime,
  ThreadListItemRuntime,
  ThreadListItemRuntimeState,
  // Runtime core types
  ChatModelAdapter,
  ChatModelRunOptions,
  ChatModelRunResult,
  RuntimeCapabilities,
  // Attachment types
  Attachment,
  PendingAttachment,
  CompleteAttachment,
  CreateAttachment,
  AttachmentRuntime,
  AttachmentRuntimeState,
  // Adapter types
  AttachmentAdapter,
  ThreadHistoryAdapter,
  FeedbackAdapter,
  RealtimeVoiceAdapter,
  VoiceSessionControls,
  VoiceSessionHelpers,
  SuggestionAdapter,
  SuggestionAdapterGenerateOptions,
  CreateSuggestionAdapterOptions,
  // Other
  Unsubscribe,
} from "@openagentui/core";

// Re-export core remote thread list types
export type {
  RemoteThreadListAdapter,
  RemoteThreadListOptions,
  RemoteThreadListProviderComponent,
} from "@openagentui/core";
export { InMemoryThreadListAdapter } from "@openagentui/core";
export { createVoiceSession, toolApprovalAcceptsText } from "@openagentui/core";
export { fromThreadMessageLike, generateId } from "@openagentui/core";
export { createSuggestionAdapter } from "@openagentui/core";

// Attachment adapter implementations
export {
  SimpleImageAttachmentAdapter,
  SimpleTextAttachmentAdapter,
  CompositeAttachmentAdapter,
} from "@openagentui/core";

// Re-export store scope state types
export type {
  ThreadState,
  ThreadsState,
  MessageState,
  ComposerState,
  AttachmentState,
  ThreadListItemState,
  QueueItemState,
  TaskState,
} from "@openagentui/core/store";

// Store hooks and components
export {
  useAui,
  useAuiState,
  useAuiEvent,
  AuiProvider,
  AuiConfig,
  AuiIf,
  type AssistantClient,
  type AssistantState,
  type AssistantEventScope,
  type AssistantEventSelector,
  type AssistantEventName,
  type AssistantEventPayload,
  type AssistantEventCallback,
} from "@openagentui/store";

// Context providers and hooks
export { AssistantRuntimeProvider } from "./context/AssistantContext";
export {
  RuntimeAdapterProvider,
  useRuntimeAdapters,
  type RuntimeAdapters,
} from "@openagentui/core/react";

// Runtime
export {
  useLocalRuntime,
  type LocalRuntimeOptions,
} from "./runtimes/useLocalRuntime";
export { useRemoteThreadListRuntime } from "./runtimes/useRemoteThreadListRuntime";
export {
  getExternalStoreMessages,
  bindExternalStoreMessage,
  pickExternalStoreSharedOptions,
  createMessageQueue,
  MessageNotSentError,
  isMessageNotSentError,
  type ExternalStoreAdapter,
  type ExternalStoreMessageConverter,
  type ExternalStoreSharedOptions,
  type ExternalStoreThreadListAdapter,
  type ExternalStoreThreadData,
  type ExternalStoreBranchChange,
  type ExternalThreadQueueAdapter,
  type ExternalThreadBranchAdapter,
  type MessageQueueDriver,
  type MessageQueueController,
} from "@openagentui/core";
export {
  useExternalStoreRuntime,
  useExternalStoreSharedOptions,
  useExternalMessageConverter,
  convertExternalMessages as unstable_convertExternalMessages,
  createExternalMessageConversionCache as unstable_createExternalMessageConversionCache,
  createMessageConverter as unstable_createMessageConverter,
  type ExternalMessageConversionCache as Unstable_ExternalMessageConversionCache,
  type JoinStrategy,
} from "@openagentui/core/react";

// Primitives
export * as ThreadPrimitive from "./primitives/thread";
export * as ComposerPrimitive from "./primitives/composer";
export * as QueueItemPrimitive from "./primitives/queueItem";
export * as MessagePrimitive from "./primitives/message";
export * as MessagePartPrimitive from "./primitives/messagePart";
export * as ThreadListPrimitive from "./primitives/threadList";
export * as ActionBarPrimitive from "./primitives/actionBar";
export * as BranchPickerPrimitive from "./primitives/branchPicker";
export * as AttachmentPrimitive from "./primitives/attachment";
export * as ThreadListItemPrimitive from "./primitives/threadListItem";
export * as ChainOfThoughtPrimitive from "./primitives/chainOfThought";
export * as SuggestionPrimitive from "./primitives/suggestion";
export * as ErrorPrimitive from "./primitives/error";

export { groupPartByType, type GroupByContext } from "@openagentui/core/react";
export {
  createThreadRowsSelector,
  type ThreadRow,
  type ThreadRowsOptions,
} from "@openagentui/core/react";
export { unstable_useThreadMessageIds } from "@openagentui/core/react";

// Re-export shared providers from core/react
export {
  ThreadListItemByIndexProvider,
  ThreadListItemRuntimeProvider,
  ChainOfThoughtByIndicesProvider,
  MessageByIndexProvider,
  MessageAttachmentByIndexProvider,
  ComposerAttachmentByIndexProvider,
  PartByIndexProvider,
  TextMessagePartProvider,
  ChainOfThoughtPartByIndexProvider,
  SuggestionByIndexProvider,
  ReadonlyThreadProvider,
} from "@openagentui/core/react";

// Model context, tools & clients (inlined from model-context)
export {
  makeAssistantTool,
  type AssistantTool,
  makeAssistantToolUI,
  type AssistantToolUI,
  makeAssistantDataUI,
  type AssistantDataUI,
  useAssistantTool,
  type AssistantToolProps,
  useAssistantToolUI,
  type AssistantToolUIProps,
  useAssistantDataUI,
  type AssistantDataUIProps,
  useAssistantInstructions,
  useAssistantContext,
  type AssistantContextConfig,
  useInlineRender,
  type Toolkit,
  type ToolDefinition,
  type ToolkitDefinition,
  type ToolkitDefinitionEntry,
  type ToolCallText,
  defineToolkit,
  stubTool,
  externalTool,
  useAuiToolOverrides,
  hitl,
  hitlTool,
  humanTool,
  providerTool,
  type ProviderToolConfig,
  defineMcpToolkit,
  type McpToolkitEntry,
  type McpToolkitDefinition,
  type McpToolkitToolConfig,
  Tools,
  DataRenderers,
  Interactables,
  useAssistantInteractable,
  type AssistantInteractableProps,
  useInteractableState,
  unstable_Interactables,
  unstable_useInteractable,
  type Unstable_InteractableConfig,
  type Unstable_InferInteractableState,
  type Unstable_InteractableVersionInfo,
  unstable_useInteractableState,
  unstable_useInteractableVersions,
  unstable_interactableTool,
  type Unstable_InteractableToolConfig,
  type Unstable_InteractableToolRenderProps,
  type Unstable_InteractableStateSchema,
  type Unstable_InteractablesState,
  type Unstable_InteractableDefinition,
  type Unstable_InteractableRegistration,
  type Unstable_InteractablesMethods,
  type Unstable_InteractablePersistedState,
  type Unstable_InteractablePersistenceAdapter,
  type Unstable_InteractablePersistenceStatus,
  type Unstable_InteractablesClientSchema,
  type Unstable_InteractablesConfig,
  useToolArgsStatus,
  type ToolArgsStatus,
} from "@openagentui/core/react";

export type {
  ModelContext,
  ModelContextProvider,
  LanguageModelConfig,
  LanguageModelV1CallSettings,
} from "@openagentui/core";

export { mergeModelContexts } from "@openagentui/core";

export {
  unstable_getInteractableSnapshots,
  unstable_formatInteractableSnapshot,
  unstable_getInteractableVersions,
  type Unstable_InteractableSnapshotEntry,
  type Unstable_InteractableVersion,
} from "@openagentui/core";

export type { ExportedMessageRepositoryItem } from "@openagentui/core";
export { ExportedMessageRepository } from "@openagentui/core";

export type { Tool } from "openagentui-stream";

export { tool } from "@openagentui/core";

export { Suggestions, type SuggestionConfig } from "@openagentui/core/store";

export { ModelContextRegistry } from "@openagentui/core";
export type {
  ModelContextRegistryToolHandle,
  ModelContextRegistryInstructionHandle,
  ModelContextRegistryProviderHandle,
} from "@openagentui/core";

// Client (inlined from client)
export { ModelContext as ModelContextClient } from "@openagentui/core/store";
export { ChainOfThoughtClient } from "@openagentui/core/store";

// Component types (inlined from types)
export type {
  EmptyMessagePartComponent,
  EmptyMessagePartProps,
  TextMessagePartComponent,
  TextMessagePartProps,
  ReasoningMessagePartComponent,
  ReasoningMessagePartProps,
  ReasoningGroupProps,
  ReasoningGroupComponent,
  SourceMessagePartComponent,
  SourceMessagePartProps,
  ImageMessagePartComponent,
  ImageMessagePartProps,
  FileMessagePartComponent,
  FileMessagePartProps,
  Unstable_AudioMessagePartComponent,
  Unstable_AudioMessagePartProps,
  DataMessagePartComponent,
  DataMessagePartProps,
  ToolCallMessagePartComponent,
  ToolCallMessagePartProps,
} from "@openagentui/core/react";

export {
  useVoiceState,
  useVoiceVolume,
  useVoiceControls,
} from "@openagentui/core/react";

// Shared surface carried by every distribution (scripts/check-distribution-barrels.mjs)
export type {
  AssistantTransportProtocol,
  EnrichedPartState,
  GenerativeUIComponentRegistry,
  GenerativeUIMessagePartComponent,
  GenerativeUIMessagePartProps,
  GenerativeUIRenderProps,
  McpAppResourceOutput,
  PartState,
  QuoteMessagePartComponent,
  QuoteMessagePartProps,
  TitleGenerationAdapter,
} from "@openagentui/core/react";
export {
  CloudFileAttachmentAdapter,
  createSimpleTitleAdapter,
  GenerativeUIRender,
  GenerativeUIRenderError,
  useCloudThreadListAdapter,
  useCloudThreadListRuntime,
} from "@openagentui/core/react";
export type {
  ComposerSendOptions,
  ExternalThreadMessage,
  ExternalThreadProps,
  InMemoryThreadListProps,
  QueueItemMethods,
  RemoteThreadListProps,
  TaskMethods,
} from "@openagentui/core/store";
export {
  ExternalThread,
  InMemoryThreadList,
  RemoteThreadList,
  SingleThreadList,
} from "@openagentui/core/store";
export type {
  AddToolResultOptions,
  AttachmentStatus,
  ChatModelRunUpdate,
  CreateAppendMessage,
  CreateResumeRunConfig,
  CreateStartRunConfig,
  ComposerSubmission,
  DictationAdapter,
  DictationState,
  EditComposerState,
  GenerativeUIMessagePart,
  GenerativeUINode,
  GenerativeUISpec,
  GenericThreadHistoryAdapter,
  LocalRuntimeOptionsBase,
  McpAppMetadata,
  MessageFormatAdapter,
  MessageFormatItem,
  MessageFormatRepository,
  MessageModality,
  MessagePartRuntime,
  MessagePartState,
  MessagePartStatus,
  MessagePartStreamStatus,
  MessageStorageEntry,
  MessageTiming,
  PartProviderMetadata,
  QuoteInfo,
  SourceProviderMetadata,
  SpeechSynthesisAdapter,
  SubmitFeedbackOptions,
  ThreadComposerState,
  ThreadListItemStatus,
  ThreadListState,
  ThreadSuggestion,
  ToolCallMessagePartMcpMetadata,
  ToolExecutionStatus,
  DirectiveFormatter,
  DirectiveSegment,
  TriggerAdapter,
  TriggerCategory,
  TriggerItem,
  Unstable_DirectiveFormatter,
  Unstable_DirectiveSegment,
  Unstable_TriggerItem,
  VoiceSessionState,
} from "@openagentui/core";
export {
  defaultDirectiveFormatter,
  unstable_defaultDirectiveFormatter,
} from "@openagentui/core";
