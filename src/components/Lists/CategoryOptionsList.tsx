import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { CATEGORY } from "../../API";

interface CategoryOptionsListProps {
  selectedCategories: Array<CATEGORY>;
  setSelectedCategories: (categories: Array<CATEGORY>) => void;
  handleCategorySelectPress: (label: CATEGORY) => void;
  selectAllCategories: boolean;
  setSelectAllCategories: (value: boolean) => void;
}

export const CategoryOptionsList: React.FC<CategoryOptionsListProps> = ({
  selectedCategories,
  setSelectedCategories,
  handleCategorySelectPress,
  selectAllCategories,
  setSelectAllCategories,
}) => {
  const categoryButtonLabels: Array<CATEGORY> = [
    CATEGORY.CONCERT,
    CATEGORY.FESTIVAL,
    CATEGORY.EXPO,
    CATEGORY.SPORT,
    CATEGORY.GAMES,
    CATEGORY.PARTY,
    CATEGORY.TRIP,
    CATEGORY.STANDUP,
    CATEGORY.MUSEUM,
  ];

  const renderCategoryButton = ({ item }: { item: CATEGORY }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategorySelectPress(item)}
        style={
          selectedCategories.includes(item)
            ? styles.selectedButton
            : styles.button
        }
      >
        <Text style={styles.buttonLabel}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          setSelectAllCategories(true);
          setSelectedCategories([]);
        }}
        style={[
          selectAllCategories ? styles.selectedButton : styles.button,
          { width: Dimensions.get("window").width - 10 },
        ]}
      >
        <Text style={styles.buttonLabel}>Select All</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={categoryButtonLabels}
        renderItem={(item) => renderCategoryButton(item)}
        numColumns={3}
      />
    </>
  );
};

// Rest of your code...

// Rest of your code...
const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 3,
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 40, // add a fixed height
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
    width: 100, // add a fixed width
    height: 40, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  buttonLabel: {
    color: "#1a1a1a",
    fontSize: 14,
    fontWeight: "bold",
  },
});
