import React from "react";
import CardFunctionActionButton from "@/components/common/card-function-action-button";
import { ObjectType } from "@/interfaces";
import PresetObjectDeleteAlert from "./preset-object-delete-alert";
import CopyButton from "@/components/common/copy-button";
import { useAppDispatch } from "@/store/store-hooks";
import { setObjectVisibility } from "@/state/globalsSlice";

interface PresetObjectItemActionsProps {
  object: ObjectType;
  presetId: string;
}

const PresetObjectItemActions: React.FC<PresetObjectItemActionsProps> = ({
  object,
  presetId,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleToggleVisibility = () => {
    dispatch(
      setObjectVisibility({
        presetId,
        objectId: object.id,
        isVisible: !object.isVisible,
      })
    );
  };

  return (
    <div className="flex items-center justify-end gap-2">
      <CardFunctionActionButton label="Copy">
        <CopyButton content={JSON.stringify(object)} />
      </CardFunctionActionButton>
      <CardFunctionActionButton
        icon="eye-icon"
        activeIcon="eye-icon-active"
        label="View"
        isActive={!object.isVisible}
        onClick={handleToggleVisibility}
      />
      <CardFunctionActionButton icon="edit-icon" label="Edit" />
      <PresetObjectDeleteAlert object={object} presetId={presetId} />
    </div>
  );
};
export default PresetObjectItemActions;
