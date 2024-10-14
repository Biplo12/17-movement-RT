import React, { useState } from "react";

interface CardFunctionExpandProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

const CardFunctionExpand: React.FC<CardFunctionExpandProps> = ({
  isExpanded,
  setIsExpanded,
}): JSX.Element => {
  return (
    <button onClick={() => setIsExpanded(!isExpanded)}>
      <img
        src={
          isExpanded ? "/icons/arrow-up-icon.svg" : "/icons/arrow-down-icon.svg"
        }
        className="w-4 h-4"
        alt="Arrow"
      />
    </button>
  );
};
export default CardFunctionExpand;
