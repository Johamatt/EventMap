import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { connect } from "react-redux";
import { ApplicationState } from "../../../Store";
import { LocationObject } from "expo-location";
import { requestLocation } from "../../../util/helpers/RequestLocation";

import SplashScreen from "../../SplashScreen";
import { CATEGORY } from "../../../API";
import {
  fetchGuestActivitiesMap,
  fetchPublicEventsList,
  fetchPublicEventsMap,
} from "../../../hooks/fetch/PublicAccessFetch";
import { fetchUserActivitiesMap } from "../../../hooks/fetch/UserAccessFetch";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";

interface MapProps {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const [tabView, setTabView] = useState<"Activities" | "Events">("Activities");
  const [location, setLocation] = useState<LocationObject | undefined>(
    undefined
  );

  const [events, setEvents] = useState<any>([]);
  const [activities, setActivities] = useState<any>([]);
  const [nextToken, setNextToken] = useState<any>();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    async function requestloc() {
      const locationObject = await requestLocation();
      setLocation(locationObject);
    }
    requestloc();
  }, []);

  useEffect(() => {
    if (tabView === "Activities") {
      fetchActivities(nextToken);
    } else {
      fetchEvents();
    }
  }, [tabView]);

  // const fetchMoreData = () => {
  //   if (typeof nextToken === "string") {
  //     setPage(page + 1);
  //   }
  // };

  const fetchEvents = async () => {
    const eventsDataMap = await fetchPublicEventsMap();
    setEvents(eventsDataMap);
  };

  const fetchActivities = async (nextToken: any) => {
    if (props.guestUserSession) {
      const activitiesDataList = await fetchGuestActivitiesMap(nextToken);
      setNextToken(activitiesDataList.data?.listActivities?.nextToken);
      setActivities([
        ...activities,
        ...activitiesDataList.data?.listActivities?.items!,
      ]);
    } else {
      const activitiesDataList = await fetchUserActivitiesMap(nextToken);
      // @ts-ignore
      setNextToken(activitiesDataList.data?.listActivities?.nextToken);
      setActivities([
        ...activities,
        //@ts-ignore
        ...activitiesDataList.data?.listActivities?.items!,
      ]);
    }
  };

  if (activities === undefined || activities.length === 0) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            height: Dimensions.get("window").height / 15,
            width: Dimensions.get("window").width / 3,
            top: Dimensions.get("window").height / 15,
            left: Dimensions.get("window").width / 3,
            margin: 5,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("PreferenceScreen")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Settings</Text>
          <SimpleLineIcons
            name="settings"
            size={18}
            color="white"
            style={{ paddingLeft: 5 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            height: Dimensions.get("window").height / 15,
            width: Dimensions.get("window").width / 3,
            top: Dimensions.get("window").height / 15,
            right: Dimensions.get("window").width / 3,
            margin: 5,
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "white",
          }}
          onPress={() => setTabView("Events")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Events</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
            height: Dimensions.get("window").height / 15,
            width: Dimensions.get("window").width / 3,
            top: Dimensions.get("window").height / 15,
            margin: 5,
            flexDirection: "row",
          }}
          onPress={() => setTabView("Activities")}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Activities</Text>
        </TouchableOpacity>
      </View>

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
        {tabView === "Activities" ? (
          activities.map(
            (
              marker: { Location: { lat: any; lon: any } },
              index: React.Key | null | undefined
            ) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: marker.Location.lat,
                  longitude: marker.Location.lon,
                }}
              ></Marker>
            )
          )
        ) : (
          <View />
        )}
      </MapView>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesList: state.ActivitiesReducer.activitiesList,
  nextToken: state.ActivitiesReducer.nextToken,
  showcurrentlyopen: state.UserReducer.showCurrentlyOpen,
  userPreferences: state.UserReducer.preferences,
  guestUserSession: state.UserReducer.guestUserSession,
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
