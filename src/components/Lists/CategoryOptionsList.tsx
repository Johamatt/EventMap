import React from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  View,
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
  const categoryButtonLabels: Array<any> = [
    {
      id: 1,
      category: CATEGORY.CONCERT,
      image: require("../../assets/pictures/concert.jpg"),
    },
    {
      id: 2,
      category: CATEGORY.FESTIVAL,
      image: require("../../assets/pictures/festival.jpg"),
    },
    {
      id: 3,
      category: CATEGORY.EXPO,
      image: require("../../assets/pictures/expo.jpg"),
    },
    {
      id: 4,
      category: CATEGORY.SPORT,
      image: require("../../assets/pictures/sport.jpg"),
    },
    {
      id: 5,
      category: CATEGORY.GAMES,
      image: require("../../assets/pictures/games.jpg"),
    },
    {
      id: 6,
      category: CATEGORY.PARTY,
      image: require("../../assets/pictures/party.jpg"),
    },
    {
      id: 7,
      category: CATEGORY.TRIP,
      image: require("../../assets/pictures/trip.jpg"),
    },
    {
      id: 8,
      category: CATEGORY.STANDUP,
      image: require("../../assets/pictures/standup.jpg"),
    },
    {
      id: 9,
      category: CATEGORY.MUSEUM,
      image: require("../../assets/pictures/museum.jpg"),
    },
  ];

  const renderCategoryButton = ({ item }: { item: any }) => {
    return (
      <TouchableOpacity
        onPress={() => handleCategorySelectPress(item.category)}
        style={[
          selectedCategories.includes(item.category)
            ? styles.selectedButton
            : styles.button,
        ]}
      >
        <Image source={item.image} style={styles.buttonImage} />

        <View style={styles.overlay} />

        <View style={styles.textContainer}>
          <Text style={styles.buttonLabel}>{item.category}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <>
      {/* <TouchableOpacity
        onPress={() => {
          setSelectAllCategories(true);
          setSelectedCategories([]);
        }}
        style={[
          selectAllCategories ? styles.selectedButton : styles.button,
          {
            width: "100%",
            minHeight: 40,
            backgroundColor: "white",
            borderRadius: 25,
          },
        ]}
      >
        <Text style={styles.buttonLabel}>Select All</Text>
      </TouchableOpacity> */}

      <FlatList
        keyExtractor={(item) => item.id}
        data={categoryButtonLabels}
        renderItem={(item) => renderCategoryButton(item)}
        numColumns={2}
      />
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 5,
    flex: 1,
    width: 100, // add a fixed width
    height: 100, // add a fixed height
    alignItems: "center",
    justifyContent: "center",
  },

  selectedButton: {
    backgroundColor: "#f1c40f",
    margin: 5,
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    // Change the overlay background color when selected
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(9, 255, 9, 0.5)", // Semi-transparent white color
    },
  },

  buttonLabel: {
    color: "#ffffff", // white text color
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent black background
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    overflow: "hidden",
  },

  buttonImage: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch", // Scale the image to fit within the button
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  textContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
  },
});
