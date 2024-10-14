import React from "react";
import { useAppDispatch } from "@/store/store-hooks";
import { deletePedItem } from "@/state/globalsSlice";
import { toast } from "sonner";
import { PedItem } from "@/interfaces";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface PedSpawnerDeletePedAlertProps {
  item: PedItem;
}

const PedSpawnerDeletePedAlert: React.FC<PedSpawnerDeletePedAlertProps> = ({
  item,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deletePedItem(item.id));
    toast.success(`Ped ${item.title} deleted`);
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button>
          <img src="/icons/bin-icon.svg" alt="Delete" />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your ped
            from the list.
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
export default PedSpawnerDeletePedAlert;
