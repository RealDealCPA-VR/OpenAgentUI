"use client";

import { AuiConfig, useAui, AuiProvider } from "@openagentui/store";
import { SpanResource } from "@openagentui/react-o11y";
import { mockSpans } from "./mock-spans";
import { WaterfallTimeline } from "./waterfall-timeline";
import { ClientOnly } from "./client-only";

function WaterfallInner() {
  const aui = useAui();
  const config = AuiConfig({ span: SpanResource({ spans: mockSpans }) });

  return (
    <AuiProvider extends={aui} config={config}>
      <WaterfallTimeline />
    </AuiProvider>
  );
}

export function WaterfallSample() {
  return (
    <ClientOnly minHeight={300}>
      <WaterfallInner />
    </ClientOnly>
  );
}
