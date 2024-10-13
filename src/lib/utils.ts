import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const generateRandomCoordinates = () => {
  const x = (Math.random() * 2000 - 1000).toFixed(3);
  const y = (Math.random() * 2000 - 1000).toFixed(3);
  const z = (Math.random() * 2000 - 1000).toFixed(3);
  return `X: ${x} Y: ${y}, Z: ${z}`;
};
