/// <reference types="@openagentui/core/react" preserve="true" />

// Re-export from @openagentui/store
export {
  useAui,
  AuiProvider,
  AuiConfig,
  useAuiState,
  useAuiEvent,
  AuiIf,
  type AssistantClient,
  type AssistantState,
  type AssistantEventScope,
  type AssistantEventSelector,
  type AssistantEventName,
  type AssistantEventPayload,
  type AssistantEventCallback,
} from "@openagentui/store";

// Re-export public runtime types from @openagentui/core
export type {
  AssistantRuntime,
  ThreadRuntime,
  ThreadState,
  ThreadRuntimeState,
  CreateAppendMessage,
  CreateStartRunConfig,
  CreateResumeRunConfig,
  MessageRuntime,
  MessageState,
  MessageRuntimeState,
  MessagePartRuntime,
  MessagePartState,
  ComposerRuntime,
  ThreadComposerRuntime,
  EditComposerRuntime,
  EditComposerState,
  ThreadComposerState,
  ComposerState,
  ComposerRuntimeState,
  AttachmentRuntime,
  AttachmentState,
  AttachmentRuntimeState,
  ThreadListRuntime,
  ThreadListState,
  ThreadListItemRuntime,
  ThreadListItemState,
  ThreadListItemRuntimeState,
} from "@openagentui/core";

export { toolApprovalAcceptsText } from "@openagentui/core";

export { useCloudThreadListRuntime } from "@openagentui/core/react";
export { AssistantCloud, readAnonymousRefreshToken } from "openagentui-cloud";

// --- adapters/attachment ---
export type { AttachmentAdapter } from "@openagentui/core";
export {
  SimpleImageAttachmentAdapter,
  SimpleTextAttachmentAdapter,
  CompositeAttachmentAdapter,
} from "@openagentui/core";
export { CloudFileAttachmentAdapter } from "./legacy-runtime/runtime-cores/adapters/attachment/CloudFileAttachmentAdapter";

// --- adapters/voice ---
export type { RealtimeVoiceAdapter } from "@openagentui/core";
export { createVoiceSession } from "@openagentui/core";
export type {
  VoiceSessionControls,
  VoiceSessionHelpers,
  VoiceSessionState,
} from "@openagentui/core";
export {
  useVoiceState,
  useVoiceVolume,
  useVoiceControls,
} from "@openagentui/core/react";

// --- adapters/feedback ---
export type { FeedbackAdapter } from "@openagentui/core";

// --- adapters/speech ---
export type {
  SpeechSynthesisAdapter,
  DictationAdapter,
} from "@openagentui/core";
export {
  WebSpeechSynthesisAdapter,
  WebSpeechDictationAdapter,
} from "@openagentui/core";

// --- adapters/suggestion ---
export type {
  SuggestionAdapter,
  SuggestionAdapterGenerateOptions,
  CreateSuggestionAdapterOptions,
} from "@openagentui/core";
export { createSuggestionAdapter } from "@openagentui/core";

// --- adapters/RuntimeAdapterProvider ---
export {
  RuntimeAdapterProvider,
  useRuntimeAdapters,
  type RuntimeAdapters,
} from "@openagentui/core/react";

// --- adapters/thread-history ---
export type {
  ThreadHistoryAdapter,
  GenericThreadHistoryAdapter,
  MessageFormatAdapter,
  MessageFormatItem,
  MessageFormatRepository,
  MessageStorageEntry,
} from "@openagentui/core";

// --- assistant-transport ---
export {
  useAssistantTransportRuntime,
  useAssistantTransportSendCommand,
  useAssistantTransportState,
} from "./assistant-transport";
export type {
  AssistantTransportConnectionMetadata,
  AssistantTransportCommand,
  AssistantTransportProtocol,
  SendCommandsRequestBody,
} from "./assistant-transport";

// --- core ---
export type {
  AddToolResultOptions,
  SubmitFeedbackOptions,
  ThreadSuggestion,
  ComposerSubmission,
  DictationState,
} from "@openagentui/core";

