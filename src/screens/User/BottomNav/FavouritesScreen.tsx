// import { StyleSheet } from "react-native";
// import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { CATEGORY } from "../../../API";
import { RootStackParamList } from "../../../navigation/types";
import {
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  UserState,
} from "../../../Store";
import { styles } from "../styles";

interface FavouritesScreenProps {
  userReducer: UserState;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {
  return <View />;
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
