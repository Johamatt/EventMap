import React from "react";
import { FlatList } from "react-native";
import { Activity } from "../../API";
import { View, ScrollView, StyleSheet } from "react-native";
import {
  Button,
  ListItem,
  Avatar,
  Icon,
  lightColors,
  Divider,
} from "@rneui/themed";
import { ListIcon } from "../Icon/ListIcon";
interface ActivitiesListProps {
  data: Array<Activity>;
}

export const ActivitiesList: React.FC<ActivitiesListProps> = (props) => {
  let day = getDayOfWeek();

  // data is not organized from api. this is temp solution.
  function getDayOfWeek() {
    const dateToday = new Date();
    const dayOfWeek = dateToday.getDay();
    return isNaN(dayOfWeek) ? 0 : [0, 3, 1, 2, 5, 4, 6][dayOfWeek]; // fix falsed sunday value?
  }

  const renderRow = ({ item }: { item: Activity }) => {
    return (
      <ListItem.Swipeable bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.names.fi}</ListItem.Title>
        </ListItem.Content>
      </ListItem.Swipeable>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <View style={styles.list}>
            {props.data.map((a, i) => (
              <ListItem
                key={i}
                bottomDivider
                onPress={() => console.log(a.names.fi)} // navigate TODO
              >
                <ListItem.Content>
                  <ListIcon data={a.categories} />
                </ListItem.Content>

                <ListItem.Content>
                  {a.descriptions.fi !== "Unknown" ? (
                    <ListItem.Title style={{ color: "black" }}>
                      {a.names.fi}
                    </ListItem.Title>
                  ) : (
                    <ListItem.Subtitle style={{ color: "black" }}>
                      {a.names.en}
                    </ListItem.Subtitle>
                  )}
                </ListItem.Content>

                <ListItem.Content right>
                  {a.openDays[day]?.from !== null && //fix typechecks later
                  a.openDays[day]?.to !== null ? (
                    <>
                      <ListItem.Title right style={{ color: "green" }}>
                        {a.openDays[day]?.from}
                      </ListItem.Title>
                      <ListItem.Subtitle right>
                        {a.openDays[day]?.to}
                      </ListItem.Subtitle>
                    </>
                  ) : (
                    <>
                      {a.openDays[day]?.open ? (
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
            ))}
          </View>
        </>
      }
      keyExtractor={(a: Activity, index: number) => index.toString()}
      data={props.data}
      renderItem={renderRow}
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
