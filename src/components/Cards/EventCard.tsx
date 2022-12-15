import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListItem } from "@rneui/base";
import React from "react";
import { Activity } from "../../API";
import { RootStackParamList } from "../../navigation/types";
import { ListIconDynamoDB } from "../Icon/ListIconDynamoDB";
import { ListIconExternalAPI } from "../Icon/ListIconExternalAPI";

interface ActivitiesListProps {
  event: any;
}

export const EventCard: React.FC<ActivitiesListProps> = (props) => {
  const event: any = props.event;

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // just temporary...
  const categories = [];
  categories.push(event.classifications[0].segment?.name);
  categories.push(event.classifications[0].genre?.name);
  categories.push(event.classifications[0].subgenre?.name);
  //

  return (
    <ListItem
      bottomDivider
      onPress={() => navigation.navigate("ActivityInfoModal", { id: event.id })} // navigate TODO
    >
      <ListItem.Content>
        <ListIconExternalAPI data={categories} />
      </ListItem.Content>

      <ListItem.Content>
        <ListItem.Title style={{ color: "black" }}>{event.name}</ListItem.Title>
      </ListItem.Content>

      <ListItem.Content>
        <ListItem.Title
          right
          style={{
            color: "green",
          }}
        >
          {event.dates.start.localDate}
        </ListItem.Title>
        <ListItem.Subtitle right>
          {event.dates.start.localTime}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
