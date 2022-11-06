import React from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
  UserState,
} from "../../../Store";

interface FavouritesScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = (props) => {
  function parseData() {
    console.log(props.activitiesReducer);
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
      <Button title="Select Document" onPress={() => parseData()} />
    </View>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
