import React from "react";

interface CardFunctionActionButtonProps {
  icon?: string;
  activeIcon?: string;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}

const CardFunctionActionButton: React.FC<CardFunctionActionButtonProps> = ({
  icon,
  activeIcon,
  label,
  isActive,
  onClick,
  children,
}): JSX.Element => {
  return (
    <div
      className="flex items-center justify-end gap-2 p-3 bg-[#0F1014] border border-[#131418] rounded-md cursor-pointer max-w-fit hover:brightness-125 transition-all duration-300"
      onClick={onClick}
    >
      {icon && (
        <img src={`/icons/${isActive ? activeIcon : icon}.svg`} alt={label} />
      )}
      {children}
    </div>
  );
};
export default CardFunctionActionButton;
