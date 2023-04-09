import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Text,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Region } from "react-native-maps";

interface MapCardProps {
  closeCard: () => void;
  events: Array<any>;
  onEventPress: (region: Region) => void;
}

const MapListModal = ({ closeCard, events, onEventPress }: MapCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => closeCard()}>
          <Entypo name="circle-with-cross" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {events.map((event, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() =>
              onEventPress({
                latitude: parseFloat(
                  event._embedded.venues[0].location.latitude
                ),
                longitude: parseFloat(
                  event._embedded.venues[0].location.longitude
                ),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              })
            }
          >
            <Image
              source={{ uri: event._embedded.attractions[0].images[0].url }}
              style={styles.cardImage}
            />
            <Text style={styles.cardName}>{event.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },

  header: {
    marginLeft: 12,
    marginBottom: 12,
  },

  scrollView: {
    height: 120,
  },

  scrollViewContent: {
    alignItems: "center",
    paddingVertical: 10,
  },

  card: {
    marginHorizontal: 10,
    width: "80%",
    maxWidth: "80%",
    alignItems: "center",
  },

  cardImage: {
    width: "80%",
    height: 100,
  },

  cardName: {
    marginTop: 5,
    color: "white",
    textAlign: "center",
  },
});

export default MapListModal;
