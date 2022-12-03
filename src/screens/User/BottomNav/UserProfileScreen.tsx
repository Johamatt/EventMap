import { Button } from "@rneui/base";
import { Auth } from "aws-amplify";
import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { ApplicationState, UserState, ActivitiesState } from "../../../Store";

interface UserProfileScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
}

export const _UserProfileScreen: React.FC<UserProfileScreenProps> = (props) => {
  const signOut = async () => {
    const signout = await Auth.signOut();
    // ON_UPDATE_AUTH(signout);
  };
  return (
    <View>
      <View>
        <Text>Profile</Text>
      </View>
      <Button title="Sign out" onPress={signOut} />
    </View>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
});

const UserProfileScreen = connect(mapToStateProps, {})(_UserProfileScreen);

export default UserProfileScreen;
