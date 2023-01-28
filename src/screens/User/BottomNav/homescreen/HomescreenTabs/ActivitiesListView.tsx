import { FlatList } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { CATEGORY } from "../../../../../API";
import { fetchGuestActivitiesList } from "../../../../../hooks/fetch/linkedEvents/Appsync/PublicAccessFetch";

import { ActivityCard } from "../../../../../components/Cards/ActivityCard";
import { ApplicationState } from "../../../../../Store";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../navigation/types";
import { fetchUserActivitiesList } from "../../../../../hooks/fetch/linkedEvents/Appsync/UserAccessFetch";

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

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>(); //

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
