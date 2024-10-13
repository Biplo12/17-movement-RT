import React, { useEffect, useState } from "react";
import { generateRandomCoordinates } from "@/lib/utils";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";

const CardFunctionCoordinates: React.FC = (): JSX.Element => {
  const [coordinates, setCoordinates] = useState<string | null>(null);

  useEffect(() => {
    setCoordinates(generateRandomCoordinates());
  }, []);

  return (
    <CardFunctionLabeledItem label="Coordinates">
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-lg">
        <span className="text-sm">
          {coordinates ? coordinates : "Generating coordinates..."}
        </span>
        <CopyButton content={coordinates || ""} />
      </div>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionCoordinates;
