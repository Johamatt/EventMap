import { combineReducers } from "redux";
// import { eventsReducer } from "./eventsReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  UserReducer: userReducer,
  //   EventsReducer: eventsReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
