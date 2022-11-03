// import { StyleSheet } from "react-native";
// import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";
import { Float } from "react-native/Libraries/Types/CodegenTypes";
import { connect } from "react-redux";
import { CATEGORY } from "../../../API";
import { Activity } from "../../../models/activity/activity";
import { Company } from "../../../models/activity/company";
import { Opendays } from "../../../models/activity/opendays";
import { LocationModel } from "../../../models/locationTypes";
import { RootStackParamList } from "../../../navigation/types";
import {
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  UserState,
} from "../../../Store";

import activitiesData from "../../../util/data/Acvitivities2.json";

interface FavouritesScreenProps {
  userReducer: UserState;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {
  const parsedataa = activitiesData;

  const [activities, setActivities] = useState<Array<Activity>>([]);

  function parseData() {
    // console.log(activitiesData.rows[0]);

    activitiesData.rows.map((a) => {
      let location: LocationModel = {
        city: a.address.city,
        streetAddess: a.address.streetName,
        lat: a.address.location?.lat,
        lon: a.address.location?.long,
        postalCode: a.address.postalCode,
      };

      let company: Company = {
        businessId: a.company.businessId,
        email: a.company.email,
        name: a.company.name,
        phone: a.company.phone,
      };

      let opendays: Opendays = Object.entries(a.open).map(([key, value]) => {
        return {
          day: key,
          open: value.open,
          from: value.from,
          to: value.to,
        };
      });

      // let opendays: Opendays = {

      // }

      // console.log(location);
    });

    // availableMonths: Array<String>;
    // Location: LocationModel;
    // openDays: Array<Opendays>;
    // tags: Array<String>;

    return true;
  }

  //
  // console.log("---");
  // console.log("---");
  // console.log("---");
  // console.log(parsedataa.rows[1]);
  // console.log("---");
  // console.log("---");
  // console.log("---");
  // console.log(parsedataa.rows[2]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Select Document" onPress={() => parseData()} />
    </View>
  );
};

export //
//
//
//
const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
