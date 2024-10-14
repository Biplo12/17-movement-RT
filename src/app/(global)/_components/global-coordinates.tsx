import React, { useEffect } from "react";
import { generateRandomCoordinates } from "@/lib/utils";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { setCoordinates } from "@/state/globalsSlice";

const GlobalCoordinates: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const coordinates = useAppSelector((state) => state.global.coordinates);

  useEffect(() => {
    dispatch(setCoordinates(generateRandomCoordinates()));
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

export default GlobalCoordinates;
