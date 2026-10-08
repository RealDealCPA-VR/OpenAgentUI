import { useCallback } from "react";
import { useAui, useAuiState } from "@openagentui/store";
import { actionBarReloadDisabled } from "../../store/primitive-predicates";

export const useActionBarReload = () => {
  const aui = useAui();
  const disabled = useAuiState(actionBarReloadDisabled);

  const reload = useCallback(() => {
    aui.message.reload();
  }, [aui]);

  return { reload, disabled };
};
