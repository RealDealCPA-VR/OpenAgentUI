import type { SdkIdentity } from "openagentui-cloud";

export const EVE_SDK: SdkIdentity = {
  name: "@openagentui/eve",
  version:
    typeof __AUI_PACKAGE_VERSION__ === "string"
      ? __AUI_PACKAGE_VERSION__
      : "0.0.0",
};
