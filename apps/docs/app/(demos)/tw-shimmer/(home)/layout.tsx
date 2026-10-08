import type { ReactNode } from "react";
import { SubProjectLayout } from "@/components/shared/sub-project-layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "@openagentui/tw-shimmer by openagentui",
  description:
    "Zero-dependency Tailwind v4 shimmer for text and skeleton loaders. Pure CSS.",
};

export default function TwShimmerHomeLayout({
  children,
}: {
  children: ReactNode;
}): React.ReactElement {
  return (
    <SubProjectLayout
      name="@openagentui/tw-shimmer"
      githubPath="https://github.com/RealDealCPA-VR/OpenAgentUI/tree/main/packages/tw-shimmer"
    >
      {children}
    </SubProjectLayout>
  );
}
