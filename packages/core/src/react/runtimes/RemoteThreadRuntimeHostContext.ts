import { createContext, useContext } from "react";
import { useContextProvider } from "@openagentui/tap";

const RemoteThreadRuntimeHostContext = createContext(false);

export const useRemoteThreadRuntimeHostProvider = <TResult>(
  fn: () => TResult,
): TResult => useContextProvider(RemoteThreadRuntimeHostContext, true, fn);

export const useIsRemoteThreadRuntimeHosted = (): boolean =>
  useContext(RemoteThreadRuntimeHostContext);
