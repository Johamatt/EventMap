import { ActivityIndicator, FlatList, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { EventCard } from "../../../../../components/Cards/EventCard";
import { ApplicationState } from "../../../../../Store";
import { fetchTicketMasterToday } from "../../../../../hooks/fetch/TicketMaster/TicketMasterList";
import { TicketMasterEvent } from "../../../../../types/TicketMasterType";
import { ListEventsQuery } from "../../../../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { listEventsCustom } from "../../../../../hooks/fetch/Appsync/AppsyncEvents";

type HomescreenProps = {
  category?: string;
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [page, setPage] = useState(0);
  const [eventsTM, setEventsTM] = useState<Array<TicketMasterEvent>>([]);
  const [isLoading, setIsLoading] = useState(true);

  // const [eventsAS, setEventsAS] = useState<GraphQLResult<ListEventsQuery>>();
  // const [nextTokenEvents, setNextTokenEvents] = useState<string | undefined>();
  // const [category, setCategory] = useState(props.category);

  useEffect(() => {
    fetchDataTM(page);

    // fetchDataEventsAS(nextTokenEvents);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchDataTM = async (page: number) => {
    try {
      const data = await fetchTicketMasterToday(page, 10, props.category);
      setEventsTM([...eventsTM, ...data]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  // const fetchDataEventsAS = async (page: string) => {
  //   try {
  //     const data = await listEventsCustom(page, 10, props.category);
  //     setEventsAS([...eventsAS, ...data]);
  //     setIsLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
