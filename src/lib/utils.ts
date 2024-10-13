import { WeatherEnum } from "@/constants";
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

export const generateRandomHeading = () => {
  const heading = (Math.random() * 360).toFixed(3);
  return heading;
};

export const generateRandomTime = () => {
  const hours = Math.floor(Math.random() * 24);
  const minutes = Math.floor(Math.random() * 60);
  const seconds = Math.floor(Math.random() * 60);

  return { hours, minutes, seconds };
};

export const generateRandomWeather = () => {
  const weatherKeys = Object.keys(WeatherEnum) as Array<
    keyof typeof WeatherEnum
  >;

  return WeatherEnum[
    weatherKeys[Math.floor(Math.random() * weatherKeys.length)]
  ];
};

export const generateRandomInteriorId = () => {
  const interiorIdString = Math.random().toString(36).substring(2, 15);
  return `v_${interiorIdString}`;
};

export const generateRandomRoomId = () => {
  const roomIdString = Math.random().toString(36).substring(2, 15);
  return `r_${roomIdString}`;
};
