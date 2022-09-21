import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { RootStackParamList, RootTabScreenProps } from "../../types";
import { View, Text, Image } from "react-native";
import { ApplicationState, UserState } from "../../Store";
import { connect } from "react-redux";
import { eventSamples } from "../../util/data/eventSample";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MapView, { Marker } from "react-native-maps";

interface EventScreenProps {
  userReducer: UserState;
}

const _EventScreen: React.FC<EventScreenProps> = (props) => {
  const { userReducer } = props;

  console.log(userReducer);

  const event = eventSamples[0];

  console.log(event);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  function nextScreen() {
    navigation.navigate("EventScreen");
  }

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
          {eventSamples[0].description.title}
        </Text>
      </View>
      {/* Header ends */}

      {/* Content Starts */}
      <View style={{ padding: 20, margin: "auto" }}>
        <View style={{ padding: 5, flexDirection: "row" }}>
          <Image
            style={{ width: 105, height: 105 }}
            source={{
              uri: eventSamples[0].images[0].url,
            }}
          />
          <View style={{ padding: 10 }}>
            <View>
              <Text>{eventSamples[0].eventDates.starting_day}</Text>
              <Text>{eventSamples[0].eventDates.ending_day}</Text>
            </View>

            <View>
              <Text>{eventSamples[0].location.address.locality}</Text>
              <Text>{eventSamples[0].location.address.streetAddress}</Text>
              <Text>{eventSamples[0].location.address.postalCode}</Text>
            </View>
          </View>
        </View>

        <View style={{ padding: 5, flexDirection: "row" }}>
          <View style={{ justifyContent: "center" }}>
            <Text>{eventSamples[0].description.body}</Text>
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
          <MapView
            style={{
              width: Dimensions.get("window").width,
              height: 300,
            }}
            initialRegion={{
              latitude: eventSamples[0].location.lat,
              longitude: eventSamples[0].location.lon,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <Marker
              coordinate={{
                latitude: eventSamples[0].location.lat,
                longitude: eventSamples[0].location.lon,
              }}
            ></Marker>
          </MapView>
        </View>

        <View>
          <>
            {eventSamples[0].tags.map((a) => {
              //renderää muualla
              <Text>{a.name}</Text>;
            })}
          </>
          <Text>ok</Text>
        </View>

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
