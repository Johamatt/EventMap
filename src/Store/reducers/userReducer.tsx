import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";
import { UserAction } from "../actions/userAction";
import { UserState } from "../types";

const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  userAuth: {} as any,
  preferences: [] as Array<CATEGORY>,
  error: undefined,
  showCurrentlyOpen: true,
  showAllCategories: true,

  //
  guestUserSession: false,
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

    case "ON_UPDATE_OPENINGHOURS_ONLY":
      return {
        ...state,
        showCurrentlyOpen: action.payload,
      };

    case "ON_UPDATE_SELECTALL_CATEGORIES":
      return {
        ...state,
        showAllCategories: action.payload,
      };

    //
    case "ON_UPDATE_GUESTUSER_SESSION":
      return {
        ...state,
        guestUserSession: action.payload,
      };

    default:
      return state;
  }
};

export { userReducer };
