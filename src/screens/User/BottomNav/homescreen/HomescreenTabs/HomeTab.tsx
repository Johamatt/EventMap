import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import React, { useState } from "react";
import AutoScrollList from "../../../../../components/Lists/AutoScrollList";
import DailyCoinBanner from "../../../../../components/Banners/DailyCoinBanner";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { ApplicationState } from "../../../../../Store/reducers";
import { fetchLinkedEvents } from "../../../../../hooks/fetch/LinkedEvents/LinkedEventsFetch";

type HomeTabViewProps = {
  authenticationMode: GraphQLOptions["authMode"];
};
const _HomeTabView: React.FC<HomeTabViewProps> = ({ authenticationMode }) => {
  return (
    <View style={styles.container}>
      <AutoScrollList data={promotionsPlaceHolder} />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
});

const HomeTabView = connect(mapToStateProps)(_HomeTabView);

export default HomeTabView;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingTop: 8,
  },
  activityIndicatorContainer: {
    paddingVertical: 20,
  },
});

export const promotionsPlaceHolder: { id: string; image: string }[] = [
  {
    id: "K8vZ917haNV",
    image:
      "https://www.radionova.fi/files/customsite/CS_1782/img/RNF-event-cover-ulkomaiset.jpg",
  },
  {
    id: "K8vZ9178HYf",
    image: "https://www.tiketti.fi/kuvat/EV87003_7_768x470.jpg",
  },
  {
    id: "Z698xZ8KZ17G-Gy",
    image:
      "https://www.tuska.fi/sites/default/files/styles/800x434/public/Kuvat/uutinen/tuska23_ltd-early-crow_800x434.png?itok=d-LiwCnM",
  },
];
