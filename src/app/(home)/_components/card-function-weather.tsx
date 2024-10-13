/* eslint-disable @next/next/no-img-element */
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import PrimaryButton from "@/components/common/primary-button";
import { WeatherEnum } from "@/constants";
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
    const weatherValues = Object.values(WeatherEnum);

    const currentIndex = weatherValues.indexOf(weather as WeatherEnum);

    const newIndex =
      direction === "prev"
        ? (currentIndex - 1 + weatherValues.length) % weatherValues.length
        : (currentIndex + 1) % weatherValues.length;

    setWeather(weatherValues[newIndex] || null);
  };

  return (
    <CardFunctionLabeledItem label="Weather">
      <div className="flex items-end justify-end gap-4 w-full">
        <div className="border-2 border-[#101115] px-4 py-2 h-12 rounded flex items-center gap-4 w-full max-w-fit">
          <button
            onClick={() => changeWeather("prev")}
            disabled={weather === "Loading..."}
            className="hover:brightness-125 transition-all duration-300"
          >
            <img
              src="/icons/left-arrow-icon.svg"
              alt="left arrow"
              className="w-3 h-3"
            />
          </button>
          <span>{weather}</span>
          <button
            onClick={() => changeWeather("next")}
            disabled={weather === "Loading..."}
            className="hover:brightness-125 transition-all duration-300"
          >
            <img
              src="/icons/right-arrow-icon.svg"
              alt="right arrow"
              className="w-3 h-3"
            />
          </button>
        </div>
        <div className="max-w-[135px]">
          <PrimaryButton onClick={handleApply}>Apply</PrimaryButton>
        </div>
      </div>
    </CardFunctionLabeledItem>
  );
};

export default CardFunctionWeather;
