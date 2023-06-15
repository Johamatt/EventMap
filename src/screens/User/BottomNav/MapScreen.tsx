import React, { useEffect, useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { connect } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigationTypes";
import { ApplicationState } from "../../../Store/reducers";
import { userOptionsAsyncStorage } from "../../../types/storageType";
import { Ionicons } from "@expo/vector-icons";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { calculateOptionsDate } from "../../../util/helpers/calculateOptionsDate";
import {
  LinkedEvent,
  fetchLinkedEventsWithLocation,
} from "../../../hooks/fetch/LinkedEvents/LinkedEventsFetch";
import { parseCategoryString } from "../../../util/helpers/parseCategoryString";
import * as Location from "expo-location";
import { calculateBboxRadius } from "../../../util/helpers/calculateBBox";
import Mapbox, {
  Callout,
  Camera,
  Image,
  MarkerView,
  PointAnnotation,
  UserLocation,
} from "@rnmapbox/maps";
import Constants from "expo-constants";
import LottieView from "lottie-react-native";
import { requestLocation } from "../../../hooks/RequestLocation";

//@ts-ignore
Mapbox.setAccessToken(Constants.expoConfig.extra.MAPBOX_KEY);

interface MapProps {
  authenticationMode: GraphQLOptions["authMode"];
  userOptions: userOptionsAsyncStorage | undefined;
}

const MapScreen: React.FC<MapProps> = ({ authenticationMode, userOptions }) => {
  const [events, setEvents] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false); // New state for loading

  const [event, setEvent] = useState<LinkedEvent | undefined>(undefined);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    requestLocation();
    fetchData();
  }, [userOptions]);

  const fetchData = async () => {
    setIsLoading(true); // Show loading icon
    setEvents([]);
    const date = calculateOptionsDate(userOptions);
    const categorystring = parseCategoryString(userOptions?.categories);
    const bbox = calculateBboxRadius(60.192059, 24.945831, userOptions?.radius);
    const [dataLE] = await Promise.all([
      fetchLinkedEventsWithLocation(
        1,
        100,
        date!.dateTo,
        date!.dateFrom,
        bbox,
        categorystring
      ),
    ]);
    setPage(page + 1);
    setEvents(dataLE);
    setIsLoading(false); // Hide loading icon
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Mapbox.MapView style={styles.map}>
          <Camera zoomLevel={10} centerCoordinate={[24.945831, 60.192059]} />
          <UserLocation />
          {events.map((ev, i) => (
            <PointAnnotation
              key={ev.id}
              id={ev.id.toString()}
              title={ev.name.fi}
              coordinate={[
                ev.location.position.coordinates[0],
                ev.location.position.coordinates[1],
              ]}
              onSelected={() =>
                navigation.navigate("LinkedEventModal", { event: ev })
              }
            >
              <Callout id={ev.id} title={ev.name.fi}></Callout>
            </PointAnnotation>

            // // <MarkerView,
            // //   key={i}
            // //   coordinate={[
            // //     ev.location.position.coordinates[0],
            // //     ev.location.position.coordinates[1],
            // //   ]}
            // //   style={markerStyles.container}
            // // >
            // //   <TouchableOpacity
            // //     onPress={() =>
            // //       navigation.navigate("LinkedEventModal", { event: ev })
            // //     }
            // //     style={markerStyles.touchable}
            // //   >
            // //     <View style={markerStyles.marker}>
            // //       <Text style={markerStyles.text}>{i}</Text>
            // //     </View>
            // //   </TouchableOpacity>
            // // </MarkerView>
          ))}
        </Mapbox.MapView>
        {isLoading && (
          <View style={styles.loadingOverlay}>
            <LottieView
              source={require("../../../assets/lottie/loadingLottie.json")}
              autoPlay
              loop
            />
          </View>
        )}
      </View>
      <React.Fragment>
        <View style={styles.filterButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("UserPreferenceModal")}
            style={styles.button}
          >
            <Ionicons name="options-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </React.Fragment>
    </View>
  );
};

const markerStyles = StyleSheet.create({
  container: { width: 30, height: 30 },
  touchable: { flex: 1 },
  marker: { backgroundColor: "red", borderRadius: 15 },
  text: { color: "white", fontWeight: "bold" },
});

const styles = StyleSheet.create({
  page: { flex: 1, justifyContent: "center", alignItems: "center" },
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
    backgroundColor: "black",
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "black",
    borderWidth: 0.5,
  },
  filterButtonContainer: { position: "absolute", right: 18, bottom: 100 },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    color: "black",
    paddingTop: 200,
    fontWeight: "bold",
    fontFamily: "Rationale-Regular",
    fontSize: 24,
    textAlign: "center",
  },
});

const mapStateToProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
  userOptions: state.UserReducer.userOptions,
});

export default connect(mapStateToProps)(MapScreen);
