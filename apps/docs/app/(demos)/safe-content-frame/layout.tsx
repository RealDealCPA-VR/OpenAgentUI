import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SubProjectLayout } from "@/components/shared/sub-project-layout";
import { createOgMetadata } from "@/lib/og";

const title = "@openagentui/safe-content-frame";
const description =
  "Untrusted HTML in a sandboxed iframe. Unique origin per render. Pure JS.";

export const metadata: Metadata = {
  title,
  description,
  ...createOgMetadata(title, description),
};

export default function SafeContentFrameLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <SubProjectLayout
      name="@openagentui/safe-content-frame"
      githubPath="https://github.com/RealDealCPA-VR/OpenAgentUI/tree/main/packages/safe-content-frame"
    >
      {children}
    </SubProjectLayout>
  );
}
