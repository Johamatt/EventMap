import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
} from "../../../Store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";

interface FavouritesScreenProps {
  activitiesReducer: ActivitiesState;
  guestUserSession: Boolean;
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
    console.log(props.guestUserSession);
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    ></View>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  activitiesReducer: state.ActivitiesReducer,
  guestUserSession: state.UserReducer.guestUserSession,
});

const FavouritesScreen = connect(mapToStateProps, {
  ON_UPDATE_EVENTPREFERENCES,
})(_FavouritesScreen);

export default FavouritesScreen;
