import React from "react";
import CardFunctionActionButton from "@/components/common/card-function-action-button";
import { ObjectType } from "@/interfaces";
import CardFunctionObjectDeleteAlert from "./card-function-object-delete-alert";
import CopyButton from "@/components/common/copy-button";

interface CardFunctionObjectItemActionsProps {
  object: ObjectType;
  presetId: string;
}

const CardFunctionObjectItemActions: React.FC<
  CardFunctionObjectItemActionsProps
> = ({ object, presetId }): JSX.Element => {
  return (
    <div className="flex items-center justify-end gap-2">
      <CardFunctionActionButton label="Copy">
        <CopyButton content={JSON.stringify(object)} />
      </CardFunctionActionButton>
      <CardFunctionActionButton icon="eye-icon" label="View" />
      <CardFunctionActionButton icon="edit-icon" label="Edit" />
      <CardFunctionObjectDeleteAlert object={object} presetId={presetId} />
    </div>
  );
};
export default CardFunctionObjectItemActions;
