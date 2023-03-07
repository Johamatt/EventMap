import { Dispatch } from "react";
import { Activity } from "../../API";

export interface UpdateActivitiesListAction {
  readonly type: "ON_UPDATE_ACTIVITIESLIST";
  payload: { nextToken: string };
}

export interface ActivitiesErrorAction {
  readonly type: "ON_ACTIVITIES_ERROR";
  payload: any;
}

export interface UpdateActivitiesMapAction {
  readonly type: "ON_UPDATE_ACTIVITIESMAP";
  payload: { nextToken: string };
}

export type ActivitiesAction =
  | UpdateActivitiesListAction
  | ActivitiesErrorAction
  | UpdateActivitiesMapAction;

  export const ON_UPDATE_ACTIVITIES = (nextToken: string) => {
    return (dispatch: Dispatch<ActivitiesAction>) => {
      try {
        dispatch({
          type: "ON_UPDATE_ACTIVITIESLIST",
          payload: { nextToken },
        });
      } catch (error) {
        dispatch({
          type: "ON_ACTIVITIES_ERROR",
          payload: error,
        });
      }
    };
  };
  
  export const ON_UPDATE_ACTIVITIESMAP = (
    activitiesMap: Array<Activity>,
    nextToken: string
  ) => {
    return (dispatch: Dispatch<ActivitiesAction>) => {
      try {
        dispatch({
          type: "ON_UPDATE_ACTIVITIESMAP",
          payload: { nextToken },
        });
      } catch (error) {
        dispatch({
          type: "ON_ACTIVITIES_ERROR",
          payload: error,
        });
      }
    };
  };
  