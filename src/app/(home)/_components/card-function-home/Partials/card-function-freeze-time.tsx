import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import { Switch } from "@/components/ui/switch";
import React from "react";

const CardFunctionFreezeTime: React.FC = (): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Freeze Time" isItemIndexOdd={true}>
      <Switch />
    </CardFunctionLabeledItem>
  );
};
export default CardFunctionFreezeTime;
