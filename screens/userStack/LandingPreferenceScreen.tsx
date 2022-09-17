import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View } from "react-native";
import { LocationObject } from "expo-location";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types";
import { ActivityTagsList } from "../../components/List/ActivityTagsList";
import { ApplicationState, UserState } from "../../Store";
import { styles } from "./styles";
import { connect } from "react-redux";

interface LandingPreferenceProps {
  userReducer: UserState;
}

export const _LandingPreferenceScreen: React.FC<LandingPreferenceProps> = (
  props
) => {
  const userReducer = props.userReducer;

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
        <View style={styles.separator} />
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

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const LandingLocationScreen = connect(mapToStateProps)(
  _LandingPreferenceScreen
);

export default LandingLocationScreen;
