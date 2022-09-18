import { LocationGeocodedLocation } from "expo-location";
import { Activity } from "../../util/data/activityTags";
import { AgeGroups } from "../../util/data/ageGroups";
import { UserAction } from "../actions/userAction";

import { UserState } from "../types";

const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  ageGroup: {} as AgeGroups,
  tags: [] as Array<Activity>,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    case "ON_UPDATE_AGEGROUP":
      return {
        ...state,
        ageGroup: action.payload,
      };

    case "ON_UPDATE_TAGS":
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};

export { userReducer };
