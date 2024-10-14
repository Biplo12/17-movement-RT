import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
  disabled,
}): JSX.Element => {
  return (
    <button
      className="bg-gradient-to-r from-[#FF1A35] to-[#A01F2E] text-white px-4 py-3 h-12 font-bold rounded-[2px] text-sm w-full hover:brightness-125 transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
