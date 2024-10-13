export interface ObjectType {
  id: string;
  title: string;
}

export interface Preset {
  id: string;
  title: string;
  objects: ObjectType[];
}

export interface PedItem {
  id: string;
  title: string;
  modelId: string;
  coordinates: string;
  rotation: {
    X: number;
    Y: number;
    Z: number;
  };
}
