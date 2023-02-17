import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../navigation/types";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { ListIconExternalAPI } from "../Lists/ListIconExternalAPI";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface EventCardProps {
  event: any;
}

export const EventCard: React.FC<EventCardProps> = (props) => {
  const event: any = props.event;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const startTime = new Date(event.dates.start);
  const endTime = new Date(event.end_time);

  const difference =
    (endTime.getTime() - startTime.getTime()) / (1000 * 3600 * 24);

  if (difference > 15) {
    return <View />;
  }

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("EventModal", { id: event.id })}
    >
      <View style={styles.cardTopContainer}></View>
      <View style={styles.cardBottomContainer}>
        <Text style={styles.cardTitle}>{event.name}</Text>

        {/* <Image
          key={event.id}
          style={styles.tinyImage}
          source={{ uri: event.images[0].url }}
        /> */}

        {/* <ListIconExternalAPI data={categories} /> */}

        <View style={styles.cardTimeContainer}>
          <Text style={styles.cardTimeLabel}>Starts:</Text>
          <Text style={styles.time}>
            {event.dates.start.localDate} - {event.dates.start.localTime}
          </Text>
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

  cardContainer: {
    borderRadius: 14,
    backgroundColor: "#000000",
    flex: 1,
    margin: 10,
    borderColor: Colors.light.primary,
    borderWidth: 1,
  },
  cardTopContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  cardProfileImage: {
    width: 40, // set a fixed width for the cover image
    height: 40,
    maxHeight: 40,
    maxWidth: 40,
    borderWidth: 2,
    borderColor: Colors.light.primary,
    borderRadius: 25,
    marginRight: 10,
  },
  cardUsername: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF" },

  cardBottomContainer: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  cardParticipantListContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 10,
  },
  cardParticipantImage: {
    height: 30,
    width: 30,
    borderRadius: 25,
    margin: 1,
  },
  cardTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  cardTimeLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 5,
  },
  cardTimeValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
});
