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
import { connect } from "react-redux";
import Colors from "../../../../constants/Colors";
import Constants from "expo-constants";
import EventsListView from "./HomescreenTabs/EventsTab";
import HomeTabView from "./HomescreenTabs/HomeTab";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import SearchBar from "../../../../components/Input/SearchBar";
import { ApplicationState } from "../../../../Store/reducers";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../types/navigationTypes";
import { CATEGORY } from "../../../../API";

type HomescreenProps = {
  authenticationMode: GraphQLOptions["authMode"];
};

const tabLabels = [
  "All",
  "Activities & Games",
  "Festivals & Expos",
  "Entertainment",
  "Sports",
  "Concerts",
  "Exhibitions",
];

const _HomeScreen: React.FC<HomescreenProps> = ({ authenticationMode }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [tabView, setTabView] = useState<string>("Home");

  const renderTab = () => {
    switch (tabView) {
      case "All":
        return <EventsListView key="All" />;
      case "Activities & Games":
        return (
          <EventsListView
            key="Activities & Games"
            tmCategory="Miscellaneous"
            asCategory={CATEGORY.GAMES}
            leCategory="yso:p6062"
          />
        );
      case "Festivals & Expos":
        return (
          <EventsListView
            key="Festivals & Expos"
            tmCategory="festival"
            asCategory={CATEGORY.FESTIVAL}
            leCategory="yso:p1304,yso:p4892"
          />
        );
      case "Sports":
        return (
          <EventsListView
            key="Sports"
            tmCategory="sport"
            asCategory={CATEGORY.SPORT}
            leCategory="yso:p916,yso:p965"
          />
        );
      case "Concerts":
        return (
          <EventsListView
            key="Concerts"
            tmCategory="CONCERT"
            asCategory={CATEGORY.CONCERT}
            leCategory="yso:p11185"
          />
        );
      case "Exhibitions":
        return (
          <EventsListView
            key="Exhibitions"
            tmCategory="Exhibitions"
            asCategory={CATEGORY.MUSEUM}
            leCategory="yso:p5121"
          />
        );
      case "Entertainment":
        return (
          <EventsListView
            key="Entertainment"
            tmCategory="Entertainment"
            leCategory="yso:p916"
          />
        );
      default:
        return <HomeTabView key="Home" />;
    }
  };

  const handleSearch = (text: string) => {
    setSearchText(text);
    // implement search logic here
  };

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
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => navigation.navigate("UserPreferenceModal")}
          >
            <Ionicons name="options-outline" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <Ionicons name="close-outline" size={24} color="red" />
            ) : (
              <Ionicons name="search-outline" size={24} color="white" />
            )}
          </TouchableOpacity>

          {isSearchOpen ? <SearchBar onChangeText={handleSearch} /> : <View />}
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
          {tabLabels.map((label: string) => (
            <TouchableOpacity
              key={label}
              style={styles.tab}
              onPress={() => setTabView(label)}
            >
              <Text
                style={
                  tabView === label ? styles.selectedTab : styles.headerTab
                }
              >
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {renderTab()}
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

  searchBar: {
    backgroundColor: "white",
    height: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
