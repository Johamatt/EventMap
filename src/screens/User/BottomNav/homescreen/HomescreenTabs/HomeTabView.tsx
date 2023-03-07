import { ActivityIndicator, StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import React, { useState } from "react";
import { ApplicationState } from "../../../../../Store";
import AutoScrollList from "../../../../../components/Lists/AutoScrollList";
import { promotionsPlaceHolder } from "../../../../../util/helpers/promotionsPlaceHolder";
import DailyCoinBanner from "../../../../../components/Banners/DailyCoinBanner";

type HomeTabViewProps = {
  nextToken: any;
  guestUserSession: boolean;
};

const _HomeTabView: React.FC<HomeTabViewProps> = ({ guestUserSession }) => {
  const [isLoading, setIsLoading] = useState(true);

  const renderFooter = () => {
    if (!isLoading) return null;

    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {!guestUserSession && <DailyCoinBanner />}
      <AutoScrollList data={promotionsPlaceHolder} />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  nextToken: state.ActivitiesReducer.nextToken,
  guestUserSession: state.UserReducer.guestUserSession,
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
