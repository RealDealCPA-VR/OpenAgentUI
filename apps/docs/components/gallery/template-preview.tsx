"use client";

import {
  renderGenerativeUI,
  type GenerativeUIDispatch,
} from "@openagentui/react-generative-ui";
import { styledGenerativeUILibrary } from "@/components/openagentui/elements/generative-ui";
import type { GalleryTemplate } from "@/lib/gallery-templates";

export function TemplatePreview({
  tree,
  dispatch,
}: {
  tree: GalleryTemplate["tree"];
  dispatch?: GenerativeUIDispatch;
}) {
  return (
    <>
      {renderGenerativeUI(tree, styledGenerativeUILibrary, {
        status: "done",
        ...(dispatch ? { dispatch } : {}),
      })}
    </>
  );
}
