import { useMemo, useRef, useCallback } from "react";
import { AssistantRuntimeProvider } from "@openagentui/react";
import { useChatRuntime } from "@openagentui/ai-sdk";
import { Thread } from "@/components/openagentui/elements/thread.aui";
import { AssistantModal } from "@/components/openagentui/elements/assistant-modal.aui";
import { createPreviewTransport } from "./transport";

export type PreviewChatProps = {
  title: string;
  intro: string;
  suggestions: string[];
  modal?: boolean;
  onPrompt: (text: string, signal: AbortSignal) => string | Promise<string>;
};

function ChatContents({ intro }: Omit<PreviewChatProps, "onPrompt">) {
  const Welcome = useCallback(
    () => (
      <div className="aui-thread-welcome-root mb-6 flex flex-col px-2">
        <p className="text-2xl font-medium tracking-tight">{intro}</p>
      </div>
    ),
    [intro],
  );
  return <Thread autoFocus={false} components={{ Welcome }} />;
}

export function PreviewChat({
  onPrompt,
  modal = false,
  ...props
}: PreviewChatProps) {
  const promptRef = useRef(onPrompt);
  promptRef.current = onPrompt;
  const transport = useMemo(
    () =>
      createPreviewTransport((text, signal) => promptRef.current(text, signal)),
    [],
  );
  const runtime = useChatRuntime({
    transport,
    messages: modal
      ? [
          {
            id: "welcome",
            role: "assistant",
            parts: [{ type: "text", text: `${props.title}\n\n${props.intro}` }],
          },
        ]
      : [],
    suggestions: props.suggestions.map((prompt) => ({ prompt })),
  });
  return (
    <AssistantRuntimeProvider runtime={runtime}>
      {modal ? (
        <AssistantModal />
      ) : (
        <section className="preview-chat" aria-label={props.title}>
          <header className="chat-heading">
            <h2>{props.title}</h2>
            <span>Local demo</span>
          </header>
          <ChatContents {...props} />
        </section>
      )}
    </AssistantRuntimeProvider>
  );
}
