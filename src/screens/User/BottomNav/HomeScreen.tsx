import { FlatList, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../navigation/types";
import { ActivitiesState, ApplicationState, UserState } from "../../../Store";
import { connect } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";

import { View, ScrollView, StyleSheet } from "react-native";
import {
  Button,
  ButtonGroup,
  withTheme,
  Text,
  ListItem,
  Avatar,
  Icon,
  lightColors,
  Divider,
} from "@rneui/themed";
import Colors from "../../../constants/Colors";
import Layout from "../../../constants/Layout";

import testData from "../../../util/data/testdata2.json";
import { Activity } from "../../../API";

interface HomeScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

const _HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const activities: Array<Activity> = props.activitiesReducer.activities;
  const dateToday = new Date();

  let day = getDayOfWeek();

  // data is not organized from api. this is temp solution.
  function getDayOfWeek() {
    const dayOfWeek = dateToday.getDay();
    return isNaN(dayOfWeek) ? 0 : [0, 3, 1, 2, 5, 4, 6][dayOfWeek]; // fix falsed sunday value?
  }

  const renderRow = ({ item }: { item: Activity }) => {
    return (
      <ListItem.Swipeable
        bottomDivider
        leftContent={
          <Button
            title="Info"
            icon={{ name: "info", color: "white" }}
            buttonStyle={{ minHeight: "100%" }}
          />
        }
        rightContent={
          <Button
            title="Delete"
            icon={{ name: "delete", color: "white" }}
            buttonStyle={{ minHeight: "100%", backgroundColor: "red" }}
          />
        }
      >
        <ListItem.Content>
          <ListItem.Title>{item.fi_name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem.Swipeable>
    );
  };

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
      <View style={{ flexDirection: "row-reverse" }}>
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

      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.list}>
                {activities.map((a, i) => (
                  <ListItem key={i} bottomDivider>
                    <Icon
                      name="user-circle-o"
                      type="font-awesome"
                      color="red"
                    />
                    <ListItem.Content>
                      {a.fi_name !== "<no description>" ? (
                        <ListItem.Title style={{ color: "black" }}>
                          {a.fi_name}
                        </ListItem.Title>
                      ) : (
                        <ListItem.Subtitle style={{ color: "black" }}>
                          {a.en_name}
                        </ListItem.Subtitle>
                      )}
                    </ListItem.Content>

                    <ListItem.Content right>
                      {a.openDays[day]?.from !== null &&
                      a.openDays[day]?.to !== null ? (
                        <>
                          <ListItem.Title right style={{ color: "green" }}>
                            {a.openDays[day]?.from}
                          </ListItem.Title>
                          <ListItem.Subtitle right>
                            {a.openDays[day]?.to}
                          </ListItem.Subtitle>
                        </>
                      ) : (
                        <>
                          {a.openDays[day]?.open ? (
                            <>
                              <ListItem.Title right style={{ color: "green" }}>
                                Open Today
                              </ListItem.Title>
                              <ListItem.Subtitle right>Check</ListItem.Subtitle>
                            </>
                          ) : (
                            <ListItem.Title right style={{ color: "red" }}>
                              Closed Today
                            </ListItem.Title>
                          )}
                        </>
                      )}
                    </ListItem.Content>
                  </ListItem>
                ))}
              </View>
            </>
          }
          data={activities}
          keyExtractor={(a: Activity, index: number) => index.toString()}
          renderItem={renderRow}
        />
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

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  subHeader: {
    backgroundColor: "#2089dc",
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    marginBottom: 10,
  },
  list: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: lightColors.greyOutline,
  },
  subtitleView: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
  },
  ratingImage: {
    height: 19.21,
    width: 100,
  },
  ratingText: {
    paddingLeft: 10,
    color: "grey",
  },
});
