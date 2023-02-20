import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4A4A4A",
    flex: 1,
    marginRight: 8,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    color: "#4A4A4A",
  },
  iconText: {
    marginRight: 4,
    fontSize: 16,
    fontWeight: "600",
    color: "#4A4A4A",
  },
});
export default DailyCoinBanner;
