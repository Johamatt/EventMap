import { CategoryModel } from "./categoryTypes";
import { LocationModel } from "../locationTypes";

export type EventModel = {
  id: String;
  title_FI: String;
  description: String;
  infoURL: String;
  title_EN: String;
  intro: String;
  source: String;
  endingDateTime: Date;
  startingDateTime: Date;
  category?: CategoryModel;
  Location: LocationModel;
  imageEvent: any;
  [key: string]: any; // 👈️ variable key
};
