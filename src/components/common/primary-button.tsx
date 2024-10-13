import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  onClick,
}): JSX.Element => {
  return (
    <button
      className="bg-gradient-to-r from-[#FF1A35] to-[#A01F2E] text-white px-4 py-3 h-12 font-bold rounded-[2px] text-sm w-full hover:brightness-125 transition-all duration-300 flex items-center justify-start gap-4"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default PrimaryButton;
