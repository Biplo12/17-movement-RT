/* eslint-disable @next/next/no-img-element */
"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import { useAppSelector } from "@/store/store-hooks";
import { useRouter } from "next/navigation";
import CardFunctionAddingModel from "./_components/card-function-adding-model";
import CardFunctionObjectsList from "./_components/card-fucntion-objects-list";
import PrimaryButton from "@/components/common/primary-button";
import { toast } from "sonner";

interface WorldEditorProps {
  params: { presetId: string };
}

export default function WorldEditor({ params }: WorldEditorProps) {
  const presetId = params.presetId;
  const presets = useAppSelector((state) => state.global.presets);
  const preset = presets?.find((preset) => preset.id === presetId);
  const router = useRouter();

  if (!preset) {
    router.push("/world-editor");
    return null;
  }

  const handleSave = () => {
    toast.success("Preset saved successfully");
  };

  const handleCancel = () => {
    router.push("/world-editor");
  };

  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)]">
        <div className="flex flex-col items-start justify-start w-full">
          <CardFunctionHeader title={`Editing ${preset.title}`} />
          <CardFunctionAddingModel presetId={presetId} />
          <div className="h-px w-full bg-[#131418]" />
          <CardFunctionObjectsList preset={preset} />
        </div>
        <div className="w-full flex items-start justify-end">
          <PrimaryButton onClick={handleSave}>
            <img src="/icons/save-icon.svg" alt="Save" />
            <span className="text-center w-full">Save</span>
          </PrimaryButton>
          <button
            className="text-white bg-[#0F1014] text-sm px-4 py-3 h-12 w-full font-bold flex items-center justify-start gap-2 hover:brightness-125 transition-all duration-300"
            onClick={handleCancel}
          >
            <img src="/icons/cancel-icon.svg" alt="Cancel" />
            <span className="text-center w-full">Cancel</span>
          </button>
        </div>
      </div>
    </PanelCard>
  );
}
