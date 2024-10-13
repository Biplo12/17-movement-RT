import React from "react";
import { ObjectType } from "@/interfaces";
import CardFunctionObjectItemActions from "./card-function-object-item-actions";

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
      {object.title}
      <CardFunctionObjectItemActions object={object} presetId={presetId} />
    </div>
  );
};
export default CardFunctionObjectItem;
