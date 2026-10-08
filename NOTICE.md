# Notice

OpenAgentUI is derived from **assistant-ui**
(<https://github.com/assistant-ui/assistant-ui>), imported at commit
`b4b56fecbb8b0466bcb547fb38df3978282d11ac`.

assistant-ui is Copyright (c) 2026 AgentbaseAI Inc. and is distributed under
the MIT License, which this project keeps. The full license text, including the
original copyright notice, is in [LICENSE](LICENSE).

## What changed in this fork

- Packages are published under the `@openagentui` scope (`openagentui` CLI,
  `create-openagentui`, `openagentui-stream`, `openagentui-cloud`).
- The website has a new landing page and no pricing, company, careers,
  showcase, checkout or hosted-cloud pages. It ships no third-party analytics
  account; PostHog and Vercel analytics turn on only with the deployer's keys.
- The CLI no longer provisions the upstream hosted cloud.
- `CHANGELOG.md` files keep the upstream release history, so entries before the
  fork name the original `@assistant-ui/*` packages and link upstream pull
  requests.

OpenAgentUI is an independent project and is not affiliated with or endorsed by
AgentbaseAI Inc. or the assistant-ui maintainers.
