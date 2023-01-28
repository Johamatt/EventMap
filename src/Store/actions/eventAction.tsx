import { Dispatch } from "react";
import { Activity } from "../../API";

export interface UpdateEventsListAction {
  readonly type: "ON_INITIAL_FETCH";
  payload: Array<any>;
}

export interface EventsErrorAction {
  readonly type: "ON_EVENTS_ERROR";
  payload: any;
}

export type EventsAction = UpdateEventsListAction | EventsErrorAction;

export const ON_INITIAL_FETCH = (eventsList: Array<any>) => {
  return (dispatch: Dispatch<EventsAction>) => {
    try {
      dispatch({
        type: "ON_INITIAL_FETCH",
        payload: eventsList,
      });
    } catch (error) {
      dispatch({
        type: "ON_EVENTS_ERROR",
        payload: error,
      });
    }
  };
};
