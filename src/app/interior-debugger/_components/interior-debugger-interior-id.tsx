import React, { useEffect } from "react";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { setInteriorId } from "@/state/globalsSlice";
import { generateRandomInteriorId } from "@/lib/utils";

const InteriorDebuggerInteriorId: React.FC = (): JSX.Element => {
  const interiorId = useAppSelector((state) => state.global.interiorId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setInteriorId(generateRandomInteriorId()));
  }, []);

  return (
    <CardFunctionLabeledItem label="Current interior ID" isItemIndexOdd={true}>
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-lg">
        <span className="text-sm">
          {interiorId ? interiorId : "Generating interior ID..."}
        </span>
        <CopyButton content={interiorId || ""} />
      </div>
    </CardFunctionLabeledItem>
  );
};
export default InteriorDebuggerInteriorId;
