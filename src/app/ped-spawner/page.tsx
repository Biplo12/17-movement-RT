"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import CardFunctionPedItems from "./_components/card-function-ped-items";
import CreateNewPedDialog from "./_components/create-new-ped-dialog";

export default function PedSpawner() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-160px)] pb-8 overflow-y-auto">
        <div className="flex-grow flex flex-col items-start justify-start w-full gap-1">
          <CardFunctionHeader
            title="Ped spawner"
            icon="ped-spawner-icon-active"
          />
          <div className="flex flex-col items-start justify-start w-full">
            <CardFunctionPedItems />
          </div>
        </div>
      </div>
      <CreateNewPedDialog />
    </PanelCard>
  );
}
