import { useAuiState } from "@openagentui/store";

/**
 * @deprecated Use `useAuiState((s) => s.thread.isEmpty)` instead.
 */
export const useThreadIsEmpty = (): boolean => {
  return useAuiState((s) => s.thread.isEmpty);
};
