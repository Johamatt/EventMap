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
import { GraphQLQuery } from "@aws-amplify/api";
import {
  CATEGORY,
  CreateCompanyInput,
  CreateEventInput,
  CreateEventMutation,
  Description,
  DescriptionInput,
  Links,
  LinksInput,
  ModelEventFilterInput,
} from "../../../API";
import {
  getCompany,
  listCompanies,
  listEvents,
} from "../../../graphql/queries";
import { createCompany, createEvent } from "../../../graphql/mutations";

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
    // <>
    //   {!guestUserSession ? (
    //     <View style={styles.container}>
    //       {events ? (
    //         <Image source={{ uri: events }} style={styles.profileImage} />
    //       ) : (
    //         <Image
    //           source={require("../../../assets/pictures/no-favourites-Avatar.jpg")}
    //           style={styles.profileImage}
    //         />
    //       )}
    //       <Text style={styles.welcomeText}>No Favourites yet!</Text>

    //       <TouchableOpacity style={styles.changeProfileImageButton}>
    //         <Text style={styles.buttonText}>Browse Events</Text>
    //       </TouchableOpacity>
    //     </View>
    //   ) : (
    //     <View style={styles.container}>
    //       <Image
    //         source={require("../../../assets/pictures/no-favourites-Avatar.jpg")}
    //         style={styles.profileImage}
    //       />
    //       <Text style={styles.welcomeText}>
    //         Guest users are not allowed to view this content.
    //       </Text>
    //     </View>
    //   )}
    // </>

    //
    <View>
      <TouchableOpacity
        style={styles.changeProfileImageButton}
        onPress={() => createCompanyEventData()}
      >
        <Text style={styles.buttonText}>create</Text>
      </TouchableOpacity>
    </View>
  );
};

async function createCompanyData() {
  // const description: DescriptionInput = {
  //   fi: "ruokakaupat",
  //   en: "grocery stores",
  // };

  // const categories: CATEGORY[] = [CATEGORY.FOODDRINKS, CATEGORY.WORKSHOP];

  // const links: LinksInput = {
  //   mainURL: "https://grocery-store-example.com",
  //   secondaryURL: "https://grocery-store-example.com/locations",
  // };

  // const company: CreateCompanyInput = {
  //   email: "contact@grocery-store-example.com",
  //   description: description,
  //   logo: "https://grocery-store-example.com/logo.png",
  //   categories: categories,
  //   phone: "+1-555-555-5555",
  //   name: "Grocery Store Example",
  //   links: links,
  // };

  // try {
  //   await API.graphql(graphqlOperation(createCompany, { input: company }));
  // } catch (err) {
  //   console.log(err);
  // }

  try {
    const k = await API.graphql({
      ...graphqlOperation(listCompanies, {
        limit: 8,
      }),
      // authMode: "AWS_IAM", // error shown cause of owner field, TODO custom query
    });
    console.log(k);
  } catch (err) {
    console.log(err);
  }
}
//
async function createCompanyEventData() {
  const event: CreateEventInput = {
    startingDateTime: "2023-04-02T19:30:00.000Z",
    endingDateTime: "2023-04-02T22:00:00.000Z",
    location: {
      lat: 51.5074,
      lon: -0.1278,
      streetAddress: "1 Oxford St",
      postalCode: "W1D 2DN",
      city: "London",
      country: "UK",
    },

    mainPicture: "https://example.com/main.jpg",
    secondaryPictures: [
      "https://example.com/secondary1.jpg",
      "https://example.com/secondary2.jpg",
      "https://example.com/secondary3.jpg",
    ],
    description: {
      en: "Join us for a night of comedy and drinks at our bar.",
      fi: "Tule mukaan iltaan täynnä komediaa ja juomia baarissamme.",
    },

    name: {
      en: "Comedy Night at the Bar",
      fi: "Komediailta Baarissa",
    },
    Links: {
      mainURL: "https://example.com",
      secondaryURL: "https://example.com/events",
    },
    ageRestriction: "21+",
    isFree: false,
  };

  try {
    await API.graphql<GraphQLQuery<CreateEventMutation>>(
      graphqlOperation(createEvent, {
        input: {
          createEvent: event,
        },
      })
    );
  } catch (err) {
    console.log(err);
  }

  // const k = await API.graphql(
  //   graphqlOperation(listEvents, {
  //     filter: {
  //       companyEventsId: { eq: "4740073e-d08c-425f-bf9f-a4286ce8e635" },
  //     },
  //   })
  // );

  // console.log(k);
}

//

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
