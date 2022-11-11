import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import useAmplifyResources from "./AmplifyInitialFetch";

export default async function useCachedResources() {
  try {
    await Font.loadAsync({
      ...FontAwesome.font,
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
