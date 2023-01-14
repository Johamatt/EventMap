import {
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
} from "@expo/vector-icons";
import React from "react";
import { View, StyleSheet } from "react-native";

interface ListIconProps {
  data: Array<string>;
}

export const ListIconExternalAPI: React.FC<ListIconProps> = (props) => {
  if (props.data === null || props.data === undefined) {
    return (
      <View style={styles("darkorange").icon}>
        <FontAwesome name="question" size={24} color="black" />
      </View>
    );
  }

  const icons: React.ReactElement[] = [];
  const values = props.data;

  if (values.includes("Arts & Theatre")) {
    icons.push(
      <View style={styles("darkorange").icon}>
        <MaterialIcons name="theater-comedy" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("Sports")) {
    icons.push(
      <View style={styles("darkorange").icon}>
        <MaterialIcons name="sports" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("Music")) {
    icons.push(
      <View style={styles("darkorange").icon}>
        <MaterialCommunityIcons name="music" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("Film")) {
    <View style={styles("darkorange").icon}>
      <Fontisto name="film" size={24} color="black" />
    </View>;
  }

  return (
    <View style={styles().iconContainer}>
      {icons.map((e, i) => {
        return <View key={i}>{e}</View>;
      })}
    </View>
  );
};

const styles = (props?: any) =>
  StyleSheet.create({
    icon: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 3,
      margin: 3,
      borderColor: props,
    },

    iconContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },
  });
