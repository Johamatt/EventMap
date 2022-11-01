import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import useAmplifyResources from "./useAmplifyResources";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadCachedResourcesAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        await useAmplifyResources();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../../assets/fonts/SpaceMono-Regular.ttf"),
          "Rationale-Regular": require("../../assets/fonts/Rationale-Regular.ttf"),
          "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadCachedResourcesAsync();
  }, []);

  return isLoadingComplete;
}