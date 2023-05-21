import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

interface DateButtonsProps {
  selectedDate: string;
  handleDateSelectPress: (value: string) => void;
}

const DateButtons: React.FC<DateButtonsProps> = ({
  selectedDate,
  handleDateSelectPress,
}) => {
  const dateButtons = [
    { label: "All", value: "All" },
    { label: "Today", value: "Today" },
    { label: "Tomorrow", value: "Tomorrow" },
    { label: "This week", value: "This week" },
    { label: "This weekend", value: "This weekend" },
    { label: "Next week", value: "Next week" },
  ];

  const renderDateButton = ({
    item,
  }: {
    item: { label: string; value: string };
  }) => {
    return (
      <TouchableOpacity
        onPress={() => handleDateSelectPress(item.value)}
        style={
          selectedDate === item.value ? styles.selectedButton : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.value}
      data={dateButtons}
      renderItem={(item) => renderDateButton(item)}
      numColumns={3}
    />
  );
};

export default DateButtons;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    backgroundColor: "#f1c40f",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#1a1a1a",
    fontSize: 14,
    fontWeight: "bold",
  },
});
