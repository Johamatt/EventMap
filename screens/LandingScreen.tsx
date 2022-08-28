import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { LocationObject } from "expo-location";

export default function LandingScreen() {
  const [location, setLocation] = useState<LocationObject>();

  async function requestLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your location</Text>
      <Text style={styles.body}>
        Select city where you want find events from or tap Current Location
      </Text>
      <View style={styles.pickerContainer}>
        <View style={styles.pickerLogoContainer}>
          <Ionicons name="location" size={24} color={Colors.light.tint} />
        </View>
        <View style={{ flex: 9, justifyContent: "center" }}>
          <Picker
            style={{ height: 10 }}
            selectedValue={location}
            onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
          >
            <Picker.Item label="Helsinki" value="Helsinki" />
            <Picker.Item label="Espoo" value="Espoo" />
            <Picker.Item label="Vantaa" value="Vantaa" />
          </Picker>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => requestLocation}
        style={styles.currentLocationContainer}
      >
        <View style={styles.pickerLogoContainer}>
          <Feather name="target" size={24} color={Colors.light.tint}>
            {" "}
          </Feather>
        </View>

        <View style={{ flex: 8, justifyContent: "center" }}>
          <Text>Current Location</Text>
        </View>
      </TouchableOpacity>

      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
  },

  pickerContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  },

  currentLocationContainer: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    alignContent: "center",
  },

  pickerLogoContainer: {
    flex: 1,
  },
  body: { fontSize: 15, textAlign: "center", padding: 10 },
});
