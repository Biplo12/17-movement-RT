import React from "react";
import CardFunctionPresetItem from "./card-function-preset-item";
import { Preset } from "@/interfaces";

interface CardFunctionPresetItemsProps {
  presets: Preset[];
  setPresets: (presets: Preset[]) => void;
}

const CardFunctionPresetItems: React.FC<CardFunctionPresetItemsProps> = ({
  presets,
  setPresets,
}): JSX.Element | null => {
  if (!presets) return null;

  return (
    <div className="flex items-start justify-start w-full flex-col gap-4">
      {presets?.map((item) => (
        <CardFunctionPresetItem
          key={item.id}
          item={item}
          presets={presets}
          setPresets={setPresets}
        />
      ))}
    </div>
  );
};
export default CardFunctionPresetItems;
