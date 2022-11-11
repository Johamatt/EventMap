import { FlatList, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../../navigation/types";
import { ActivitiesState, ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

import testData from "../../../util/data/testdata2.json";
import { Activity } from "../../../API";
import { Button, Divider } from "@rneui/base";
import { ActivitiesList } from "../../../components/List/ActivitiesList";

interface HomeScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

const _HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const activities: Array<Activity> = props.activitiesReducer.activitiesList;
  const dateToday = new Date();

  let day = getDayOfWeek();

  // data is not organized from api. this is temp solution.
  function getDayOfWeek() {
    const dayOfWeek = dateToday.getDay();
    return isNaN(dayOfWeek) ? 0 : [0, 3, 1, 2, 5, 4, 6][dayOfWeek]; // fix falsed sunday value?
  }

  console.log(activities);

  return (
    <View
      style={{
        paddingRight: 10,
        paddingTop: 40,
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      {/* // Header starts */}
      <View style={{ flexDirection: "row-reverse", paddingBottom: 5 }}>
        <Button
          title="Edit Preferences"
          icon={{
            name: "options-outline",
            type: "ionicon",
            size: 15,
            color: "white",
          }}
          onPress={() => navigation.navigate("LandingPreferenceScreen")}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: "700", color: "white" }}
          buttonStyle={{
            backgroundColor: Colors.light.tint,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 30,
          }}
          containerStyle={{
            width: Layout.window.width / 2,
          }}
        />
      </View>
      <Divider color="black" />
      <View>
        <ActivitiesList data={props.activitiesReducer.activitiesList} />
      </View>

      {/* Header ends */}

      {/* <View style={{ margin: 10 }}>
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
      </View> */}
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;
