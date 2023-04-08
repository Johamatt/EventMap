import { CognitoUser } from "amazon-cognito-identity-js";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export type UserState = {
  AuthenticationMode: GraphQLOptions["authMode"];
  error: String | undefined;
  userAuth: CognitoUser;
};

// preferences: Array<CATEGORY>;
// selectedDateRange: { startDateTime: Date; endDateTime: Date };
