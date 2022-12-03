import { combineReducers } from "redux";
import { activityReducer } from "./activityReducer";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
  UserReducer: userReducer,
  ActivitiesReducer: activityReducer,
});
export type ApplicationState = ReturnType<typeof rootReducer>;

export { rootReducer };
