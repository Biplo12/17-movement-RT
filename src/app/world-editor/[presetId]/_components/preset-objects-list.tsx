import React from "react";
import { Preset } from "@/interfaces";
import PresetObjectItem from "./preset-object-item";

interface PresetObjectsListProps {
  preset: Preset;
}

const PresetObjectsList: React.FC<PresetObjectsListProps> = ({
  preset,
}): JSX.Element => {
  return (
    <div className="w-full p-4 flex flex-col gap-4">
      <h1 className="text-white font-bold">Objects list</h1>
      {preset.objects.map((object) => (
        <PresetObjectItem
          key={object.id}
          object={object}
          presetId={preset.id}
        />
      ))}
    </div>
  );
};
export default PresetObjectsList;
