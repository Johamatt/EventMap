import React, { useEffect, useCallback, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";
import LottieView from "lottie-react-native";
import Layout from "../constants/Layout";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

export default function SplashScreen() {
  const animation = useRef(null);
  const [appIsReady] = useFonts({
    "Rationale-Regular": require("../assets/fonts/Rationale-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function prepare() {
      await Splash.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await Splash.hideAsync();

      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigation.navigate("LandingLocationScreen");
      //
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View
      onLayout={onLayoutRootView}
      style={{
        backgroundColor: "#000",
        zIndex: -1,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ position: "absolute", alignItems: "center" }}>
        <Text
          style={{
            fontSize: 64,
            color: "white",

            fontFamily: "Rationale-Regular",
          }}
        >
          EventMap
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "white",
            alignSelf: "flex-end",
            fontFamily: "Rationale-Regular",
          }}
        >
          Event finding made easy
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          zIndex: -1,
        }}
      >
        <LottieView
          resizeMode="cover"
          autoPlay
          ref={animation}
          style={{
            width: Layout.window.width,
            height: Layout.window.height,
          }}
          //   loop={true} //
          // Find more Lottie files at https://lottiefiles.com/featured
          source={require("../assets/lottie/splash.json")}
        ></LottieView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
