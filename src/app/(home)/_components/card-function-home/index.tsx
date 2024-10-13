import React from "react";
import CardFunctionHeader from "@/components/card-function-header";
import CardFunctionCoordinates from "./Partials/card-function-coordinates";
import CardFunctionHeading from "./Partials/card-function-heading";
import CardFunctionTime from "./Partials/card-function-time";

const CardFunctionLocation: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start justify-start w-full h-full">
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <CardFunctionHeader title="Current coordinates" icon="location-icon" />
        <CardFunctionCoordinates />
        <CardFunctionHeading />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 w-full">
        <CardFunctionHeader
          title="Time and weathers configuration"
          icon="weather-icon"
        />
        <CardFunctionTime />
      </div>
    </div>
  );
};

export default CardFunctionLocation;
