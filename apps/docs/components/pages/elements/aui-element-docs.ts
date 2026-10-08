interface ElementPropRow {
  name: string;
  type: string;
  required?: boolean;
  defaultValue?: string;
  description: string;
}

interface ElementPropsTable {
  component: string;
  rows: ElementPropRow[];
}

interface ElementDoc {
  usage: string;
  props: ElementPropsTable[];
}

const usageOnly = (usage: string): ElementDoc => ({ usage, props: [] });

export const AUI_ELEMENT_DOCS: Record<string, ElementDoc> = {
  "assistant-modal": usageOnly(
    `import { AssistantModal } from "@/components/openagentui/elements/assistant-modal.aui";

<AssistantModal />`,
  ),
  "assistant-sidebar": usageOnly(
    `import { AssistantSidebar } from "@/components/openagentui/elements/assistant-sidebar.aui";

<AssistantSidebar>
  <main>{children}</main>
</AssistantSidebar>`,
  ),
  "thread-list-sidebar": usageOnly(
    `import { ThreadListSidebar } from "@/components/openagentui/elements/threadlist-sidebar.aui";

<ThreadListSidebar />`,
  ),
  reasoning: usageOnly(
    `import { ReasoningRoot, ReasoningTrigger, ReasoningContent, ReasoningText } from "@/components/openagentui/elements/reasoning.aui";

<ReasoningRoot>
  <ReasoningTrigger />
  <ReasoningContent>
    <ReasoningText>{children}</ReasoningText>
  </ReasoningContent>
</ReasoningRoot>`,
  ),
  "message-timing": usageOnly(
    `import { MessageTiming } from "@/components/openagentui/elements/message-timing.aui";

<MessageTiming side="right" />`,
  ),
  "mcp-config": usageOnly(
    `import { McpConfigDialog } from "@/components/openagentui/elements/mcp-config.aui";

<McpConfigDialog />`,
  ),
  attachment: usageOnly(
    `import { ComposerAddAttachment, ComposerAttachments, UserMessageAttachments } from "@/components/openagentui/elements/attachment.aui";

<ComposerAttachments />
<ComposerAddAttachment />
<UserMessageAttachments />`,
  ),
  "tool-fallback": usageOnly(
    `import { ToolFallbackRoot, ToolFallbackTrigger, ToolFallbackContent, ToolFallbackArgs, ToolFallbackResult } from "@/components/openagentui/elements/tool-fallback.aui";

<ToolFallbackRoot>
  <ToolFallbackTrigger toolName="search_web" status={{ type: "complete" }} />
  <ToolFallbackContent>
    <ToolFallbackArgs argsText={argsText} />
    <ToolFallbackResult result={result} />
  </ToolFallbackContent>
</ToolFallbackRoot>`,
  ),
  "tool-group": usageOnly(
    `import { ToolGroupRoot, ToolGroupTrigger, ToolGroupContent } from "@/components/openagentui/elements/tool-group.aui";

<ToolGroupRoot>
  <ToolGroupTrigger count={3} />
  <ToolGroupContent>{toolCalls}</ToolGroupContent>
</ToolGroupRoot>`,
  ),
  sources: usageOnly(
    `import { Source, SourceIcon, SourceTitle } from "@/components/openagentui/elements/sources.aui";

<Source href="https://openagentui.dev">
  <SourceIcon url="https://openagentui.dev" />
  <SourceTitle>openagentui</SourceTitle>
</Source>`,
  ),
  image: usageOnly(
    `import { Image } from "@/components/openagentui/elements/image";

<Image type="image" image={url} status={{ type: "complete" }} />`,
  ),
  file: usageOnly(
    `import { File } from "@/components/openagentui/elements/file";

<File type="file" filename="report.pdf" mimeType="application/pdf" data={data} />`,
  ),
  "directive-text": usageOnly(
    `import { defaultDirectiveFormatter } from "@openagentui/react";
import { createDirectiveText } from "@/components/openagentui/elements/directive-text.aui";

const DirectiveText = createDirectiveText(defaultDirectiveFormatter);`,
  ),
  "shiki-highlighter": usageOnly(
    `import { SyntaxHighlighter } from "@/components/openagentui/elements/shiki-highlighter.aui";

<SyntaxHighlighter language="tsx" code={code} />`,
  ),
  "generative-ui": usageOnly(
    `import { renderGenerativeUI } from "@openagentui/react-generative-ui";
import { styledGenerativeUILibrary } from "@/components/openagentui/elements/generative-ui";

{renderGenerativeUI(spec, styledGenerativeUILibrary, { status: "done" })}`,
  ),
  "tooltip-icon-button": usageOnly(
    `import { CopyIcon } from "lucide-react";
import { TooltipIconButton } from "@/components/openagentui/elements/tooltip-icon-button";

<TooltipIconButton tooltip="Copy">
  <CopyIcon />
</TooltipIconButton>`,
  ),
  logos: usageOnly(
    `import { OpenAILogo, ClaudeLogo, GeminiLogo } from "@/components/openagentui/elements/logos";

<OpenAILogo />
<ClaudeLogo />
<GeminiLogo />`,
  ),
  "heat-graph": usageOnly(
    `import { HeatGraph } from "@/components/openagentui/elements/heat-graph";

<HeatGraph data={activity} />`,
  ),
  "conversation-map": {
    usage: `import { ConversationMapAui } from "@/components/openagentui/elements/conversation-map.aui";

// A direct child of the viewport, so the rail lands in the gutter
// beside the centered message column. Hide it where there is no gutter.
<ThreadPrimitive.Viewport>
  <ConversationMapAui className="max-sm:hidden" />
  <div className="mx-auto w-full max-w-3xl">
    <ThreadPrimitive.Messages components={{ Message }} />
  </div>
</ThreadPrimitive.Viewport>`,
    props: [
      {
        component: "ConversationMapAui",
        rows: [
          {
            name: "side",
            type: '"left" | "right"',
            defaultValue: '"left"',
            description:
              "Which gutter the rail sits in. The hover preview opens toward the messages.",
          },
          {
            name: "className",
            type: "string",
            description:
              "Classes for the sticky rail wrapper, for example to hide the map below a breakpoint.",
          },
        ],
      },
      {
        component: "ConversationMap",
        rows: [
          {
            name: "entries",
            type: "ConversationMapEntry[]",
            required: true,
            description:
              "One tick per turn, in thread order, each with the title and preview its card shows.",
          },
          {
            name: "activeId",
            type: "string",
            description:
              "The turn currently being read, drawn as the one solid tick.",
          },
          {
            name: "visibleIds",
            type: "string[]",
            description:
              "Every turn the viewport holds, drawn deeper than the rest and fanned out by length once the rail is pointed at.",
          },
          {
            name: "onSelect",
            type: "(id: string) => void",
            description: "Called with the turn a tick was clicked for.",
          },
          {
            name: "side",
            type: '"left" | "right"',
            defaultValue: '"right"',
            description: "Which side of the rail the preview card opens on.",
          },
        ],
      },
    ],
  },
};
