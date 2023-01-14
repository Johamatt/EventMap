import React, { useEffect, useCallback, useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as Splash from "expo-splash-screen";
import LottieView from "lottie-react-native";
import Layout from "../constants/Layout";
import loadResources from "../hooks/loadResources";

export default function SplashScreen() {
  const animation = useRef(null);
  const appIsReady = loadResources();

  useEffect(() => {
    async function prepare() {
      await Splash.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (await appIsReady) {
      await Splash.hideAsync();
      await new Promise((resolve) => setTimeout(resolve, 4000));
      //
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <View style={styles.absoluteView}>
        <Text
          style={{
            fontSize: 64,
            color: "white",
          }}
        >
          EventMap
        </Text>
      </View>

      <View>
        <LottieView
          resizeMode="cover"
          autoPlay
          ref={animation}
          style={styles.lottie}
          loop={true}
          source={require("../assets/lottie/splash.json")}
        ></LottieView>
      </View>
    </View>
  );
}

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
