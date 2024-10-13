import { WeatherEnum } from "@/constants";
import { Preset } from ".";

export default interface IGlobalReducerInterface {
  coordinates: string;
  heading: number;
  weather: WeatherEnum | null;
  presets: Preset[];
}
