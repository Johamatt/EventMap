import React, { useEffect, useRef, useState } from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { connect } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { fetchTicketMaster } from "../../../hooks/fetch/TicketMaster/TicketMasterFetch";
import { RootStackParamList } from "../../../types/navigationTypes";
import { ApplicationState } from "../../../Store/reducers";
import { userOptionsAsyncStorage } from "../../../types/storageType";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { listEventsCustom } from "../../../hooks/fetch/Appsync/AppsyncEvents";
import { calculateOptionsDate } from "../../../util/helpers/calculateOptionsDate";
import MapListModal from "../../../components/Lists/MapListCard";
import { fetchLinkedEventsWithLocation } from "../../../hooks/fetch/LinkedEvents/LinkedEventsFetch";
import { PROVIDER_GOOGLE } from "react-native-maps";
interface MapProps {
  authenticationMode: GraphQLOptions["authMode"];
  userOptions: userOptionsAsyncStorage | undefined;
}

const _MapScreen: React.FC<MapProps> = ({
  authenticationMode,
  userOptions,
}) => {
  const mapRef = useRef<MapView>(null);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [region, setRegion] = useState<Region>();
  const [events, setEvents] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(1);
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();

  useEffect(() => {
    fetchData();
  }, [userOptions]);

  const fetchData = async () => {
    setEvents([]);
    const date = calculateOptionsDate(userOptions);
    console.log("From: " + date!.dateFrom);
    console.log("To: " + date!.dateTo);

    const [dataLE /*dataTM*/ /*dataAS*/, ,] = await Promise.all([
      fetchLinkedEventsWithLocation(1, 100, date!.dateTo, date!.dateFrom),
      // fetchTicketMaster(page, 10, new Date().toISOString()),
      // listEventsCustom(
      //   nextTokenEvents,
      //   date.dateFrom,
      //   date.dateTo,
      //   authenticationMode,
      //   50
      // ),
    ]);
    // const combinedEvents = [...events, /*...dataAS!.items, */ ...dataLE]; //...dataTM,

    // setNextTokenEvents(dataAS!.nextToken);
    setPage(page + 1);
    setEvents(dataLE);
  };

  const getMyLocation = () => {
    const region: Region = {
      latitude: 60.192059,
      longitude: 24.945831,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return region;
  };

  const onRegionChangeComplete = async (region: Region) => {
    setRegion(region);
    mapRef.current?.animateToRegion(region, 1000);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        ref={mapRef}
        region={region || getMyLocation()}
        onRegionChangeComplete={onRegionChangeComplete}
        mapType="satellite"
        showsUserLocation
      >
        {events.map((ev, i) => {
          /*
          if (ev.__typename === "ticketmaster") {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: parseFloat(
                    ev._embedded.venues[0].location.latitude
                  ),
                  longitude: parseFloat(
                    ev._embedded.venues[0].location.longitude
                  ),
                }}
                onPress={() =>
                  navigation.navigate("TicketMasterEventModal", { id: ev.id })
                }
              ></Marker>
            );
          }
          if (ev.__typename === "AppsyncEvent") {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: ev.location.lat,
                  longitude: ev.location.lon,
                }}
                onPress={() =>
                  navigation.navigate("AppSyncEventModal", { id: ev.id })
                }
              ></Marker>
            );
          }
            */
          if (
            ev.__typename === "linkedEvent" &&
            ev.location.position &&
            ev.location.position.coordinates
          ) {
            return (
              <Marker
                key={i}
                coordinate={{
                  latitude: ev.location.position.coordinates[1],
                  longitude: ev.location.position.coordinates[0],
                }}
                onPress={() =>
                  navigation.navigate("LinkedEventModal", { event: ev })
                }
              />
            );
          }
        })}
      </MapView>
      {showCard ? (
        <MapListModal
          closeCard={() => setShowCard(false)}
          onEventPress={(coordinates) => onRegionChangeComplete(coordinates)}
          events={events}
        />
      ) : (
        <React.Fragment>
          <View style={styles.filterButtonContainer}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UserPreferenceModal")}
              style={styles.button}
            >
              <Ionicons name="options-outline" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.cardButtonContainer}>
            {/* <TouchableOpacity
              onPress={() => setShowCard(true)}
              style={styles.button}
            >
              <Feather name="settings" size={24} color="black" />
            </TouchableOpacity> */}
          </View>
        </React.Fragment>
      )}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
  userOptions: state.UserReducer.userOptions,
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

  button: {
    width: 50,
    height: 50,
    backgroundColor: "#f3f4f6",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  cardButtonContainer: {
    position: "absolute",
    right: 18,
    bottom: 35,
  },
  filterButtonContainer: {
    position: "absolute",
    right: 18,
    bottom: 100,
  },
});
