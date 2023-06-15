import { ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { LinkedEvent } from "../../../hooks/fetch/LinkedEvents/LinkedEventsFetch";
import moment from "moment";
import { Analytics } from "aws-amplify";

interface LinkedEventModalProps {
  navigation: any;
  route: any;
}
export const LinkedEventModal: React.FC<LinkedEventModalProps> = (props) => {
  const [event, setEvent] = useState<LinkedEvent>(props.route.params.event);

  if (event === undefined) {
    return <View />;
  }

  function removeHtmlTags(text: string): string {
    return text.replace(/(<([^>]+)>|&nbsp;)/gi, "\n");
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.eventTitle}>
        {event.name.fi ? event.name.fi : event.name.en ? event.name.en : ""}
      </Text>
      <ScrollView horizontal style={styles.imagesContainer}>
        {event.images.length > 0 ? (
          event.images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image.url }}
              style={styles.image}
              resizeMode="cover"
            />
          ))
        ) : (
          <Image
            source={require("../../../assets/pictures/No-Image-Placeholder.png")}
            style={styles.image}
          />
        )}
      </ScrollView>

      <Text style={styles.date}>
        {moment.utc(event.start_time).utcOffset("+03:00").format("DD.MM.YYYY")}{" "}
        <Text style={styles.time}>
          {moment.utc(event.start_time).utcOffset("+03:00").format("HH:mm")}
        </Text>{" "}
        - {moment.utc(event.end_time).utcOffset("+03:00").format("DD.MM.YYYY")}{" "}
        <Text style={styles.time}>
          {moment.utc(event.end_time).utcOffset("+03:00").format("HH:mm")}
        </Text>
      </Text>

      <Text style={styles.description}>
        {event.description.fi
          ? removeHtmlTags(event.description.fi)
          : event.description.en
          ? removeHtmlTags(event.description.en)
          : ""}
      </Text>
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "black",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  eventTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  promoter: {
    fontSize: 16,
    marginBottom: 10,
    color: "white",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: "#ffffff",
  },
  time: {
    fontSize: 18,
    color: "#777",
    marginBottom: 10,
  },

  imagesContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
});
