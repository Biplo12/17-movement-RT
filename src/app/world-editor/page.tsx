"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import CardFunctionPresetItems from "./_components/card-function-preset-items";
import CreateNewPresetDialog from "./_components/create-new-preset-dialog";

export default function WorldEditor() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)] overflow-y-auto">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader title="World editor" icon="website-icon-active" />
          <CardFunctionPresetItems />
        </div>
        <CreateNewPresetDialog />
      </div>
    </PanelCard>
  );
}