// --- external-store ---
export type { ThreadMessageLike } from "@openagentui/core";
export { fromThreadMessageLike, generateId } from "@openagentui/core";
export {
  getExternalStoreMessages,
  bindExternalStoreMessage,
  pickExternalStoreSharedOptions,
} from "@openagentui/core";
export type {
  ExternalStoreAdapter,
  ExternalStoreMessageConverter,
  ExternalStoreSharedOptions,
  ExternalStoreThreadListAdapter,
  ExternalStoreThreadData,
  ExternalStoreBranchChange,
} from "@openagentui/core";
export { MessageNotSentError, isMessageNotSentError } from "@openagentui/core";
export {
  createMessageQueue,
  type MessageQueueDriver,
  type MessageQueueController,
  type ExternalThreadQueueAdapter,
  type ExternalThreadBranchAdapter,
} from "@openagentui/core";
export { useExternalStoreRuntime } from "./legacy-runtime/runtime-cores/external-store/useExternalStoreRuntime";
export { useExternalStoreSharedOptions } from "@openagentui/core/react";
export {
  useExternalMessageConverter,
  convertExternalMessages as unstable_convertExternalMessages,
  createExternalMessageConversionCache as unstable_createExternalMessageConversionCache,
  type ExternalMessageConversionCache as Unstable_ExternalMessageConversionCache,
} from "./legacy-runtime/runtime-cores/external-store/external-message-converter";
export { createMessageConverter as unstable_createMessageConverter } from "./legacy-runtime/runtime-cores/external-store/createMessageConverter";

// --- local ---
export type {
  ChatModelAdapter,
  ChatModelRunOptions,
  ChatModelRunResult,
  ChatModelRunUpdate,
  LocalRuntimeOptionsBase,
} from "@openagentui/core";
export { useLocalRuntime } from "./legacy-runtime/runtime-cores/local/useLocalRuntime";
export type { LocalRuntimeOptions } from "./legacy-runtime/runtime-cores/local/LocalRuntimeOptions";

// --- remote-thread-list ---
export { useRemoteThreadListRuntime } from "./legacy-runtime/runtime-cores/remote-thread-list/useRemoteThreadListRuntime";
export { useCloudThreadListAdapter } from "./legacy-runtime/runtime-cores/remote-thread-list/adapter/cloud";
export type {
  RemoteThreadListAdapter,
  RemoteThreadListProviderComponent,
} from "@openagentui/core";
export { InMemoryThreadListAdapter } from "@openagentui/core";

// Re-export from @openagentui/core (runtime-cores root)
export type { ExportedMessageRepositoryItem } from "@openagentui/core";
export { ExportedMessageRepository } from "@openagentui/core";

export * from "./context";

// Re-export shared from core/react
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
  type ToolCallText,
  type ToolkitDefinition,
  type ToolkitDefinitionEntry,
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

export type { Tool } from "openagentui-stream";

export { tool } from "@openagentui/core";

export { Suggestions, type SuggestionConfig } from "@openagentui/core/store";
export type {
  QueueItemState,
  TaskState,
  TaskMethods,
  QueueItemMethods,
} from "@openagentui/core/store";
export type { ComposerSendOptions } from "@openagentui/core/store";

export { makeAssistantVisible } from "./model-context/makeAssistantVisible";

// --- model-context/registry ---
export { ModelContextRegistry } from "@openagentui/core";
export type {
  ModelContextRegistryToolHandle,
  ModelContextRegistryInstructionHandle,
  ModelContextRegistryProviderHandle,
} from "@openagentui/core";

// --- model-context/frame ---
export { AssistantFrameHost } from "@openagentui/core";
export { AssistantFrameProvider } from "@openagentui/core";
export type {
  SerializedTool,
  SerializedModelContext,
  FrameMessageType,
  FrameMessage,
} from "@openagentui/core";
export { FRAME_MESSAGE_CHANNEL } from "@openagentui/core";
export { useAssistantFrameHost } from "./model-context/frame/useAssistantFrameHost";

export * as ActionBarPrimitive from "./primitives/actionBar";
export * as ActionBarMorePrimitive from "./primitives/actionBarMore";
export * as AssistantModalPrimitive from "./primitives/assistantModal";
export * as AttachmentPrimitive from "./primitives/attachment";
export * as BranchPickerPrimitive from "./primitives/branchPicker";
export * as ChainOfThoughtPrimitive from "./primitives/chainOfThought";
export * as ComposerPrimitive from "./primitives/composer";
export * as QueueItemPrimitive from "./primitives/queueItem";
export * as MessagePartPrimitive from "./primitives/messagePart";
export * as ErrorPrimitive from "./primitives/error";
export * as MessagePrimitive from "./primitives/message";
export * as ThreadPrimitive from "./primitives/thread";
export * as SuggestionPrimitive from "./primitives/suggestion";
export * as ThreadListPrimitive from "./primitives/threadList";
export * as ThreadListItemPrimitive from "./primitives/threadListItem";
export * as ThreadListItemMorePrimitive from "./primitives/threadListItemMore";
export * as SelectionToolbarPrimitive from "./primitives/selectionToolbar";

