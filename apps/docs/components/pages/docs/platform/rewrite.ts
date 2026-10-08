import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import type { Platform, Surface } from "@/lib/constants";
import { isSurface } from "@/lib/docs-platform";

// Negative lookahead avoids matching siblings like `@openagentui/react-langgraph`.
const PACKAGE_PATTERN = /@openagentui\/react(?![-\w])/g;

const PLATFORM_PACKAGE: Record<Surface, string> = {
  react: "@openagentui/react",
  rn: "@openagentui/react-native",
  ink: "@openagentui/react-ink",
};

export function rewritePlatformPackages(
  node: ReactNode,
  platform: Platform,
): ReactNode {
  if (!isSurface(platform) || platform === "react") return node;

  if (typeof node === "string") {
    return node.replace(PACKAGE_PATTERN, PLATFORM_PACKAGE[platform]);
  }
  if (Array.isArray(node)) {
    // Children.map auto-keys the siblings; bare Array.map would warn on Shiki spans.
    return Children.map(node, (child) =>
      rewritePlatformPackages(child, platform),
    );
  }
  if (isValidElement<{ children?: ReactNode }>(node)) {
    const { children } = node.props;
    if (children === undefined) return node;
    return cloneElement(node, {
      children: rewritePlatformPackages(children, platform),
    });
  }
  return node;
}
