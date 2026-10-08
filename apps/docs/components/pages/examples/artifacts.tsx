"use client";

import { Thread } from "@/components/openagentui/elements/thread.aui";
import { ArtifactsView } from "./artifacts-view";

export const Artifacts = () => {
  return (
    <div className="flex h-full justify-stretch">
      <div className="grow basis-full">
        <Thread />
      </div>
      <ArtifactsView />
    </div>
  );
};
