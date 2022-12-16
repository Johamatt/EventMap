import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ApplicationState } from "../../../Store";
import { connect } from "react-redux";
import React, { useState } from "react";
import { CATEGORY } from "../../../API";
import { Divider } from "@rneui/base";
import ActivitiesListView from "./tabs/HomescreenTabs/ActivitiesListView";
import Colors from "../../../constants/Colors";
import Constants from "expo-constants";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import EventsListView from "./tabs/HomescreenTabs/EventsListView";

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
};

const _HomeScreen: React.FC<HomescreenProps> = (props) => {
  const [tabView, setTabView] = useState<"Activities" | "Events">("Activities");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <View style={{ flex: 0.1, flexDirection: "row-reverse" }}>
        <TouchableOpacity
          style={{
            backgroundColor: "gray",
            flex: 0.3,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
            margin: 4,
            flexDirection: "row",
          }}
          onPress={() => navigation.navigate("PreferenceScreen")}
        >
          <Text style={{ color: "white", fontWeight: "500" }}>Settings</Text>
          <SimpleLineIcons
            name="settings"
            size={18}
            color="black"
            style={{ paddingLeft: 5 }}
          />
        </TouchableOpacity>
      </View>

      <Divider color="black" />
      <View style={{ flex: 0.08, flexDirection: "row" }}>
        <TouchableOpacity
          style={
            tabView === "Activities" ? styles.selectedButton : styles.button
          }
          onPress={() => setTabView("Activities")}
        >
          <Text
            style={
              tabView === "Activities" ? styles.seletectedText : styles.text
            }
          >
            Activities
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tabView === "Events" ? styles.selectedButton : styles.button}
          onPress={() => setTabView("Events")}
        >
          <Text
            style={tabView === "Events" ? styles.seletectedText : styles.text}
          >
            Events
          </Text>
        </TouchableOpacity>
      </View>
      <Divider color="black" />
      <View style={{ flex: 0.9 }}>
        {tabView === "Activities" ? <ActivitiesListView /> : <EventsListView />}
      </View>
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

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
  },

  iconbutton: {
    name: "options-outline",
    type: "ionicon",
    size: 15,
    color: "white",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    flex: 0.5,
  },

  text: {
    fontWeight: "bold",
  },

  selectedButton: {
    alignItems: "center",
    backgroundColor: Colors.light.tint,
    padding: 10,
    flex: 0.5,
  },

  seletectedText: {
    color: "white",
    fontWeight: "bold",
  },
});
