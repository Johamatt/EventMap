import { FlatList } from "react-native";

import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { CATEGORY } from "../../../../../API";
import { EventCard } from "../../../../../components/Cards/EventCard";
import { ApplicationState } from "../../../../../Store";
import { fetchEventsTodayList } from "../../../../../hooks/fetch/linkedEvents/ListLinkedEvents/linkedEventsFetch";

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;

  eventsList: Array<any>;
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [page, setPage] = useState(1);
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchData = async (page: number) => {
    try {
      const data = await fetchEventsTodayList(page);
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

  eventsList: state.EventsReducer.eventsList,
});

const EventsListView = connect(mapToStateProps)(_EventsListView);

export default EventsListView;
