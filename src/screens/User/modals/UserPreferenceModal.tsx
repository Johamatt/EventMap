import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const UserPreferenceModal: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<String>("All");

  const [selectedCategory, setSelectedCategory] = useState<String>("ALL");

  const dateButtonLabels: Array<String> = [
    "All",
    "Today",
    "Tomorrow",
    "This week",
    "This Weekend",
    "Later",
  ];

  const categoryButtonLabels: Array<String> = [
    "ALL",
    "MUSIC",
    "FESTIVAL",
    "EXPO",
    "SPORT",
    "GAMES",
    "NIGHTLIFE",
    "FOODDRINKS",
    "TECHNOLOGY",
    "TRIP",
    "STANDUP",
    "FAMILY",
    "HEALTH",
    "EDUCATION",
    "MUSEUM",
    "NATURE",
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
          alignContent: "center",
        }}
      >
        <FontAwesome name="calendar" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Date</Text>
      </View>
      <View style={styles.datebuttonsContainer}>
        {dateButtonLabels.map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedDate(label)}
            style={
              selectedDate === label
                ? styles.selectedDateButton
                : styles.dateButton
            }
          >
            <Text style={styles.buttonLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 20,
          marginVertical: 10,
          alignContent: "center",
        }}
      >
        <MaterialCommunityIcons name="lightning-bolt" size={18} color="white" />
        <Text style={styles.optionsTitle}> Select Categories</Text>
      </View>
      <View style={styles.datebuttonsContainer}>
        {categoryButtonLabels.map((label, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              if (selectedCategory === label) {
                // Unselect the category if it is already selected
                setSelectedCategory("ALL");
              } else {
                // Select the category if it is not selected
                setSelectedCategory(label);
              }
            }}
            style={
              selectedCategory === label
                ? styles.selectedDateButton
                : styles.dateButton
            }
          >
            <Text style={styles.buttonLabel}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
  },

  dateButton: {
    textAlign: "center",
    borderColor: "blue",
    borderWidth: 1,
    alignContent: "center",
    flex: 1,
    minWidth: "25%",
    minHeight: 50,
    margin: 2,
    backgroundColor: Colors.light.headerBackground,
    padding: 5,
  },

  selectedDateButton: {
    textAlign: "center",
    borderColor: "blue",
    borderWidth: 1,
    alignContent: "center",
    flex: 1,
    minWidth: "25%",
    minHeight: 50,
    margin: 2,
    backgroundColor: "green",
    padding: 5,
  },

  datebuttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  optionsTitle: {
    fontSize: 18,

    color: "white",
  },
  buttonLabel: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 16,
    color: "white",
  },
});