export { groupPartByType, type GroupByContext } from "@openagentui/core/react";
export {
  createThreadRowsSelector,
  type ThreadRow,
  type ThreadRowsOptions,
} from "@openagentui/core/react";
export { unstable_useThreadMessageIds } from "@openagentui/core/react";
export { useMessagePartText } from "./primitives/messagePart/useMessagePartText";
export { useMessagePartReasoning } from "./primitives/messagePart/useMessagePartReasoning";
export { useMessagePartSource } from "./primitives/messagePart/useMessagePartSource";
export { useMessagePartFile } from "./primitives/messagePart/useMessagePartFile";
export { useMessagePartImage } from "./primitives/messagePart/useMessagePartImage";
export { useMessagePartData } from "./primitives/messagePart/useMessagePartData";
export { useThreadViewportAutoScroll } from "./primitives/thread/useThreadViewportAutoScroll";
export { useScrollLock } from "./primitives/reasoning/useScrollLock";
export { useMessageQuote } from "./hooks/useMessageQuote";
export { useMessageTiming } from "./hooks/useMessageTiming";
export { useToolCallElapsed } from "./hooks/useToolCallElapsed";
export {
  unstable_useMessageStallDetection,
  type Unstable_MessageStallDetection,
  type Unstable_MessageStallDetectionOptions,
} from "./unstable/useMessageStallDetection";
export { useSmooth, type SmoothOptions } from "./utils/smooth/useSmooth";

// Re-export core types from @openagentui/core
export type {
  Attachment,
  PendingAttachment,
  CompleteAttachment,
  AttachmentStatus,
  AppendMessage,
  TextMessagePart,
  ReasoningMessagePart,
  PartProviderMetadata,
  SourceProviderMetadata,
  SourceMessagePart,
  ImageMessagePart,
  FileMessagePart,
  DataMessagePart,
  GenerativeUIMessagePart,
  GenerativeUINode,
  GenerativeUISpec,
  Unstable_AudioMessagePart,
  RespondToToolApprovalOptions,
  ToolApprovalDisplay,
  ToolApprovalOption,
  ToolApprovalOptionKind,
  ToolApprovalAnswer,
  ToolApprovalQuestion,
  ToolApprovalQuestionOption,
  ToolApprovalResponse,
  ToolCallMessagePart,
  MessagePartTiming,
  ToolCallTiming,
  ToolModelContentPart,
  MessageStatus,
  MessagePartStatus,
  MessagePartStreamStatus,
  ToolCallMessagePartStatus,
  MessageTiming,
  MessageModality,
  ThreadUserMessagePart,
  ThreadAssistantMessagePart,
  ThreadSystemMessage,
  ThreadAssistantMessage,
  ThreadUserMessage,
  ThreadMessage,
  Unsubscribe,
  QuoteInfo,
  CreateAttachment,
} from "@openagentui/core";

// React component types (from core/react)
export type {
  EmptyMessagePartComponent,
  EmptyMessagePartProps,
  TextMessagePartComponent,
  TextMessagePartProps,
  ReasoningMessagePartComponent,
  ReasoningMessagePartProps,
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
  ReasoningGroupProps,
  ReasoningGroupComponent,
  QuoteMessagePartComponent,
  QuoteMessagePartProps,
  GenerativeUIComponentRegistry,
  GenerativeUIMessagePartComponent,
  GenerativeUIMessagePartProps,
  GenerativeUIRenderProps,
  EnrichedPartState,
  PartState,
} from "@openagentui/core/react";

// Generative UI runtime error + headless renderer (re-exported from core)
export {
  GenerativeUIRender,
  GenerativeUIRenderError,
} from "@openagentui/core/react";

// Thread list item types
export type { ThreadListItemStatus } from "@openagentui/core";

export { DevToolsHooks, DevToolsProviderApi } from "./devtools/DevToolsHooks";

export { ModelContext as ModelContextClient } from "@openagentui/core/store";
export { ChainOfThoughtClient } from "@openagentui/core/store";
export {
  ExternalThread,
  type ExternalThreadProps,
  type ExternalThreadMessage,
} from "@openagentui/core/store";
export {
  InMemoryThreadList,
  type InMemoryThreadListProps,
} from "@openagentui/core/store";
export {
  RemoteThreadList,
  type RemoteThreadListProps,
} from "@openagentui/core/store";
export { SingleThreadList } from "@openagentui/core/store";

export * as INTERNAL from "./internal";

// Unstable - mention adapter helper (tools + custom items + categories)
export {
  unstable_useMentionAdapter,
  type Unstable_IconComponent,
  type Unstable_Mention,
  type Unstable_MentionCategory,
  type Unstable_MentionDirective,
  type Unstable_ModelContextToolsOptions,
  type Unstable_UseMentionAdapterOptions,
} from "./unstable/useMentionAdapter";

