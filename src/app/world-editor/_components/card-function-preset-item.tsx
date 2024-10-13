"use client";

import { Preset } from "@/interfaces";
import React from "react";
import CardFunctionActionButton from "../../../components/common/card-function-action-button";
import CardFunctionPresetDeleteAlert from "./card-function-preset-delete-alert";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/store-hooks";
import { setPresetVisibility } from "@/state/globalsSlice";
import { cn } from "@/lib/utils";

interface CardFunctionPresetItemProps {
  item: Preset;
}

const CardFunctionPresetItem: React.FC<CardFunctionPresetItemProps> = ({
  item,
}): JSX.Element => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleEdit = () => {
    router.push(`/world-editor/${item.id}`);
  };

  const handleToggleVisibility = () => {
    dispatch(
      setPresetVisibility({ presetId: item.id, isVisible: !item.isVisible })
    );
  };

  return (
    <div
      key={item.id}
      className="w-full bg-[#0D0E12] p-4 px-8 flex items-center justify-between"
    >
      <span
        className={cn(
          "text-white text-lg font-medium",
          !item.isVisible ? "text-gray-500" : "text-white"
        )}
      >
        {item.title}
      </span>
      <div className="flex items-center justify-end gap-2">
        <CardFunctionActionButton
          icon="eye-icon"
          activeIcon="eye-icon-active"
          label="View"
          isActive={!item.isVisible}
          onClick={handleToggleVisibility}
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
