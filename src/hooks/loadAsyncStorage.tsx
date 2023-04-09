import AsyncStorage from "@react-native-async-storage/async-storage";
import { store } from "../Store/store";

export async function loadAsyncStorage() {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");

    store.dispatch({
        type: "ON_UPDATE_ASYNC_STORAGE",
        payload: jsonValue != null ? JSON.parse(jsonValue) : undefined,
      });
  } catch (e) {
    // error reading value
  }
}
