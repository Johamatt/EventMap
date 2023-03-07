import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";
import {
  ApplicationState,
  UserState,
  ActivitiesState,
  store,
} from "../../../Store";

interface UserProfileScreenProps {
  userReducer: UserState;
  activitiesReducer: ActivitiesState;
  guestUserSession: Boolean;
}

const _UserProfileScreen: React.FC<UserProfileScreenProps> = ({
  guestUserSession,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSignOut = async () => {
    await Auth.signOut();
    // ON_UPDATE_AUTH(signout);

    store.dispatch({
      type: "ON_UPDATE_GUESTUSER_SESSION",
      payload: false,
    });

    store.dispatch({
      type: "ON_UPDATE_AUTH",
      payload: null,
    });
  };

  const handleChangeProfileImage = () => {
    // TODO: Add code to change profile image here
  };

  return (
    <>
      {!guestUserSession ? (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to your profile!</Text>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.profileImage} />
          ) : (
            <Image
              source={require("../../../assets/pictures/profile-Default-Avatar.png")}
              style={styles.profileImage}
            />
          )}
          <TouchableOpacity
            style={styles.changeProfileImageButton}
            onPress={handleChangeProfileImage}
          >
            <Text style={styles.buttonText}>Change Profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
          >
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>
            Guest users are not allowed to view this content.
          </Text>
          <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const mapToStateProps = (state: ApplicationState) => ({
  userReducer: state.UserReducer,
  activitiesReducer: state.ActivitiesReducer,
  guestUserSession: state.UserReducer.guestUserSession,
});

const UserProfileScreen = connect(mapToStateProps, {})(_UserProfileScreen);

export default UserProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  welcomeText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    margin: 20,
  },
  noProfileImageText: {
    fontSize: 16,
    color: "gray",
    margin: 20,
  },
  changeProfileImageButton: {
    margin: 10,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  signOutButton: {
    margin: 10,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
