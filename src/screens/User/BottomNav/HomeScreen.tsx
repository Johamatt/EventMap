import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ApplicationState } from "../../../Store";
import { connect } from "react-redux";
import React, { useState } from "react";
import { CATEGORY } from "../../../API";
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
      <View style={styles.tabContainer}>
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
        <TouchableOpacity
          style={styles.settingButton}
          onPress={() => navigation.navigate("PreferenceScreen")}
        >
          <SimpleLineIcons name="settings" size={18} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
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
  listContainer: {
    flex: 0.9,

  },

  tabContainer: {
    flex: 0.08,
    flexDirection: "row",
    padding: 5,
    marginBottom: 40,
  },

  header: {
    backgroundColor: "gray",
    flex: 0.3,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
    flexDirection: "row",
  },

  settingButton: {
    backgroundColor: "black",
    flex: 0.15,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },

  container: {
    marginTop: Constants.statusBarHeight + 15,
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
    flex: 0.4,
    marginHorizontal: 2.5,
  },

  text: {
    fontWeight: "bold",
  },

  selectedButton: {
    alignItems: "center",
    backgroundColor: Colors.light.tint,
    padding: 10,
    flex: 0.45,
    marginHorizontal: 2.5,
  },

  seletectedText: {
    color: "white",
    fontWeight: "bold",
  },
});
