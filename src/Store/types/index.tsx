import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { Activity, CATEGORY } from "../../API";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: any;
  showCurrentlyOpen: boolean;
  showAllCategories: boolean;
  guestUserSession: boolean;
};

export type ActivitiesState = {
  activitiesList: Array<Activity>; // | undefined;
  error: String | undefined;
  nextToken: string;
  activitiesMap: Array<Activity>;
  nextTokenMap: string;
  // previousToken: string;
  // initialToken: string;
};

export type EventsState = {
  eventsList: Array<any>;
  error: String | undefined;
};
