import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { addObjectToPreset } from "@/state/globalsSlice";
import { useAppDispatch } from "@/store/store-hooks";
import { v4 as uuidv4 } from "uuid";
interface CardFunctionAddingModelProps {
  presetId: string;
}

const CardFunctionAddingModel: React.FC<CardFunctionAddingModelProps> = ({
  presetId,
}): JSX.Element => {
  const [objectName, setObjectName] = useState("");
  const dispatch = useAppDispatch();

  const handleAddObject = () => {
    const objectId = uuidv4();

    dispatch(
      addObjectToPreset({
        presetId,
        object: { id: objectId, title: objectName },
      })
    );
  };

  const handleChangeObjectName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObjectName(e.target.value);
  };

  return (
    <div className="relative w-full p-4">
      <Input
        value={objectName}
        onChange={handleChangeObjectName}
        placeholder="Enter model ID"
        className="h-12 pr-12 text-white"
      />
      <button
        onClick={handleAddObject}
        className="absolute right-8 top-1/2 -translate-y-1/2"
      >
        <img src="/icons/plus-icon.svg" alt="add" />
      </button>
    </div>
  );
};
export default CardFunctionAddingModel;
