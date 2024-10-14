"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import InteriorDebuggerInteriorId from "./_components/interior-debugger-interior-id";
import InteriorDebuggerRoomId from "./_components/interior-debugger-room-id";
import InteriorDebuggerPortalsDebugging from "./_components/interior-debugger-portals-debugging";

export default function InteriorDebugger() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)]">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Interior debugger"
            icon="interior-debugger-icon-active"
          />
          <div className="flex flex-col items-start justify-start w-full">
            <h1 className="text-white font-bold px-8 py-4">
              Interior information
            </h1>
            <InteriorDebuggerInteriorId />
            <InteriorDebuggerRoomId />
            <InteriorDebuggerPortalsDebugging />
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
