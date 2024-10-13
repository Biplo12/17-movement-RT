import React, { useState } from "react";
import { useAppDispatch } from "@/store/store-hooks";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addPedItem } from "@/state/globalsSlice";
import PrimaryButton from "@/components/common/primary-button";

const CreateNewPedDialog: React.FC = (): JSX.Element => {
  const [title, setTitle] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const dispatch = useAppDispatch();
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateNewPedItem = () => {
    const newId = uuidv4();
    dispatch(
      addPedItem({
        id: newId,
        title,
        coordinates: "",
        modelId: "",
        rotation: { X: 0, Y: 0, Z: 0 },
      })
    );

    toast.success("Ped created successfully");
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <PrimaryButton>
          <img src="/icons/plus-icon.svg" alt="Create new ped" />
          <span className="text-center w-full">Create new one</span>
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new ped</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <Input
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter ped title"
          />
          <PrimaryButton onClick={handleCreateNewPedItem}>
            Create new ped
          </PrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateNewPedDialog;
