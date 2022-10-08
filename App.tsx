import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import SplashScreen from "./screens/SplashScreen";
import { store } from "./Store";
import { Amplify, Auth } from "aws-amplify";
import awsconfig from "./src/aws-exports";
import { withAuthenticator, AmplifyTheme } from "aws-amplify-react-native";
import { signUpConfig } from "./amplify/backend/auth/eventmap72c53487/build/signUpConfig";
import { Authenticator } from "@aws-amplify/ui-react";
import Colors from "./constants/Colors";

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
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
};

export default App;
