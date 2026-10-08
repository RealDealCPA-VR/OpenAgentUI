import { useCallback } from "react";
import { useAui } from "@openagentui/store";

export const useEditComposerCancel = () => {
  const aui = useAui();

  const cancel = useCallback(() => {
    aui.composer.cancel();
  }, [aui]);

  return { cancel };
};
