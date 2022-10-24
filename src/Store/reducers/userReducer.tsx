import { LocationGeocodedLocation } from "expo-location";
import { Activity } from "../../util/data/types";
import { UserAction } from "../actions/userAction";
import { UserState } from "../types";

const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  userAuth: [],
  tags: [] as Array<Activity>,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_USERLOGIN":
      return {
        ...state,
        loggedIn: action.payload,
      };

    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
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
