# `@openagentui/react-ink-markdown`

Terminal markdown rendering for [`@openagentui/react-ink`](https://www.npmjs.com/package/@openagentui/react-ink). Wraps [`markdansi`](https://github.com/steipete/Markdansi) to render formatted headings, code blocks, tables, lists, and more in the terminal, with Shiki syntax highlighting.

## Installation

```bash
npm install @openagentui/react-ink @openagentui/react-ink-markdown ink react shiki
```

## Usage

Inside `MessagePrimitive.Parts`, use `MarkdownTextPrimitive` to read text and status from the runtime context automatically:

```tsx
import { MessagePrimitive } from "@openagentui/react-ink";
import { MarkdownTextPrimitive } from "@openagentui/react-ink-markdown";

<MessagePrimitive.Parts>
  {({ part }) => (part.type === "text" ? <MarkdownTextPrimitive /> : null)}
</MessagePrimitive.Parts>;
```

For standalone use or to attach a custom Shiki highlighter, see the Documentation section below.

## Documentation

Full reference at [openagentui.dev/docs/ink](https://openagentui.dev/docs/ink).
