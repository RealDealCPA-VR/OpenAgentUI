# `@openagentui/react-markdown`

[`react-markdown`](https://github.com/remarkjs/react-markdown) integration for `@openagentui/react`. Renders the assistant's markdown output as React components inside `MessagePrimitive.Parts`.

## When to use this

| Package                                  | Best for                                                          |
| ---------------------------------------- | ----------------------------------------------------------------- |
| `@openagentui/react-markdown`           | Lightweight rendering; bring your own syntax highlighter.         |
| `@openagentui/react-streamdown`         | Feature-rich with built-in Shiki, KaTeX, and Mermaid.             |
| `@openagentui/react-syntax-highlighter` | Pair with `react-markdown` when you only need code-block highlighting. |

## Installation

```bash
npm install @openagentui/react @openagentui/react-markdown react-markdown remark-gfm
```

## Usage

```tsx
import { MarkdownTextPrimitive } from "@openagentui/react-markdown";
import remarkGfm from "remark-gfm";

export const MarkdownText = () => (
  <MarkdownTextPrimitive remarkPlugins={[remarkGfm]} className="aui-md" />
);
```

Plug `<MarkdownText />` into `MessagePrimitive.Parts` as the `Text` component to render markdown for every text part.

Full reference at [openagentui.dev/docs/ui/markdown](https://openagentui.dev/docs/ui/markdown).
