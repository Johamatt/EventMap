import { useEffect, useCallback } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import * as Splash from "expo-splash-screen";

export default function SplashScreen() {
  const [fontsLoaded] = useFonts({
    "Rationale-Regular": require("../assets/fonts/Rationale-Regular.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await Splash.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splash.hideAsync();

      //
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: "Rationale-Regular", fontSize: 80 }}>
        Inter Black
      </Text>
      <Text style={{ fontSize: 30, fontFamily: "Poppins-Regular" }}>
        Platform Default
      </Text>
      <Text style={{ fontSize: 30, fontFamily: "Montserrat-VariableFont" }}>
        Platform Default
      </Text>
    </View>
  );
}
