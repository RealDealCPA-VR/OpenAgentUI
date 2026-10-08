import type { ReactNode } from "react";
import {
  Platform,
  Pressable,
  type PressableProps,
  type PressableStateCallbackType,
} from "react-native";
import { useAuiState } from "@openagentui/store";
import { useThreadListItemTrigger } from "@openagentui/core/react";

export type ThreadListItemTriggerProps = Omit<
  PressableProps,
  "onPress" | "children"
> & {
  children:
    | ReactNode
    | ((
        state: PressableStateCallbackType & { isActive: boolean },
      ) => ReactNode);
};

export const ThreadListItemTrigger = ({
  children,
  accessibilityState,
  ...pressableProps
}: ThreadListItemTriggerProps) => {
  const isActive = useAuiState(
    (s) => s.threads.mainThreadId === s.threadListItem.id,
  );
  const { switchTo } = useThreadListItemTrigger();
  const selected = accessibilityState?.selected ?? isActive;

  return (
    <Pressable
      onPress={switchTo}
      accessibilityRole="button"
      accessibilityState={{ ...accessibilityState, selected }}
      aria-current={Platform.OS === "web" && selected ? "true" : undefined}
      {...pressableProps}
    >
      {typeof children === "function"
        ? (state) => children({ ...state, isActive })
        : children}
    </Pressable>
  );
};
