import { Switch } from "@/components/ui/switch";
import React from "react";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";

const InteriorDebuggerPortalsDebugging: React.FC = (): JSX.Element => {
  return (
    <CardFunctionLabeledItem label="Portals Debugging" isItemIndexOdd={true}>
      <Switch />
    </CardFunctionLabeledItem>
  );
};
export default InteriorDebuggerPortalsDebugging;
