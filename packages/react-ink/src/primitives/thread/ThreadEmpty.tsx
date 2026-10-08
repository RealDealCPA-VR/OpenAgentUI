import type { ReactNode } from "react";
import { AuiIf } from "@openagentui/store";

export type ThreadEmptyProps = {
  children: ReactNode;
};

/**
 * @deprecated Use `<AuiIf condition={(s) => s.thread.isEmpty} />` instead.
 */
export const ThreadEmpty = ({ children }: ThreadEmptyProps) => (
  <AuiIf condition={(s) => s.thread.isEmpty}>{children}</AuiIf>
);
