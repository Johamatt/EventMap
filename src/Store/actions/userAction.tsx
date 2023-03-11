import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";
import { CATEGORY } from "../../API";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedLocation;
}

export interface UpdateAuthAction {
  readonly type: "ON_UPDATE_AUTH";
  payload: any;
}

export interface UpdateEventPreferencesAction {
  readonly type: "ON_UPDATE_EVENTPREFERENCES";
  payload: Array<CATEGORY>;
}

export interface UpdateShowOpenHoursAction {
  readonly type: "ON_UPDATE_OPENINGHOURS_ONLY";
  payload: boolean;
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
  | UpdateLocationAction
  | UpdateEventPreferencesAction
  | UserErrorAction
  | UpdateAuthAction
  | UpdateShowOpenHoursAction
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

export const ON_UPDATE_LOCATION = (location: LocationGeocodedLocation) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};

export const ON_UPDATE_EVENTPREFERENCES = (preferences: Array<CATEGORY>) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_EVENTPREFERENCES",
        payload: preferences,
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

export const ON_UPDATE_OPENINGHOURS_ONLY = (showCurrentlyOpen: boolean) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_OPENINGHOURS_ONLY",
        payload: showCurrentlyOpen,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
