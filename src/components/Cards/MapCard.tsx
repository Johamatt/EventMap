import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
interface MapCardProps {
  closeCard: () => void;
}

const MapCard = ({ closeCard }: MapCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => closeCard()}>
          <Entypo name="circle-with-cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.mapRow}>
        <View style={{ flex: 0.5, flexDirection: "row" }}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={{ color: "white", fontWeight: "bold" }}>Events</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touchable}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              Activities
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 0.5 }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.touchable2}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Today</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable2}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Tomorrow
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.touchable2}>
              <Text style={{ color: "white", fontWeight: "bold" }}>
                Weekend
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable2}>
              <Text style={{ color: "white", fontWeight: "bold" }}>All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
  },
  header: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 12,
  },
  mapRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  touchable: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    margin: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    width: 75,
    height: 75,
  },

  touchable2: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    margin: 5,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "white",
    width: 75,
    height: 32.5,
  },
});

export default MapCard;
