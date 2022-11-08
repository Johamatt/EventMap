import React, { useEffect, useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { ActivitiesState, ApplicationState, UserState } from "../../../Store";
import { LocationObject } from "expo-location";
import { requestLocation } from "../../../util/helpers/RequestLocation";
import { Activity } from "../../../API";
import { Helsinki } from "../../../util/data";
import SplashScreen from "../../SplashScreen";

interface MapProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const [location, setLocation] = useState<LocationObject | undefined>(
    undefined
  );
  const [activities, setActivities] = useState<Array<Activity>>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function requestloc() {
      const locationObject = await requestLocation();
      setLocation(locationObject);
      const activitiesprop = props.activitiesReducer.activities;
      setActivities(activitiesprop);
    }
    requestloc();
  }, [activities]);

  if (activities[0] === undefined) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 60.192059,
          longitude: 24.945831,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {activities.map((marker, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: marker.Location.lat,
              longitude: marker.Location.lon,
            }}
            title={marker.fi_name}
            description={marker.fi_description}
          />
        ))}
      </MapView>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
});
const MapScreen = connect(mapToStateProps)(_MapScreen);

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
