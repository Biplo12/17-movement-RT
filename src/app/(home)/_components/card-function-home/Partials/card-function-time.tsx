import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import PrimaryButton from "@/components/common/primary-button";
import SquareTimeInput from "@/components/common/square-time-input";
import { generateRandomTime } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const CardFunctionTime: React.FC = (): JSX.Element => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const { hours, minutes, seconds } = generateRandomTime();

    setTime({ hours, minutes, seconds });
  }, []);

  const handleTimeChange = (
    value: number,
    type: "hours" | "minutes" | "seconds"
  ) => {
    setTime((prev) => ({ ...prev, [type]: value }));
  };

  const handleApply = () => {
    toast.success(`Time set to ${time.hours}:${time.minutes}:${time.seconds}`);
  };

  return (
    <CardFunctionLabeledItem label="Set Time" isItemIndexOdd={true}>
      <div className="flex items-end justify-end gap-4 w-full">
        <div className="flex flex-row items-end justify-end gap-4 w-full">
          <SquareTimeInput
            value={time.hours}
            type="hours"
            onChange={(value) => handleTimeChange(value ?? 0, "hours")}
          />
          <SquareTimeInput
            value={time.minutes}
            type="minutes"
            onChange={(value) => handleTimeChange(value ?? 0, "minutes")}
          />
          <SquareTimeInput
            value={time.seconds}
            type="seconds"
            onChange={(value) => handleTimeChange(value ?? 0, "seconds")}
          />
        </div>
        <PrimaryButton onClick={handleApply}>Apply</PrimaryButton>
      </div>
    </CardFunctionLabeledItem>
  );
};
export default CardFunctionTime;
