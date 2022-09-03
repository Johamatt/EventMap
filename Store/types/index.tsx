import { LocationGeocodedLocation } from "expo-location";
import { store } from "../store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
};

export interface UpdateLocationAction {
  readonly type: "ON_UPDATE_LOCATION";
  payload: LocationGeocodedLocation;
}

export interface UserErrorAction {
  readonly type: "ON_USER_ERROR";
  payload: any;
}

export type UserAction = UpdateLocationAction | UserErrorAction;
