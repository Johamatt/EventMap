import { StyleSheet } from "react-native";

import { RootTabScreenProps } from "../types";
import MapContainer from "../components/Map/MapContainer";
import { View } from "react-native";
import { ApplicationState, UserState } from "../Store";
import { connect } from "react-redux";

interface MapProps {
  userReducer: UserState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const { userReducer } = props;

  console.log(userReducer);

  return (
    <View>
      <MapContainer />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const MapScreen = connect(mapToStateProps)(_MapScreen);

export default MapScreen;
