import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
} from "react-native";
import { LiveEvent } from "../types";

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
});

const EventCard: React.FC<ListRenderItemInfo<LiveEvent>> = (
  props: ListRenderItemInfo<LiveEvent>
) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => console.log("ok")}>
        <Image
          defaultSource={require("../assets/images/broken-link.png")}
          source={{ uri: props.item.images?.[0].url }}
          style={styles.image}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.item.description.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EventCard;
