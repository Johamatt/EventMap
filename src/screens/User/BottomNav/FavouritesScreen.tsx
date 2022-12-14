import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import { connect } from "react-redux";

import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
} from "../../../Store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import { Activity, OpenDays } from "../../../API";
import { API, graphqlOperation } from "aws-amplify";
import { listActivities, listCompanies } from "../../../graphql/queries";

import { parseData } from "../../../util/helpers/linkedEventsParser";
import { createActivity } from "../../../graphql/mutations";

import { GraphQLResult } from "@aws-amplify/api";

interface FavouritesScreenProps {
  activitiesReducer: ActivitiesState;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [activities, setActvities] = useState<any>();

  useEffect(() => {
    parse();
  }, []);

  async function parse() {}

  async function parse2() {
 
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button title="Select Document" onPress={() => parse2()} />
    </View>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  activitiesReducer: state.ActivitiesReducer,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
