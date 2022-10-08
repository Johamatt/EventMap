import { LocationGeocodedLocation } from "expo-location";
import { Activity } from "../../util/data/activityTags";
import { AgeGroups } from "../../util/data/ageGroups";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  ageGroup: Array<any>;
  tags: Array<Activity>;
};
