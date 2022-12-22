import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../navigation/types";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ListIconExternalAPI } from "../Icon/ListIconExternalAPI";

interface EventCardProps {
  event: any;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const event: any = props.event;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // just temporary...
  const categories = [];
  categories.push(event.classifications[0].segment?.name);
  categories.push(event.classifications[0].genre?.name);
  categories.push(event.classifications[0].subgenre?.name);
  //

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("ActivityInfoModal", { id: event.id })}
    >
      <Text style={styles.title}> {event.name}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 0.5 }}>
          <View style={styles.imageContainer}>
            <ListIconExternalAPI data={categories} />
          </View>

          <View style={styles.timeContainer}>
            <Text style={styles.time}>
              {event.dates.start.localDate} - {event.dates.start.localTime}
            </Text>
          </View>
        </View>

        <View style={{ flex: 0.5, flexDirection: "row", padding: 5 }}>
          <Image
            style={styles.tinyImage}
            source={{ uri: event.images[0].url }}
          />

          {/* {event.images.map((img: any) => {
            return (
              <Image
                style={styles.tinyImage}
                source={{
                  uri: img.url,
                }}
              />
            );
          })} */}
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
