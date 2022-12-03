import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import CheckUserAuth from "./checkUserAuth";
import useCachedResources from "./useCachedResources";

export default async function loadResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  useEffect(() => {
    async function loadCachedResourcesAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        // await CheckUserAuth();
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
