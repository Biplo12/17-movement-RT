import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import React from "react";

interface PedSpawnerModelIdProps {
  modelId: string;
}

const PedSpawnerModelId: React.FC<PedSpawnerModelIdProps> = ({
  modelId,
}): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Model ID">
      <div className="flex items-center justify-start h-full bg-[#0F1014] w-full max-w-[200px] border border-[#131418] rounded-[2px] p-3 text-sm">
        <span className="text-sm">{modelId}</span>
      </div>
    </CardFunctionLabeledItem>
  );
};
export default PedSpawnerModelId;
