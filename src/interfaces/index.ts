export interface ObjectType {
  id: string;
  title: string;
}

export interface Preset {
  id: string;
  title: string;
  objects: ObjectType[];
}
