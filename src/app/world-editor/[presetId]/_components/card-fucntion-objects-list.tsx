import React from "react";
import { Preset } from "@/interfaces";
import CardFunctionObjectItem from "./card-function-object-item";

interface CardFunctionObjectsListProps {
  preset: Preset;
}

const CardFunctionObjectsList: React.FC<CardFunctionObjectsListProps> = ({
  preset,
}): JSX.Element => {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <h1 className="text-white font-bold">Objects list</h1>
      {preset.objects.map((object) => (
        <CardFunctionObjectItem
          key={object.id}
          object={object}
          presetId={preset.id}
        />
      ))}
    </div>
  );
};
export default CardFunctionObjectsList;
