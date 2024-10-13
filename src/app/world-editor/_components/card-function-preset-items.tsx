import React from "react";
import CardFunctionPresetItem from "./card-function-preset-item";
import { useAppSelector } from "@/store/store-hooks";

const CardFunctionPresetItems: React.FC = (): JSX.Element | null => {
  const presets = useAppSelector((state) => state.global.presets);
  if (!presets) return null;

  return (
    <div className="flex items-start justify-start w-full flex-col gap-4">
      {presets?.map((preset) => (
        <CardFunctionPresetItem key={preset.id} item={preset} />
      ))}
    </div>
  );
};
export default CardFunctionPresetItems;
