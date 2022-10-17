import { StyleSheet } from "react-native";

import
 { RootStackParamList, 
  // RootTabScreenProps 
} from "../../../../types";
import MapContainer from "../../../components/Map/MapContainer";
import { View } from "react-native";
import { ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface MapProps {
  userReducer: UserState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const { userReducer } = props;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

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
