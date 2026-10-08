import { useAuiState } from "@openagentui/store";
import { messageErrorText } from "../../store/primitive-predicates";

export const useMessageError = () => {
  return useAuiState(messageErrorText);
};
