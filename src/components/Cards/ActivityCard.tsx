import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ListItem } from "@rneui/base";
import React from "react";
import { Activity } from "../../API";
import { RootStackParamList } from "../../navigation/types";
import { ListIconDynamoDB } from "../Icon/ListIconDynamoDB";

interface ActivitiesListProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivitiesListProps> = (props) => {
  const activity: Activity = props.activity;

  let day = new Date().getDay();

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <ListItem
      bottomDivider
      onPress={() =>
        navigation.navigate("ActivityInfoModal", { id: activity.id })
      } // navigate TODO
    >
      <ListItem.Content>
        <ListIconDynamoDB data={activity.categories} />
      </ListItem.Content>

      <ListItem.Content>
        {activity.Names.fi !== "Unknown" ? (
          <ListItem.Title style={{ color: "black" }}>
            {activity.Names.fi}
          </ListItem.Title>
        ) : (
          <ListItem.Subtitle style={{ color: "black" }}>
            {activity.Names.en}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>

      <ListItem.Content right>
        {activity.OpenDays[day]?.timeFrom !== null && //fix typechecks later
        activity.OpenDays[day]?.timeTo !== null ? (
          <>
            <ListItem.Title
              right
              style={{
                color: "green",
              }}
            >
              {activity.OpenDays[day]?.timeFrom}
            </ListItem.Title>
            <ListItem.Subtitle right>
              {activity.OpenDays[day]?.timeTo}
            </ListItem.Subtitle>
          </>
        ) : (
          <>
            <ListItem.Title right style={{ color: "green" }}>
              Open Today
            </ListItem.Title>
            <ListItem.Subtitle right>Check</ListItem.Subtitle>
          </>
        )}
      </ListItem.Content>
    </ListItem>
  );
};
