import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import useAmplifyResources from "./AmplifyInitialFetch";
import useCachedResources from "./useCachedResources";

export default async function loadResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadCachedResourcesAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // await useAmplifyResources();
        await useCachedResources();
      } catch (e) {
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
