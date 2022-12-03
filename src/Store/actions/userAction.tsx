import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";
import { CATEGORY } from "../../API";
import { CognitoUserInterface } from "@aws-amplify/ui-components";

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedLocation;
}

export interface UpdateAuthAction {
  readonly type: "ON_UPDATE_AUTH";
  payload: CognitoUserInterface;
}

export interface UpdateEventPreferencesAction {
  readonly type: "ON_UPDATE_EVENTPREFERENCES";
  payload: Array<CATEGORY>;
}

export interface UpdateShowOpenHoursAction {
  readonly type: "ON_UPDATE_OPENINGHOURS_ONLY";
  payload: boolean;
}

export interface UpdateSelectAllCategoriesAction {
  readonly type: "ON_UPDATE_SELECTALL_CATEGORIES";
  payload: boolean;
}

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | UpdateEventPreferencesAction
  | UserErrorAction
  | UpdateAuthAction
  | UpdateShowOpenHoursAction
  | UpdateSelectAllCategoriesAction;

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

export const ON_UPDATE_AUTH = (userAuth: CognitoUserInterface) => {
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

export const ON_UPDATE_SELECTALL_CATEGORIES = (showAllCategories: boolean) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_SELECTALL_CATEGORIES",
        payload: showAllCategories,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
