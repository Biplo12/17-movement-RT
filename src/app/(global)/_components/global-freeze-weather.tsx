import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import { Switch } from "@/components/ui/switch";
import React from "react";

const GlobalFreezeWeather: React.FC = (): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Freeze weather status">
      <Switch />
    </CardFunctionLabeledItem>
  );
};

export default GlobalFreezeWeather;
