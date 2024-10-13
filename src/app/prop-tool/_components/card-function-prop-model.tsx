import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import { generateRandomPropModel } from "@/lib/utils";
import { setPropModel } from "@/state/globalsSlice";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import React, { useEffect } from "react";

const CardFunctionPropModel: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const propModel = useAppSelector((state) => state.global.propModel);

  useEffect(() => {
    dispatch(setPropModel(generateRandomPropModel()));
  }, []);

  return (
    <CardFunctionLabeledItem label="Prop model">
      <div className="flex items-center justify-center h-full bg-[#0F1014] border border-[#131418] rounded-[2px] p-3 text-sm">
        <p>{propModel || "Loading..."}</p>
      </div>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionPropModel;
