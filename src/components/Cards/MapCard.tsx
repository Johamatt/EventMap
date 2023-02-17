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
      <View style={styles.mapModal}></View>
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

  flexContainer: {
    flex: 0.5,
    flexDirection: "row",
  },

  header: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 12,
    marginBottom: 12,
  },

  mapModalRow: {
    flex: 0.5,
    flexDirection: "row",
  },

  mapModal: {
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

  whiteTextBold: {
    color: "white",
    fontWeight: "bold",
  },
});

export default MapCard;
