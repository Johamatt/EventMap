import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";
import { Activity } from "../../util/data/activityTags";
import { AgeGroups } from "../../util/data/ageGroups";

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedLocation;
}

//
export interface UpdateAgeGroupAction {
  readonly type: "ON_UPDATE_AGEGROUP";
  payload: Array<any>;
}

export interface UpdateTagsAction {
  readonly type: "ON_UPDATE_TAGS";
  payload: Array<Activity>;
}
//

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction =
  | UpdateLocationAction
  | UpdateAgeGroupAction
  | UpdateTagsAction
  | UserErrorAction;

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

export const ON_UPDATE_AGEGROUP = (ageGroup: Array<any>) => {
  return (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_AGEGROUP",
        payload: ageGroup,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};

export const ON_UPDATE_TAGS = (tags: Array<Activity>) => {
  return (dispatch: Dispatch<UserAction>) => {
    console.log(tags);
    try {
      dispatch({
        type: "ON_UPDATE_TAGS",
        payload: tags,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
