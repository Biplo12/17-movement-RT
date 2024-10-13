"use client";

import PanelCard from "../../components/panel-card";
import CardFunctionHeader from "@/components/card-function-header";
import CardFunctionCoordinates from "./_components/card-function-coordinates";
import CardFunctionHeading from "./_components/card-function-heading";
import CardFunctionTime from "./_components/card-function-time";
import CardFunctionWeather from "./_components/card-function-weather";
import CardFunctionFreezeTime from "./_components/card-function-freeze-time";
import CardFunctionFreezeWeather from "./_components/card-function-freeze-weather";

export default function Home() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Current coordinates"
            icon="location-icon"
          />
          <CardFunctionCoordinates />
          <CardFunctionHeading />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Time and weathers configuration"
            icon="weather-icon"
          />
          <CardFunctionTime />
          <CardFunctionWeather />
          <CardFunctionFreezeTime />
          <CardFunctionFreezeWeather />
        </div>
      </div>
    </PanelCard>
  );
}
