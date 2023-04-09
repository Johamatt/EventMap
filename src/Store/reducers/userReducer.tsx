import { UserAction } from "../actions/userAction";
import { UserState } from "../../types/typesRedux";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { CognitoUser } from "amazon-cognito-identity-js";

export const initialState: UserState = {
  userAuth: {} as CognitoUser,
  error: undefined,
  AuthenticationMode: undefined as GraphQLOptions["authMode"],
  userOptions: undefined,
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case "ON_UPDATE_AUTH":
      return {
        ...state,
        userAuth: action.payload,
      };

    case "ON_UPDATE_AUTHENTICATIONMODE":
      return {
        ...state,
        AuthenticationMode: action.payload,
      };

    case "ON_UPDATE_ASYNC_STORAGE":
      return {
        ...state,
        userOptions: action.payload,
      };

    default:
      return state;
  }
};
