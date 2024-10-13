import React from "react";

interface CardFunctionActionButtonProps {
  icon?: string;
  label: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CardFunctionActionButton: React.FC<CardFunctionActionButtonProps> = ({
  icon,
  label,
  onClick,
  children,
}): JSX.Element => {
  return (
    <div
      className="flex items-center justify-end gap-2 p-3 bg-[#0F1014] border border-[#131418] rounded-md cursor-pointer max-w-fit hover:brightness-125 transition-all duration-300"
      onClick={onClick}
    >
      {icon && <img src={`/icons/${icon}.svg`} alt={label} />}
      {children}
    </div>
  );
};
export default CardFunctionActionButton;
