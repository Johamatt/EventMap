import { Activity, CATEGORY, Location, OpenDays } from "../../API";
import { ActivitiesState } from "../types";
import { ActivitiesAction } from "../actions/activityAction";

export type ActivitiesMap = {
  id: string;
  availableMonths: Array<String>;
  openDays: OpenDays;
  categories: Array<CATEGORY>;
  Location: Location;
  owner: string;
};

const initialState: ActivitiesState = {
  activitiesList: [] as Array<Activity>,
  activitiesMap: [] as Array<Activity>,
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
        activitiesList: action.payload.activitiesList,
        nextToken: action.payload.nextToken,
      };

    case "ON_UPDATE_ACTIVITIESMAP":
      return {
        ...state,
        activitiesMap: action.payload.activitiesMap,
        nextTokenMap: action.payload.nextToken,
      };
    default:
      return state;
  }
};

export { activityReducer };
