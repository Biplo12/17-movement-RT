import React from "react";
import { ObjectType } from "@/interfaces";
import CardFunctionObjectItemActions from "./card-function-object-item-actions";
import { cn } from "@/lib/utils";

interface CardFunctionObjectItemProps {
  object: ObjectType;
  presetId: string;
}

const CardFunctionObjectItem: React.FC<CardFunctionObjectItemProps> = ({
  object,
  presetId,
}): JSX.Element => {
  return (
    <div className="bg-[#0F1014] p-3 text-white border border-[#131418] flex items-center justify-between">
      <span
        className={cn(
          "text-white text-lg font-medium",
          !object.isVisible ? "text-gray-500" : "text-white"
        )}
      >
        {object.title}
      </span>
      <CardFunctionObjectItemActions object={object} presetId={presetId} />
    </div>
  );
};
export default CardFunctionObjectItem;
