import React from "react";

interface CardFunctionLabeledItemProps {
  label: string;
  children: React.ReactNode;
}

const CardFunctionLabeledItem: React.FC<CardFunctionLabeledItemProps> = ({
  label,
  children,
}) => {
  return (
    <div className="flex items-center justify-between bg-[#0B0C10] w-full px-7 py-4">
      <span className="text-xs font-bold text-[#525560]">{label}</span>
      {children}
    </div>
  );
};

export default CardFunctionLabeledItem;
