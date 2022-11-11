import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import {
  Activity,
  CATEGORY,
  Location,
  ModelEventConnection,
  OpenDays,
} from "../../API";
import { UserAction } from "../actions/userAction";
import { ActivitiesState, UserState } from "../types";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
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
  //   previousToken: "",
  //   initialToken: "",   // Infinite scroll or not?
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

    // case "ON_UPDATE_ACTIVITIES_LIST_INITIALTOKEN":
    //   return {
    //     ...state,
    //     initialToken: action.payload,
    //   };

    default:
      return state;
  }
};

export { activityReducer };
