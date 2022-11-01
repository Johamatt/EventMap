// import { StyleSheet } from "react-native";
// import { Text, View } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { RootStackParamList } from "../../../navigation/types";
import CustomButton from "../../../components/Buttons/CustomButton";
import {
  listCategories,
  listEvents,
  listLocations,
} from "../../../graphql/queries";
import {
  createCategory,
  createEvent,
  createLocation,
} from "../../../graphql/mutations";
import {
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  ON_UPDATE_AUTH,
  UserState,
} from "../../../Store";
import { styles } from "../styles";

interface UserProfileScreenProps {
  userReducer: UserState;
}

export const _UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
  useEffect(() => {
    fetchEvents();
  }, []);

  const [eventData, setEventData] = useState<any>();
  const [categoryData, setCategoryData] = useState<any>();
  const [locationData, setLocationData] = useState<any>();

  console.log(props.userReducer);

  const fetchEvents = async () => {
    try {
      // const category = {
      //   category: [CATEGORY.FESTIVAL, CATEGORY.PARTIESNIGHTLIFE],
      //   format: [FORMAT.SOCIALGATHERING],
      //   tags: ["test1", "test 2"],
      // };
      // const location = {
      //   lat: 60.1724853515625,
      //   lon: 24.943838119506836,
      //   streetAddess: "Läntinen Teatterikuja 1",
      //   postalCode: "00100",
      // };
      // const flowfest = {
      //   title: "Flow Festival 2023",
      //   infoUrl: "http://www.flowfestival.com",
      //   intro:
      //     "Flow Festival on innovatiivinen edelläkävijä pohjoismaisessa festivaalikentässä. Musiikin lisäksi Flow panostaa visuaaliseen taiteeseen ja ravintolaelämyksiin.",
      //   description:
      //     "<p>Flow Festival on innovatiivinen edelläkävijä pohjoismaisessa festivaalikentässä. Musiikin lisäksi Flow panostaa visuaaliseen taiteeseen ja ravintolaelämyksiin.&nbsp;</p>\n<p>Festivaalille osallistuvat ravintolat on valittu tarkkaan, ja noin 40 eri ravintolaa, kahvilaa ja baaria tarjoavat festarivieraille korkealaatuista ruokaa moneen eri makuun.</p>\n<p></p>\n<p>Suvilahti <br>11.-13.8.2023</p>",
      //   startingDatetime: "2023-08-10T21:01:00.000Z",
      //   endingDatetime: "2023-08-13T20:59:00.000Z",
      //   eventCategoryId: "634b18ea-ff4b-4b91-9252-e953ee50c556",
      //   eventLocationId: "a70bd699-36c4-4699-ad6c-168128f5c084",
      //   source: "LinkedEvents",
      // };
      // // await API.graphql(graphqlOperation(createEvent, { input: flowfest }));
      // // await API.graphql(graphqlOperation(createCategory, { input: category }));
      // // await API.graphql(graphqlOperation(createLocation, { input: location }));
      // const eventdata = await API.graphql(graphqlOperation(listEvents));
      // const locationdata = await API.graphql(graphqlOperation(listLocations));
      // const categorydata = await API.graphql(graphqlOperation(listCategories));
      // setEventData(eventdata);
      // setLocationData(locationdata);
      // setCategoryData(categorydata);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(eventData);
  // console.log("-");
  // console.log(locationData);
  // console.log("-");
  // console.log(categoryData);

  const signOut = async () => {
    const signout = await Auth.signOut();
    // ON_UPDATE_AUTH(signout);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <CustomButton text="Sign out" onPress={signOut} type="TERTIARY" />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
});

const TabTwoScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_UserProfileScreen);

export default TabTwoScreen;
