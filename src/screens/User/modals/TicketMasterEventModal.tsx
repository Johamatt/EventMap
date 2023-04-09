import {
  Dimensions,
  Linking,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../../../types/navigationTypes";
import { fetchTicketMasterEvent } from "../../../hooks/fetch/TicketMaster/TicketMasterFetch";

import { Analytics } from "aws-amplify";
import { useSelector } from "react-redux";
import { RootState } from "../../../Store/store";
import { modalLinkIcon } from "../../../util/helpers/modalLinkIcon";
import { TicketMasterEvent } from "../../../types/TicketMasterType";

interface TicketMasterEventModalProps {
  navigation: any;
  route: any;
}

export const TicketMasterEventModal: React.FC<TicketMasterEventModalProps> = (
  props
) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [event, setEvent] = useState<TicketMasterEvent>();

  const user = useSelector((state: RootState) => state.UserReducer);

  useEffect(() => {
    async function fetchData() {
      const fetchedEvent = await fetchTicketMasterEvent(props.route.params.id);
      setEvent(fetchedEvent);

      Analytics.record({
        name: "TMEventModalOpened",
        attributes: {
          ITEM_ID: props.route.params.id,
          USER_ID: user.userAuth?.attributes?.sub,
          GENRE: JSON.stringify(event?.classifications[0].genre),
          timestamp: new Date().toISOString(),
        },
      });
    }
    fetchData();
  }, []);

  if (event === undefined) {
    return <View />;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.name}>{event.name}</Text>
      <Image source={{ uri: event.images[0].url }} style={styles.image} />
      <Text style={styles.date}>
        {event.dates.start.localDate} {event.dates.start.localTime}
      </Text>
      <Text style={styles.address}>
        {event._embedded.venues[0].address.line1}
      </Text>
      <Text style={styles.promoter}>{event.promoter.name}</Text>
      <Text style={styles.title}>Ticket Types:</Text>
      {event.priceRanges.map((ticket: any, index: number) => {
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
        {event._embedded.attractions[0].externalLinks &&
          Object.entries(event._embedded.attractions[0].externalLinks).map(
            ([name, links]) => (
              <View key={name}>
                <View style={styles.linkList}>
                  {links.map((link: any) => (
                    <TouchableOpacity
                      key={link.url}
                      onPress={() => Linking.openURL(link.url)}
                      style={styles.link}
                    >
                      {modalLinkIcon(name)}
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            )
          )}
      </View>

      {event._embedded.venues[0].location.latitude !== undefined &&
        event._embedded.venues[0].location.longitude !== undefined && (
          <MapView
            style={styles.mapContainer}
            initialRegion={{
              latitude: parseFloat(event._embedded.venues[0].location.latitude),
              longitude: parseFloat(
                event._embedded.venues[0].location.longitude
              ),
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            }}
          >
            <Marker
              coordinate={{
                latitude: parseFloat(
                  event._embedded.venues[0].location.latitude
                ),
                longitude: parseFloat(
                  event._embedded.venues[0].location.longitude
                ),
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
