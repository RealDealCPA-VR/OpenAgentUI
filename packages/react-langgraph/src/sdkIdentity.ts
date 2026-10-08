import type { SdkIdentity } from "openagentui-cloud";

export const LANGGRAPH_SDK: SdkIdentity = {
  name: "@openagentui/react-langgraph",
  version:
    typeof __AUI_PACKAGE_VERSION__ === "string"
      ? __AUI_PACKAGE_VERSION__
      : "0.0.0",
};
