import { CategoryModel } from "./categoryTypes";
import { LocationModel } from "./locationTypes";

export type EventModel = {
  id: String;
  title: String;
  desription: String;
  infoUrl: String;
  intro: String;
  owner: null | undefined | String;
  source: String;
  endingDatetime: Date;
  startingDatetime: Date;
  category: CategoryModel;
  Location: LocationModel;
  EventImage: any;

  eventCategoryId: String;
  eventLocationId: String;

  createdAt: Date;
  updatedAt: Date;
};
