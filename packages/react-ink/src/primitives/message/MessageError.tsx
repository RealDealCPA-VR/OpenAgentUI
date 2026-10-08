import type { FC, PropsWithChildren } from "react";
import { useMessageError } from "@openagentui/core/react";

export const MessageError: FC<PropsWithChildren> = ({ children }) => {
  const error = useMessageError();
  return error !== undefined ? children : null;
};

MessageError.displayName = "MessagePrimitive.Error";
