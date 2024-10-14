import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import React from "react";

interface PedSpawnerRotationProps {
  rotation: {
    X: number | null;
    Y: number | null;
    Z: number | null;
  };
}

const PedSpawnerRotation: React.FC<PedSpawnerRotationProps> = ({
  rotation,
}): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Rotation">
      <div className="flex items-end justify-end gap-2">
        {Object.entries(rotation).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-center gap-2 bg-[#111216] px-3 py-2 rounded-md"
          >
            <span className="text-sm">
              {key}: {value}°
            </span>
            <CopyButton content={value?.toString() ?? ""} />
          </div>
        ))}
      </div>
    </CardFunctionLabeledItem>
  );
};
export default PedSpawnerRotation;
