import { ActivityIndicator, FlatList, View, Text } from "react-native";
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
  const [tmDataIsNull, setTmDataIsNull] = useState(false);
  const [leDataIsNull, setLeDataIsNull] = useState(false);

  const [events, setEvents] = useState<
    Array<TicketMasterEvent | Event | LinkedEvent> //| LinkedEvent
  >([]);
  const [page, setPage] = useState(0);
  const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const [pageLe, setPageLe] = useState(1);

  // Use useRef to track whether fetchDataEventsAS has been called at least once
  const isFetchingEventsAS = useRef(false);
  const isFetchingEventsTM = useRef(false);
  const isFetchingEventsLE = useRef(false);

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

  const fetchMoreData = () => {
    setPageLe(pageLe + 1);
    setPage(page + 1);
  };

  const fetchDataLE = async (page: number) => {
    if (!leDataIsNull) {
      const dateTimeNowString = new Date().toISOString();
      const dateTimeNowPlus10Year = new Date(
        new Date().setFullYear(new Date().getFullYear() + 10)
      ).toISOString();
      try {
        const data = await fetchLinkedEvents(
          page,
          10,
          dateTimeNowPlus10Year,
          dateTimeNowString,

          props.leCategory
        );

        if (data.length > 0 && data !== undefined) {
          setEvents((events) => [...events, ...data]);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setLeDataIsNull(true);
    }
  };

  const fetchDataTM = async (page: number) => {
    if (!isFetchingEventsTM.current) {
      try {
        if (!tmDataIsNull) {
          const data = await fetchTicketMaster(
            page,
            10,
            new Date().toISOString(),
            props.tmCategory
          );

          if (data.length > 0 || data === undefined) {
            setEvents((events) => [...events, ...data]);
            isFetchingEventsTM.current = true;
          } else {
            setTmDataIsNull(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const fetchDataEventsAS = async (nextTokenEvents: string | undefined) => {
    const dateTimeNow = new Date();
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

        if (data && data.items && data.items.length !== 0) {
          const { items, nextToken } = data;

          setNextTokenEvents(nextToken);
          setEvents((events) => [...events, ...items]);
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

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={events}
      renderItem={({ item }) =>
        item.__typename === "ticketmaster" ? (
          //@ts-ignore
          <EventCardTicketMaster event={item} />
        ) : item.__typename === "linkedEvent" ? (
          //@ts-ignore
          <EventCardLinkedEvent event={item} />
        ) : item.__typename === "AppsyncEvent" ? (
          //@ts-ignore
          <EventCardAppSync event={item} />
        ) : null
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
