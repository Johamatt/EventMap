import { FlatList, View, StyleSheet } from "react-native";
import { ApplicationState } from "../../../Store";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { ListActivitiesQuery } from "../../../API";
import { Divider } from "@rneui/base";
import { ActivityCard } from "../../../components/Cards/ActivityCard";
import { IconButton } from "../../../components/Buttons/IconButton";
import { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import SplashScreen from "../../SplashScreen";
import { listActivities } from "../../../graphql/queries";

export type openDays = {
  day: string;
  open: boolean;
  from: string;
  to: string;
};

const _HomeScreen: React.FC = () => {
  let day = new Date().getDay();
  let month = new Date().getMonth();

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
    let filter = {
      and: [
        { availableDays: { attributeExists: day } },
        { availableMonths: { attributeExists: month } },
      ],
    };

    // Amplify issue  https://github.com/aws-amplify/amplify-js/issues/4257 && https://github.com/aws-amplify/amplify-js/issues/5741
    const activitiesDataList = (await API.graphql(
      graphqlOperation(listActivities, {
        limit: 8,
        nextToken,
        variables: { filter: filter },
      })
    )) as GraphQLResult<ListActivitiesQuery>;
    setNextToken(activitiesDataList.data?.listActivities?.nextToken);
    setActivities([
      ...activities,
      ...activitiesDataList.data?.listActivities?.items!,
    ]);
  };

  if (!activities || activities.length === 0) {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <IconButton />
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

  iconbutton: {
    name: "options-outline",
    type: "ionicon",
    size: 15,
    color: "white",
  },
});
