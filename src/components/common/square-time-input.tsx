import React from "react";

interface SquareTimeInputProps {
  value: number | null;
  onChange: (value: number | null) => void;
  type: "hours" | "minutes" | "seconds";
}

const SquareTimeInput: React.FC<SquareTimeInputProps> = ({
  value,
  onChange,
  type,
}): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (inputValue === "") {
      onChange(0);
      return;
    }

    const newValue = parseInt(inputValue);
    if (isNaN(newValue)) return;

    let validatedValue = newValue;
    switch (type) {
      case "hours":
        validatedValue = Math.min(Math.max(newValue, 0), 23);
        break;
      case "minutes":
      case "seconds":
        validatedValue = Math.min(Math.max(newValue, 0), 59);
        break;
    }

    onChange(validatedValue);
  };

  return (
    <div className="w-12 h-12 bg-[#101115] rounded-[4px] flex items-center justify-center">
      <input
        type="text"
        className="w-full h-full bg-transparent text-center"
        value={value === null ? "" : value}
        onChange={handleChange}
        maxLength={2}
      />
    </div>
  );
};

export default SquareTimeInput;
