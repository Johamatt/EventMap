import { ListItem } from "@rneui/base";
import React from "react";
import { Activity } from "../../API";
import { ListIcon } from "../Icon/ListIcon";

interface ActivitiesListProps {
  activity: Activity;
}

export const ActivityCard: React.FC<ActivitiesListProps> = (props) => {
  console.log(props);

  const activity = props.activity;
  let day = new Date().getDay();
  return (
    <ListItem
      bottomDivider
      onPress={() => console.log(activity.names.fi)} // navigate TODO
    >
      <ListItem.Content>
        <ListIcon data={activity.categories} />
      </ListItem.Content>

      <ListItem.Content>
        {activity.names.fi !== "Unknown" ? (
          <ListItem.Title style={{ color: "black" }}>
            {activity.names.fi}
          </ListItem.Title>
        ) : (
          <ListItem.Subtitle style={{ color: "black" }}>
            {activity.names.en}
          </ListItem.Subtitle>
        )}
      </ListItem.Content>

      <ListItem.Content right>
        {activity.openDays[day]?.from !== null && //fix typechecks later
        activity.openDays[day]?.to !== null ? (
          <>
            <ListItem.Title
              right
              style={{
                color: "green",
              }}
            >
              {activity.openDays[day]?.from}
            </ListItem.Title>
            <ListItem.Subtitle right>
              {activity.openDays[day]?.to}
            </ListItem.Subtitle>
          </>
        ) : (
          <>
            {activity.openDays[day]?.open ? (
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
};
