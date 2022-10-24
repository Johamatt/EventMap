import { LocationGeocodedLocation } from "expo-location";
import { Activity } from "../../util/data/types";


export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  tags: Array<Activity>;
  userAuth: Array<any>;
};