// Unstable - slash command adapter helper
export {
  unstable_useSlashCommandAdapter,
  type Unstable_SlashCommand,
  type Unstable_SlashCommandAction,
  type Unstable_UseSlashCommandAdapterOptions,
} from "./unstable/useSlashCommandAdapter";

// Unstable - live (async) completion adapter helper
export {
  unstable_useLiveCompletionAdapter,
  type Unstable_UseLiveCompletionAdapterOptions,
} from "./unstable/useLiveCompletionAdapter";

export type { ToolExecutionStatus } from "./internal";

// Unstable - trigger popover (unified root for @ mentions, / slash commands, etc.)
export {
  useTriggerPopoverRootContext as unstable_useTriggerPopoverRootContext,
  useTriggerPopoverRootContextOptional as unstable_useTriggerPopoverRootContextOptional,
  useTriggerPopoverScopeContext as unstable_useTriggerPopoverScopeContext,
  useTriggerPopoverScopeContextOptional as unstable_useTriggerPopoverScopeContextOptional,
  useTriggerPopoverTriggers as unstable_useTriggerPopoverTriggers,
  useTriggerPopoverTriggersOptional as unstable_useTriggerPopoverTriggersOptional,
  type RegisteredTrigger as Unstable_RegisteredTrigger,
  type TriggerMatch,
  type TriggerMatcher,
  type TriggerBehavior as Unstable_TriggerBehavior,
} from "./primitives/composer/trigger";
import type {
  TriggerMatch,
  TriggerMatcher,
} from "./primitives/composer/trigger";
/** @deprecated Use `TriggerMatch` instead. */
export type Unstable_TriggerMatch = TriggerMatch;
/** @deprecated Use `TriggerMatcher` instead. */
export type Unstable_TriggerMatcher = TriggerMatcher;
export type {
  DirectiveFormatter,
  DirectiveSegment,
  TriggerAdapter,
  TriggerCategory,
  TriggerItem,
  Unstable_DirectiveFormatter,
  Unstable_DirectiveSegment,
  Unstable_TriggerItem,
} from "@openagentui/core";
export {
  defaultDirectiveFormatter,
  unstable_defaultDirectiveFormatter,
} from "@openagentui/core";

// Unstable - composer input history (terminal-style ArrowUp/ArrowDown recall)
export {
  unstable_useComposerInputHistory,
  type Unstable_ComposerInputHistory,
} from "./unstable/useComposerInputHistory";

// Unstable - headless composer input bridge (value/send without ComposerPrimitive.Input)
export {
  unstable_useComposerInput,
  unstable_useTriggerPopoverAriaProps,
  type Unstable_UseComposerInputOptions,
  type Unstable_ComposerInput,
  type Unstable_TriggerPopoverAriaProps,
} from "./unstable/useComposerInput";

export type { Assistant } from "./augmentations";

// --- mcp-apps ---
export {
  CloudRendererHost,
  type CloudRendererHostProps,
} from "./cloud-renderer/CloudRendererHost";

export {
  McpAppRenderer,
  McpAppsRemoteHost,
  getMcpAppFromToolPart,
} from "./mcp-apps";
export type {
  McpAppPartOptions,
  McpAppRendererOptions,
  McpAppMetadata,
  McpAppResource,
  McpAppResourceMeta,
  McpAppResourceCSP,
  McpAppSandboxConfig,
  McpAppHostInfo,
  McpAppHostContext,
  McpAppDisplayMode,
  McpAppsHost,
  McpAppsRemoteHostOptions,
  McpAppToolCallParams,
  McpAppBridgeHandlers,
  ToolCallMessagePartMcpMetadata,
} from "./mcp-apps";
export type { McpAppResourceOutput } from "@openagentui/core/react";
export type {
  ShimLoadError,
  ShimLoadErrorCode,
} from "@openagentui/safe-content-frame";

// Unstable - WebMCP provider (exposes frontend tools to a WebMCP-capable browser)
export {
  unstable_useWebMcpProvider,
  type Unstable_WebMcpProviderOptions,
  type Unstable_WebMcpProviderResult,
} from "./unstable/webmcp/useWebMcpProvider";
export { defaultWebMcpFilter as unstable_defaultWebMcpFilter } from "./unstable/webmcp/convertTools";

// Shared surface carried by every distribution (scripts/check-distribution-barrels.mjs)
export type {
  JoinStrategy,
  TitleGenerationAdapter,
} from "@openagentui/core/react";
export {
  ChainOfThoughtPartByIndexProvider,
  createSimpleTitleAdapter,
} from "@openagentui/core/react";
export type { ThreadsState } from "@openagentui/core/store";
export type {
  MessageRole,
  RemoteThreadListOptions,
  RunConfig,
  RuntimeCapabilities,
} from "@openagentui/core";
