import * as Location from "expo-location";
import { LocationObject } from "expo-location";

export async function requestLocation(): Promise<LocationObject | undefined> {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return undefined;
    }
    let location = await Location.getCurrentPositionAsync({})
    return location;
  }
