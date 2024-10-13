"use client";

import CardFunctionHeader from "@/components/card-function-header";
import PanelCard from "@/components/panel-card";
import { useAppSelector } from "@/store/store-hooks";
import { useRouter } from "next/navigation";
import CardFunctionAddingModel from "./_components/card-function-adding-model";

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

  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-start w-full h-[calc(100%-140px)]">
        <CardFunctionHeader title={`Editing ${preset.title}`} />
        <CardFunctionAddingModel presetId={presetId} />
      </div>
    </PanelCard>
  );
}
