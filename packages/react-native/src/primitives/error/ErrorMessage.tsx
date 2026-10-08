import type { ReactNode } from "react";
import { Text, type TextProps } from "react-native";
import { useMessageError } from "@openagentui/core/react";

export type ErrorMessageProps = TextProps & {
  children?: ReactNode;
};

export const ErrorMessage = ({ children, ...textProps }: ErrorMessageProps) => {
  const error = useMessageError();

  if (error === undefined) return null;

  return <Text {...textProps}>{children ?? String(error)}</Text>;
};

ErrorMessage.displayName = "ErrorPrimitive.Message";
