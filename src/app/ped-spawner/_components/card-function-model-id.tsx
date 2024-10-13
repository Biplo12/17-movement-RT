import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import React from "react";

interface CardFunctionModelIdProps {
  modelId: string;
}

const CardFunctionModelId: React.FC<CardFunctionModelIdProps> = ({
  modelId,
}): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Model ID">
      <div className="flex items-center justify-start h-full bg-[#0F1014] border border-[#131418] rounded-[2px] p-3 text-sm">
        <span className="text-sm">{modelId}</span>
      </div>
    </CardFunctionLabeledItem>
  );
};
export default CardFunctionModelId;
