import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { ApplicationState, UserState } from "../../../Store";

interface MapProps {
  userReducer: UserState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
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
