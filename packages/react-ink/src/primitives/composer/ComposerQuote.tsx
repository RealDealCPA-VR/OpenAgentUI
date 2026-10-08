import type { ComponentProps, ReactNode } from "react";
import { Box } from "ink";
import { useAuiState } from "@openagentui/store";

export type ComposerQuoteProps = ComponentProps<typeof Box> & {
  children: ReactNode;
};

export const ComposerQuote = ({
  children,
  ...boxProps
}: ComposerQuoteProps) => {
  const hasQuote = useAuiState((s) => s.composer.quote !== undefined);
  if (!hasQuote) return null;
  return <Box {...boxProps}>{children}</Box>;
};
