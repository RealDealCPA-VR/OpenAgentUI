import type { SdkIdentity } from "openagentui-cloud";

export const LANGCHAIN_SDK: SdkIdentity = {
  name: "@openagentui/react-langchain",
  version:
    typeof __AUI_PACKAGE_VERSION__ === "string"
      ? __AUI_PACKAGE_VERSION__
      : "0.0.0",
};
