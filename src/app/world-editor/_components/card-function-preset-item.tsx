import { Preset } from "@/interfaces";
import React from "react";
import CardFunctionPresetAction from "./card-function-preset-action";
import CardFunctionPresetDeleteAlert from "./card-function-preset-delete-alert";

interface CardFunctionPresetItemProps {
  item: Preset;
  presets: Preset[];
  setPresets: (presets: Preset[]) => void;
}

const CardFunctionPresetItem: React.FC<CardFunctionPresetItemProps> = ({
  item,
  presets,
  setPresets,
}): JSX.Element => {
  return (
    <div
      key={item.id}
      className="w-full bg-[#0D0E12] p-4 flex items-center justify-between"
    >
      <span>{item.title}</span>
      <div className="flex items-center justify-end gap-2">
        <CardFunctionPresetAction
          icon="eye-icon"
          label="View"
          onClick={() => {}}
        />
        <CardFunctionPresetAction
          icon="edit-icon"
          label="Edit"
          onClick={() => {}}
        />
        <CardFunctionPresetDeleteAlert
          item={item}
          presets={presets}
          setPresets={setPresets}
        />
      </div>
    </div>
  );
};
export default CardFunctionPresetItem;
