import React, { useRef } from "react";
import { Text, View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Layout from "../constants/Layout";

export default function SplashScreen() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        resizeMode="cover"
        autoPlay
        ref={animation}
        style={styles.lottie}
        loop={true}
        source={require("../assets/lottie/splashScreenLottie.json")}
      ></LottieView>

      <Text
        style={{
          fontSize: 64,
          color: "white",
          position: "absolute",
          justifyContent: "center",
        }}
      >
        EventMap
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex: 1,
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
