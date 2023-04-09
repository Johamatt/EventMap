import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import SplashScreen from "./src/screens/util/SplashScreen";
import { useCachedResources } from "./src/hooks/useCachedResources";
import { store } from "./src/Store/store";
import { loadAsyncStorage } from "./src/hooks/loadAsyncStorage";

Amplify.configure({ ...awsmobile });

const App: React.FC = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    const loadResources = async () => {
      try {
        await useCachedResources();
        await loadAsyncStorage(); //
        setIsLoadingComplete(true);
      } catch (err) {
        console.error(err);
      }
    };
    loadResources();
  }, []);

  return (
    <React.Fragment>
      <StatusBar style="inverted" backgroundColor="black" />
      {isLoadingComplete ? (
        <Provider store={store}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </Provider>
      ) : (
        <NavigationContainer>
          <SplashScreen />
        </NavigationContainer>
      )}
    </React.Fragment>
  );
};

export default App;
