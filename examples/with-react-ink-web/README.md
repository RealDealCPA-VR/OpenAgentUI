# Welcome to the openagentui ink web demo 👋

This app runs the [`@openagentui/react-ink`](https://openagentui.dev/docs/ink) terminal chat in the browser against a real LLM. It powers the live demo embedded at [openagentui.dev/ink](https://openagentui.dev/ink) and is deployed at [openagentui-ink.vercel.app](https://openagentui-ink.vercel.app).

## Get started

1. Install dependencies

   ```bash
   pnpm install
   ```

2. Start the docs app, which serves the chat endpoint on [localhost:3000](http://localhost:3000)

   ```bash
   pnpm --filter @openagentui/docs dev
   ```

3. Start the app

   ```bash
   pnpm dev
   ```

The terminal opens on [localhost:8081](http://localhost:8081), and the docs app embeds this URL on its `/ink` page in development.

## How it works

Ink has no official web target, so this app renders the real `@openagentui/react-ink` component tree through [ink-web](https://github.com/cjroth/ink-web)'s browser build of Ink, bridged to a [wterm](https://github.com/vercel-labs/wterm) terminal. wterm renders to the DOM, so text selection, copy, find, and screen readers work natively.

Chat requests go to the openagentui docs site's `/api/chat`, the same pattern as the React Native demo at [openagentui-expo.vercel.app](https://openagentui-expo.vercel.app). The app obtains a signed anonymous session when the backend supports it and holds no API keys; custom backends without the session route continue to receive normal chat requests.

## Thread controls

The terminal shares its thread sidebar with the native Ink example. Press **Ctrl+G** to browse threads, **Alt+↑ / Alt+↓** to switch conversations, **Ctrl+N** for a new thread, or **Ctrl+R** to rename the current thread. Press **?** in the sidebar for search, pinning, archive/restore, and confirmed deletion controls. These shortcuts are scoped to the terminal; the browser keeps its usual shortcuts outside it.

Thread history is held in memory for the current session. See the [complete keyboard reference](../with-react-ink/README.md#keyboard-controls).

Browsers can reserve shortcuts such as Ctrl+N for opening a new window. Press Ctrl+G, then n in the sidebar to create a thread when the browser handles that shortcut.

## Learn more

- [openagentui ink documentation](https://openagentui.dev/docs/ink): primitives, hooks, and adapters for terminal UIs.
- [with-react-ink](../with-react-ink): the real terminal version of this example. Start there if you are building an Ink app.
