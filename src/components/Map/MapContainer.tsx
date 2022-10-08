import * as React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

export default function MapContainer() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
