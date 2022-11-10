import { Icon } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { CATEGORY } from "../../API";
import Colors from "../../constants/Colors";

interface ListIconProps {
  data: Array<CATEGORY> | null | undefined;
}

export const ListIcon: React.FC<ListIconProps> = (props) => {
  if (props.data === null || props.data === undefined) {
    return <Icon name="question" type="font-awesome" color="black" />;
  }

  const icons: React.ReactElement[] = [];

  const values = Object.values(props.data);

  if (values.includes("TRIP" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        size={13}
        iconStyle={{ fontSize: 25 }}
        name="hiking"
        type="material-community"
        color="teal"
        backgroundColor={Colors.light.tint}
      />
    );
  }

  if (values.includes("PARTIESNIGHTLIFE" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        size={13}
        iconStyle={{ fontSize: 25 }}
        raised={true}
        name="party-popper"
        type="material-community"
        color="black"
        backgroundColor="red"
      />
    );
  }

  if (values.includes("SPORT" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="running"
        type="font-awesome-5"
        color="black"
        backgroundColor="green"
      />
    );
  }

  if (values.includes("KIDS" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="human-male-child"
        type="material-community"
        color="black"
        backgroundColor="blue"
      />
    );
  }

  if (values.includes("HEALTH" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="cards-heart"
        type="material-community"
        color="black"
        backgroundColor="pink"
      />
    );
  }

  if (values.includes("WORKSHOP" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="tools"
        type="material-community"
        color="black"
        backgroundColor="grey"
      />
    );
  }

  if (values.includes("FOOD" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="food-fork-drink"
        type="material-community"
        color="black"
        backgroundColor="yellow"
      />
    );
  }

  // if (values.includes("CULTURE" as unknown as CATEGORY)) {
  //     icons.push(
  //       <Icon
  //         raised={true}
  //         name="food-fork-drink"
  //         type="material-community"
  //         color="black"
  //         backgroundColor="grey"
  //       />
  //     );
  // }

  if (values.includes("SIGHTSEEING" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="binoculars"
        type="material-community"
        color="black"
        backgroundColor="purple"
      />
    );
  }

  if (values.includes("MUSIC" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="music"
        type="material-community"
        color="black"
        backgroundColor="blue"
      />
    );
  }

  if (values.includes("FINEARTS" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="brush"
        type="material-community"
        color="black"
        backgroundColor="grey"
      />
    );
  }

  if (values.includes("THEATHER" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        iconStyle={{ fontSize: 25 }}
        size={13}
        name="theater-comedy"
        type="material"
        color="black"
        backgroundColor="cyan"
      />
    );
  }

  if (values.includes("MARKET" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        size={13}
        iconStyle={{ fontSize: 25 }}
        name="cart"
        type="material-community"
        color="black"
        backgroundColor="grey"
      />
    );
  }

  if (values.includes("MUSEUM" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        size={13}
        iconStyle={{ fontSize: 25 }}
        name="museum"
        type="material"
        color="black"
        backgroundColor="orange"
      />
    );
  }

  if (values.includes("OTHER" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        size={13}
        iconStyle={{ fontSize: 25 }}
        name="progress-question"
        type="material-community"
        color="black"
        backgroundColor="grey"
      />
    );
  }

  if (values.includes("NATURE" as unknown as CATEGORY)) {
    icons.push(
      <Icon
        raised={true}
        size={13}
        iconStyle={{ fontSize: 25 }}
        name="forest"
        type="material-community"
        color="black"
        backgroundColor="darkgreen"
      />
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
