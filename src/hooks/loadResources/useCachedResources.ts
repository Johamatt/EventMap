import {
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Font from "expo-font";
export default async function useCachedResources() {
  try {
    await Font.loadAsync({
      ...MaterialCommunityIcons.font,
      ...FontAwesome.font,
      ...MaterialIcons.font,
      "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
      "Rationale-Regular": require("../../assets/fonts/Rationale-Regular.ttf"),
      "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    });
  } catch (e) {
    console.warn(e);
  } finally {
    return true;
  }
}
