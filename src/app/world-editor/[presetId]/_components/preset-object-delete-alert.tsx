import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/store-hooks";
import { deleteObjectFromPreset } from "@/state/globalsSlice";
import { ObjectType } from "@/interfaces";
import CardFunctionActionButton from "@/components/common/card-function-action-button";
interface CardFunctionObjectDeleteAlertProps {
  object: ObjectType;
  presetId: string;
}

const CardFunctionObjectDeleteAlert: React.FC<
  CardFunctionObjectDeleteAlertProps
> = ({ object, presetId }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteObjectFromPreset({ presetId, objectId: object.id }));
    toast.success(`Object ${object.title} deleted`);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CardFunctionActionButton icon="bin-icon" label="Delete" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            object from the objects list.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleDelete}
            type="button"
            className="rounded-[2px] bg-gradient-to-r from-[#FF1A35] to-[#A01F2E] text-white hover:brightness-125 transition-all duration-300 hover:bg-[#131418]"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default CardFunctionObjectDeleteAlert;
