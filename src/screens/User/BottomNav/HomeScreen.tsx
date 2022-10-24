import {
  Dimensions,
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import {
  LiveEvent,
  RootStackParamList,
  // RootTabScreenProps,
} from "../../../../types";
import { View, Text, Image } from "react-native";
import { ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "../styles";
import React, { useState } from "react";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import MapView, { Marker } from "react-native-maps";
import Layout from "../../../constants/Layout";
import EventCard from "../../../components/Cards/EventCard";
import DropDownPicker from "react-native-dropdown-picker";

interface HomeScreenProps {
  userReducer: UserState;
}

const _HomeScreen: React.FC<HomeScreenProps> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("today");
  const [selectedTiming, setSelectedTiming] = useState([
    { label: "Starting & on Going", value: "StartingAndOnGoing" },
    { label: "Today", value: "today" },
    { label: "Tomorrow", value: "tomorrow" },
    { label: "This Week", value: "thisWeek" },
    { label: "This Weekend", value: "thisWeekend" },
    { label: "Next Week", value: "nextWeek" },
    { label: "All", value: "all" },
  ]);

  return (
    <View style={{ paddingHorizontal: 10, paddingTop: 40 }}>
      {/* // Header starts */}
      <View
        style={{
          display: "flex",
          flexDirection: "row-reverse",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("LandingPreferenceScreen")}
          style={{
            alignItems: "center",
            backgroundColor: "#2f95dc",
            marginRight: 10,
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

      <View style={{ margin: 10 }}>
        <DropDownPicker
          dropDownDirection="AUTO"
          bottomOffset={150}
          open={open}
          value={value}
          items={selectedTiming}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setSelectedTiming}
        />
      </View>

      {/* list */}
      {/* <View
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
      </View> */}

      {/* <FlatList
        contentContainerStyle={{ flexGrow: 1 }}
        // style={styles.list}
        data={eventSamples}
        renderItem={({ item }: { item: LiveEvent }) => (
          <EventCard
            item={item}
            index={0}
            separators={{
              highlight: function (): void {
                throw new Error("Function not implemented.");
              },
              unhighlight: function (): void {
                throw new Error("Function not implemented.");
              },
              updateProps: function (
                select: "leading" | "trailing",
                newProps: any
              ): void {
                throw new Error("Function not implemented.");
              },
            }}
          />
        )}
      /> */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;
