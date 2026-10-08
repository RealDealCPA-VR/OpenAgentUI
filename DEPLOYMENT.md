# Deploying OpenAgentUI

The project ships two web properties and a set of npm packages. Each one can
be hosted independently.

| Property | Source | Canonical URL |
| --- | --- | --- |
| Website and docs | `apps/docs` (Next.js) | `https://openagentui.dev` |
| Component registry | `apps/registry` (static JSON) | `https://r.openagentui.dev` |
| Packages | `packages/*` | npm, `@openagentui/*` |

The docs and the CLI refer to the canonical URLs above. If you host under other
domains, set `NEXT_PUBLIC_SITE_URL` for the website and point CLI users at your
registry with `OPENAGENTUI_REGISTRY_URL`.

## Website (`apps/docs`)

Any Next.js host works. On Vercel, import the repository and set:

- Root directory: `apps/docs`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `cd ../.. && pnpm exec turbo build --filter=@openagentui/docs` (builds the workspace packages the site depends on first)
- Node.js 24

Environment variables are documented in `apps/docs/.env.example`. The site
builds and serves every page with none of them. Optional features:

| Feature | Variables |
| --- | --- |
| Live demo thread, docs "Ask AI", playground chat | `OPENAI_API_KEY` (and optionally `OPENAI_BASE_URL`) |
| Rate limits and sessions in production | `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `AUI_ANONYMOUS_SESSION_SECRET` |
| Sign-in on the demo (any OIDC provider) | `NEXT_PUBLIC_AUTH_URL`, `DOCS_OIDC_CLIENT_ID`, `ENCRYPTION_KEY` |
| Analytics (your own account) | `NEXT_PUBLIC_POSTHOG_API_KEY` |
| Higher GitHub API limits for repo stats | `GITHUB_TOKEN` |
| Embedding `/renderer` from your own dashboard | `NEXT_PUBLIC_RENDERER_ALLOWED_ORIGINS` |
| AI playground (sandboxed scaffolding) | `NEXT_PUBLIC_AUI_AI_PLAYGROUND_ENABLED=1`, `BL_WORKSPACE`, `BL_API_KEY` |

## Registry (`apps/registry`)

`pnpm --filter @openagentui/shadcn-registry build` writes static JSON to
`apps/registry/dist`. `apps/registry/vercel.json` holds the rewrites the shadcn
CLI relies on (`/thread` → `/thread.json`, style-aware paths). Deploy it as a
second Vercel project with root directory `apps/registry`, or serve `dist/`
from any static host that can apply the same rewrites.

## GitHub Actions

CI (`code-quality`, `test-coverage`, `python-tests`, …) runs without secrets.
Workflows that deploy or need a third-party app are gated by repository
variables so they stay idle until you configure them:

| Variable | Enables | Also needs |
| --- | --- | --- |
| `ENABLE_VERCEL_DEPLOYS=true` | `registry.yaml`, `deploy-examples.yaml` | secrets `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_REGISTRY_PROJECT_ID` (and example project ids) |
| `ENABLE_AUTOFIX=true` | `autofix.yaml` | the autofix.ci GitHub App |

`TURBO_TOKEN` / `TURBO_TEAM` are optional and only enable remote caching.

## Publishing packages

Releases use Changesets. Add a changeset with `pnpm changeset`, merge, and the
`changeset.yaml` workflow opens a release PR. Merging it triggers
`npm-publish.yaml`, which publishes with npm trusted publishing (OIDC). Before
the first release, create the `@openagentui` npm scope and add this repository
as a trusted publisher for each package. Python packages publish through
`pypi-publish.yaml` the same way.
