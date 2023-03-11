import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Image, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import {
  ActivitiesState,
  ApplicationState,
  ON_UPDATE_EVENTPREFERENCES,
} from "../../../Store";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/types";
import { API, graphqlOperation } from "aws-amplify";
import {
  CATEGORY,
  CreateCompanyInput,
  CreateEventInput,
  DescriptionInput,
  LinksInput,
  LocationInput,
  NameInput,
} from "../../../API";
import { createEvent } from "../../../graphql/mutations";
import { listEventsCustom } from "../../../hooks/fetch/Appsync/AppsyncEvents";

interface FavouritesScreenProps {
  activitiesReducer: ActivitiesState;
  guestUserSession: Boolean;
}

export const _FavouritesScreen: React.FC<FavouritesScreenProps> = ({
  guestUserSession,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [events, setEvents] = useState<string | null>(null);

  const [activities, setActvities] = useState<any>();

  return (
    <>
      {!guestUserSession ? (
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
    </>
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
