import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import useAmplifyResources from "./useAmplifyResources";
import useCachedResources from "./useCachedResources";

export default async function loadResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadCachedResourcesAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // Load user
        await useAmplifyResources();
        // Load fonts
        await useCachedResources();
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
