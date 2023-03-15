import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, View, StyleSheet, TouchableOpacity } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { connect } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { fetchTicketMasterToday } from "../../../hooks/fetch/TicketMaster/TicketMasterList";
import { RootStackParamList } from "../../../types/navigationTypes";
import MapListModal from "../modals/MapListModal";
import OpenModalButton from "../../../components/Buttons/OpenListModalButton";
import { ApplicationState } from "../../../Store/reducers";

interface MapProps {}

const _MapScreen: React.FC<MapProps> = (props) => {
  const mapRef = useRef<MapView>(null);
  const [showCard, setShowCard] = useState<boolean>(true);
  const [region, setRegion] = useState<Region>();
  const [events, setEvents] = useState<Array<any>>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchEventsMapToday(page);
  }, []);

  const fetchEventsMapToday = useCallback(async (page: number) => {
    const dateTimeNowString = new Date().toISOString();

    const eventsDataList = await fetchTicketMasterToday(
      page,
      100,
      dateTimeNowString
    );
    setPage(page + 1);
    setEvents([
      ...events,
      // @ts-ignore
      ...eventsDataList,
    ]);
  }, []);

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

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        region={region || getMyLocation()}
        onRegionChangeComplete={onRegionChangeComplete}
        mapType="satellite"
        showsUserLocation
      >
        {events.map((ev, i) => {
          return (
            <Marker
              key={i}
              coordinate={{
                latitude: parseFloat(ev._embedded.venues[0].location.latitude),
                longitude: parseFloat(
                  ev._embedded.venues[0].location.longitude
                ),
              }}
              onPress={() =>
                navigation.navigate("TicketMasterEventModal", { id: ev.id })
              }
            ></Marker>
          );
        })}
      </MapView>
      {showCard ? (
        <MapListModal
          closeCard={() => setShowCard(false)}
          onEventPress={(coordinates) => onRegionChangeComplete(coordinates)}
          events={events}
        />
      ) : (
        <OpenModalButton openModal={() => setShowCard(true)} />
      )}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
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
