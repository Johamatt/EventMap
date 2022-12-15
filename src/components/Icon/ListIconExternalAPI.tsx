import { Icon } from "@rneui/themed";
import React from "react";
import { View, StyleSheet } from "react-native";
import { CATEGORY } from "../../API";
import Colors from "../../constants/Colors";

interface ListIconProps {
  data: Array<string>;
}

export const ListIconExternalAPI: React.FC<ListIconProps> = (props) => {
  if (props.data === null || props.data === undefined) {
    return <Icon name="question" type="font-awesome" color="black" />;
  }

  const icons: React.ReactElement[] = [];
  const values = props.data;

  if (values.includes("Arts & Theatre")) {
    icons.push(
      <Icon
        style={{ backgroundColor: "teal", margin: 5 }}
        iconStyle={styles.icon}
        name="theater-comedy"
        type="material"
        color="black"
        backgroundColor="cyan"
      />
    );
  }

  if (values.includes("Sports")) {
    icons.push(
      <Icon
        style={{ backgroundColor: "teal", margin: 5 }}
        iconStyle={styles.icon}
        name="sports"
        type="material"
        color="black"
        backgroundColor="lightblue"
      />
    );
  }

  if (values.includes("Music")) {
    icons.push(
      <Icon
        style={{ backgroundColor: "teal", margin: 5 }}
        iconStyle={styles.icon}
        name="music"
        type="material-community"
        color="black"
        backgroundColor="blue"
      />
    );
  }

  if (values.includes("Film")) {
    <Icon
      style={{ backgroundColor: "teal", margin: 5 }}
      iconStyle={styles.icon}
      name="film"
      type="fontisto"
      color="black"
      backgroundColor="lightgreen"
    />;
  }

  //   if (values.includes("TRIP" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="hiking"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="darkorange"
  //       />
  //     );
  //   }

  //   if (values.includes("PARTIESNIGHTLIFE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="party-popper"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="red"
  //       />
  //     );
  //   }

  //   if (values.includes("SPORT" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="sports"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("FESTIVAL" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="festival"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("FAMILY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="family-restroom"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("COOKING" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="chef-hat"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("BUSINESS" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="business-center"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("CULTURE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="colours"
  //         type="entypo"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("COMEDY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="laugh-beam"
  //         type="font-awesome-5"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("TECHNOLOGY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="satellite-variant"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("ACTIVITY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="activity"
  //         type="feather"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("ACCOMMODATION" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="home-group"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("SAUNA" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="spoon-sugar"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("KIDS" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="human-male-child"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("CONCERT" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="modern-mic"
  //         type="entypo"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("PERFORMANCE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="dance-pole"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("LITERATURE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="open-book"
  //         type="entypo"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("PHOTOGRAPHY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="camera"
  //         type="entypo"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("LUXURY" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="attach-money"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("GUIDEDSERVICE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="hands-helping"
  //         type="font-awesome-5"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("EDUCATION" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="book-education"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("SCIENCE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="science"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("TOUR" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="tour"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("DANCE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="human-female-dance"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("BOARDGAMES" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="chess-board"
  //         type="font-awesome-5"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("VIDEOGAMES" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="game-controller"
  //         type="entypo"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("GAMBLING" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="slot-machine"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("THEATRE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="theater-comedy"
  //         type="material"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("HEALTH" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="cards-heart"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="pink"
  //       />
  //     );
  //   }

  //   if (values.includes("FASHION" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="tshirt-crew"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("WORKSHOP" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="tools"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="grey"
  //       />
  //     );
  //   }

  //   if (values.includes("FOOD" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="food-fork-drink"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="yellow"
  //       />
  //     );
  //   }

  //   // if (values.includes("CULTURE" as unknown as CATEGORY)) {
  //   //     icons.push(
  //   //       <Icon
  //   //         raised={true}
  //   //         name="food-fork-drink"
  //   //         type="material-community"
  //   //         color="black"
  //   //         backgroundColor="grey"
  //   //       />
  //   //     );
  //   // }

  //   if (values.includes("SIGHTSEEING" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="binoculars"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="purple"
  //       />
  //     );
  //   }

  //   if (values.includes("MUSIC" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="music"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="blue"
  //       />
  //     );
  //   }

  //   if (values.includes("FINEARTS" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="brush"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="grey"
  //       />
  //     );
  //   }

  //   if (values.includes("THEATHER" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="theater-comedy"
  //         type="material"
  //         color="black"
  //         backgroundColor="cyan"
  //       />
  //     );
  //   }

  //   if (values.includes("MARKET" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="cart"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="grey"
  //       />
  //     );
  //   }

  //   if (values.includes("MUSEUM" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="museum"
  //         type="material"
  //         color="black"
  //         backgroundColor="orange"
  //       />
  //     );
  //   }

  //   if (values.includes("OTHER" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="progress-question"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="grey"
  //       />
  //     );
  //   }

  //   if (values.includes("NATURE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="forest"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="darkgreen"
  //       />
  //     );
  //   }

  //   if (values.includes("ANIMALS" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="paw"
  //         type="ionicon"
  //         color="black"
  //         backgroundColor="brown"
  //       />
  //     );
  //   }

  //   if (values.includes("MOTORSPORTS" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         style={{ backgroundColor: "teal", margin: 5 }}
  //         iconStyle={styles.icon}
  //         name="sports-motorsports"
  //         type="material"
  //         color="black"
  //         backgroundColor="darkblue"
  //       />
  //     );
  //   }

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {icons.map((e, i) => {
        return <View key={i}>{e}</View>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    fontSize: 25,
    backgroundColor: "white",
    borderRadius: 50,
    padding: 3,

    color: "black",
  },

  iconBorders: {
    backgroundColor: "teal",
    margin: 5,
  },
});
