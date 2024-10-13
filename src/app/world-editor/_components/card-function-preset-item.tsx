"use client";

import { Preset } from "@/interfaces";
import React from "react";
import CardFunctionPresetAction from "./card-function-preset-action";
import CardFunctionPresetDeleteAlert from "./card-function-preset-delete-alert";
import { useRouter } from "next/navigation";

interface CardFunctionPresetItemProps {
  item: Preset;
}

const CardFunctionPresetItem: React.FC<CardFunctionPresetItemProps> = ({
  item,
}): JSX.Element => {
  const router = useRouter();
  return (
    <div
      key={item.id}
      className="w-full bg-[#0D0E12] p-4 flex items-center justify-between"
    >
      <span>{item.title}</span>
      <div className="flex items-center justify-end gap-2">
        <CardFunctionPresetAction
          icon="eye-icon"
          label="View"
          onClick={() => {}}
        />
        <CardFunctionPresetAction
          icon="edit-icon"
          label="Edit"
          onClick={() => {
            router.push(`/world-editor/${item.id}`);
          }}
        />
        <CardFunctionPresetDeleteAlert item={item} />
      </div>
    </div>
  );
};
export default CardFunctionPresetItem;
