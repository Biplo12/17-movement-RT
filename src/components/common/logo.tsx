import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  className?: string;
  withShadow?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className,
  withShadow = false,
}): JSX.Element => {
  return (
    <>
      <img
        className={cn("text-white", className)}
        src="/svg/logo.svg"
        alt="logo"
      />
      {withShadow && (
        <img
          className="absolute -top-2 -left-1 w-24 h-24"
          src="/svg/logo-shadow.svg"
          alt="logo-shadow"
        />
      )}
    </>
  );
};
export default Logo;
