import { Auth } from "aws-amplify";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { UserState } from "../../../types/typesRedux";
import { store } from "../../../Store/store";
import { ApplicationState } from "../../../Store/reducers";

interface UserProfileScreenProps {
  userReducer: UserState;
  authMode: GraphQLOptions["authMode"];
}

const _UserProfileScreen: React.FC<UserProfileScreenProps> = ({ authMode }) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleSignOut = async () => {
    await Auth.signOut();

    store.dispatch({
      type: "ON_UPDATE_AUTH",
      payload: null,
    });

    store.dispatch({
      type: "ON_UPDATE_AUTHENTICATIONMODE",
      payload: undefined,
    });
  };

  return (
    <>
      {authMode === "AMAZON_COGNITO_USER_POOLS" ? (
        <View style={styles.container}>
          <Text style={styles.welcomeText}>Welcome to your profile!</Text>

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
  authMode: state.UserReducer.AuthenticationMode,
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
