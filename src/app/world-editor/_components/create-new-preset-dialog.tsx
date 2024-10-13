import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Preset } from "@/interfaces";
import PrimaryButton from "@/components/common/primary-button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";

interface CreateNewPresetDialogProps {
  presets: Preset[];
  setPresets: (presets: Preset[]) => void;
}

const CreateNewPresetDialog: React.FC<CreateNewPresetDialogProps> = ({
  presets,
  setPresets,
}): JSX.Element => {
  const [title, setTitle] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCreateNewPreset = () => {
    const newId = uuidv4();
    setPresets([...presets, { id: newId, title }]);
    toast.success("Preset created successfully");
    setDialogOpen(false);
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild>
        <PrimaryButton>
          <img src="/icons/plus-icon.svg" alt="Create new preset" />
          Create new preset
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new preset</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <Input
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="Enter preset title"
          />
          <PrimaryButton onClick={handleCreateNewPreset}>
            Create new preset
          </PrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateNewPresetDialog;
