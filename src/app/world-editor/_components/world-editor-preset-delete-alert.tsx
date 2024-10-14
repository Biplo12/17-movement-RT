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
import { Preset } from "@/interfaces";
import { toast } from "sonner";
import { useAppDispatch } from "@/store/store-hooks";
import { deletePreset } from "@/state/globalsSlice";
import CardFunctionActionButton from "@/components/common/card-function-action-button";

interface WorldEditorPresetDeleteAlertProps {
  item: Preset;
}

const WorldEditorPresetDeleteAlert: React.FC<
  WorldEditorPresetDeleteAlertProps
> = ({ item }): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deletePreset(item.id));
    toast.success(`Preset ${item.title} deleted`);
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
            preset from the list.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete} type="button">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default WorldEditorPresetDeleteAlert;
