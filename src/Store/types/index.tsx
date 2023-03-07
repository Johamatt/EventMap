import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: any;
  showCurrentlyOpen: boolean;
  guestUserSession: boolean;
};

export type ActivitiesState = {
  error: String | undefined;
  nextToken: string;
  nextTokenMap: string;
};

export type EventsState = {
  error: String | undefined;
  nextToken: string;
  nextTokenMap: string;
};
