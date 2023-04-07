import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";
import { CATEGORY } from "../../API";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export interface UpdateAuthAction {
  readonly type: "ON_UPDATE_AUTH";
  payload: any;
}

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export interface UpdateAuthenticationmode {
  readonly type: "ON_UPDATE_AUTHENTICATIONMODE";
  payload: GraphQLOptions["authMode"];
}

export type UserAction =
  | UserErrorAction
  | UpdateAuthAction
  | UpdateAuthenticationmode;

export const ON_UPDATE_AUTHENTICATIONMODE = (
  AuthenticationMode: GraphQLOptions["authMode"]
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_AUTHENTICATIONMODE",
        payload: AuthenticationMode,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};

export const ON_UPDATE_AUTH = (userAuth: any) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_AUTH",
        payload: userAuth,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
