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
  const iconSize = 28;

  if (props.data === null || props.data === undefined) {
    return (
      <View style={styles("gray").icon}>
        <FontAwesome5 name="question" size={iconSize} color="white" />
      </View>
    );
  }

  const icons: React.ReactElement[] = [];
  const values = Object.values(props.data);

  if (values.includes("TRIP" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkorange").icon}>
        <MaterialCommunityIcons name="hiking" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("PARTIESNIGHTLIFE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons
          name="party-popper"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("SPORT" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("teal").icon}>
        <MaterialIcons name="sports" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("FESTIVAL" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("pink").icon}>
        <MaterialIcons name="festival" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("FAMILY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("purple").icon}>
        <MaterialIcons name="family-restroom" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("COOKING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("antiquewhite").icon}>
        <MaterialCommunityIcons name="chef-hat" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("BUSINESS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("cadetblue").icon}>
        <MaterialIcons name="business-center" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("CULTURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("orchid").icon}>
        <Entypo name="colours" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("COMEDY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("chocolate").icon}>
        <FontAwesome5 name="laugh-beam" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("TECHNOLOGY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("coral").icon}>
        <MaterialCommunityIcons
          name="satellite-variant"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("ACCOMMODATION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("cornflowerblue").icon}>
        <MaterialCommunityIcons
          name="home-group"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("SAUNA" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("crimson").icon}>
        <MaterialCommunityIcons
          name="spoon-sugar"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("KIDS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("blueviolet").icon}>
        <MaterialCommunityIcons
          name="human-male-child"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("CONCERT" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkred").icon}>
        <Entypo name="modern-mic" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("PERFORMANCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkred").icon}>
        <MaterialCommunityIcons
          name="dance-pole"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("LITERATURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("khaki").icon}>
        <Entypo name="open-book" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("PHOTOGRAPHY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightpink").icon}>
        <Entypo name="camera" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("LUXURY" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialIcons name="attach-money" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("GUIDEDSERVICE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("magenta").icon}>
        <Entypo name="hand" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("EDUCATION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("mediumorchid").icon}>
        <MaterialCommunityIcons
          name="book-education"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("SCIENCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("navy").icon}>
        <MaterialIcons name="science" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("TOUR" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("silver").icon}>
        <MaterialIcons name="tour" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("DANCE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkorchid").icon}>
        <MaterialCommunityIcons
          name="human-female-dance"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("BOARDGAMES" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkgrey").icon}>
        <FontAwesome5 name="chess-board" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("VIDEOGAMES" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("darkgray").icon}>
        <Entypo name="game-controller" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("GAMBLING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons
          name="slot-machine"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("THEATRE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("brown").icon}>
        <MaterialIcons name="theater-comedy" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("HEALTH" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("deeppink").icon}>
        <MaterialCommunityIcons
          name="cards-heart"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("FASHION" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("goldenrod").icon}>
        <MaterialCommunityIcons
          name="tshirt-crew"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("WORKSHOP" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lavenderblush").icon}>
        <MaterialCommunityIcons name="tools" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("FOOD" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("yellow").icon}>
        <MaterialCommunityIcons
          name="food-fork-drink"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("SIGHTSEEING" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("indigo").icon}>
        <MaterialCommunityIcons
          name="binoculars"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("MUSIC" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("red").icon}>
        <MaterialCommunityIcons name="music" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("FINEARTS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightsalmon").icon}>
        <MaterialCommunityIcons name="brush" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("THEATHER" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("lightsalmon").icon}>
        <MaterialIcons name="theater-comedy" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("MARKET" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("gold").icon}>
        <MaterialCommunityIcons name="cart" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("MUSEUM" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("palevioletred").icon}>
        <MaterialIcons name="museum" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("OTHER" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("palegoldenrod").icon}>
        <MaterialCommunityIcons
          name="progress-question"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  if (values.includes("NATURE" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("green").icon}>
        <MaterialCommunityIcons name="forest" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("ANIMALS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("olivedrab").icon}>
        <FontAwesome5 name="paw" size={iconSize} color="white" />
      </View>
    );
  }

  if (values.includes("MOTORSPORTS" as unknown as CATEGORY)) {
    icons.push(
      <View style={styles("midnightblue").icon}>
        <MaterialIcons
          name="sports-motorsports"
          size={iconSize}
          color="white"
        />
      </View>
    );
  }

  return (
    <View style={styles().iconsContainer}>
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

    iconsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
    },

    // iconBorders: {
    //   backgroundColor: "teal",
    //   margin: 5,
    // },
  });
