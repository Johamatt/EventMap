import { Button } from "@rneui/base";
import { Auth } from "aws-amplify";
import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { ApplicationState, UserState, ActivitiesState } from "../../../Store";
import { styles } from "../styles";

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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
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
