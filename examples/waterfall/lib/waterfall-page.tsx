"use client";

import { AuiProvider, AuiConfig } from "@openagentui/store";
import { SpanResource } from "@openagentui/react-o11y";
import { mockSpans } from "./mock-data";
import { WaterfallTimeline } from "./waterfall-timeline";

const config = AuiConfig({
  span: SpanResource({ spans: mockSpans }),
});

export function WaterfallPage() {
  return (
    <AuiProvider config={config}>
      <WaterfallTimeline />
    </AuiProvider>
  );
}
