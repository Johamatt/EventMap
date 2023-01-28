import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Dimensions, View, StyleSheet, Text } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import { connect } from "react-redux";
import { ApplicationState } from "../../../../Store";
import { Activity, CATEGORY } from "../../../../API";
import { fetchGuestActivitiesMap } from "../../../../hooks/fetch/linkedEvents/Appsync/PublicAccessFetch";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../navigation/types";
import type { PointFeature } from "supercluster";
import type { BBox } from "geojson";
import useSupercluster from "use-supercluster";
import MapCard from "../../../../components/Cards/MapCard";
import ShowMapCardModal from "./ShowMapCardModal";
import { fetchEventsTodayList } from "../../../../hooks/fetch/linkedEvents/ListLinkedEvents/linkedEventsFetch";
import { fetchUserActivitiesMap } from "../../../../hooks/fetch/linkedEvents/Appsync/UserAccessFetch";

interface MapProps {
  activitiesList: Activity[];
  nextToken: string;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
  eventsList: any;
}

const _MapScreen: React.FC<MapProps> = (props) => {
  const mapRef = useRef<MapView>(null);
  const [showCard, setShowCard] = useState<boolean>(true);
  const [bounds, setBounds] = useState<BBox>();
  const [zoom, setZoom] = useState(10);
  const [activities, setActivities] = useState<any>([]);
  const [nextToken, setNextToken] = useState<any>();

  const [events, setEvents] = useState<Array<any>>(props.eventsList);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    fetchActivities(nextToken);
    fetchActivitiesMapToday(page);
  }, []);

  const fetchActivities = useCallback(async (nextToken: any) => {
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
        // @ts-ignore
        ...activitiesDataList.data?.listActivities?.items!,
      ]);
    }
  }, []);

  const fetchActivitiesMapToday = useCallback(async (page: number) => {
    const eventsDataList = await fetchEventsTodayList(page);
    setPage(page + 1);

    setEvents([
      ...events,
      // @ts-ignore
      ...eventsDataList,
    ]);
  }, []);

  const getMyLocation = () => {
    const region = {
      latitude: 60.192059,
      longitude: 24.945831,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
    return region;
  };

  const regionToBoundingBox = (region: Region): BBox => {
    return [
      region.longitude - region.longitudeDelta,
      region.latitude - region.latitudeDelta,
      region.longitude + region.longitudeDelta,
      region.latitude + region.latitudeDelta,
    ];
  };

  const onRegionChangeComplete = async (region: Region) => {
    const mapBounds = regionToBoundingBox(region);
    setBounds(mapBounds);
    const camera = await mapRef.current?.getCamera();
    setZoom(camera?.zoom ?? 10);
  };

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //

  const points = useMemo<PointFeature<any>[]>(() => {
    return activities.map((m: Activity) => ({
      type: "Feature",
      properties: {
        cluster: false,
        category: "markers",
        id: m.id,
      },
      geometry: {
        type: "Point",
        coordinates: [m.Location?.lon, m.Location?.lat],
      },
    }));
  }, [activities]);

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom,
    options: { radius: 90, maxZoom: 20 },
  });

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={getMyLocation()}
        onRegionChangeComplete={onRegionChangeComplete}
        mapType="satellite"
        showsUserLocation
      >
        {clusters?.map((point) => {
          const [longitude, latitude] = point.geometry.coordinates;
          const coordinates = { latitude, longitude };
          const properties = point.properties;

          if (properties?.cluster) {
            const size = 25 + (properties.point_count * 75) / points.length;
            return (
              <Marker
                key={`cluster-${properties.cluster_id}`}
                coordinate={coordinates}
              >
                <View style={[styles.cluster, { width: size, height: size }]}>
                  <Text style={styles.clusterCount}>
                    {properties.point_count}
                  </Text>
                </View>
              </Marker>
            );
          }

          return (
            <Marker
              key={properties.id}
              coordinate={coordinates}
              pinColor={properties.color}
              onPress={() =>
                navigation.navigate("ActivityModal", { id: properties.id })
              }
            />
          );
        })}
      </MapView>
      {showCard ? (
        <MapCard closeCard={() => setShowCard(false)} />
      ) : (
        <ShowMapCardModal openModal={() => setShowCard(true)} />
      )}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesList: state.ActivitiesReducer.activitiesList,
  nextToken: state.ActivitiesReducer.nextToken,
  showcurrentlyopen: state.UserReducer.showCurrentlyOpen,
  userPreferences: state.UserReducer.preferences,
  guestUserSession: state.UserReducer.guestUserSession,
  eventsList: state.EventsReducer.eventsList,
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
  cluster: {
    borderRadius: 100,
    backgroundColor: "#334155",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  clusterCount: {
    color: "#FFF",
    fontWeight: "bold",
  },
});
