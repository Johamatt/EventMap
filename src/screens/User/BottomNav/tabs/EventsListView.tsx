import { FlatList, View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { CATEGORY } from "../../../../API";
import { fetchGuestActivitiesList } from "../../../../hooks/fetch/GuestAccessFetch";
import { fetchUserActivitiesList } from "../../../../hooks/fetch/UserAccessFetch";
import { IconButton } from "../../../../components/Buttons/IconButton";
import { Divider } from "@rneui/base";
import { ActivityCard } from "../../../../components/Cards/ActivityCard";
import { ApplicationState } from "../../../../Store";

import { TICKETMASTER_KEY } from "../../../../constants/keys/TICKETMASTER_KEY";
import { EventCard } from "../../../../components/Cards/EventCard";
import axios from "axios";

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [nextToken, setNextToken] = useState<any>();

  const [page, setPage] = useState(0);
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchData = async (page: number) => {
    try {
      const res = await axios.get(
        `https://app.ticketmaster.com/discovery/v2/events.json?city=[helsinki,vantaa,espoo]&page=${page}&size=20&sort=date,asc&apikey=${TICKETMASTER_KEY}`,
        {
          headers: {
            // "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET",
            // "Access-Control-Allow-Headers":
            //   "Content-Type, api_key, Authorization",
            "Content-Type": "application/json",
          },
        }
      );

      const data = res.data._embedded.events;

      setEvents([...events, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.3}
    />
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesList: state.ActivitiesReducer.activitiesList,
  nextToken: state.ActivitiesReducer.nextToken,
  showcurrentlyopen: state.UserReducer.showCurrentlyOpen,
  userPreferences: state.UserReducer.preferences,
  guestUserSession: state.UserReducer.guestUserSession,
});

const EventsListView = connect(mapToStateProps)(_EventsListView);

export default EventsListView;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row-reverse",
  },

  iconbutton: {
    name: "options-outline",
    type: "ionicon",
    size: 15,
    color: "white",
  },
});
