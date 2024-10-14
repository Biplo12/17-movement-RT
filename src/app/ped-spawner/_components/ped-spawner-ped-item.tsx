import { PedItem } from "@/interfaces";
import React, { useState } from "react";
import PedSpawnerModelId from "./ped-spawner-model-id";
import PedSpawnerPedCoordinates from "./ped-spawner-ped-coordinates";
import PedSpawnerRotation from "./ped-spawner-rotation";
import PedSpawnerDeletePedAlert from "./ped-spawner-delete-ped-alert";
import PedSpawnerAnimation from "./ped-spawner-animation";
import CardFunctionExpand from "@/components/card-function-expand";

interface PedSpawnerPedItemProps {
  pedItem: PedItem;
}

const PedSpawnerPedItem: React.FC<PedSpawnerPedItemProps> = ({
  pedItem,
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-1">
      <div className="flex items-center justify-between py-5 px-7 bg-[#0f0f14] w-full">
        <div className="flex gap-4 items-center">
          <img src="/icons/ped-spawner-icon.svg" alt={pedItem.title} />
          <span className="text-white text-sm font-bold">{pedItem.title}</span>
        </div>
        <div className="flex items-center gap-4">
          <PedSpawnerDeletePedAlert item={pedItem} />
          <CardFunctionExpand
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        </div>
      </div>
      {isExpanded && (
        <>
          <PedSpawnerModelId modelId={pedItem.modelId} />
          <PedSpawnerPedCoordinates coordinates={pedItem.coordinates} />
          <PedSpawnerRotation rotation={pedItem.rotation} />
          <PedSpawnerAnimation />
        </>
      )}
    </div>
  );
};

export default PedSpawnerPedItem;
