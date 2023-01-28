import { Dimensions, ScrollView } from "react-native";
import { View, Text, Image } from "react-native";

import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { ApplicationState, UserState } from "../../../Store";
import { RootStackParamList } from "../../../navigation/types";

interface EventModalProps {
  navigation: any;
  route: any;
}

export const EventModal: React.FC<EventModalProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const event: any = props.route.params.liveEvent;

  return (
    // Header starts
    <ScrollView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.description}>{event.Descriptions.fi}</Text>
      </View>
      <View>
        <View>
          {/* <Image
            style={{ width: 105, height: 105 }}
            source={{
              uri:
                event.EventImage !== undefined
                  ? event.EventImage[0].url
                  : "../../assets/images/broken-link.png",
            }}
          /> */}

          <View>
            <View>
              <Text>{event.startingDateTime}</Text>
              <Text>{event.endingDateTime}</Text>
            </View>

            <View>
              <Text>{event.location.streetAddress}</Text>
              <Text>{event.location.postalCode}</Text>
            </View>
          </View>
        </View>

        <View style={styles.descriptionContainer}>
          <Text>{event.Descriptions.fi}</Text>
        </View>

        <View>
          {event.location.lat !== undefined ||
          (null && event.location.lon !== undefined) ||
          null ? (
            <MapView
              style={styles.mapContainer}
              initialRegion={{
                latitude: event.location.lat,
                longitude: event.location.lon,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: event.location.lat,
                  longitude: event.location.lon,
                }}
              ></Marker>
            </MapView>
          ) : (
            <View />
          )}
        </View>

        <View style={styles.separator} />
      </View>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 20,
  },

  mapContainer: {
    width: Dimensions.get("window").width,
    height: 300,
  },

  descriptionContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  topSection: {
    paddingTop: 25,
  },

  description: {
    fontSize: 35,
    textAlign: "center",
    fontFamily: "Rationale-Regular",
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
});
