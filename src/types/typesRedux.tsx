import { CognitoUser } from "amazon-cognito-identity-js";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { userOptionsAsyncStorage } from "./storageType";

export type UserState = {
  AuthenticationMode: GraphQLOptions["authMode"];
  error: String | undefined;
  userAuth: CognitoUser;

  userOptions: userOptionsAsyncStorage | undefined;
};

// preferences: Array<CATEGORY>;
// selectedDateRange: { startDateTime: Date; endDateTime: Date };
