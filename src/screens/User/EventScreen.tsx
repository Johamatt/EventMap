import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  RootStackParamList,
  // RootTabScreenProps,
} from "../../navigation/types";

import { Event as LiveEvent } from "../../API";
import { View, Text, Image } from "react-native";
import { ApplicationState, UserState } from "../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MapView, { Marker } from "react-native-maps";

interface EventScreenProps {
  userReducer: UserState;
  navigation: any;
  route: any;
}

const _EventScreen: React.FC<EventScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const event: LiveEvent = props.route.params.liveEvent;

  console.log(event);

  return (
    // Header starts
    <ScrollView style={{ display: "flex", flex: 1 }}>
      <View style={{ paddingTop: 25 }}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text
          style={{
            fontSize: 35,
            textAlign: "center",
            fontFamily: "Rationale-Regular",
          }}
        >
          {event.title}
        </Text>
      </View>
      {/* Header ends */}

      {/* Content Starts */}
      <View style={{ padding: 20, margin: "auto" }}>
        <View style={{ padding: 5, flexDirection: "row" }}>
          {/* <Image
            style={{ width: 105, height: 105 }}
            source={{
              uri:
                event.EventImage !== undefined
                  ? event.EventImage[0].url
                  : "../../assets/images/broken-link.png",
            }}
          /> */}

          <View style={{ padding: 10 }}>
            <View>
              <Text>{event.startingDatetime}</Text>
              <Text>{event.endingDatetime}</Text>
            </View>

            <View>
              <Text>{event.Location?.streetAddess}</Text>
              <Text>{event.Location?.postalCode}</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 5, flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Text>{event.description}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {event.Location?.lat !== undefined &&
          event.Location?.lon !== undefined ? (
            <MapView
              style={{
                width: Dimensions.get("window").width,
                height: 300,
              }}
              initialRegion={{
                latitude: event.Location.lat,
                longitude: event.Location.lon,
                latitudeDelta: 0.00922,
                longitudeDelta: 0.00421,
              }}
            >
              <Marker
                coordinate={{
                  latitude: event.Location.lat,
                  longitude: event.Location.lon,
                }}
              ></Marker>
            </MapView>
          ) : (
            <View />
          )}
        </View>

        <View></View>

        <View style={styles.separator} />
      </View>
      {/* Content Ends */}

      {/* Footer Starts */}
      <View style={styles.footer}></View>
      {/* Footer Ends */}
    </ScrollView>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const EventScreen = connect(mapToStateProps)(_EventScreen);

export default EventScreen;
