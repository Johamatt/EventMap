import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListRenderItemInfo,
} from "react-native";
import { RootStackParamList } from "../../navigation/types";

import { Event as LiveEvent } from "../../API";

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    display: "flex",
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
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {props.item.imageEvent?.[0] !== null ? (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("EventScreen", { liveEvent: props.item })
          }
        >
          <Image
            defaultSource={require("../../assets/images/broken-link.png")}
            source={{
              uri: props.item.imageEvent?.[0].URL,
            }}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.item.title_FI}</Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("EventScreen", { liveEvent: props.item });
          }}
        >
          <Image
            defaultSource={require("../../assets/images/broken-link.png")}
            source={require("../../assets/images/broken-link.png")}
            style={styles.image}
          />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{props.item.intro}</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default EventCard;
