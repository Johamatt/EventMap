import {
  Dimensions,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { getEventCustom } from "../../../hooks/fetch/Appsync/AppsyncEvents";
import { GetEventQuery } from "../../../API";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { Analytics } from "aws-amplify";

interface EventModalProps {
  route: any;
}

export const AppsyncEventModal: React.FC<EventModalProps> = ({ route }) => {
  const [event, setEvent] = useState<
    GraphQLResult<GetEventQuery> | undefined
  >();

  const user = useSelector((state: RootState) => state.UserReducer);

  useEffect(() => {
    async function fetchData() {
      const fetchedEvent = await getEventCustom(
        route.params.id,
        user.AuthenticationMode
      );
      setEvent(fetchedEvent);

      await Analytics.record({
        name: "ASEventModalOpened",
        attributes: {
          ITEM_ID: route.params.id,
          USER_ID: user.userAuth?.attributes?.sub
            ? user.userAuth.attributes.sub
            : "guest user",
          //@ts-ignore
          CATEGORIES: event.data.getEvent.primaryCategory.toString(),
          timestamp: new Date().toISOString(),
        },
      });
    }
    fetchData();
  }, []);

  if (event?.data === undefined) {
    return <View />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{event.data!.getEvent!.name.fi}</Text>

      {event.data?.getEvent?.mainPicture && (
        <Image
          source={{ uri: event.data.getEvent.mainPicture }}
          style={styles.image}
        />
      )}

      <Text style={styles.date}>
        {event.data?.getEvent?.startingDateTime} -{" "}
        {event.data?.getEvent?.endingDateTime}
      </Text>
      <Text style={styles.address}>
        {event.data?.getEvent?.location.streetAddress}
      </Text>
      <Text style={styles.promoter}>{event.data?.getEvent?.company?.name}</Text>
      <Text style={styles.title}>Ticket Types:</Text>
      {event.data?.getEvent?.Ticket?.items.map((ticket: any, index: number) => {
        return (
          <View key={index}>
            <Text style={styles.ticketName}>{ticket.type}</Text>
            <Text style={styles.ticketPrice}>
              {ticket.currency} {ticket.min} - {ticket.max}
            </Text>
          </View>
        );
      })}

      <View style={styles.linksContainer}>
        {event.data?.getEvent?.Links && (
          <>
            {Object.entries(event.data.getEvent.Links).map(([key, value]) => {
              if (value) {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => Linking.openURL(value)}
                    style={styles.link}
                  >
                    {/* Your link icon or label */}
                  </TouchableOpacity>
                );
              }
              return null;
            })}
          </>
        )}
      </View>

      {event.data?.getEvent?.location.lat !== undefined &&
        event.data?.getEvent?.location.lon !== undefined && (
          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: event.data.getEvent.location.lat,
              longitude: event.data.getEvent.location.lon,

              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <Marker
              coordinate={{
                latitude: event.data.getEvent.location.lat,
                longitude: event.data.getEvent.location.lon,
              }}
            />
          </MapView>
        )}
    </ScrollView>
  );
};

export const styles = StyleSheet.create({
  mapContainer: {
    width: Dimensions.get("window").width,
    height: 300,
  },
  container: {
    flex: 1,

    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  date: {
    fontSize: 18,
    marginBottom: 10,
  },
  address: {
    fontSize: 16,
    marginBottom: 10,
  },
  promoter: {
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  ticketName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ticketPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  linksContainer: {
    marginTop: 10,
    flexDirection: "row",
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 25,
    alignContent: "center",
  },

  linkList: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  link: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
    marginBottom: 5,
  },
  linkText: {
    fontSize: 16,
    color: "black",
    marginLeft: 5,
  },
});
