import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Preset, Object } from "@/interfaces";
import IGlobalReducerInterface from "@/interfaces/IGlobalReducerInterface";

const initialState: IGlobalReducerInterface = {
  coordinates: "",
  heading: 0,
  presets: [],
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
      action: PayloadAction<{ presetId: string; object: Object }>
    ) => {
      const { presetId, object } = action.payload;
      const preset = state.presets.find((p) => p.id === presetId);

      if (preset) {
        preset.objects.push(object);
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
} = globalSlice.actions;
export default globalSlice.reducer;
