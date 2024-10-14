import { PedItem } from "@/interfaces";
import React from "react";
import PedSpawnerModelId from "./ped-spawner-model-id";
import PedSpawnerPedCoordinates from "./ped-spawner-ped-coordinates";
import PedSpawnerRotation from "./ped-spawner-rotation";
import PedSpawnerDeletePedAlert from "./ped-spawner-delete-ped-alert";
import PedSpawnerPedItemRoll from "./ped-spawner-ped-item-roll";
import PedSpawnerAnimation from "./ped-spawner-animation";

interface PedSpawnerPedItemProps {
  pedItem: PedItem;
}

const PedSpawnerPedItem: React.FC<PedSpawnerPedItemProps> = ({
  pedItem,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-1">
      <div className="flex items-center justify-between py-5 px-7 bg-[#0f0f14] w-full">
        <div className="flex gap-4 items-center">
          <img src="/icons/ped-spawner-icon.svg" alt={pedItem.title} />
          <span className="text-white text-sm font-bold">{pedItem.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <PedSpawnerDeletePedAlert item={pedItem} />
          <PedSpawnerPedItemRoll />
        </div>
      </div>
      <PedSpawnerModelId modelId={pedItem.modelId} />
      <PedSpawnerPedCoordinates coordinates={pedItem.coordinates} />
      <PedSpawnerRotation rotation={pedItem.rotation} />
      <PedSpawnerAnimation />
    </div>
  );
};

export default PedSpawnerPedItem;
