import { FlatList, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { CATEGORY } from "../../../../../API";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../../types/navigationTypes";
import { ApplicationState } from "../../../../../Store/reducers";

type HomescreenProps = {
  nextToken: any;
};

const _ActivitiesListView: React.FC<HomescreenProps> = (props) => {
  //   const [activities, setActivities] = useState<any>([]);
  //   const [nextToken, setNextToken] = useState<any>();
  //   const [page, setPage] = useState(0);

  //   const navigation =
  //     useNavigation<NativeStackNavigationProp<RootStackParamList>>(); //

  //   useEffect(() => {
  //     requestAPI(nextToken);
  //   }, [page]);

  //   const fetchMoreData = () => {
  //     if (typeof nextToken === "string") {
  //       setPage(page + 1);
  //     }
  //   };

  //   const requestAPI = async (nextToken: any) => {
  //     if (props.guestUserSession) {
  //       const activitiesDataList = await fetchGuestActivitiesList(nextToken);
  //       setNextToken(activitiesDataList.data?.listActivities?.nextToken);
  //       setActivities([
  //         ...activities,
  //         ...activitiesDataList.data?.listActivities?.items!,
  //       ]);
  //     } else {
  //       const activitiesDataList = await fetchUserActivitiesList(nextToken);
  //       // @ts-ignore
  //       setNextToken(activitiesDataList.data?.listActivities?.nextToken);
  //       setActivities([
  //         ...activities,
  //         //@ts-ignore
  //         ...activitiesDataList.data?.listActivities?.items!,
  //       ]);
  //     }
  //   };

  //   return (
  //     <FlatList
  //       keyExtractor={(item) => item.id}
  //       data={activities}
  //       renderItem={({ item }) => <div />} //<ActivityCard activity={item} />
  //       onEndReached={fetchMoreData}
  //       onEndReachedThreshold={0.3}
  //     />
  //   );
  // };

  return <View />;
};
const mapToStateProps = (state: ApplicationState) => ({});

const ActivitiesListView = connect(mapToStateProps)(_ActivitiesListView);

export default ActivitiesListView;
