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
import { Amplify, Analytics, Auth } from "aws-amplify";

import { withAuthenticator } from "aws-amplify-react-native";
import awsmobile from "./src/aws-exports";
import loadResources from "./src/hooks/loadResources";
import { signUpConfig } from "./amplify/signUpConfig";

Amplify.configure({ ...awsmobile, Analytics: { disabled: true } });

const App: React.FC = () => {
  // Auth.signOut();

  //
  //
  //
  //
  // useAmplifyResources();
  const isLoadingComplete = loadResources();

  //useCachedResources();
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
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
};

export default withAuthenticator(App, {
  signUpConfig,
  // Render a sign out button once logged in
  // includeGreetings: false,
  // Show only certain components
});

//https://ui.docs.amplify.aws/react/connected-components/authenticator
