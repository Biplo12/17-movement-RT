export interface Object {
  id: string;
  title: string;
}

export interface Preset {
  id: string;
  title: string;
  objects: Object[];
}
