"use client";

import { Preset } from "@/interfaces";
import React from "react";
import CardFunctionActionButton from "../../../components/common/card-function-action-button";
import CardFunctionPresetDeleteAlert from "./card-function-preset-delete-alert";
import { useRouter } from "next/navigation";

interface CardFunctionPresetItemProps {
  item: Preset;
}

const CardFunctionPresetItem: React.FC<CardFunctionPresetItemProps> = ({
  item,
}): JSX.Element => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/world-editor/${item.id}`);
  };
  return (
    <div
      key={item.id}
      className="w-full bg-[#0D0E12] p-4 px-8 flex items-center justify-between"
    >
      <span>{item.title}</span>
      <div className="flex items-center justify-end gap-2">
        <CardFunctionActionButton
          icon="eye-icon"
          label="View"
          onClick={() => {}}
        />
        <CardFunctionActionButton
          icon="edit-icon"
          label="Edit"
          onClick={handleEdit}
        />
        <CardFunctionPresetDeleteAlert item={item} />
      </div>
    </div>
  );
};
export default CardFunctionPresetItem;
