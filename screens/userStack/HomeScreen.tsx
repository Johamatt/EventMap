import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { LiveEvent, RootStackParamList, RootTabScreenProps } from "../../types";
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
import Layout from "../../constants/Layout";
import { eventScheduleDayWeek } from "../../util/data/eventSchedules";

interface HomeScreenProps {
  userReducer: UserState;
}

const _HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const { userReducer } = props;

  const Item = (liveEvent: LiveEvent) => (
    <View
      style={{
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      }}
    >
      <Text style={{ fontSize: 20 }}>{liveEvent.description.title}</Text>
    </View>
  );

  const renderItem = (liveEvent: LiveEvent) => <Item title={item.title} />;

  return (
    <View>
      {/* // Header starts */}
      <View
        style={{
          display: "flex",
          paddingHorizontal: 20,
          paddingTop: 40,
          paddingBottom: 20,
          flexDirection: "row-reverse",
        }}
      >
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#2f95dc",

            padding: 12,
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "#fff" }}>
            Preferences{" "}
          </Text>
          <Ionicons name="options-outline" size={22} color="black" />
        </TouchableOpacity>
      </View>
      {/* Header ends */}

      {/* list */}
      <View
        style={{
          alignItems: "stretch",
          display: "flex",
          flexWrap: "wrap-reverse",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {eventScheduleDayWeek.map((data, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                style={{
                  alignItems: "center",
                  backgroundColor: "#2f95dc",
                  height: 45,
                  padding: 10,
                  margin: 1,
                  width: Layout.window.width / 2 - 8,
                  justifyContent: "center",
                }}
              >
                <Text style={{ fontWeight: "bold", color: "#fff" }}>
                  {data}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>

      {/* katso malliaa landingpreference screen */}

      <View style={{ padding: 20, margin: 5 }}>
        <FlatList
          style={styles.list}
          data={eventSamples}
          renderItem={(item) => (
            <TouchableOpacity
              key={item.index}
              onPress={() => console.log("ok")} //navigation navigatee
            >
              {item.item.images !== undefined ? (
                <View>
                  <Image
                    source={{ uri: item.item.images[0].url }}
                    style={{ width: 75, height: 75 }}
                  />
                </View>
              ) : (
                <View>
                  <Image
                    source={require("../../assets/images/broken-link.png")}
                    style={{ width: 75, height: 75 }}
                  />
                </View>
              )}

              <Text>{item.item.description.title}</Text>
              <Text>{item.item.eventDates.starting_day}</Text>
              <Text>{item.item.eventDates.ending_day}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        {/* <SafeAreaView style={{ flex: 1 }}>
          <FlatList
            data={eventSamples}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView> */}

        {/* <View style={{ padding: 5, flexDirection: "row" }}>
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
        </View> */}
      </View>

      {/* 

        


      

      <View style={{ padding: 20, margin: "auto", marginTop: 300 }}>
        <View>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={eventSamples}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </SafeAreaView>
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
          <View style={styles.footer}></View>
        </View>
      </View> */}
    </View>

    /* Content Starts */
    /* ScrollView */
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;
