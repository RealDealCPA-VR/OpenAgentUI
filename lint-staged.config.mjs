// Large changesets lint the whole repo instead of passing every path, which
// would exceed the Windows command-line length limit.
const MAX_FILES = 100;

const quote = (file) => JSON.stringify(file);

export default {
  "*.{js,jsx,ts,tsx,cjs,mjs,cts,mts,json,jsonc}": (files) =>
    files.length > MAX_FILES
      ? ["oxlint --fix", "oxfmt"]
      : [
          `oxlint --fix --no-error-on-unmatched-pattern ${files.map(quote).join(" ")}`,
          `oxfmt --no-error-on-unmatched-pattern ${files.map(quote).join(" ")}`,
        ],
};
