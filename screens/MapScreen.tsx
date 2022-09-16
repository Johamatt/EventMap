import { StyleSheet } from "react-native";

import { RootTabScreenProps } from "../types";
import MapContainer from "../components/Map/MapContainer";
import { View } from "react-native";

export const MapScreen: React.FC = (props) => {
  console.log(props);
  return (
    <View>
      <MapContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
