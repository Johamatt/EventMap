import { ActivityIndicator, FlatList, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { EventCard } from "../../../../../components/Cards/EventCard";
import { ApplicationState } from "../../../../../Store";
import { fetchTicketMasterToday } from "../../../../../hooks/fetch/TicketMaster/TicketMasterList";
import { TicketMasterEvent } from "../../../../../types/TicketMasterType";

type HomescreenProps = {
  guestUserSession: boolean;
  category?: string;
};

const _EventsListView: React.FC<HomescreenProps> = (props) => {
  const [page, setPage] = useState(0);
  const [events, setEvents] = useState<Array<TicketMasterEvent>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [category, setCategory] = useState(props.category);

  useEffect(() => {
    fetchData(page);
  }, [page]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };

  const fetchData = async (page: number) => {
    try {
      const data = await fetchTicketMasterToday(page, 10, props.category);
      setEvents([...events, ...data]);
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
      data={events}
      renderItem={({ item }) => <EventCard event={item} />}
      onEndReached={fetchMoreData}
      onEndReachedThreshold={0.3}
      ListFooterComponent={renderFooter}
    />
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  guestUserSession: state.UserReducer.guestUserSession,
});

const EventsListView = connect(mapToStateProps)(_EventsListView);

export default EventsListView;
