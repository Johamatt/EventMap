import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const DailyCoinBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Claim your daily coins!</Text>
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>3</Text>
        <Ionicons name="ios-cash" style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F1F1F1",
    padding: 0.03 * Dimensions.get("window").width,
    borderRadius: 0.02 * Dimensions.get("window").width,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    fontSize: 0.04 * Dimensions.get("window").width,
    fontWeight: "600",
    color: "#4A4A4A",
    flex: 1,
    marginRight: 0.02 * Dimensions.get("window").width,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 0.06 * Dimensions.get("window").width,
    color: "#4A4A4A",
    marginLeft: 0.01 * Dimensions.get("window").width,
  },
  iconText: {
    fontSize: 0.04 * Dimensions.get("window").width,
    fontWeight: "600",
    color: "#4A4A4A",
    marginRight: 0.01 * Dimensions.get("window").width,
  },
});

export default DailyCoinBanner;
