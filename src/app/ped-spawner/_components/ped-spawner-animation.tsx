import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import React from "react";

const PedSpawnerAnimation: React.FC = (): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Animation">
      <div className="flex w-full gap-4 items-center justify-end">
        <div className="flex items-center justify-start h-full bg-[#0F1014] border border-[#131418] rounded-[2px] p-3 text-sm w-full max-w-[150px]">
          <p>Animation dict</p>
        </div>
        <div className="flex items-center justify-start h-full bg-[#0F1014] border border-[#131418] rounded-[2px] p-3 text-sm w-full max-w-[150px]">
          <p>Animation clip</p>
        </div>
      </div>
    </CardFunctionLabeledItem>
  );
};

export default PedSpawnerAnimation;
