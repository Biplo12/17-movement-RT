import React, { useState } from "react";
import { toast } from "sonner";

interface CopyButtonProps {
  content: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ content }): JSX.Element => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setIsCopied(true);
      toast.success("Text copied to clipboard");

      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };
  return (
    <button
      className="text-xs font-bold"
      onClick={handleCopy}
      disabled={!content}
    >
      <img
        src={isCopied ? "/icons/copied-icon.svg" : "/icons/copy-icon.svg"}
        alt="copy"
      />
    </button>
  );
};

export default CopyButton;
