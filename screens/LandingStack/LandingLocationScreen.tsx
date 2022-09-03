import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";
import { LocationObject } from "expo-location";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { Espoo, Helsinki, Vantaa } from "../../util/data/cityGeoData";
import { styles } from "./styles";

export const LandingLocationScreen: React.FC = () => {
  const [location, setLocation] = useState<LocationObject>(Helsinki);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  async function requestlocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      return undefined;
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    navigation.navigate("LandingPreferenceScreen");
  }

  console.log(location);

  return (
    // Header starts
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose your location</Text>
        <Text style={styles.headerText}>
          Select city where you want find events from or tap Current Location
        </Text>
      </View>
      {/* Header ends */}

      {/* Content Starts */}
      <View style={styles.content}>
        <View style={styles.pickerBox}>
          <View style={{ justifyContent: "center" }}>
            <Ionicons name="location" size={24} color={Colors.light.tint} />
          </View>
          <View style={{ flex: 10 }}>
            <Picker
              selectedValue={location}
              onValueChange={(itemValue, itemIndex) => setLocation(itemValue)}
            >
              <Picker.Item label="Helsinki" value={Helsinki} />
              <Picker.Item label="Vantaa" value={Vantaa} />
              <Picker.Item label="Espoo" value={Espoo} />
            </Picker>
          </View>
        </View>

        <TouchableOpacity onPress={requestlocation} style={styles.nearbyBox}>
          <View style={{ justifyContent: "center" }}>
            <Feather
              name="target"
              size={24}
              color={Colors.light.tint}
              style={{ paddingRight: 10 }}
            />
          </View>
          <View style={{ justifyContent: "center" }}>
            <Text>Nearby</Text>
            <Text>Current Location</Text>
          </View>
        </TouchableOpacity>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.navigate("LandingPreferenceScreen")}
        >
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* Footer Ends */}
    </View>
  );
};
