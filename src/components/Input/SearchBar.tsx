import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Dimensions } from "react-native";
type SearchBarProps = {
  onChangeText: (text: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onChangeText }) => {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons name="search-outline" size={24} color="black" />
      <TextInput
        style={styles.searchBarInput}
        placeholder="Search"
        placeholderTextColor={Colors.light.placeholder}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    width: Dimensions.get("window").width / 1.5,
  },

  searchBarInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SearchBar;
