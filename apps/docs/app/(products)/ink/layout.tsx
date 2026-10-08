import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SubProjectLayout } from "@/components/shared/sub-project-layout";
import { createOgMetadata } from "@/lib/og";

const title = "openagentui for the Terminal";
const description =
  "Terminal Thread, Composer, and Message primitives for Ink. Same runtime as the web SDK. ANSI markdown.";

export const metadata: Metadata = {
  title,
  description,
  ...createOgMetadata(title, description),
};

export default function InkLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <SubProjectLayout
      name="ink"
      githubPath="https://github.com/RealDealCPA-VR/OpenAgentUI/tree/main/packages/react-ink"
    >
      {children}
    </SubProjectLayout>
  );
}
