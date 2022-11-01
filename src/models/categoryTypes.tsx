import { CATEGORY, FORMAT } from "../API";




export type CategoryModel = {
  id: string;
  category: [CATEGORY];
  createdAt: Date;
  format: [FORMAT];
  owner: null | string;
  tags: [string];
  updatedAt: Date;
};
