"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import CardFunctionPropModel from "./_components/card-function-prop-model";
import CardFunctionTargetEntity from "./_components/card-function-target-entity";

export default function PropTool() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-between w-full h-[calc(100%-140px)]">
        <div className="flex-grow flex flex-col items-start justify-start w-full">
          <CardFunctionHeader title="Prop tool" icon="prop-icon" />
          <div className="flex flex-col w-full h-full">
            <CardFunctionPropModel />
            <CardFunctionTargetEntity />
          </div>
        </div>
      </div>
    </PanelCard>
  );
}
