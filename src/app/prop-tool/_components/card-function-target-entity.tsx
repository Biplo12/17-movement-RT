import React from "react";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { setTargetEntity } from "@/state/globalsSlice";

const targetEntityOptions = [
  { value: "player", label: "Player" },
  { value: "npc", label: "NPC" },
  { value: "object", label: "Object" },
];

const CardFunctionTargetEntity: React.FC = (): JSX.Element => {
  const targetEntity = useAppSelector((state) => state.global.targetEntity);
  const dispatch = useAppDispatch();

  const handleTargetEntityChange = (value: string) => {
    dispatch(setTargetEntity(value));
  };

  return (
    <CardFunctionLabeledItem label="Target entity" isItemIndexOdd>
      <Select
        value={targetEntity || "Select"}
        onValueChange={handleTargetEntityChange}
      >
        <SelectTrigger className="w-full max-w-[150px]">
          {targetEntity ? (
            <SelectValue placeholder="Select" />
          ) : (
            <span className="text-white">Select</span>
          )}
        </SelectTrigger>
        <SelectContent>
          {targetEntityOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionTargetEntity;
