import { LocationGeocodedLocation } from "expo-location";
import { Dispatch } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage"; //
import { UserAction } from "../types";

export const ON_UPDATE_LOCATION = (location: LocationGeocodedLocation) => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      await AsyncStorage.setItem("user_language", JSON.stringify(location));
      dispatch({
        type: "ON_UPDATE_LOCATION",
        payload: location,
      });
    } catch (error) {
      dispatch({
        type: "ON_USER_ERROR",
        payload: error,
      });
    }
  };
};
