import { Dispatch } from "react";

export interface UpdateEventsListAction {
  readonly type: "ON_UPDATE_EVENTSLIST";
  payload: { nextToken: string };
}

export interface ActivitiesErrorAction {
  readonly type: "ON_ACTIVITIES_ERROR";
  payload: any;
}

export interface UpdateEventsMapAction {
  readonly type: "ON_UPDATE_EVENTSMAP";
  payload: { nextToken: string };
}

export type EventsAction =
  | UpdateEventsListAction
  | ActivitiesErrorAction
  | UpdateEventsMapAction;

export const ON_UPDATE_ACTIVITIES = (nextToken: string) => {
  return (dispatch: Dispatch<EventsAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_EVENTSLIST",
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

export const ON_UPDATE_ACTIVITIESMAP = (nextToken: string) => {
  return (dispatch: Dispatch<EventsAction>) => {
    try {
      dispatch({
        type: "ON_UPDATE_EVENTSMAP",
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
