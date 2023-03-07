import { EventsState } from "../types";
import { EventsAction } from "../actions/eventAction";

const initialState: EventsState = {
  error: undefined,
  nextToken: "",
  nextTokenMap: "",
};

const eventReducer = (
  state: EventsState = initialState,
  action: EventsAction
) => {
  switch (action.type) {
    case "ON_UPDATE_EVENTSLIST":
      return {
        ...state,
        nextToken: action.payload.nextToken,
      };

    case "ON_UPDATE_EVENTSMAP":
      return {
        ...state,
        nextTokenMap: action.payload.nextToken,
      };
    default:
      return state;
  }
};

export { eventReducer };
