import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import { store } from "./src/Store";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import * as Splash from "expo-splash-screen";
import Colors from "./src/constants/Colors";
import SplashScreen from "./src/screens/util/SplashScreen";
import { useCachedResources } from "./src/hooks/fetch/linkedEvents/loadResources/useCachedResources";
import { fetchEventsTodayList } from "./src/hooks/fetch/linkedEvents/ListLinkedEvents/linkedEventsFetch";
import LottieView from "lottie-react-native";
import Layout from "./src/constants/Layout";
Amplify.configure({ ...awsmobile });

const App: React.FC = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);
  const animation = useRef(null);

  useEffect(() => {
    const loadResources = async () => {
      try {
        // Fetch and load resources here
        await fetchEvents();
        await useCachedResources();
        setIsLoadingComplete(true);
      } catch (err) {
        console.error(err);
        setIsLoadingComplete(false);
      }
    };

    loadResources();
  }, []);

  const fetchEvents = async () => {
    const events = await fetchEventsTodayList(1);

    store.dispatch({
      type: "ON_INITIAL_FETCH",
      payload: events,
    });
  };

  const colorScheme = useColorScheme();
  if (!isLoadingComplete) {
    return (
      <View>
        <NavigationContainer>
          <SplashScreen />
        </NavigationContainer>
      </View>
    );
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation />
          <StatusBar style="inverted" backgroundColor="black" />
        </SafeAreaProvider>
      </Provider>
    );
  }
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    zIndex: -1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 64,
    color: "white",
  },
  absoluteView: {
    position: "absolute",
    alignItems: "center",
  },
  lottie: {
    width: Layout.window.width,
    height: Layout.window.height,
  },
});
