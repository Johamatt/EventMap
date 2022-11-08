import { CognitoUser, CognitoUserSession } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { Activity, CATEGORY } from "../../API";
import { UserAction } from "../actions/userAction";
import { ActivitiesState, UserState } from "../types";
import { CognitoUserInterface } from "@aws-amplify/ui-components";
import { ActivitiesAction } from "../actions/activityAction";

const initialState: ActivitiesState = {
  activities: [] as Array<Activity>, // | undefined,
  error: undefined,
};

const activityReducer = (
  state: ActivitiesState = initialState,
  action: ActivitiesAction
) => {
  switch (action.type) {
    case "ON_UPDATE_ACTIVITIES":
      return {
        ...state,
        activities: action.payload,
      };

    default:
      return state;
  }
};

export { activityReducer };
