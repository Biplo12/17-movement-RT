import { PedItem } from "@/interfaces";
import React from "react";
import CardFunctionModelId from "./card-function-model-id";
import CardFunctionPedCoordinates from "./card-function-ped-coordinates";
import CardFunctionRotation from "./card-function-rotation";
import CardFunctionAnimation from "@/app/prop-tool/_components/card-function-animation";
import { useAppDispatch } from "@/store/store-hooks";
import { deletePedItem } from "@/state/globalsSlice";
import CardFunctionDeletePedAlert from "./card-function-delete-ped-alert";

interface CardFunctionPedItemProps {
  pedItem: PedItem;
}

const CardFunctionPedItem: React.FC<CardFunctionPedItemProps> = ({
  pedItem,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDeletePedItem = () => {
    dispatch(deletePedItem(pedItem.id));
  };
  return (
    <div className="flex flex-col items-center justify-start w-full h-full px-1">
      <div className="flex items-center justify-between py-5 px-7 bg-[#0f0f14] w-full">
        <div className="flex gap-4 items-center">
          <img src="/icons/ped-spawner-icon.svg" alt={pedItem.title} />
          <span>{pedItem.title}</span>
        </div>
        <CardFunctionDeletePedAlert item={pedItem} />
      </div>
      <CardFunctionModelId modelId={pedItem.modelId} />
      <CardFunctionPedCoordinates coordinates={pedItem.coordinates} />
      <CardFunctionRotation rotation={pedItem.rotation} />
      <CardFunctionAnimation />
    </div>
  );
};

export default CardFunctionPedItem;
