import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../API";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export type UserState = {
  AuthenticationMode: GraphQLOptions["authMode"];
  error: String | undefined;
  userAuth: CognitoUser;
};

// preferences: Array<CATEGORY>;
// selectedDateRange: { startDateTime: Date; endDateTime: Date };
