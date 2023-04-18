import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../types/navigationTypes";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import moment from "moment";
import { LinkedEvent } from "../../hooks/fetch/LinkedEvents/LinkedEventsFetch";

interface EventCardProps {
  event: LinkedEvent;
}

export const EventCardLinkedEvent: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = moment(event.start_time).format("MMM D");
  const formattedTime = event.start_time
    ? moment(event.start_time, "HH:mm:ss").format("HH:mm")
    : null;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("LinkedEventModal", { event: event })}
    >
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={[styles.cardTimeContainer, { flex: 1 / 4 }]}>
          <Text style={styles.date}>{formattedDate}</Text>
          <Text style={styles.time}>{formattedTime}</Text>
        </View>
        <View style={styles.separator} />
        <Text style={[styles.cardTitle, { flex: 4 / 4 }]}>
          {event?.name?.fi ?? event?.name?.en ?? ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  time: {
    fontSize: 18,
    color: "green",
  },

  separator: {
    borderRightWidth: 1,
    borderColor: "#024DDF",
    height: "100%",
    marginRight: 10,
  },

  cardContainer: {
    flexDirection: "row",
    padding: 10,
    borderRadius: 14,
    backgroundColor: "#000000",
    flex: 1,
    margin: 10,

    borderWidth: 1,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },

  cardTimeContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  cardTimeLabel: {
    fontSize: 16,
    color: "#FFFFFF",
    marginRight: 5,
  },
});
