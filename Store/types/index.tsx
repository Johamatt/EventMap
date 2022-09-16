import { LocationGeocodedLocation } from "expo-location";

export type UserState = {
  location: LocationGeocodedLocation;
  error: String | undefined;
};
