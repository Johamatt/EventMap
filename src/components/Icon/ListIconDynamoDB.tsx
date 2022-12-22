import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORY } from "../../API";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo,
  FontAwesome5,
} from "@expo/vector-icons";

interface ListIconProps {
  data: Array<CATEGORY> | null | undefined;
}

export const ListIconDynamoDB: React.FC<ListIconProps> = (props) => {
  if (props.data === null || props.data === undefined) {
    return (
      <View style={styles("gray").icon}>
        <FontAwesome5 name="question" size={24} color="black" />
      </View>
    );
  }

  const icons: React.ReactElement[] = [];
  const values = Object.values(props.data);

  if (values.includes("TRIP" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkorange").icon}>
        <MaterialCommunityIcons name="hiking" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("PARTIESNIGHTLIFE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons name="party-popper" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("SPORT" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("teal").icon}>
        <MaterialIcons name="sports" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("FESTIVAL" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("pink").icon}>
        <MaterialIcons name="festival" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("FAMILY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("purple").icon}>
        <MaterialIcons name="family-restroom" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("COOKING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("antiquewhite").icon}>
        <MaterialCommunityIcons name="chef-hat" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("BUSINESS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("cadetblue").icon}>
        <MaterialIcons name="business-center" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("CULTURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("orchid").icon}>
        <Entypo name="colours" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("COMEDY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("chocolate").icon}>
        <FontAwesome5 name="laugh-beam" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("TECHNOLOGY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("coral").icon}>
        <MaterialCommunityIcons
          name="satellite-variant"
          size={24}
          color="black"
        />
      </View>
    );
  }

  if (values.includes("ACCOMMODATION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("cornflowerblue").icon}>
        <MaterialCommunityIcons name="home-group" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("SAUNA" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("crimson").icon}>
        <MaterialCommunityIcons name="spoon-sugar" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("KIDS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("blueviolet").icon}>
        <MaterialCommunityIcons
          name="human-male-child"
          size={24}
          color="black"
        />
      </View>
    );
  }

  if (values.includes("CONCERT" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkred").icon}>
        <Entypo name="modern-mic" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("PERFORMANCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkred").icon}>
        <MaterialCommunityIcons name="dance-pole" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("LITERATURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("khaki").icon}>
        <Entypo name="open-book" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("PHOTOGRAPHY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightpink").icon}>
        <Entypo name="camera" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("LUXURY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialIcons name="attach-money" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("GUIDEDSERVICE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("magenta").icon}>
        <Entypo name="hand" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("EDUCATION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("mediumorchid").icon}>
        <MaterialCommunityIcons name="book-education" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("SCIENCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("navy").icon}>
        <MaterialIcons name="science" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("TOUR" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("silver").icon}>
        <MaterialIcons name="tour" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("DANCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkorchid").icon}>
        <MaterialCommunityIcons
          name="human-female-dance"
          size={24}
          color="black"
        />
      </View>
    );
  }

  if (values.includes("BOARDGAMES" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkgrey").icon}>
        <FontAwesome5 name="chess-board" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("VIDEOGAMES" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkgray").icon}>
        <Entypo name="game-controller" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("GAMBLING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons name="slot-machine" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("THEATRE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("brown").icon}>
        <MaterialIcons name="theater-comedy" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("HEALTH" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("deeppink").icon}>
        <MaterialCommunityIcons name="cards-heart" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("FASHION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("goldenrod").icon}>
        <MaterialCommunityIcons name="tshirt-crew" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("WORKSHOP" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lavenderblush").icon}>
        <MaterialCommunityIcons name="tools" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("FOOD" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("yellow").icon}>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={24}
          color="black"
        />
      </View>
    );
  }

  if (values.includes("SIGHTSEEING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("indigo").icon}>
        <MaterialCommunityIcons name="binoculars" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("MUSIC" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons name="music" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("FINEARTS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightsalmon").icon}>
        <MaterialCommunityIcons name="brush" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("THEATHER" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightsalmon").icon}>
        <MaterialIcons name="theater-comedy" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("MARKET" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("gold").icon}>
        <MaterialCommunityIcons name="cart" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("MUSEUM" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("palevioletred").icon}>
        <MaterialIcons name="museum" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("OTHER" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("palegoldenrod").icon}>
        <MaterialCommunityIcons
          name="progress-question"
          size={24}
          color="black"
        />
      </View>
    );
  }

  if (values.includes("NATURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("green").icon}>
        <MaterialCommunityIcons name="forest" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("ANIMALS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("olivedrab").icon}>
        <FontAwesome5 name="paw" size={24} color="black" />
      </View>
    );
  }

  if (values.includes("MOTORSPORTS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("midnightblue").icon}>
        <MaterialIcons name="sports-motorsports" size={24} color="black" />
      </View>
    );
  }

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
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

    // iconBorders: {
    //   backgroundColor: "teal",
    //   margin: 5,
    // },
  });
