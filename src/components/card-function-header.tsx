import React, { useState } from "react";

interface CardFunctionHeaderProps {
  title: string;
  icon?: string;
}

const CardFunctionHeader: React.FC<CardFunctionHeaderProps> = ({
  title,
  icon,
}): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-between gap-4 py-5 px-7 bg-[#0f0f14] w-full">
      <div className="flex items-center justify-start gap-2">
        {icon && (
          <img src={`/icons/${icon}.svg`} alt={icon} className="w-5 h-5" />
        )}
        <h2 className="text-sm font-bold">{title}</h2>
      </div>
      <button onClick={handleExpand}>
        <img
          src={`/icons/${isExpanded ? "arrow-up-icon" : "arrow-down-icon"}.svg`}
          alt="arrow-up"
          className="w-3 h-3"
        />
      </button>
    </div>
  );
};
export default CardFunctionHeader;
