import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamList } from "../../types/navigationTypes";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import moment from "moment";
import { LinkedEvent } from "../../hooks/fetch/LinkedEvents/LinkedEventsFetch";

interface EventCardProps {
  event: LinkedEvent;
}

export const EventCardLinkedEvent: React.FC<EventCardProps> = ({ event }) => {
  const formattedDate = moment(event.start_time).format("MMM D");
  const formattedTime = event.start_time
    ? moment
        .utc(event.start_time, "YYYY-MM-DDTHH:mm:ssZ")
        .utcOffset("+03:00")
        .format("HH:mm")
    : null;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("LinkedEventModal", { event: event })}
    >
      <Image
        style={{ maxWidth: "100%", height: 100 }}
        source={{
          uri:
            event?.images?.[0]?.url ??
            "https://www.bga.fi/cache/30/640x893-Kameratillbehor_Transcend_Secure_Digital_SDHC_-_16GB.jpg",
        }}
      ></Image>
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
    flexDirection: "column",
    padding: 10,
    borderRadius: 14,
    margin: 10,
    borderWidth: 1,
    overflow: "hidden",
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

// <Image
// style={{ width: 200, height: 200 }}
// source={{
//   uri: event.images[0].url
//     ? event.images[0].url
//     : "https://www.bga.fi/cache/30/640x893-Kameratillbehor_Transcend_Secure_Digital_SDHC_-_16GB.jpg",
// }}
// ></Image>
