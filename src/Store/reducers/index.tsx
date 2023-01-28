import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import { eventReducer } from "./eventsReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  UserReducer: userReducer,
  ActivitiesReducer: activityReducer,
  EventsReducer: eventReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
