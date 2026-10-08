// Internal `react-server` indirection target — always replaced by the
// @openagentui/next loader, which re-exports the module's server build.
// Reaching this means the loader wasn't applied (see DESIGN.md).
throw new Error(
  "@openagentui/next/bundler-redirect is internal; import it through the " +
    "@openagentui/next loader.",
);
