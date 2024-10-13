"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import CardFunctionInteriorId from "./_components/card-function-interior-id";

export default function InteriorDebugger() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)]">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Interior debugger"
            icon="interior-debugger-icon-active"
          />
          <div className="p-4 px-8">
            <h1 className="text-white font-bold">Interior information</h1>
            <CardFunctionInteriorId />
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
