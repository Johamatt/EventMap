import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
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
import { activityTags } from "../../util/data/activityTags";
import { ActivityTagsList } from "../../components/List/ActivityTagsList";

import { styles } from "./styles";

export const LandingPreferenceScreen: React.FC = () => {
  const [location, setLocation] = useState<LocationObject>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    // Header starts
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Choose tags</Text>
        <Text style={styles.headerText}>
          What activities are you interested in?
        </Text>
      </View>
      {/* Header ends */}

      {/* Content Starts */}
      <View style={styles.content}>
        <ActivityTagsList />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Next</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.footerButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
      {/* Footer Ends */}
    </View>
  );
};
