import { REPO_URL } from "./constants";

/** Workspace directories whose name differs from the package name. */
const PACKAGE_DIRS: Record<string, string> = {
  openagentui: "cli",
  "openagentui-cloud": "cloud",
};

/** The package's source folder in the monorepo on GitHub. */
export function packageSourceUrl(name: string): string {
  const dir = PACKAGE_DIRS[name] ?? name.replace(/^@openagentui\//, "");
  return `${REPO_URL}/tree/main/packages/${dir}`;
}
