import { CognitoUser } from "amazon-cognito-identity-js";
import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";
import { UserAction } from "../actions/userAction";
import { UserState } from "../types";

const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  userAuth: {} as CognitoUser,
  preferences: [] as Array<CATEGORY>,
  error: undefined,
};

const userReducer = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case "ON_UPDATE_AUTH":
      return {
        ...state,
        userAuth: action.payload,
      };

    case "ON_UPDATE_LOCATION":
      return {
        ...state,
        location: action.payload,
      };

    case "ON_UPDATE_EVENTPREFERENCES":
      return {
        ...state,
        preferences: action.payload,
      };

    default:
      return state;
  }
};

export { userReducer };
