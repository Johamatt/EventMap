import React, { useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../types/navigationTypes";
import { GraphQLOptions } from "@aws-amplify/api-graphql";
import { ApplicationState } from "../../../Store/reducers";

interface FavouritesScreenProps {
  authenticationMode: GraphQLOptions["authMode"];
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = ({
  authenticationMode,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [events, setEvents] = useState<string | null>(null); // todo fetch user

  return (
    <React.Fragment>
      {authenticationMode === "AMAZON_COGNITO_USER_POOLS" ? (
        <View style={styles.container}>
          {events ? (
            <Image source={{ uri: events }} style={styles.profileImage} />
          ) : (
            <Image
              source={require("../../../assets/pictures/no-favourites-Avatar.jpg")}
              style={styles.profileImage}
            />
          )}
          <Text style={styles.welcomeText}>No Favourites yet!</Text>

          <TouchableOpacity style={styles.changeProfileImageButton}>
            <Text style={styles.buttonText}>Browse Events</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.container}>
          <Image
            source={require("../../../assets/pictures/no-favourites-Avatar.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.welcomeText}>
            Guest users are not allowed to view this content.
          </Text>
        </View>
      )}
    </React.Fragment>
  );
};

export const mapToStateProps = (state: ApplicationState) => ({
  authenticationMode: state.UserReducer.AuthenticationMode,
});

const FavouritesScreen = connect(mapToStateProps, {})(_FavouritesScreen);

export default FavouritesScreen;

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
