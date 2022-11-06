import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { Activity, CATEGORY } from "../../API";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: CognitoUserInterface | undefined;
};

export type ActivitiesState = {
  activities: Array<any> | undefined;
  error: String | undefined;
};
