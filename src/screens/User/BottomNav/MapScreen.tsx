import { StyleSheet } from "react-native";

import {
  RootStackParamList,
  // RootTabScreenProps
} from "../../../../types";
import MapContainer from "../../../components/Map/MapContainer";
import { View } from "react-native";
import { ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { API, graphqlOperation } from "aws-amplify";
// import { listEvents } from "../../../graphql/queries";
import { useEffect, useState } from "react";

interface MapProps {
  userReducer: UserState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const { userReducer } = props;

  const [eventData, setEventData] = useState<any>();

  // useEffect(() => {
  //   fetchSongs();
  // });

  // const fetchSongs = async () => {
  //   try {
  //     const eventdata = await API.graphql(graphqlOperation(listEvents));

  //     setEventData(eventdata);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  console.log(eventData);

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
