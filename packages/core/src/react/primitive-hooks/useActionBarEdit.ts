import { useCallback } from "react";
import { useAui, useAuiState } from "@openagentui/store";
import { actionBarEditDisabled } from "../../store/primitive-predicates";

export const useActionBarEdit = () => {
  const aui = useAui();
  const disabled = useAuiState(actionBarEditDisabled);

  const edit = useCallback(() => {
    aui.composer.beginEdit();
  }, [aui]);

  return { edit, disabled };
};
