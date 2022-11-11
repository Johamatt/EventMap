import React, { useState } from "react";
import { FlatList } from "react-native";
import { Activity } from "../../API";
import { StyleSheet } from "react-native";
import { ListItem, lightColors } from "@rneui/themed";
import { ListIcon } from "../Icon/ListIcon";
interface ActivitiesListProps {
  data: Array<Activity>;
}

export const ActivitiesList: React.FC<ActivitiesListProps> = (props) => {
  let day = new Date().getDay();
  const [activities, setActivities] = useState<Array<Activity>>(props.data);

  const renderItem = ({ item }: { item: Activity }) => (
    <ListItem
      bottomDivider
      onPress={() => console.log(item.names.fi)} // navigate TODO
    >
      <ListItem.Content>
        <ListIcon data={item.categories} />
      </ListItem.Content>

      <ListItem.Content>
        {item.names.fi !== "Unknown" ? (
          <ListItem.Title style={{ color: "black" }}>
            {item.names.fi}
          </ListItem.Title>
        ) : (
          <ListItem.Subtitle style={{ color: "black" }}>
            {item.names.en}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>

      <ListItem.Content right>
        {item.openDays[day]?.from !== null && //fix typechecks later
        item.openDays[day]?.to !== null ? (
          <>
            <ListItem.Title
              right
              style={{
                color: "green",
              }}
            >
              {item.openDays[day]?.from}
            </ListItem.Title>
            <ListItem.Subtitle right>
              {item.openDays[day]?.to}
            </ListItem.Subtitle>
          </>
        ) : (
          <>
            {item.openDays[day]?.open ? (
              <>
                <ListItem.Title right style={{ color: "green" }}>
                  Open Today
                </ListItem.Title>
                <ListItem.Subtitle right>Check</ListItem.Subtitle>
              </>
            ) : (
              <ListItem.Title right style={{ color: "red" }}>
                Closed Today
              </ListItem.Title>
            )}
          </>
        )}
      </ListItem.Content>
    </ListItem>
  );

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={activities}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },

  list: {
    borderTopWidth: 1,
    borderColor: lightColors.greyOutline,
  },
});
