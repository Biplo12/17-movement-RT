"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import WorldEditorPresetItems from "./_components/world-editor-preset-items";
import CreateNewPresetDialog from "./_components/create-new-preset-dialog";

export default function WorldEditor() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-160px)] pb-8 overflow-y-auto">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader title="World editor" icon="website-icon-active" />
          <WorldEditorPresetItems />
        </div>
      </div>
      <CreateNewPresetDialog />
    </PanelCard>
  );
}
