import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import useAmplifyResources from "./useAmplifyResources";
import useCachedResources from "./useCachedResources";

export default function loadResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {

    async function loadResourcesAsync() {
      await useAmplifyResources();
      //   await useCachedResources();

      try {
        SplashScreen.preventAutoHideAsync();
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAsync();
  }, []);

  return isLoadingComplete;
}
