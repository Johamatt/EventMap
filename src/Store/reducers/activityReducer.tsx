import { ActivitiesState } from "../types";
import { ActivitiesAction } from "../actions/activityAction";

const initialState: ActivitiesState = {
  error: undefined,
  nextToken: "",
  nextTokenMap: "",
};

const activityReducer = (
  state: ActivitiesState = initialState,
  action: ActivitiesAction
) => {
  switch (action.type) {
    case "ON_UPDATE_ACTIVITIESLIST":
      return {
        ...state,
        nextToken: action.payload.nextToken,
      };

    case "ON_UPDATE_ACTIVITIESMAP":
      return {
        ...state,
        nextTokenMap: action.payload.nextToken,
      };
    default:
      return state;
  }
};

export { activityReducer };
