# `@openagentui/react-syntax-highlighter`

Code-block syntax highlighting for `@openagentui/react-markdown`, powered by [`react-syntax-highlighter`](https://github.com/react-syntax-highlighter/react-syntax-highlighter). Use the light or async builds to keep your bundle size small.

## When to use this

Pair this with `@openagentui/react-markdown` when you want syntax-highlighted code blocks. If you want a batteries-included setup with Shiki built in, use `@openagentui/react-streamdown` instead.

## Installation

```bash
npm install @openagentui/react @openagentui/react-markdown @openagentui/react-syntax-highlighter react-syntax-highlighter
```

## Usage

```tsx
import { makeLightSyntaxHighlighter } from "@openagentui/react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import js from "react-syntax-highlighter/dist/cjs/languages/hljs/javascript";
import ts from "react-syntax-highlighter/dist/cjs/languages/hljs/typescript";

export const SyntaxHighlighter = makeLightSyntaxHighlighter({
  style: coldarkDark,
  languages: { javascript: js, typescript: ts },
});
```

Pass the resulting component as the `SyntaxHighlighter` override to `MarkdownTextPrimitive`.

## Builds

- `makeLightSyntaxHighlighter` / `makeLightAsyncSyntaxHighlighter`: hljs grammars.
- `makePrismLightSyntaxHighlighter` / `makePrismAsyncLightSyntaxHighlighter`: Prism grammars.

Full reference at [openagentui.dev/docs/ui/syntax-highlighting](https://openagentui.dev/docs/ui/syntax-highlighting).
