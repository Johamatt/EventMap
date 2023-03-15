import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";
import { UserAction } from "../actions/userAction";
import { UserState } from "../../types/typesRedux";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

export const initialState: UserState = {
  location: {} as LocationGeocodedLocation,
  userAuth: {} as any,
  preferences: [] as Array<CATEGORY>,
  error: undefined,
  showCurrentlyOpen: true,
  AuthenticationMode: undefined as GraphQLOptions["authMode"],
};

export const userReducer = (
  state: UserState = initialState,
  action: UserAction
) => {
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

    case "ON_UPDATE_AUTHENTICATIONMODE":
      return {
        ...state,
        AuthenticationMode: action.payload,
      };

    default:
      return state;
  }
};
