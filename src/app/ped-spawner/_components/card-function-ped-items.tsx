import { useAppSelector } from "@/store/store-hooks";
import React from "react";
import CardFunctionPedItem from "./card-function-ped-item";

const CardFunctionPedItems: React.FC = (): JSX.Element => {
  const pedItems = useAppSelector((state) => state.global.pedItems);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      {pedItems.map((pedItem) => (
        <CardFunctionPedItem key={pedItem.id} pedItem={pedItem} />
      ))}
    </div>
  );
};

export default CardFunctionPedItems;
