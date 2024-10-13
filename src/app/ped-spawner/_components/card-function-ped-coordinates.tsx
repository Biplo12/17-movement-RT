import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import React from "react";

interface CardFunctionPedCoordinatesProps {
  coordinates: string;
}

const CardFunctionPedCoordinates: React.FC<CardFunctionPedCoordinatesProps> = ({
  coordinates,
}): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Coordinates">
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-3 py-2 rounded-lg">
        <span className="text-sm">{coordinates}</span>
        <CopyButton content={coordinates || ""} />
      </div>
    </CardFunctionLabeledItem>
  );
};
export default CardFunctionPedCoordinates;
