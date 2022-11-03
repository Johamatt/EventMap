import { LocationModel } from "../locationTypes";
import { Description } from "./description";
import { Opendays } from "./opendays";

export type Activity = {
  id: String;

  availableMonths: Array<String>;
  Location: LocationModel;
  fi_description: String;
  fi_name: String;
  en_description: String;
  en_name: String;
  openDays: Array<Opendays>;
  tags: Array<String>;

  duration: String;
  durationType: String;
  meantFor: Array<String>;
  priceEUR_From: number | null;
  priceEUR_TO: number | null;
  pricingType: String;
  siteUrl: String;
  updated_LinkedEvent: Date;
};
