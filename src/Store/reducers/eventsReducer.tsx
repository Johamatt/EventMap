import { Activity, CATEGORY, Location, OpenDays } from "../../API";
import { ActivitiesState, EventsState } from "../types";
import { EventsAction } from "../actions/eventAction";

const initialState: EventsState = {
  eventsList: [] as Array<any>,
  error: undefined,
};

const eventReducer = (
  state: EventsState = initialState,
  action: EventsAction
) => {
  switch (action.type) {
    case "ON_INITIAL_FETCH":
      return {
        ...state,
        eventsList: action.payload,
      };
    default:
      return state;
  }
};

export { eventReducer };
