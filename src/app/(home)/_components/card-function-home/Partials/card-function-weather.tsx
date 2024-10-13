/* eslint-disable @next/next/no-img-element */
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import PrimaryButton from "@/components/common/primary-button";
import { weatherOptions } from "@/constants";
import { generateRandomWeather } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CardFunctionWeather: React.FC = (): JSX.Element => {
  const [weather, setWeather] = useState<string | null>("Loading...");

  const handleApply = () => {
    if (!weather || weather === "Loading...") return;

    toast.success(`Weather set to ${weather}`);
  };

  useEffect(() => {
    setWeather(generateRandomWeather());
  }, []);

  const changeWeather = (direction: "prev" | "next") => {
    const currentIndex = weatherOptions.indexOf(weather || "");
    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + weatherOptions.length) % weatherOptions.length
        : (currentIndex + 1) % weatherOptions.length;
    setWeather(weatherOptions[newIndex] || null);
  };

  return (
    <CardFunctionLabeledItem label="Weather">
      <div className="flex items-end justify-end gap-4 w-full">
        <div className="border-2 border-[#101115] px-4 py-2 h-12 rounded flex items-center gap-4 w-full max-w-fit">
          <button onClick={() => changeWeather("prev")}>
            <img src="/icons/left-arrow-icon.svg" alt="left arrow" />
          </button>
          <span>{weather}</span>
          <button onClick={() => changeWeather("next")}>
            <img src="/icons/right-arrow-icon.svg" alt="right arrow" />
          </button>
        </div>
        <PrimaryButton onClick={handleApply}>Apply</PrimaryButton>
      </div>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionWeather;
