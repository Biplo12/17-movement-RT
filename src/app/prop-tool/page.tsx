"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import CardFunctionPropModel from "./_components/card-function-prop-model";
import CardFunctionTargetEntity from "./_components/card-function-target-entity";
import CardFunctionAnimation from "./_components/card-function-animation";
import CardFunctionBones from "./_components/card-function-bones";
import PrimaryButton from "@/components/common/primary-button";
import { toast } from "sonner";

export default function PropTool() {
  const handleCopyNative = () => {
    toast.success("Native copied to clipboard");
  };

  const handleEditOffset = () => {
    toast.success("Edit offset");
  };

  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)]">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader title="Prop tool" icon="prop-icon" />
          <div className="flex flex-col w-full h-full items-start justify-start gap-1">
            <div className="flex flex-col w-full">
              <CardFunctionPropModel />
              <CardFunctionTargetEntity />
              <CardFunctionAnimation />
              <CardFunctionBones />
            </div>
            <div className="w-full flex items-start justify-end">
              <PrimaryButton onClick={handleCopyNative}>
                <span className="text-center w-full">Copy native</span>
              </PrimaryButton>
              <button
                className="text-white bg-[#0F1014] text-sm px-4 py-3 h-12 w-full font-bold flex items-center justify-start gap-2 hover:brightness-125 transition-all duration-300"
                onClick={handleEditOffset}
              >
                <span className="text-center w-full">Edit offset</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
