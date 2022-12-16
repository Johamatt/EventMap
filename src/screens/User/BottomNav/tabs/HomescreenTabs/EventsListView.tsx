import { FlatList, View, StyleSheet } from "react-native";

import { connect } from "react-redux";
import React, { useEffect, useState } from "react";

import { Divider } from "@rneui/base";

import axios from "axios";
import { CATEGORY } from "../../../../../API";
import { fetchPublicEventsList } from "../../../../../hooks/fetch/PublicAccessFetch";
import { EventCard } from "../../../../../components/Cards/EventCard";
import { ApplicationState } from "../../../../../Store";

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
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
      const data = await fetchPublicEventsList(page);
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
