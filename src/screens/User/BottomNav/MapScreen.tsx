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
import { Icon } from "@rneui/base";
import { ActivitiesMap } from "../../../Store/reducers/activityReducer";

interface MapProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const [location, setLocation] = useState<LocationObject | undefined>(
    undefined
  );
  const [activities, setActivities] = useState<Array<Activity>>([]);

  useEffect(() => {
    async function requestloc() {
      const locationObject = await requestLocation();
      setLocation(locationObject);
      const activitiesprop = props.activitiesReducer.activitiesMap;

      setActivities(activitiesprop);
    }
    requestloc();
  }, [activities]);

  if (activities === undefined || activities.length === 0) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }

  console.log(activities[0]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          // CHANGE THIS ON PRODUCTION : ? location
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
          ></Marker>
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
