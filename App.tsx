import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/navigation";
import SplashScreen from "./src/screens/SplashScreen";
import { store } from "./src/Store";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./aws-exports";
import { signUpConfig } from "./amplify/backend/auth/eventmap72c53487/build/signUpConfig";
import { Authenticator } from "@aws-amplify/ui-react";
import Colors from "./src/constants/Colors";

// TEMPORARY SOLUTION //
import { withAuthenticator } from "aws-amplify-react-native";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  // Auth.signOut();

  const isLoadingComplete = useCachedResources();
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

export default withAuthenticator(App, true);
