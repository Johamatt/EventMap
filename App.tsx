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
import { Amplify, API, graphqlOperation } from "aws-amplify";
import awsconfig from "./aws-exports";
import Auth from "@aws-amplify/auth";

// TEMPORARY SOLUTION //
import { withAuthenticator } from "aws-amplify-react-native";
import { listEvents } from "./src/graphql/queries";

Amplify.configure(awsconfig);

const App: React.FC = () => {
  // Auth.signOut();

  //
  //
  //
  //
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

export default withAuthenticator(App, {
  // Render a sign out button once logged in
  includeGreetings: false,
  // Show only certain components
});

//https://ui.docs.amplify.aws/react/connected-components/authenticator
