import { LocationModel } from "../locationTypes";
import { CATEGORY } from "./category";
import { Company } from "./company";
import { Opendays } from "./opendays";

export type Activity = {
  id: string;

  availableMonths: Array<string>;
  Location: LocationModel;
  fi_description: string | undefined;
  fi_name: string | undefined;
  en_description: string | undefined;
  en_name: string | undefined;
  openDays: (Opendays | null)[];
  categories: Array<CATEGORY>;

  company: Company;

  duration: string;
  durationType: string;
  meantFor: Array<string>;
  priceEUR_From: number | null;
  priceEUR_TO: number | null;
  pricingType: string;
  siteURL: string;
  updated_at_LinkedEvent: string;
};
