import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import React, { useEffect, useState } from "react";
import { generateRandomHeading } from "@/lib/utils";
import CopyButton from "@/components/common/copy-button";

const CardFunctionHeading: React.FC = (): JSX.Element => {
  const [heading, setHeading] = useState<string | null>(null);

  useEffect(() => {
    setHeading(generateRandomHeading());
  }, []);

  return (
    <CardFunctionLabeledItem label="Heading">
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-lg">
        <span className="text-sm">
          {heading ? heading : "Generating heading..."}
        </span>
        <CopyButton content={heading || ""} />
      </div>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionHeading;
