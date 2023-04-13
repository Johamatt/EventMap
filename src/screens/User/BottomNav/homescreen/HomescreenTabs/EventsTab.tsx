import { ActivityIndicator, FlatList, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import { EventCardTicketMaster } from "../../../../../components/Cards/EventCardTicketMaster";
import { fetchTicketMaster } from "../../../../../hooks/fetch/TicketMaster/TicketMasterFetch";
import { CATEGORY, Event } from "../../../../../API";
import { listEventsCustom } from "../../../../../hooks/fetch/Appsync/AppsyncEvents";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { EventCardAppSync } from "../../../../../components/Cards/EventCardAppsync";
import { ApplicationState } from "../../../../../Store/reducers";
import { TicketMasterEvent } from "../../../../../types/TicketMasterType";
import {
  fetchLinkedEvents,
  LinkedEvent,
} from "../../../../../hooks/fetch/LinkedEvents/LinkedEventsFetch";
import { EventCardLinkedEvent } from "../../../../../components/Cards/EventCardLinkedEvent";

type HomescreenProps = {
  tmCategory?: string;
  asCategory?: CATEGORY | undefined;
  leCategory?: string;
  authenticationMode: GraphQLOptions["authMode"];
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  //Events
  const [events, setEvents] = useState<
    Array<TicketMasterEvent | Event | LinkedEvent>
  >([]);

  // nextPage exists
  const [tmDataHasNextPage, setTmDataHasNextPage] = useState(true);
  const [leDataHasNextPage, setLeDataHasNextPage] = useState(true);
  const isASEventsFetched = useRef(false);
  //Pages
  const [page, setPage] = useState(0);
  const [pageLe, setPageLe] = useState(1);
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState(true);

  // Fetch data on mount and page change
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      await Promise.all([
        fetchDataLE(pageLe),
        fetchDataTM(page),
        fetchDataEventsAS(nextTokenEvents),
      ]);
      setIsLoading(false);
    }

    fetchData();
  }, [page]);

  // Function to fetch more data when user scrolls
  const fetchMoreData = () => {
    setPageLe(pageLe + 1);
    setPage(page + 1);
  };

  // Function to fetch LinkedEvents
  const fetchDataLE = async (page: number) => {
    if (leDataHasNextPage) {
      const dateTimeNowString = new Date().toISOString();
      const dateTimeNowPlus10Year = new Date(
        new Date().setFullYear(new Date().getFullYear() + 10)
      ).toISOString();

      const data = await fetchLinkedEvents(
        page,
        10,
        dateTimeNowPlus10Year,
        dateTimeNowString,
        props.leCategory
      );

      if (data.length > 0) {
        setEvents((events) => [...events, ...data]);
      } else {
        setLeDataHasNextPage(false);
      }
    }
  };

  // Function to fetch TicketMaster
  const fetchDataTM = async (page: number) => {
    if (tmDataHasNextPage) {
      const data = await fetchTicketMaster(
        page,
        10,
        new Date().toISOString(),
        props.tmCategory
      );
      if (data.length > 0) {
        setEvents((events) => [...events, ...data]);
      } else {
        setTmDataHasNextPage(false);
      }
    }
  };

  // Function to fetch Local
  const fetchDataEventsAS = async (nextTokenEvents: string | undefined) => {
    const dateTimeNow = new Date();
    const dateTimeNowPlus10Year = new Date(
      new Date().setFullYear(new Date().getFullYear() + 10)
    );

    if (!isASEventsFetched.current || nextTokenEvents) {
      isASEventsFetched.current = true;
      const data = await listEventsCustom(
        nextTokenEvents,
        dateTimeNow.toISOString(),
        dateTimeNowPlus10Year.toISOString(),
        props.authenticationMode,
        10,
        props.asCategory
      );

      if (data && data.items && data.items.length !== 0) {
        const { items, nextToken } = data;
        setNextTokenEvents(nextToken);
        setEvents((events) => [...events, ...items]);
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

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={events}
      renderItem={({ item }) => {
        switch (item.__typename) {
          case "ticketmaster":
            //@ts-ignore
            return <EventCardTicketMaster event={item} />;
          case "linkedEvent":
            //@ts-ignore
            return <EventCardLinkedEvent event={item} />;
          case "AppsyncEvent":
            //@ts-ignore
            return <EventCardAppSync event={item} />;
          default:
            return null;
        }
      }}
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
