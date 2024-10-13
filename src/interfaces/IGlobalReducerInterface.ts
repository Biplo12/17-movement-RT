import { WeatherEnum } from "@/constants";
import { PedItem, Preset } from ".";

export default interface IGlobalReducerInterface {
  coordinates: string;
  heading: number;
  weather: WeatherEnum | null;
  presets: Preset[];
  interiorId: string | null;
  roomId: string | null;
  propModel: string | null;
  targetEntity: string | null;
  bones: string | null;
  pedItems: PedItem[];
}
