import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { ApplicationState } from "../../../../../Store";
import { connect } from "react-redux";
import React, { useMemo, useState } from "react";
import { Activity, CATEGORY, Event } from "../../../../../API";
import ActivitiesListView from "./ActivitiesListView";
import Colors from "../../../../../constants/Colors";
import Constants from "expo-constants";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../../navigation/types";
import EventsListView from "./EventsListView";

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
};

const _HomeScreen: React.FC<HomescreenProps> = (props) => {
  const [tabView, setTabView] = useState<
    //"Activities"
    "Events" | "Friends"
  >("Events");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const renderList = useMemo(() => {
    switch (tabView) {
      //    case "Activities":
      //     return <ActivitiesListView />;
      case "Events":
        return <EventsListView />;
      case "Friends":
        return (
          // <FlatList
          //   style={{ backgroundColor: "black", marginBottom: 50 }}
          //   keyExtractor={(item) => item.id}
          //   data={friendsEvents}
          //   renderItem={({ item }) => <FeedCard activity={item} />}
          // />
          <></>
        );
      default:
        return null;
    }
  }, [tabView]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="options-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerButton}>
          <Ionicons name="search-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
      {/* {countryListVisible && renderCountryList()} */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => setTabView("Events")}>
          <Text
            style={
              tabView === "Events" ? styles.selectedHeaderTab : styles.headerTab
            }
          >
            Events
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => setTabView("Activities")}>
          <Text
            style={
              tabView === "Activities"
                ? styles.selectedHeaderTab
                : styles.headerTab
            }
          >
            Activities
          </Text>
        </TouchableOpacity> */}

        <TouchableOpacity onPress={() => setTabView("Friends")}>
          <Text
            style={
              tabView === "Friends"
                ? styles.selectedHeaderTab
                : styles.headerTab
            }
          >
            Friends
          </Text>
        </TouchableOpacity>
      </View>
      {renderList}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesList: state.ActivitiesReducer.activitiesList,
  nextToken: state.ActivitiesReducer.nextToken,
  showcurrentlyopen: state.UserReducer.showCurrentlyOpen,
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    margin: 20,
  },
  headerTab: {
    fontSize: 18,
    color: "white",
  },
  selectedHeaderTab: {
    fontSize: 18,
    color: "yellow",
    fontWeight: "bold",

    borderWidth: 2,
    borderBottomColor: Colors.light.primary,
  },

  header: {
    height: 50,
    flexDirection: "row-reverse",
    alignItems: "center",
    backgroundColor: "black",
    paddingHorizontal: 15,
  },
  headerButton: {
    width: 40,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  flag: {
    width: 40,
    height: 28,
    borderColor: Colors.light.primary,
    borderWidth: 0.5,
  },
  countryName: {
    fontSize: 18,
    color: "white",
  },
});
