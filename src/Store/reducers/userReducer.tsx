import { LocationGeocodedLocation } from "expo-location";
import { CATEGORY } from "../../API";
import { UserAction } from "../actions/userAction";
import { UserState } from "../../types/typesRedux";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialState: UserState = {
  userAuth: {} as any,
  error: undefined,
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

    case "ON_UPDATE_AUTHENTICATIONMODE":
      return {
        ...state,
        AuthenticationMode: action.payload,
      };


    default:
      return state;
  }
};
