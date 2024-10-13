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
import CardFunctionPresetAction from "./card-function-preset-action";

interface CardFunctionPresetDeleteAlertProps {
  item: Preset;
  presets: Preset[];
  setPresets: (presets: Preset[]) => void;
}

const CardFunctionPresetDeleteAlert: React.FC<
  CardFunctionPresetDeleteAlertProps
> = ({ item, presets, setPresets }): JSX.Element => {
  const handleDelete = () => {
    console.log(item.id);
    setPresets(presets.filter((preset) => preset.id !== item.id));
    toast.success(`Preset ${item.title} deleted`);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <CardFunctionPresetAction icon="bin-icon" label="Delete" />
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
export default CardFunctionPresetDeleteAlert;
