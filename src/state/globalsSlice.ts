import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Preset, ObjectType } from "@/interfaces";
import IGlobalReducerInterface from "@/interfaces/IGlobalReducerInterface";

const initialState: IGlobalReducerInterface = {
  coordinates: "",
  heading: 0,
  weather: null,
  presets: [
    {
      id: "1",
      title: "Preset 1",
      objects: [{ id: "1", title: "Object 1" }],
    },
  ],
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setCoordinates: (state, action: PayloadAction<string>) => {
      state.coordinates = action.payload;
    },
    setHeading: (state, action: PayloadAction<number>) => {
      state.heading = action.payload;
    },
    setPresets: (state, action: PayloadAction<Preset[]>) => {
      state.presets = action.payload;
    },
    addPreset: (state, action: PayloadAction<Preset>) => {
      state.presets.push(action.payload);
    },
    deletePreset: (state, action: PayloadAction<string>) => {
      state.presets = state.presets.filter(
        (preset) => preset.id !== action.payload
      );
    },
    addObjectToPreset: (
      state,
      action: PayloadAction<{ presetId: string; object: ObjectType }>
    ) => {
      const { presetId, object } = action.payload;
      const preset = state.presets.find((p) => p.id === presetId);

      if (preset) {
        preset.objects.push(object);
      }
    },
    deleteObjectFromPreset: (
      state,
      action: PayloadAction<{ presetId: string; objectId: string }>
    ) => {
      const { presetId, objectId } = action.payload;
      const preset = state.presets.find((p) => p.id === presetId);

      if (preset) {
        preset.objects = preset.objects.filter((o) => o.id !== objectId);
      }
    },
  },
});

export const selectGlobal = (state: RootState) => state.global;
export const {
  setCoordinates,
  setHeading,
  setPresets,
  addPreset,
  deletePreset,
  addObjectToPreset,
  deleteObjectFromPreset,
} = globalSlice.actions;
export default globalSlice.reducer;
