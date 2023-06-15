import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import Navigation from "./src/navigation";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import SplashScreen from "./src/screens/SplashScreen";
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
        await loadAsyncStorage();
        setTimeout(() => setIsLoadingComplete(true), 1500);
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

// // import { Amplify } from "aws-amplify";
// // import { FunctionComponent, useCallback, useState } from "react";
// // import { Button, SafeAreaView, Text } from "react-native";
// // import { Auth } from "aws-amplify";
// // import awsmobile from "./src/aws-exports";
// // Amplify.configure({ ...awsmobile });

// // interface User {
// //   name: string;
// // }

// // const App: FunctionComponent = () => {
// //   const [user, setUser] = useState<User | null>(null);

// //   const signin = useCallback(() => {
// //     //@ts-ignore
// //     Auth.federatedSignIn({ provider: "google" });
// //   }, []);

// //   return (
// //     <SafeAreaView>
// //       <>
// //         <Text>Hello, {user?.name ?? "please login."}</Text>

// //         {user === null && <Button title="Login with Google" onPress={signin} />}
// //       </>
// //     </SafeAreaView>
// //   );
// // };

// // export default App;

// import { useEffect, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Linking,
//   Button,
//   Platform,
// } from "react-native";
// import * as WebBrowser from "expo-web-browser";

// import { Amplify, Hub, Auth } from "aws-amplify";
// import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth";
// import awsconfig from "./src/aws-exports";

// const isLocalHost = Boolean(__DEV__);
// const [localRedirectSignIn, productionRedirectSignIn] =
//   awsconfig.oauth.redirectSignIn.split(",");
// const [localRedirectSignOut, productionRedirectSignOut] =
//   awsconfig.oauth.redirectSignOut.split(",");
// async function urlOpener(url: string, redirectUrl: string) {
//   const { type, url: newUrl } = await WebBrowser.openAuthSessionAsync(
//     url,
//     redirectUrl
//   );
//   if (type === "success" && Platform.OS === "ios") {
//     WebBrowser.dismissBrowser();
//     return Linking.openURL(newUrl);
//   }
// }

// const updatedConfig = {
//   ...awsconfig,
//   oauth: {
//     ...awsconfig.oauth,
//     redirectSignIn: isLocalHost
//       ? localRedirectSignIn
//       : productionRedirectSignIn,
//     redirectSignOut: isLocalHost
//       ? localRedirectSignOut
//       : productionRedirectSignOut,
//     urlOpener,
//   },
// };
// Amplify.configure(updatedConfig);

// export default function App() {
//   const [user, setUser] = useState(null);
//   const [customState, setCustomState] = useState(null);

//   useEffect(() => {
//     const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
//       console.log("event", event);
//       console.log("data", data);
//       switch (event) {
//         case "signIn":
//           setUser(data);
//           break;
//         case "signOut":
//           setUser(null);
//           break;
//         case "customOAuthState":
//           setCustomState(data);
//           break;
//       }
//     });

//     Auth.currentAuthenticatedUser()
//       .then((currentUser) => setUser(currentUser))
//       .catch(() => console.log("Not signed in"));

//     return unsubscribe;
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Button
//         title="Open Google"
//         onPress={() =>
//           Auth.federatedSignIn({
//             provider: CognitoHostedUIIdentityProvider.Google,
//           })
//         }
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
