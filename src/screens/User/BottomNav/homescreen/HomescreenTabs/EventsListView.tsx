import { ActivityIndicator, FlatList, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { EventCard } from "../../../../../components/Cards/EventCard";
import { ApplicationState } from "../../../../../Store";
import { fetchTicketMasterToday } from "../../../../../hooks/fetch/TicketMaster/TicketMasterList";
import { TicketMasterEvent } from "../../../../../types/TicketMasterType";
import { CATEGORY, ListEventsQuery } from "../../../../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { listEventsCustom } from "../../../../../hooks/fetch/Appsync/AppsyncEvents";
import { GraphQLOptions } from "@aws-amplify/api-graphql";

type HomescreenProps = {
  tmCategory?: string;
  asCategory?: CATEGORY | undefined;
  authenticationMode: GraphQLOptions["authMode"];
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [page, setPage] = useState(0);
  const [eventsTM, setEventsTM] = useState<Array<TicketMasterEvent>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [eventsAS, setEventsAS] =
    useState<GraphQLResult<ListEventsQuery | undefined>>();
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();

  useEffect(() => {
    fetchDataTM(page);
    fetchDataEventsAS(nextTokenEvents);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchDataTM = async (page: number) => {
    try {
      const data = await fetchTicketMasterToday(page, 10, props.tmCategory);
      setEventsTM([...eventsTM, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataEventsAS = async (nextTokenEvents: string | undefined) => {
    const dateTimeNow = new Date();
    const dateTimeNowPlusWeek = new Date(
      dateTimeNow.setDate(dateTimeNow.getDate() + 7)
    );

    try {
      const data = await listEventsCustom(
        // list events ranging from current time + 1 week
        nextTokenEvents,
        dateTimeNow.toISOString(),
        dateTimeNowPlusWeek.toISOString(),
        props.authenticationMode,
        10,
        props.asCategory
      );
      setEventsAS(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View style={{ paddingVertical: 20 }}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={eventsTM}
      renderItem={({ item }) => <EventCard event={item} />}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
    />
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
});

const EventsListView = connect(mapToStateProps)(_EventsListView);

export default EventsListView;
