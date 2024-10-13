import React from "react";

interface CardFunctionPresetActionProps {
  icon: string;
  label: string;
  onClick?: () => void;
}

const CardFunctionPresetAction: React.FC<CardFunctionPresetActionProps> = ({
  icon,
  label,
  onClick,
}): JSX.Element => {
  return (
    <div
      className="flex items-center justify-end gap-2 p-3 bg-[#0F1014] border border-[#131418] rounded-md cursor-pointer max-w-fit hover:brightness-125 transition-all duration-300"
      onClick={onClick}
    >
      <img src={`/icons/${icon}.svg`} alt={label} />
    </div>
  );
};
export default CardFunctionPresetAction;
