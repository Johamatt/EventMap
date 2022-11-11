import { Dispatch } from "react";
import { Activity } from "../../API";
import { ActivitiesMap } from "../reducers/activityReducer";

export interface UpdateActivitiesListAction {
  readonly type: "ON_UPDATE_ACTIVITIESLIST";
  payload: { activitiesList: Activity[]; nextToken: string };
  //   payload: { activitiesList: Activity[]; nextToken: string; previousToken: string }; // Infinite scroll or not?
}

export interface ActivitiesErrorAction {
  readonly type: "ON_ACTIVITIES_ERROR";
  payload: any;
}

// export interface UpdateActivitiesListInitialToken {
//   readonly type: "ON_UPDATE_ACTIVITIES_LIST_INITIALTOKEN";
//   payload: string;
// }

export interface UpdateActivitiesMapAction {
  readonly type: "ON_UPDATE_ACTIVITIESMAP";
  payload: { activitiesMap: Activity[]; nextToken: string };
}

export type ActivitiesAction =
  | UpdateActivitiesListAction
  | ActivitiesErrorAction
  | UpdateActivitiesMapAction;
//   | UpdateActivitiesListInitialToken;

export const ON_UPDATE_ACTIVITIES = (
  activitiesList: Array<Activity>,
  nextToken: string
  //   previousToken: string   // Infinite scroll or not?
) => {
  return (dispatch: Dispatch<ActivitiesAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_ACTIVITIESLIST",
        payload: { activitiesList, nextToken },
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
  //   previousToken: string   // Infinite scroll or not?
) => {
  console.log(activitiesMap);
  return (dispatch: Dispatch<ActivitiesAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_ACTIVITIESMAP",
        payload: { activitiesMap, nextToken },
      });
    } catch (error) {
      dispatch({
        type: "ON_ACTIVITIES_ERROR",
        payload: error,
      });
    }
  };
};

// export const ON_UPDATE_ACTIVITIES_LIST_INITIALTOKEN = (
//   initialToken: string
// ) => {
//   return (dispatch: Dispatch<ActivitiesAction>) => {
//     try {
//       dispatch({
//         type: "ON_UPDATE_ACTIVITIES_LIST_INITIALTOKEN",
//         payload: initialToken,
//       });
//     } catch (error) {
//       dispatch({
//         type: "ON_ACTIVITIES_ERROR",
//         payload: error,
//       });
//     }
//   };
// };
