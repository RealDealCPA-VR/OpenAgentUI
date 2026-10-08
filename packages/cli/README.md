# `openagentui` CLI

[![npm version](https://img.shields.io/npm/v/openagentui)](https://www.npmjs.com/package/openagentui)
[![npm downloads](https://img.shields.io/npm/dm/openagentui)](https://www.npmjs.com/package/openagentui)
[![GitHub stars](https://img.shields.io/github/stars/RealDealCPA-VR/OpenAgentUI)](https://github.com/RealDealCPA-VR/OpenAgentUI)

Command-line tool for adding shadcn-style components to your project, scaffolding a new app, and keeping your OpenAgentUI packages up to date.

## Installation

Run via your package manager of choice; nothing to install globally:

```bash
npx openagentui@latest <command>
pnpm dlx openagentui@latest <command>
yarn dlx openagentui@latest <command>
bunx openagentui@latest <command>
```

## Common tasks

```bash
# scaffold a new Next.js project
npx openagentui@latest create my-app

# scaffold a minimal project
npx openagentui@latest create my-app --template minimal

# scaffold from a feature example
npx openagentui@latest create my-app --example with-ai-sdk-v7

# scaffold an Expo / React Native project
npx openagentui@latest create my-app --native

# scaffold a React Ink terminal project
npx openagentui@latest create my-app --ink

# add openagentui to an existing project
npx openagentui@latest init

# initialize non-interactively for CI or agent flows
npx openagentui@latest init --yes

# add a component
npx openagentui@latest add thread

# update all @openagentui/* and assistant-* packages
npx openagentui@latest update

# run codemods after a major version bump
npx openagentui@latest upgrade

# print env + version info for a bug report
npx openagentui info
```

`init` falls back to `create` when no `package.json` is found, so a single command works for both new and existing projects. Use `init --yes` for CI and agent flows where prompts are not available.

## Templates

`create` scaffolds from named templates: `default` (AI SDK), `minimal`, `cloud`, `cloud-clerk`, `cloud-harness`, `langchain`, `mcp`, `eve`. Pass `-t <name>`, pass `--example <name>` for examples such as `with-ai-sdk-v7`, use `--native` for Expo / React Native, use `--ink` for React Ink, or pass `--preset <url>` to scaffold from an `openagentui.dev` playground link.

## Shared cloud chat

```bash
npx openagentui@latest cloud setup multiplayer-chat
cd multiplayer-chat
npm run dev
```

Setup signs you in through your browser, selects or creates your organization
and project, provisions a hosted harness, and installs the shared chat starter.
Add your `OPENAI_API_KEY` to the generated `.env.local` before starting the app.
Open `http://localhost:3000/#main` in two browsers. Both clients share the
conversation and see replies as they stream. **Share this chat** copies the
current conversation's URL.

Select resources explicitly for a script or agent:

```bash
npx openagentui@latest cloud setup multiplayer-chat --org team --new-project hackathon-chat --backend-url http://localhost:3000/api/chat --yes
```

Use `--project <id-or-slug>` for an existing project. A hackathon access code
can be supplied with `--access-code <code>` or `OPENAGENTUI_ACCESS_CODE`.
`--use-npm`, `--use-pnpm`, `--use-yarn`, and `--use-bun` select the installer;
`--skip-install` leaves dependency installation to you. For a hosted app,
pass its HTTPS chat endpoint as `--backend-url` during initial setup. If you
deploy a chat first configured locally, update its backend allowlist in the
Cloud dashboard and its `backendUrl` in `.openagentui/cloud.json`, then rerun
setup with the same HTTPS `--backend-url`. Existing conversations keep their
original backend; open the deployed app with a fresh thread fragment such as
`#deployed-chat`, then use **Share this chat**.

The project API key stays in `.env.local`, with owner-only permissions and a
Git ignore entry. `.openagentui/cloud.json` stores the selected project and
harness IDs. Browser clients receive short-lived credentials from the app's
server and share the `hackathon` user. Add your application authentication to
`/api/credential` when the chat needs individual users or private access.

Run `npx openagentui@latest cloud setup .` from an existing cloud-harness starter to resume
setup. Existing environment values are preserved; conflicting cloud settings
produce an error. `npx openagentui@latest cloud login` signs in separately and
`npx openagentui@latest cloud logout` revokes the saved CLI login.

When an agent is installing from an active setup wizard, pass its setup-agent
URL with `--setup-url <url>` to `cloud login` or `cloud setup`. The wizard shows
the device approval code and sends you to Accounts for explicit consent, then
returns to the same setup. The CLI polls Accounts directly and saves credentials
locally with owner-only permissions; tokens never pass through the wizard or
its generic secret inputs. Cancelling the sign-in question or setup cancels
pending login. Returning from Accounts alone does not complete login.

Before the npm patch is released, use the
[verified wizard sign-in prerelease](https://openagentui.dev/downloads/openagentui-wizard-login-ea9aae48e.tgz)
with your active setup-agent connection URL:

```bash
npx --yes --package=https://openagentui.dev/downloads/openagentui-wizard-login-ea9aae48e.tgz openagentui cloud login --setup-url "<active-setup-agent-url>"
```

## Documentation

Full command reference, flags, and template details at [openagentui.dev/docs/cli](https://openagentui.dev/docs/cli).
