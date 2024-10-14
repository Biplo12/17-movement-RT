import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import React, { useEffect } from "react";
import CopyButton from "@/components/common/copy-button";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { setHeading } from "@/state/globalsSlice";
import { generateRandomHeading } from "@/lib/utils";

const GlobalHeading: React.FC = (): JSX.Element => {
  const heading = useAppSelector((state) => state.global.heading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setHeading(Number(generateRandomHeading())));
  }, []);

  return (
    <CardFunctionLabeledItem label="Heading">
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-lg">
        <span className="text-sm">
          {heading ? heading : "Generating heading..."}
        </span>
        <CopyButton content={heading.toString()} />
      </div>
    </CardFunctionLabeledItem>
  );
};

export default GlobalHeading;
