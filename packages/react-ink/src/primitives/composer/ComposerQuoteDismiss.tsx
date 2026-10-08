import { useCallback } from "react";

import { useAui } from "@openagentui/store";
import { Pressable, type PressableProps } from "../internal/Pressable";

export type ComposerQuoteDismissProps = Omit<
  PressableProps,
  "onPress" | "children"
> & {
  children: PressableProps["children"];
};

export const ComposerQuoteDismiss = ({
  children,
  ...pressableProps
}: ComposerQuoteDismissProps) => {
  const aui = useAui();

  const handleDismiss = useCallback(() => {
    aui.composer.setQuote(undefined);
  }, [aui]);

  return (
    <Pressable onPress={handleDismiss} {...pressableProps}>
      {children}
    </Pressable>
  );
};
