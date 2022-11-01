import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import useAmplifyResources from "../../../hooks/loadResources/useAmplifyResources";
import { RootStackParamList } from "../../../navigation/types";
import { ApplicationState, UserState } from "../../../Store";

interface MapProps {
  userReducer: UserState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const [eventData, setEventData] = useState<any>();

  useEffect(() => {
    useAmplifyResources();
  }, []);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});
const MapScreen = connect(mapToStateProps)(_MapScreen);

export default MapScreen;

const styles = StyleSheet.create({
  container: {},
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
