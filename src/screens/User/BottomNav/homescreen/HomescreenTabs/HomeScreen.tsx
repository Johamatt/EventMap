import React, { useRef, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { ApplicationState } from "../../../../../Store";
import { connect } from "react-redux";
import Colors from "../../../../../constants/Colors";
import Constants from "expo-constants";
import EventsListView from "./EventsListView";
import HomeTabView from "./HomeTabView";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

type HomescreenProps = {
  authenticationMode: GraphQLOptions["authMode"];
};

const _HomeScreen: React.FC<HomescreenProps> = ({ authenticationMode }) => {
  const [tabView, setTabView] = useState<
    | "Home"
    | "All"
    | "Activities & Games"
    | "Festivals"
    | "Entertainment"
    | "Sports"
  >("Home");

  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="options-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="search-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {authenticationMode === "AMAZON_COGNITO_USER_POOLS" && (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity style={styles.coinButton}>
              <LottieView
                autoPlay
                ref={animation}
                loop={true}
                source={require("../../../../../assets/lottie/coin.json")}
              />
            </TouchableOpacity>

            <Text
              style={{
                color: "white",
                marginLeft: 10,
                fontWeight: "bold",
                fontSize: 18,
                textTransform: "uppercase",
              }}
            >
              0
            </Text>
          </View>
        )}
      </View>
      <View style={styles.tabWrapper}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => setTabView("Home")}
        >
          <Ionicons
            name="home"
            size={24}
            color={tabView === "Home" ? Colors.light.primary : "white"}
          />
        </TouchableOpacity>

        <ScrollView horizontal={true} style={styles.tabScrollView}>
          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTabView("All")}
          >
            <Text
              style={tabView === "All" ? styles.selectedTab : styles.headerTab}
            >
              All
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTabView("Activities & Games")}
          >
            <Text
              style={
                tabView === "Activities & Games"
                  ? styles.selectedTab
                  : styles.headerTab
              }
            >
              Activities & Games
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTabView("Festivals")}
          >
            <Text
              style={
                tabView === "Festivals" ? styles.selectedTab : styles.headerTab
              }
            >
              Festivals
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTabView("Entertainment")}
          >
            <Text
              style={
                tabView === "Entertainment"
                  ? styles.selectedTab
                  : styles.headerTab
              }
            >
              Entertainment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.tab}
            onPress={() => setTabView("Sports")}
          >
            <Text
              style={
                tabView === "Sports" ? styles.selectedTab : styles.headerTab
              }
            >
              Sports
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {tabView === "All" ? (
        <EventsListView key="All" />
      ) : tabView === "Activities & Games" ? (
        <EventsListView key="Activities & Games" tmCategory="Miscellaneous" />
      ) : tabView === "Festivals" ? (
        <EventsListView key="Festivals" tmCategory="festival" />
      ) : tabView === "Sports" ? (
        <EventsListView key="Sports" tmCategory="sport" />
      ) : tabView === "Entertainment" ? (
        <EventsListView key="Entertainment" tmCategory="Entertainment" />
      ) : (
        <HomeTabView key="Home" />
      )}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    marginTop: Constants.statusBarHeight,
    flex: 1,
  },

  homeButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  tabWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
  },

  tabScrollView: {
    margin: 10,
  },

  tab: {
    paddingHorizontal: 20,
  },

  headerTab: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  selectedTab: {
    fontSize: 18,
    color: Colors.light.primary,
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 5,
    borderBottomWidth: 3,
    borderBottomColor: Colors.light.primary,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    backgroundColor: Colors.light.headerBackground,
  },

  headerButton: {
    width: 40,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  coinButton: {
    width: 100,
    height: 100,
    right: -10,
    position: "absolute",
  },
});
