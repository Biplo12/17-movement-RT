import React from "react";

interface CardFunctionHeaderProps {
  title: string;
  icon?: string;
}

const CardFunctionHeader: React.FC<CardFunctionHeaderProps> = ({
  title,
  icon,
}): JSX.Element => {
  return (
    <div className="flex items-center justify-start gap-4 py-5 px-7 bg-[#0f0f14] w-full">
      {icon && (
        <img src={`/icons/${icon}.svg`} alt={icon} className="w-5 h-5" />
      )}
      <h2 className="text-sm font-bold">{title}</h2>
    </div>
  );
};
export default CardFunctionHeader;
