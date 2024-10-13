/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useState } from "react";
import CardFunctionHeader from "@/components/card-function-header";
import { cn, generateRandomCoordinates } from "@/lib/utils";

const CardFunctionLocation: React.FC = (): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);
  const [coordinates, setCoordinates] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(coordinates);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  useEffect(() => {
    setCoordinates(generateRandomCoordinates());
  }, []);

  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <CardFunctionHeader title="Current coordinates" icon="location-icon" />
      <div className="flex items-center justify-between bg-[#0B0C10] w-full px-7 py-4">
        <span className="text-xs font-bold text-[#525560]">Coordinates</span>
        <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-md">
          <span className="text-sm">{coordinates}</span>
          <button className="text-xs font-bold" onClick={handleCopy}>
            <img
              src="/icons/copy-icon.svg"
              alt="Copy icon"
              className={cn(isCopied && "color-[#00FF99]")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CardFunctionLocation;
