import { ActivityIndicator, FlatList, View, Text } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { EventCardTicketMaster } from "../../../../../components/Cards/EventCardTicketMaster";
import { fetchTicketMasterToday } from "../../../../../hooks/fetch/TicketMaster/TicketMasterList";
import { CATEGORY, Event } from "../../../../../API";
import { listEventsCustom } from "../../../../../hooks/fetch/Appsync/AppsyncEvents";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { EventCardAppSync } from "../../../../../components/Cards/EventCardAppsync";
import { ApplicationState } from "../../../../../Store/reducers";

type HomescreenProps = {
  tmCategory?: string;
  asCategory?: CATEGORY | undefined;

  etCategory?: string;

  authenticationMode: GraphQLOptions["authMode"];
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [events, setEvents] = useState<Array<TicketMasterEvent | Event>>([]);
  const [page, setPage] = useState(0);
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  // Use useRef to track whether fetchDataEventsAS has been called at least once
  const isFetchingEventsAS = useRef(false);

  useEffect(() => {
    fetchDataTM(page);
    fetchDataEventsAS(nextTokenEvents);
    setIsLoading(false);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchDataTM = async (page: number) => {
    const dateTimeNowString = new Date().toISOString();

    try {
      const data = await fetchTicketMasterToday(
        page,
        10,
        dateTimeNowString,
        props.tmCategory
      );

      setEvents([...events, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataEventsAS = async (nextTokenEvents: string | undefined) => {
    const dateTimeNow = new Date();
    const dateTimeNowPlusWeek = new Date(
      dateTimeNow.setDate(dateTimeNow.getDate() + 7)
    );
    const dateTimeNowPlus10Year = new Date(
      new Date().setFullYear(new Date().getFullYear() + 10)
    );
    if (!isFetchingEventsAS.current || nextTokenEvents) {
      try {
        const data = await listEventsCustom(
          nextTokenEvents,
          dateTimeNow.toISOString(),
          dateTimeNowPlus10Year.toISOString(),
          props.authenticationMode,
          10,
          props.asCategory
        );

        if (data) {
          const { items, nextToken } = data;

          setNextTokenEvents(nextToken);
          setEvents([...events, ...items]);
          isFetchingEventsAS.current = true;
        }
      } catch (error) {
        console.log(error);
      }
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

  console.log(events[0]);

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={events}
      renderItem={({ item }) =>
        item.__typename === "ticketmaster" ? (
          <EventCardTicketMaster event={item} />
        ) : (
          //@ts-ignore
          <EventCardAppSync event={item} />
        )
      }
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
