import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { Preset, ObjectType, PedItem } from "@/interfaces";
import IGlobalReducerInterface from "@/interfaces/IGlobalReducerInterface";

const initialState: IGlobalReducerInterface = {
  coordinates: "",
  heading: 0,
  weather: null,
  presets: [],
  interiorId: null,
  roomId: null,
  propModel: null,
  targetEntity: null,
  bones: null,
  pedItems: [],
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
    setPresetVisibility: (
      state,
      action: PayloadAction<{ presetId: string; isVisible: boolean }>
    ) => {
      const { presetId, isVisible } = action.payload;
      const preset = state.presets.find((p) => p.id === presetId);

      if (preset) {
        preset.isVisible = isVisible;
      }
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
    setObjectVisibility: (
      state,
      action: PayloadAction<{
        presetId: string;
        objectId: string;
        isVisible: boolean;
      }>
    ) => {
      const { presetId, objectId, isVisible } = action.payload;
      const preset = state.presets.find((p) => p.id === presetId);
      const object = preset?.objects.find((o) => o.id === objectId);

      if (object) {
        object.isVisible = isVisible;
      }
    },
    setInteriorId: (state, action: PayloadAction<string>) => {
      state.interiorId = action.payload;
    },
    setRoomId: (state, action: PayloadAction<string>) => {
      state.roomId = action.payload;
    },
    setPropModel: (state, action: PayloadAction<string>) => {
      state.propModel = action.payload;
    },
    setTargetEntity: (state, action: PayloadAction<string>) => {
      state.targetEntity = action.payload;
    },
    setBones: (state, action: PayloadAction<string>) => {
      state.bones = action.payload;
    },
    setPedItems: (state, action: PayloadAction<PedItem[]>) => {
      state.pedItems = action.payload;
    },
    addPedItem: (state, action: PayloadAction<PedItem>) => {
      state.pedItems.push(action.payload);
    },
    deletePedItem: (state, action: PayloadAction<string>) => {
      state.pedItems = state.pedItems.filter(
        (ped) => ped.id !== action.payload
      );
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
  setInteriorId,
  setRoomId,
  setPropModel,
  setTargetEntity,
  setBones,
  setPedItems,
  addPedItem,
  deletePedItem,
  setPresetVisibility,
  setObjectVisibility,
} = globalSlice.actions;
export default globalSlice.reducer;
