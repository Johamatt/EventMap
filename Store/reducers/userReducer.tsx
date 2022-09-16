import { LocationGeocodedLocation } from "expo-location";
import { UserAction } from "../actions/userAction";

import { UserState } from "../types";

const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export { userReducer };
