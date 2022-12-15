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

type HomescreenProps = {
  activitiesList: any;
  nextToken: any;
  userPreferences: Array<CATEGORY>;
  showcurrentlyopen: boolean;
  guestUserSession: boolean;
};

const _ActivitiesListView: React.FC<HomescreenProps> = (props) => {
  const [activities, setActivities] = useState<any>([]);
  const [nextToken, setNextToken] = useState<any>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    requestAPI(nextToken);
  }, [page]);

  const fetchMoreData = () => {
    if (typeof nextToken === "string") {
      setPage(page + 1);
    }
  };

  const requestAPI = async (nextToken: any) => {
    if (props.guestUserSession) {
      const activitiesDataList = await fetchGuestActivitiesList(nextToken);
      setNextToken(activitiesDataList.data?.listActivities?.nextToken);
      setActivities([
        ...activities,
        ...activitiesDataList.data?.listActivities?.items!,
      ]);
    } else {
      const activitiesDataList = await fetchUserActivitiesList(nextToken);
      // @ts-ignore
      setNextToken(activitiesDataList.data?.listActivities?.nextToken);
      setActivities([
        ...activities,
        //@ts-ignore
        ...activitiesDataList.data?.listActivities?.items!,
      ]);
    }
  };

  // if (!activities || activities.length === 0) {
  //   return (
  //     <View>
  //       <SplashScreen />
  //     </View>
  //   );
  // }

  return (
    <FlatList

      keyExtractor={(item) => item.id}
      data={activities}
      renderItem={({ item }) => <ActivityCard activity={item} />}
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

const ActivitiesListView = connect(mapToStateProps)(_ActivitiesListView);

export default ActivitiesListView;

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
