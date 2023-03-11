import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export type UserState = {
  AuthenticationMode: GraphQLOptions["authMode"];
  location: LocationGeocodedLocation;
  error: String | undefined;
  preferences: Array<CATEGORY>;
  userAuth: any;
  showCurrentlyOpen: boolean;
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
