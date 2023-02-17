import { Dimensions, Linking, ScrollView } from "react-native";
import { View, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet } from "react-native";
import { RootStackParamList } from "../../../navigation/types";
import { fetchEvent } from "../../../hooks/fetch/TicketMaster/TicketMasterList";

interface EventModalProps {
  navigation: any;
  route: any;
}

export const EventModal: React.FC<EventModalProps> = (props) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [event, setEvent] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      const fetchedEvent = await fetchEvent(props.route.params.id);
      setEvent(fetchedEvent);
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
        {event.dates.localDate} {event.dates.localTime}
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
      <Text style={styles.title}>External Links:</Text>
      <View style={styles.linksContainer}>
        {event._embedded.attractions[0].externalLinks &&
          Object.entries(event._embedded.attractions[0].externalLinks).map(
            ([name, links]) => (
              <View key={name}>
                <Text>{name}</Text>
                {/* @ts-ignore */}
                {links.map((link: any) => (
                  <Text
                    key={link.url}
                    onPress={() => Linking.openURL(link.url)}
                  >
                    {link.url}
                  </Text>
                ))}
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  link: {
    fontSize: 16,
    marginRight: 10,
    marginBottom: 10,
  },
});
