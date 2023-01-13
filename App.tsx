import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import SplashScreen from "./src/screens/SplashScreen";
import { store } from "./src/Store";
import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import loadResources from "./src/hooks/loadResources";
import Colors from "./src/constants/Colors";

Amplify.configure({ ...awsmobile });

const App: React.FC = () => {
  const isLoadingComplete = loadResources();
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

//https://ui.docs.amplify.aws/react/connected-components/authenticator
