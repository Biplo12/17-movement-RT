"use client";

import CardFunctionWithHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import PedSpawnerPedItems from "./_components/ped-spawner-ped-items";
import CreateNewPedDialog from "./_components/create-new-ped-dialog";

export default function PedSpawner() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-160px)] pb-8 overflow-y-auto">
        <div className="flex-grow flex flex-col items-start justify-start w-full gap-1">
          <CardFunctionWithHeader
            title="Ped spawner"
            icon="ped-spawner-icon-active"
          >
            <div className="flex flex-col items-start justify-start w-full">
              <PedSpawnerPedItems />
            </div>
          </CardFunctionWithHeader>
        </div>
      </div>
      <CreateNewPedDialog />
    </PanelCard>
  );
}
