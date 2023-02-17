import React, { useMemo, useRef, useState } from "react";

import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";

import { ApplicationState } from "../../../../../Store";
import { RootStackParamList } from "../../../../../navigation/types";
import { connect } from "react-redux";

import Colors from "../../../../../constants/Colors";
import Constants from "expo-constants";

import EventsListView from "./EventsListView";

type HomescreenProps = {
  nextToken: any;
  guestUserSession: boolean;
};

const _HomeScreen: React.FC<HomescreenProps> = (props) => {
  const [tabView, setTabView] = useState<
    "Home" | "All" | "Music" | "Festivals" | "Entertainment" | "Sports"
  >("Home");

  const animation = useRef(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderList = useMemo(() => {
    switch (tabView) {
      case "All":
        return <EventsListView />;
      case "Music":
        return <EventsListView category="Music" />;
      case "Festivals":
        return <EventsListView category="Festivals" />;
      case "Sports":
        return <EventsListView category="Sports" />;
      case "Entertainment":
        return <EventsListView category="Entertainment" />;

      case "Home":
        return <View />;
      default:
        return null;
    }
  }, [tabView]);

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
            onPress={() => setTabView("Music")}
          >
            <Text
              style={
                tabView === "Music" ? styles.selectedTab : styles.headerTab
              }
            >
              Concerts
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
      {renderList}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  nextToken: state.ActivitiesReducer.nextToken,
  guestUserSession: state.UserReducer.guestUserSession,
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
