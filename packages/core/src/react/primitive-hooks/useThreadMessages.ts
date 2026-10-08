import { useAuiState } from "@openagentui/store";
import type { MessageState } from "../../store/scopes/message";

export const useThreadMessages = (): readonly MessageState[] => {
  return useAuiState((s) => s.thread.messages);
};
