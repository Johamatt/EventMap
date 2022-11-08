import { Dispatch } from "react";
import { Activity } from "../../API";

export interface UpdateActivitiesAction {
  readonly type: "ON_UPDATE_ACTIVITIES";
  payload: Array<Activity> // | undefined;
}

export interface ActivitiesErrorAction {
  readonly type: "ON_ACTIVITIES_ERROR";
  payload: any;
}

export type ActivitiesAction = UpdateActivitiesAction | ActivitiesErrorAction;

export const ON_UPDATE_ACTIVITIES = (
  activities: Array<Activity> // | undefined
) => {
  return (dispatch: Dispatch<ActivitiesAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_ACTIVITIES",
        payload: activities,
      });
    } catch (error) {
      dispatch({
        type: "ON_ACTIVITIES_ERROR",
        payload: error,
      });
    }
  };
};
