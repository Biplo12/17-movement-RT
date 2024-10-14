"use client";

import PanelCard from "../../components/panel-card";
import CardFunctionHeader from "@/components/card-function-header";
import GlobalCoordinates from "./_components/global-coordinates";
import GlobalHeading from "./_components/global-heading";
import GlobalTime from "./_components/global-time";
import GlobalWeather from "./_components/global-weather";
import GlobalFreezeTime from "./_components/global-freeze-time";
import GlobalFreezeWeather from "./_components/global-freeze-weather";

export default function Home() {
  return (
    <PanelCard>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Current coordinates"
            icon="location-icon"
          />
          <GlobalCoordinates />
          <GlobalHeading />
        </div>
        <div className="flex flex-col items-start justify-start w-full">
          <CardFunctionHeader
            title="Time and weathers configuration"
            icon="weather-icon"
          />
          <GlobalTime />
          <GlobalWeather />
          <GlobalFreezeTime />
          <GlobalFreezeWeather />
        </div>
      </div>
    </PanelCard>
  );
}
