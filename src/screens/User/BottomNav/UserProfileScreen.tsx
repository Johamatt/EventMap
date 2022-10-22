// import { StyleSheet } from "react-native";
// import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { RootStackParamList } from "../../../../types";
import CustomButton from "../../../components/Buttons/CustomButton";
import {
  ApplicationState,
  ON_UPDATE_AGEGROUP,
  ON_UPDATE_TAGS,
  ON_UPDATE_USERLOGIN,
  UserState,
} from "../../../Store";
import { Activity, activityTags } from "../../../util/data/activityTags";
import { styles } from "../styles";

interface UserProfileScreenProps {
  userReducer: UserState;
}

export const _UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
  const userReducer = props.userReducer;
  // const [selectedAgeGroup, setSelectedAgeGroup] = useState<AgeGroups>(
  //   AgeGroup[0]
  // );

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const signOut = async () => {
    const signout = await Auth.signOut();

    console.log(signOut);

    ON_UPDATE_USERLOGIN(signout);
  };

  return (
    // Header starts
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <CustomButton text="Sign out" onPress={signOut} type="TERTIARY" />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const TabTwoScreen = connect(mapToStateProps, {
  ON_UPDATE_AGEGROUP,
  ON_UPDATE_TAGS,
})(_UserProfileScreen);

export default TabTwoScreen;
