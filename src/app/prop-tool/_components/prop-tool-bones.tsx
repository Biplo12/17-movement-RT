import React from "react";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { setBones } from "@/state/globalsSlice";

const bonesOptions = [
  { value: "bone1", label: "Bone 1" },
  { value: "bone2", label: "Bone 2" },
  { value: "bone3", label: "Bone 3" },
];

const PropToolBones: React.FC = (): JSX.Element => {
  const bones = useAppSelector((state) => state.global.bones);
  const dispatch = useAppDispatch();

  const handleBonesChange = (value: string) => {
    dispatch(setBones(value));
  };

  return (
    <CardFunctionLabeledItem label="Bones" isItemIndexOdd>
      <Select value={bones || "Select"} onValueChange={handleBonesChange}>
        <SelectTrigger className="w-full max-w-[150px]">
          {bones ? (
            <SelectValue placeholder="Select" />
          ) : (
            <span className="text-white">Select</span>
          )}
        </SelectTrigger>
        <SelectContent>
          {bonesOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </CardFunctionLabeledItem>
  );
};
export default PropToolBones;
