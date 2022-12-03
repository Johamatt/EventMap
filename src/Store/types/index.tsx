import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { Activity, CATEGORY } from "../../API";
import { CognitoUserInterface } from "@aws-amplify/ui-components";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: CognitoUserInterface | undefined;
  showCurrentlyOpen: boolean;
  showAllCategories: boolean;
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
