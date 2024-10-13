export interface ObjectType {
  id: string;
  title: string;
  isVisible: boolean;
}

export interface Preset {
  id: string;
  title: string;
  objects: ObjectType[];
  isVisible: boolean;
}

export interface PedItem {
  id: string;
  title: string;
  modelId: string;
  coordinates: string;
  rotation: {
    X: number | null;
    Y: number | null;
    Z: number | null;
  };
}
