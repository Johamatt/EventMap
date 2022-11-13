import { FlatList, View, StyleSheet } from "react-native";
import { ApplicationState } from "../../../Store";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Activity, ListActivitiesQuery } from "../../../API";
import { Divider } from "@rneui/base";
import { ActivityCard } from "../../../components/Cards/ActivityCard";
import { ActivitiesListPreferencesBtn } from "../../../components/Buttons/ActivitiesListPreferencesBtn";
import { API, graphqlOperation } from "aws-amplify";
import { listActivitiesList } from "../../../graphql/customQueries";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import SplashScreen from "../../SplashScreen";
import { GraphQLQuery } from "@aws-amplify/api";

const _HomeScreen: React.FC = () => {
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
    const activitiesDataList = (await API.graphql(
      // Amplify issue  https://github.com/aws-amplify/amplify-js/issues/4257 && https://github.com/aws-amplify/amplify-js/issues/5741
      graphqlOperation(listActivitiesList, { limit: 20, nextToken })
    )) as GraphQLResult<ListActivitiesQuery>;
    // ???

    // setActivities(() => activitiesDataList.data.listActivities?.items);
    setNextToken(activitiesDataList.data?.listActivities?.nextToken);


  
    setActivities([
      ...activities,
      ...activitiesDataList.data?.listActivities?.items,
    ]);
  };

  if (!activities || activities.length === 0) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }

  console.log(activities.length);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ActivitiesListPreferencesBtn />
      </View>
      <Divider color="black" />
      <View>
        <FlatList
          keyExtractor={(item) => item.id}
          data={activities}
          renderItem={({ item }) => <ActivityCard activity={item} />}
          onEndReached={fetchMoreData}
          onEndReachedThreshold={0.3}
        />
      </View>
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  activitiesList: state.ActivitiesReducer.activitiesList,
  nextToken: state.ActivitiesReducer.nextToken,
});

const HomeScreen = connect(mapToStateProps)(_HomeScreen);

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingRight: 10,
    paddingTop: 40,
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row-reverse",
    paddingBottom: 5,
  },
});
