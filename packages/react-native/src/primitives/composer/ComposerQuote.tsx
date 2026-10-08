import type { ReactNode } from "react";
import { View, type ViewProps } from "react-native";
import { useAuiState } from "@openagentui/store";

export type ComposerQuoteProps = ViewProps & {
  children: ReactNode;
};

export const ComposerQuote = ({
  children,
  ...viewProps
}: ComposerQuoteProps) => {
  const hasQuote = useAuiState((s) => s.composer.quote !== undefined);
  if (!hasQuote) return null;

  return <View {...viewProps}>{children}</View>;
};
