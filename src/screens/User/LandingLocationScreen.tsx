import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Button, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import * as Location from "expo-location";
import { Text, View } from "react-native";
import Colors from "../../constants/Colors";
import { LocationObject } from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/types";

import { styles } from "./styles";
import { UserState } from "../../Store/types";
import { ApplicationState, ON_UPDATE_LOCATION } from "../../Store";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Espoo, Helsinki, Vantaa } from "../../util/data";

interface LandingLocationProps {
  userReducer: UserState;
  ON_UPDATE_LOCATION: Function;
}

const _LandingLocationScreen: React.FC<LandingLocationProps> = (props) => {
  const { ON_UPDATE_LOCATION, userReducer } = props;

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
    await nextScreen();
  }

  // redux thunk ??
  // !!! korjaa, ei päivitä. !!!!!!!!!!!!!!!!
  // !!! korjaa, ei päivitä. !!!!!!!!!!!!!!!!
  // !!! korjaa, ei päivitä. !!!!!!!!!!!!!!!!
  async function nextScreen() {
    await AsyncStorage.setItem("user_location", JSON.stringify(location));
    await ON_UPDATE_LOCATION(location);
    navigation.navigate("LandingPreferenceScreen");
  }

  return (
    // Header starts
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Location</Text>
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
        <View style={styles.separator} />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => nextScreen()}
        >
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
      {/* Footer Ends */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const LandingLocationScreen = connect(mapToStateProps, {
  ON_UPDATE_LOCATION,
})(_LandingLocationScreen);

export default LandingLocationScreen;
