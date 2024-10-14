import { useAppSelector } from "@/store/store-hooks";
import React from "react";
import PedSpawnerPedItem from "./ped-spawner-ped-item";

const PedSpawnerPedItems: React.FC = (): JSX.Element => {
  const pedItems = useAppSelector((state) => state.global.pedItems);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      {pedItems.map((pedItem) => (
        <PedSpawnerPedItem key={pedItem.id} pedItem={pedItem} />
      ))}
    </div>
  );
};

export default PedSpawnerPedItems;
