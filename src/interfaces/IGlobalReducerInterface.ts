import { Preset } from ".";

export default interface IGlobalReducerInterface {
  coordinates: string;
  heading: number;
  presets: Preset[];
}
