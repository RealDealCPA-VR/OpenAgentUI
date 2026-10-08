import type { ComputedRef } from "vue";
import { useAui } from "../useAui";
import { composerSendDisabled } from "@openagentui/core/store/internal";
import { useAuiState } from "../useAuiState";

export const useComposerSendState = (): {
  disabled: ComputedRef<boolean>;
  send: () => void;
} => {
  const aui = useAui();
  const disabled = useAuiState(composerSendDisabled);
  return { disabled, send: () => aui.composer.send() };
};
