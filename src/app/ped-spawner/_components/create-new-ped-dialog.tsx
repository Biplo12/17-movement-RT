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
import { PedItem } from "@/interfaces";

const pedInputs = [
  {
    id: "title",
    label: "Title",
    type: "text",
    placeholder: "Enter ped title",
  },
  {
    id: "coordinates",
    label: "Coordinates",
    type: "text",
    placeholder: "Enter ped coordinates",
  },
  {
    id: "modelId",
    label: "Model ID",
    type: "text",
    placeholder: "Enter ped model id",
  },
  {
    id: "rotationX",
    label: "Rotation X",
    type: "number",
    placeholder: "Enter ped rotation X",
  },
  {
    id: "rotationY",
    label: "Rotation Y",
    type: "number",
    placeholder: "Enter ped rotation Y",
  },
  {
    id: "rotationZ",
    label: "Rotation Z",
    type: "number",
    placeholder: "Enter ped rotation Z",
  },
];

const CreateNewPedDialog: React.FC = (): JSX.Element => {
  const [pedItem, setPedItem] = useState<PedItem>({
    id: "",
    title: "",
    coordinates: "",
    modelId: "",
    rotation: { X: 0, Y: 0, Z: 0 }, // Initialize with 0 instead of null
  });

  const [dialogOpen, setDialogOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handlePedItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id.startsWith("rotation")) {
      const axis = id.charAt(id.length - 1) as "X" | "Y" | "Z";
      setPedItem((prev) => ({
        ...prev,
        rotation: {
          ...prev.rotation,
          [axis]: parseFloat(value) || 0,
        },
      }));
    } else {
      setPedItem((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleCreateNewPedItem = () => {
    const newId = uuidv4();
    dispatch(
      addPedItem({
        ...pedItem,
        id: newId,
        rotation: {
          X: pedItem.rotation.X,
          Y: pedItem.rotation.Y,
          Z: pedItem.rotation.Z,
        },
      })
    );

    setPedItem({
      id: "",
      title: "",
      coordinates: "",
      modelId: "",
      rotation: { X: 0, Y: 0, Z: 0 }, // Reset to 0
    });

    toast.success("Ped created successfully");
    setDialogOpen(false);
  };

  const disableCreateButton = pedInputs.some(
    (input) => !pedItem[input.id as keyof PedItem] as unknown as string
  );

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogTrigger asChild className="w-full absolute bottom-0 left-0">
        <PrimaryButton>
          <img src="/icons/plus-icon.svg" alt="Plus icon" />
          <span className="text-center w-full">Create new one</span>
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create new ped</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          {pedInputs.map((input) => (
            <Input
              key={input.id}
              id={input.id}
              value={
                input.id.startsWith("rotation")
                  ? pedItem.rotation?.[
                      input.id.charAt(input.id.length - 1) as "X" | "Y" | "Z"
                    ]?.toString() ?? ""
                  : (pedItem[input.id as keyof PedItem] ?? "").toString()
              }
              onChange={handlePedItemChange}
              placeholder={input.placeholder}
              type={input.type}
            />
          ))}
          <PrimaryButton
            onClick={handleCreateNewPedItem}
            disabled={disableCreateButton}
          >
            <img src="/icons/plus-icon.svg" alt="Plus icon" />
            <span className="text-center w-full">Create new ped</span>
          </PrimaryButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default CreateNewPedDialog;
