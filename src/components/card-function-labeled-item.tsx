import { cn } from "@/lib/utils";
import React from "react";

interface CardFunctionLabeledItemProps {
  label: string;
  isItemIndexOdd?: boolean;
  children: React.ReactNode;
}

const CardFunctionLabeledItem: React.FC<CardFunctionLabeledItemProps> = ({
  label,
  isItemIndexOdd = false,
  children,
}) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full px-7 py-4",
        isItemIndexOdd ? "bg-[#0D0E12]" : "bg-[#090A0E]"
      )}
    >
      <span className="text-xs font-bold text-[#525560] w-full max-w-fit">
        {label}
      </span>
      {children}
    </div>
  );
};

export default CardFunctionLabeledItem;
