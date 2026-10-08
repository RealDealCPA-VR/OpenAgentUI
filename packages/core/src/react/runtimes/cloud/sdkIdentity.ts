import type { SdkIdentity } from "openagentui-cloud";

export const CORE_SDK: SdkIdentity = {
  name: "@openagentui/core",
  version:
    typeof __AUI_PACKAGE_VERSION__ === "string"
      ? __AUI_PACKAGE_VERSION__
      : "0.0.0",
};
