import { CognitoUser } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: CognitoUser;
};
