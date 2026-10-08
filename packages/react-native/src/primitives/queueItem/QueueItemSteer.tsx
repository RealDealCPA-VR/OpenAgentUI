import { useCallback } from "react";
import { Pressable, type PressableProps } from "react-native";
import { useAui } from "@openagentui/store";

export type QueueItemSteerProps = Omit<
  PressableProps,
  "onPress" | "children"
> & {
  children: PressableProps["children"];
};

export const QueueItemSteer = ({
  children,
  ...pressableProps
}: QueueItemSteerProps) => {
  const aui = useAui();

  const handleSteer = useCallback(() => {
    aui.queueItem.steer();
  }, [aui]);

  return (
    <Pressable
      onPress={handleSteer}
      accessibilityRole="button"
      {...pressableProps}
    >
      {children}
    </Pressable>
  );
};
