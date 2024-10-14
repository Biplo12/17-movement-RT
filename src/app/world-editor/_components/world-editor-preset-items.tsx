import React from "react";
import WorldEditorPresetItem from "./world-editor-preset-item";
import { useAppSelector } from "@/store/store-hooks";

const WorldEditorPresetItems: React.FC = (): JSX.Element | null => {
  const presets = useAppSelector((state) => state.global.presets);
  if (!presets) return null;

  return (
    <div className="flex items-start justify-start w-full flex-col gap-4">
      {presets?.map((preset) => (
        <WorldEditorPresetItem key={preset.id} item={preset} />
      ))}
    </div>
  );
};
export default WorldEditorPresetItems;
