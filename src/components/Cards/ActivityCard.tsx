import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Activity } from "../../API";
import { RootStackParamList } from "../../navigation/types";
import { ListIconDynamoDB } from "../Icon/ListIconDynamoDB";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

interface ActivityCardProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivityCardProps> = (props) => {
  const activity: Activity = props.activity;

  let day = new Date().getDay();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("ActivityInfoModal", { id: activity.id })
      }
    >
      <Text style={styles.title}> {activity.Names.fi}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5 }}>
          <View style={styles.imageContainer}>
            <ListIconDynamoDB data={activity.categories} />
          </View>

          {/* @ts-ignore */}
          {activity.OpenDays[day]?.timeFrom !== null && //fix typechecks later
          // @ts-ignore
          activity.OpenDays[day]?.timeTo !== null ? (
            <>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>
                  {/* @ts-ignore */}
                  {activity.OpenDays[day]?.timeFrom} - {/* @ts-ignore */}
                  {activity.OpenDays[day]?.timeTo}
                </Text>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.time}>Open Today</Text>
              <Text>Press for more details</Text>
            </>
          )}
        </View>

        <View style={{ flex: 0.5, flexDirection: "row", padding: 5 }}>
          <Image
            style={styles.tinyImage}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.tinyImage}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
          <Image
            style={styles.tinyImage}
            source={{
              uri: "https://reactnative.dev/img/tiny_logo.png",
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#fff",

    marginVertical: 8,
    marginHorizontal: 16,
    borderBottomWidth: 0.5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  imageContainer: {
    flexDirection: "row",
    marginVertical: 10,
  },

  timeContainer: {
    flexDirection: "row",
    paddingBottom: 10,
  },

  time: {
    fontSize: 14,
    color: "green",
  },

  tinyImage: {
    margin: 5,
    width: 50,
    height: 50,
  },
});
